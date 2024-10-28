import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getCookie } from "cookies-next";

import { COOKIES_KEY, JSONparse } from "../common";
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  public?: boolean;
}

const makeRequestWith = (BASE_TYPE?: "BASE") => {
  const getBaseURL = (BASE_TYPE?: string) => {
    if (BASE_TYPE === "BASE") {
      return process.env.NEXT_PUBLIC_BASE_URL;
    }
    return "";
  };

  const axiosInstance = axios.create({
    baseURL: getBaseURL(BASE_TYPE),
  });

  axiosInstance.interceptors.request.use((config: CustomAxiosRequestConfig) => {
    if (config && config.headers) {
      if (!config.headers.Authorization) {
        const token = getCookie(COOKIES_KEY.ACCESS_TOKEN);

        if (token && !config?.public) {
          config.headers["Authorization"] = `Bearer ${JSONparse(
            token.toString()
          )}`;
        }
      } else {
        if (String(config.headers.Authorization).match("undefined")) {
          delete config.headers.Authorization;
        }
      }
      if (!config.headers["Content-Type"]) {
        config.headers["Content-Type"] = "application/json";
      }
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (
        error.response.status == 401 &&
        !error?.response?.config?.url.includes("/refresh") &&
        !error?.response?.config?.url.includes("/logout")
      ) {
        // await callRefreshToken(
        //   true,
        //   error?.response?.config?.no_toast_no_refresh
        // )
        return error;
      }
      return error;
    }
  );

  return async (config: any) => {
    // if (config?.loaderStatus !== false) {
    //   LOADER.show();
    // }
    const configuration = {
      method: config.method || "get",
      url: config.url,
      data: config.data,
      public: config.public,
      no_toast_no_refresh: config.no_toast_no_refresh,
      headers: config.headers ? config.headers : {},
      params: config.params,
      timeout: config.timeout ? config.timeout : 100000,
      cancelToken: config.cancelToken,
    };
    // const start = Date.now(); // Record the time before the request is made
    return axiosInstance(configuration)
      .then((result: AxiosResponse) => {
        // const end = Date.now(); // Record the time after the response is received
        // const responseTime = end - start;
        // if (
        //   responseTime >
        //   parseInt(process.env.NEXT_PUBLIC_API_RESPONSE_TIME_LMIT)
        // ) {
        //   if (process.env.NEXT_PUBLIC_ENVIRONMENT == 'prod') {
        //     sendLogToCloudWatch(
        //       { responseTime, api: configuration.url, clientSide: true },
        //       { level: 'error', type: 'api' },
        //     );
        //   }
        // }
        // LOADER.hide();
        if (result && result.status >= 200 && result.status < 300) {
          return { status: result.status, ...result.data };
        }
        throw result;
      })
      .catch((err: AxiosError) => {
        // console.log("err", err);

        const error = err as unknown as {
          response: {
            data: {
              error?: string;
              message: string;
              code: number;
            };
          };
        };
        // LOADER.hide();

        throw {
          error: {
            status: err?.response?.status,
            errorCode: error?.response?.data?.code,
            message: String(
              error?.response?.data?.error || "Something went wrong"
            ),
            errorData: error?.response?.data,
          },
        };
      });
  };
};

const makeRequestClient = makeRequestWith("BASE");

export { makeRequestClient };
