export interface ApiListResponse<T> {
  // define response here
  data: T;
  status: number;
  current_page: number;
  first_page_url: string;
  from: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
}

export interface ApiResponse<T> {
  // define response here
  data: T;
  status: number;
}
