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

  if (!res.ok) {
    let errorBody;
    try {
      errorBody = await res.json();
    } catch {
      errorBody = { message: 'Unknown error' };
    }

    const error = new Error(errorBody.message || 'Something went wrong');
    (error as any).status = res.status;
    (error as any).info = errorBody;
    throw error;
  }

  return res.json();
}
