import Cookies from 'js-cookie'
import Config from './settings'

const TokenKey = Config.TokenKey

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token, rememberMe) {
  if (rememberMe) {
    const expires = new Date(new Date().getTime() + 4 * 60 * 60 * 1000)
    return Cookies.set(TokenKey, token, { expires: expires })
  } else {
    const expires = new Date(new Date().getTime() + 4 * 60 * 60 * 1000)
    return Cookies.set(TokenKey, token, { expires: expires })
  }
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
