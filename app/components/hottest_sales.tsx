import Image from "next/image";
import { NFT} from "../../types"
import Popular_auction from "./popular_auction";
import data from '../data/popular_auction.json'

export default function Hottest_sales() {
  return (
      <div className="flex">
            {data.map((item: NFT) => (
            <Popular_auction key={item.id} data={item} />
           ))}  
      </div>
  );
}
