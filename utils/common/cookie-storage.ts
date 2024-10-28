import { deleteCookie, getCookie, setCookie } from "cookies-next"
import { OptionsType } from "cookies-next/lib/types"
import { isProduction } from "."



export const COOKIE = {
  setItem: (key: string, data: any, options?: OptionsType) => {
    let str = data
    try {
      str = JSON.stringify(data)
    } catch (e) {
      str = data.toString()
    }
    setCookie(key, str, {
      secure: isProduction ? true : false,
      ...options,
    })
  },
  getItem: (key: string) => {
    const str = getCookie(key)
    // eslint-disable-next-line no-console

    let jsonOrStr
    try {
      jsonOrStr = JSON.parse(str as string)
    } catch (e) {
      jsonOrStr = str
    }

    return jsonOrStr
  },
  removeItem: (key: string) => {
    deleteCookie(key)
  },
  setItemWithoutStringify: (key: string, data: any, options?: OptionsType) => {
    setCookie(key, data, options)
  },
}
