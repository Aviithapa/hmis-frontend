export interface RefreshedTokens {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
  id_token: string;
  session_state: string;
  scope: string;
}

export enum ROLE_TYPES {
  TEACHER = "teacher",
  STUDENT = "student",
}
