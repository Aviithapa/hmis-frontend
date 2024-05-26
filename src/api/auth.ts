import http from "@/utils/http";

export function login(data: any) {
  return http({
    url: "/user/login",
    method: "post",
    data: { ...data },
  });
}
