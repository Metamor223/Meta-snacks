import {$authHost,$host} from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async (email, organisation_name, itn, password) => {
 const {data} = await $host.post('api/user/registration', {email,organisation_name,itn,password})
 localStorage.setItem('token', data.token)
 return jwtDecode(data.token)
}

export const login = async (email, password) => {
 const {data} = await $host.post('api/user/login', {email, password})
 localStorage.setItem('token', data.token)
 return jwtDecode(data.token)
}

export const check = async () => {
 const {data} = await $authHost.post('api/user/auth',)
 localStorage.setItem('token', data.token)
 return jwtDecode(data.token)
}