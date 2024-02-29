// [id].tsx
'use client'
import { usePathname, useParams} from "next/navigation"; 
import { useSelector } from 'react-redux';
import { selectNFTs } from '../../lib/features/nftsSlice';
import { NFT } from '../../types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaHeart } from 'react-icons/fa';

const NFTDetailsPage: React.FC = () => {
  const pathname = usePathname(); // Use useNavigation hook
  const { id } = useParams(); // Access router query from navigation
  const nfts = useSelector(selectNFTs);

  // Find the NFT with the matching ID
  const selectedNFT: NFT | undefined = nfts.find((nft) => nft.id === Number(id));

  if (!selectedNFT) {
    // Handle case where NFT is not found
    return (
      <div>
        <p>ebuka NFT not  found!</p>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen flex-col bg-cover bg-[#060714] pt-0'>
      <Navbar/>
      <div className="container p-0 relative">
        <h1 className="text-3xl font-bold font-sora mb-4 mt-32 text-white text-center">NFT Details</h1>
        {/* Display NFT details */}
        <div className="bg-[#060714] border border-slate-900 rounded-2xl p-4">
          <img src={selectedNFT.image} alt="nft image" className="mb-2 rounded-md" />
          <h2 className="text-sm font-normal w-[60%] font-sora text-white">{selectedNFT.description}</h2>
          <div className="flex items-center justify-center bg-[#514CFF26] text-[#514CFF] text-sm mb-1 w-[62px] h-[30px] rounded ml-auto">
            <p className='text-sm'>{selectedNFT.price} ETH</p>
          </div>
          <div className='flex mb-6'>
            <img src="/images/nfts/Timer.png" alt="time icon" width={20} height={20} className="" />
            <p className="ml-4 text-white text-sm font-sora">{selectedNFT.timeCreated} min left</p>
          </div>
          <div className='border border-slate-900'/>
          <div className='flex mt-4'>
            <img src={selectedNFT.profile} alt="profiles" width={150} height={32} className="" />
            <p className='text-sm text-[#7780A1]'>{selectedNFT.bidding}</p>
            <div className='flex ml-auto'>
              <div className="text-red-500">
                <FaHeart />
              </div>
              <p className='ml-2 text-sm text-[#7780A1]'>{selectedNFT.likes}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NFTDetailsPage;
