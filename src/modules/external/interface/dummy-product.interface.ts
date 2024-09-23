export interface IDummyProductResponse {
  products: IDummyProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IDummyProduct {
  id: number;
  title: string;
  category: string;
}
