import {$authHost,$host} from "./index";
import {jwtDecode} from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', type)
    return data
}

export const fetchProducts = async () => {
    const {data} = await $host.get('api/product')
    return data
}

export const fetchOneProduct = async () => {
    const {data} = await $host.get('api/product/')
    return data
}