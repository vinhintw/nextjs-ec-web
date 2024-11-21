import { Product } from "@/types";
import qs from "query-string";
export const runtime = "edge";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const STORE_ID = process.env.NEXT_PUBLIC_STORE_ID;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const baseUrl = `${API_URL}/products/getall`;
  const queryParams = {
    colorId: query.colorId,
    sizeId: query.sizeId,
    categoryId: query.categoryId,
    isFeatured: query.isFeatured,
  };
  const queryString = qs.stringify(queryParams);
  // Check if there are existing query parameters
  const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

  // Use '&' if there are existing query parameters, otherwise use '?'
  const separator = queryString ? "&" : "?";
  const fullUrl = `${url}${separator}storeId=${STORE_ID}`;
  console.log(fullUrl);
  const res = await fetch(fullUrl);

  return res.json();
};

export default getProducts;
