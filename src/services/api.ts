import { apiKey, apiUrl } from "@/constants/api";
import { isLoggedIn } from "@/utils/auth";
import { getAccessToken } from "@/utils/token";

interface ApiFetchParams<K> {
  method?: string;
  body?: K;
  headers?: any;
}

const apiFetch = async <T, K>(url: string, params: ApiFetchParams<K> = {}): Promise<T> => {

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

const composeFetchParams = (params: {
  method?: string;
  body?: any;
  headers?: any;
}): ApiFetchParams<any> => {
  const { method, body, headers } = params;
  const defaultHeaders: Record<string, string> = {
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

  return {
    method,
    body: body instanceof FormData || body == null ? body as any : JSON.stringify(body) as BodyInit,
    headers: defaultHeaders
  };
}

const api = {
  get: <T, K>(url: string, params: {
    headers?: any;
  }) => apiFetch<T, K>(url, composeFetchParams({ method: 'GET', ...params } as ApiFetchParams<K>)),
  post: <T, K>(url: string, params: {
    body?: K;
    headers?: any;
  }) => apiFetch<T, K>(url, composeFetchParams({ method: 'POST', ...params } as ApiFetchParams<K>)),
  put: <T, K>(url: string, params: {
    body?: K;
    headers?: any;
  }) => apiFetch<T, K>(url, composeFetchParams({ method: 'PUT', ...params } as ApiFetchParams<K>)),
  delete: <T, K>(url: string, params: {
    headers?: any;
  }) => apiFetch<T, K>(url, composeFetchParams({ method: 'DELETE', ...params } as ApiFetchParams<K>)),
};

export default api;