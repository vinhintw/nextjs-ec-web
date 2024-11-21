import { Size } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/sizes/getall`;
const STORE_ID=`${process.env.NEXT_PUBLIC_STORE_ID}`;

const getSizes = async (): Promise<Size[]> => {
  console.log(`${URL}?storeId=${STORE_ID}`);
  const res = await fetch(`${URL}?storeId=${STORE_ID}`);

  return res.json();
};

export default getSizes;
