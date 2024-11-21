import { Color } from "@/types";
export const runtime = "edge";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/colors/getall`;
const STORE_ID=`${process.env.NEXT_PUBLIC_STORE_ID}`;

const getColors = async (): Promise<Color[]> => {
  console.log(`${URL}?storeId=${STORE_ID}`);
  const res = await fetch(`${URL}?storeId=${STORE_ID}`);

  return res.json();
};

export default getColors;
