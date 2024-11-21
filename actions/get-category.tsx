import { Category } from "@/types";
export const runtime = "edge";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories/get`;
const STORE_ID=`${process.env.NEXT_PUBLIC_STORE_ID}`;

const getCategory = async (id: string): Promise<Category> => {
  console.log(`${URL}?id=${id}&storeId=${STORE_ID}`)
  const res = await fetch(`${URL}?id=${id}&storeId=${STORE_ID}`);

  return res.json();
};

export default getCategory;
