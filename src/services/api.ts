import { apiKey, apiUrl } from "@/constants/api";
import { isLoggedIn } from "@/utils/auth";
import { getAccessToken } from "@/utils/token";

interface ApiFetchParams {
  method?: string;
  body?: BodyInit;
  headers?: HeadersInit;
}

const apiFetch = async <T, K>(url: string, params: ApiFetchParams= {}): Promise<T> => {

  try {
    const response = await fetch(`${apiUrl}${url}`, params as RequestInit);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }    
}

const composeFetchParams = <K>(params: {
  method?: string;
  body?: K;
  headers?: HeadersInit;
}): ApiFetchParams => {
  const { method, body, headers } = params;
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-api-key': apiKey,
  };
  if(isLoggedIn()) {
    defaultHeaders['Authorization'] = `Bearer ${getAccessToken()}`;
  }

  if(headers) {
    Object.assign(defaultHeaders, headers);
  }

  const result: ApiFetchParams = {
    method,
    headers: defaultHeaders
  }

  if(result.body) {
    result.body =  body instanceof FormData || body == null ? body as unknown as BodyInit : JSON.stringify(body) as BodyInit;
  }

  return result;
}

const api = {
  get: <T, K>(url: string, params: {
    headers?: HeadersInit;
  }) => apiFetch<T, K>(url, composeFetchParams({ method: 'GET', ...params } as ApiFetchParams)),
  post: <T, K>(url: string, params: {
    body?: K;
    headers?: HeadersInit;
  }) => apiFetch<T, K>(url, composeFetchParams({ method: 'POST', ...params } as ApiFetchParams)),
  put: <T, K>(url: string, params: {
    body?: K;
    headers?: HeadersInit;
  }) => apiFetch<T, K>(url, composeFetchParams({ method: 'PUT', ...params } as ApiFetchParams)),
  delete: <T, K>(url: string, params: {
    headers?: HeadersInit;
  }) => apiFetch<T, K>(url, composeFetchParams({ method: 'DELETE', ...params } as ApiFetchParams)),
};

export default api;