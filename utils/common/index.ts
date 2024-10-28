/* eslint-disable @typescript-eslint/no-explicit-any */
export const JSONparse = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return jsonString;
  }
};

const env = process.env.NODE_ENV;
export const isProduction = env === "production";

export const COOKIES_KEY = {
  ACCESS_TOKEN: "access_token",
  USER: "user",
  REFRESH_TOKEN: "refresh_token",
  EXPIRES_AT: "token_lifetime",
};

export const serialize = function (obj: any, prefix?: string): string {
  const str: string[] = [];
  let p: string;

  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      const k = prefix ? `${prefix}[${p}]` : p;
      const v = obj[p];
      str.push(
        v !== null && typeof v === "object"
          ? serialize(v, k)
          : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
      );
    }
  }
  return str.join("&");
};

export const objectToQuery = function (obj: any, prefix?: string): string {
  const str: string[] = [];
  let p: string;

  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      const k = prefix ? `${prefix}[${p}]` : p;
      const v = obj[p];

      // Only serialize non-null, defined, and non-empty values
      if (v !== null && v !== undefined && v !== "") {
        str.push(
          v !== null && typeof v === "object"
            ? serialize(v, k)
            : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
        );
      }
    }
  }
  return str.join("&");
};

export const dateFormat = (date: string) => {
  const dateValue = new Date(date);
  if (dateValue.toString() === "Invalid Date") {
    return "";
  }
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(dateValue);
};
