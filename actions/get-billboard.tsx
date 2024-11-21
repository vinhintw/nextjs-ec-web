import { Billboard } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards/get`;
const STORE_ID=`${process.env.NEXT_PUBLIC_STORE_ID}`;
const getBillboard = async (id: string): Promise<Billboard> => {
  console.log(`${URL}?id=${id}&storeId=${STORE_ID}`)
  const res = await fetch(`${URL}?id=${id}&storeId=${STORE_ID}`);

  return res.json();
};

export default getBillboard;
