import axios, {
  AxiosResponse,
  CancelTokenSource,
  AxiosRequestConfig,
} from "axios";
import config from "../config";
import { Toast } from "./toast";

export const axiosInstance = axios.create({
  headers: {},
});

export const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();

export const tempConfigObj: AxiosRequestConfig = {
  cancelToken: cancelTokenSource.token,
};

export const logout = (): void => {
  localStorage.clear();
  window.location.href = "/login";
};

export const getServiceUrl = (key: string = "user"): string => {
  const apiConfig = config.api as any;
  const endpoint = apiConfig[key];
  if (typeof endpoint === "string") {
    return endpoint;
  }
  return apiConfig.baseUrl ?? "";
};

export function statusHelper<T>(
  includeStatus: boolean,
  response: AxiosResponse<T>
): (T & { status: number }) | T {
  if (response.status === 401) cancelTokenSource.cancel();

  if (response.status === 401 || response.status === 403) {
    Toast({ type: "error", message: response.statusText });
    localStorage.clear();
    window.location.href = "/login";
  }

  if (includeStatus) {
    return {
      status: response.status,
      ...(response.data as object),
    } as T & { status: number };
  }

  return response.data;
}

export function localStorageHelper(key: string): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
}

export function capitalizeAndReplace(text?: string): string | undefined {
  const words = text?.split("-");
  const capitalizedWords = words?.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords?.join(" & ");
}
