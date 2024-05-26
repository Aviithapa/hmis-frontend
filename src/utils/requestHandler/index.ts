import {
  AxiosError,
  AxiosHeaders,
  AxiosResponse,
  HeadersDefaults,
  RawAxiosRequestHeaders,
  isAxiosError,
} from "axios";

export enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
  OPTIONS = "options",
}

export enum HttpStatus {
  SUCCESS = "success",
  ERROR = "error",
}

// TYPE: BASE REQUEST COFIGURATION TYPE
interface BaseRequestConfig<THeaders = {}, TBody = {}, TParams = {}> {
  url: string;
  httpMethod: HttpMethod;
  params?: TParams;
  // headers?: RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults>;
  headers?:
    | THeaders
    | RawAxiosRequestHeaders
    | AxiosHeaders
    | Partial<HeadersDefaults>
    | any;
  body?: TBody;
}

// TYPE: BASE REQUEST
type BaseRequest<TData, THeaders = {}, TBody = {}, TParams = {}> = (
  requestConfig: BaseRequestConfig<THeaders, TBody, TParams>
) => Promise<AxiosResponse<TData>>;

// SUCCESS RESPONSE TYPE
export type SuccessResponse<TData> = {
  code: HttpStatus.SUCCESS;
  statusCode: number;
  data: TData;
};

// ERROR RESPONSE TYPE
export type ErrorResponse<TError = AxiosError> = {
  code: HttpStatus.ERROR;
  errorName: string;
  errorMessage: string;
  statusCode?: number;
  error?: TError;
};

// BASE RESPONSE TYPE
type BaseResponse<TData, TError = AxiosError> = Promise<
  SuccessResponse<TData> | ErrorResponse<TError>
>;
const BaseResponse = Promise;

/**
 *
 * @param request: BaseRequest
 * @returns (requestConfig: BaseRequestCofig) => BaseResponse<TData, TError>
 */
const RequestHandler =
  <TData, TError = AxiosError, THeaders = {}, TBody = {}, TParams = {}>(
    request: BaseRequest<TData, THeaders, TBody, TParams>
  ) =>
  async (
    requestCofig: BaseRequestConfig<THeaders, TBody, TParams>
  ): BaseResponse<TData, TError> => {
    try {
      const response = await request(requestCofig);
      return {
        code: HttpStatus.SUCCESS,
        statusCode: response.status,
        data: response.data,
      };
    } catch (err) {
      if (isAxiosError(err)) {
        console.log("\naxios error logged in request handler:\n", err);

        if (err.response) {
          console.log(
            "\nerror from the server; logged inr request handler; responseObject: \n",
            err.response
          );

          return {
            code: HttpStatus.ERROR,
            errorName: err.name,
            errorMessage: err.message,
            statusCode: err.response.status,
            error: err.response.data as TError,
          };
        }
        if (err.request) {
          console.log(
            "\nrequest was made but no response was receieved;  requestObject: \n",
            err.request
          );
          return {
            code: HttpStatus.ERROR,
            errorName: err.name,
            errorMessage: "request didn't reach server",
            error: err.request,
          };
        }
        console.log(
          "Something happened in setting up the request that triggered an Error",
          err
        );
        return {
          code: HttpStatus.ERROR,
          errorName: "Unknown Error",
          errorMessage: "Something Went Wrong. Try Again!",
        };
      } else {
        console.log("\nnot an axios error : ,  \n\n", err);
        return {
          code: HttpStatus.ERROR,
          errorName: "Unknown Error",
          errorMessage: "Something Went Wrong. Try Again!",
        };
      }
    }
  };

export type { BaseRequest, BaseResponse, BaseRequestConfig };

export default RequestHandler;
