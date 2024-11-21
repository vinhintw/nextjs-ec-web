import { Product } from "@/types";
export const runtime = "edge";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products/get`;
const STORE_ID=`${process.env.NEXT_PUBLIC_STORE_ID}`;
const getProduct = async (id: string): Promise<Product> => {
const fulURL = `${URL}?id=${id}&storeId=${STORE_ID}`;
console.log(fulURL);
  const res = await fetch(`${URL}?id=${id}&storeId=${STORE_ID}`);

  return res.json();
};

export default getProduct;
