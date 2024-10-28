import { COOKIE, COOKIE as storage } from "@/utils/common/cookie-storage"
import { COOKIES_KEY, JSONparse, isProduction } from "."
import LOADER from "./loader"
interface window {
  [key: string]: any
}
declare const window: window

const removeSession = async () => {
  storage.removeItem(COOKIES_KEY.ACCESS_TOKEN)
  storage.removeItem(COOKIES_KEY.REFRESH_TOKEN)
  storage.removeItem(COOKIES_KEY.ACCESS_TOKEN)
  storage.removeItem(COOKIES_KEY.EXPIRES_AT)
  storage.removeItem(COOKIES_KEY.USER)

  storage.setItem("logout", true)
  setTimeout(() => {
    LOADER.hide()
    if (typeof window != "undefined" && window?.location) {
      window.location.href = `/login`
    }
  }, 500)
}
export const logout = async () => {
  LOADER.show()
  removeSession()
  //   try {
  //     makeRequestClient({
  //       url: API_ROUTES.logout,
  //       method: "POST",
  //       data: {},
  //       loaderStatus: true,
  //     })
  //       .then(() => {
  //         removeSession()
  //       })
  //       .catch(() => {
  //         removeSession()
  //       })
  //   } catch (err) {
  //     removeSession()
  //   }
}

export const setCookieWithoutTimeStamp = (key: string, value: any) => {
  if (!value) return
  const domain = isProduction ? process.env.DOMAIN : ""
  const newDate = new Date()
  newDate.setDate(newDate.getDate() + 90)
  const expDate = newDate

  COOKIE.setItem(key, value, { expires: expDate, domain })
}

const ACCESS_TOKEN = COOKIES_KEY.ACCESS_TOKEN
const REFRESH_TOKEN = COOKIES_KEY.REFRESH_TOKEN
const USER_INFO = COOKIES_KEY.USER
const EXPIRED_AT = "expires_at"
const REFRESH_EXPIRES_AT = "refresh_expires_at"
const setAccessToken = (value: string) => {
  setCookieWithoutTimeStamp(ACCESS_TOKEN, value)
}

const setExpiredAt = (value: string) => {
  setCookieWithoutTimeStamp(EXPIRED_AT, value)
}
const setRefreshExpiredAt = (value: string) => {
  setCookieWithoutTimeStamp(REFRESH_EXPIRES_AT, value)
}
const setRefreshToken = (value: string) => {
  setCookieWithoutTimeStamp(REFRESH_TOKEN, value)
}
const setUserData = (value: string) => {
  setCookieWithoutTimeStamp(USER_INFO, value)
}
const getAccessToken = () => {
  return JSONparse(storage.getItem(ACCESS_TOKEN))
}
const getExpiresAT = () => {
  return JSONparse(storage.getItem(EXPIRED_AT))
}
const getRefreshToken = () => {
  return JSONparse(storage.getItem(REFRESH_TOKEN))
}
const getUser = () => {
  return JSONparse(storage.getItem(COOKIES_KEY.USER)) as IUser
}
const isLoggedin = () => {
  return getAccessToken() ? true : false
}

const AUTH = {
  setAccessToken,
  setExpiredAt,
  setRefreshExpiredAt,
  setRefreshToken,
  setUserData,
  getExpiresAT,
  getAccessToken,
  getRefreshToken,
  logout,
  getUser,
  isLoggedin,
}
export default AUTH

export type IUser = {
  first_name: string
  last_name: string
  profile_image: string
  username: string
  email: string
  is_active: boolean
  is_staff: boolean
  user_id: string
  user_level: string
}
