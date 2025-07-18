import {
  axiosInstance,
  statusHelper,
  getServiceUrl,
  tempConfigObj,
} from "./utilities";
import { AxiosResponse } from "axios";

export type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

export interface ApiOptions<B = any> {
  method?: HttpMethod;
  api: string;
  body?: B;
  status?: boolean;
  baseURL?: string;
}

export const api = async <T = any, B = any>({
  method = "get",
  api: apiURL,
  body,
  status = false,
  baseURL = "user",
}: ApiOptions<B>): Promise<T | (T & { status: number })> => {
  return new Promise<T | (T & { status: number })>((resolve, reject) => {
    axiosInstance
      .request<T>({
        method,
        url: `${getServiceUrl(baseURL)}${apiURL}`,
        data: body ?? "",
        ...tempConfigObj,
      })
      .then((response: AxiosResponse<T>) => {
        resolve(statusHelper(status, response) as any);
      })
      .catch((error: any) => {
        console.error(error);
        try {
          if (error.response) {
            reject(statusHelper(status, error.response));
          } else {
            reject(error);
          }
        } catch (err) {
          console.error(err);
          reject(err);
        }
      });
  });
};
