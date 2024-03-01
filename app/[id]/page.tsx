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
        <h1 className="text-3xl font-bold font-sora mb-4 mt-16 text-white text-center">NFT Details</h1>
        {/* Display NFT details */}
        <div className="bg-[#060714] rounded-2xl p-4 flex lg:flex-row flex-col justify-center mx-auto">
          <img src={selectedNFT.image} alt="nft image" className="mb-2 rounded-md" />
          <div>
              <div className="lg:ml-6 mx-0">
                  <h2 className="text-2xl font-semibold font-sora text-white ">{selectedNFT.name}</h2>
              </div>
              <div className="mx-center lg:ml-6 mx-0 mt-2">
                  <h2 className="text-sm font-normal font-sora text-[#7780A1]">{selectedNFT.description}</h2>
              </div>

              <div className="flex flex-col md:flex-row">
                  <div className="flex">
                     <img src={selectedNFT.creatorImage} alt="nft image" className="mb-2 rounded-md" />
                     <div className="text-white mt-2">
                        <p className="text-[#7780A1]">creator</p>
                        @{selectedNFT.creator}
                     </div>
                  </div>

                  <div className="flex">
                     <img src={selectedNFT.collectionImage} alt="nft image" className="mb-2 rounded-md" />
                     <div className="text-white mt-4">
                        <p className="text-[#7780A1]">collection</p>
                        {selectedNFT.collection}
                     </div>
                  </div>  
              </div>
              <div className="bg-[#262840] rounded-2xl p-6 lg:ml-6 mx-4">
                  <div className="flex">
                      <div className="text-white font-bold text-lg">
                        <p className="text-[#7780A1] text-normal font-normal">Current price</p>
                        {selectedNFT.price} ETH
                      </div>
                      <div className="text-white font-bold text-lg mt-1 ml-auto">
                        <p className="text-[#7780A1] font-normal text-sm">Time left</p>
                        {selectedNFT.timeCreated} min
                        <p className="text-[#7780A1] font-normal text-sm"> (01.01.2022 - 01:40:47)</p>
                      </div>
                  </div>
                  <button className="bg-blue-800 text-white text-sm font-semibold py-4 w-full mt-6 rounded-2xl">place bid </button>
              </div>
              <div className='mt-6 ml-6'>
                <img src="/images/nfts/graph.png" alt="profiles" width={300} height={200} className="" />
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NFTDetailsPage;
