import { Billboard as Billboards } from "@/types";

interface BillboardProps {
  data: Billboards;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  const imageUrl = data ? data.imageUrl : "";
  const label = data ? data.label : "";
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {label}
          </div>
        </div>
      </div>
    </div>
   );
};

export default Billboard;
