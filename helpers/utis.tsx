import { Toast } from "@/service/toast";


export const errorToast = (
  message: string = "Please try again later...!!!"
): void => {
  Toast({ type: "error", message });
};

export function generateQuery<T extends Record<string, unknown>>(
  query: T
): string {
  let url = "";

  if ("url_id" in query && query.url_id != null) {
    url = `/${String(query.url_id)}`;
  }

  const qs = Object.keys(query).reduce((acc, key) => {
    const value = query[key];
    if (
      value === "" ||
      value == null ||
      key === "url_id" ||
      (typeof value === "string" && value.trim() === "")
    ) {
      return acc;
    }
    const prefix = acc ? "&" : "?";
    return `${acc}${prefix}${encodeURIComponent(key)}=${encodeURIComponent(
      String(value)
    )}`;
  }, "");

  return url + qs;
}

export function addQuery(
  dataObject: Record<string, unknown> | undefined,
  apiObject: {
    query: Record<string, unknown>;
    addQuery?: { key: string; payload: unknown };
  }
): void {
  if (!dataObject) {
    return;
  }

  const keys = ["page", "limit", "search", "archive"] as const;

  keys.forEach((key) => {
    const val = dataObject[key];
    if (val !== undefined && typeof val !== "object") {
      if (key in apiObject.query) {
        apiObject.addQuery = { key, payload: val };
      }
    } else if (val && typeof val === "object") {
      Object.entries(val as Record<string, unknown>).forEach(
        ([nestedKey, nestedVal]) => {
          if (nestedKey in apiObject.query) {
            apiObject.addQuery = { key: nestedKey, payload: nestedVal };
          }
        }
      );
    }
  });
}
