export interface IResponse<T> {
  docs: T[];
  pages: {
    current: number;
    prev: number;
    hasPrev: boolean;
    next: number;
    hasNext: boolean;
    total: number | null;
  };
  items: {
    limit?: number;
    begin: number | null;
    end: number | null;
    total: number;
  };
}
