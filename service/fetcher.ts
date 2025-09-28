/* eslint-disable @typescript-eslint/no-explicit-any */
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export async function fetcher<T>(
  url: string,
  options: {
    next?: {
      revalidate: number;
    };
    method?: RequestMethod;
    token?: string;
    body?: any;
    headers?: Record<string, string>;
  } = {}
): Promise<T> {
  const { method = 'GET', token, body, headers, next } = options;

  const isFormData = body instanceof FormData;

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    method,
    next: {
      ...next,
      cache: next?.revalidate === 0 ? 'no-cache' : 'default',
      revalidate: next?.revalidate || 60,
    },
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...headers,
    },
    ...(body && { body: isFormData ? body : JSON.stringify(body) }),
  });

  const contentType = res.headers.get('content-type') || '';

  if (!res.ok) {
    let errorBody;
    try {
      if (contentType.includes('application/json')) {
        errorBody = await res.json();
      } else {
        errorBody = { message: await res.text() };
      }
    } catch {
      errorBody = { message: 'Unknown error' };
    }

    return Promise.reject({
      status: res.status,
      statusText: res.statusText,
      ...errorBody,
    });
  }

  return res.json();
}
