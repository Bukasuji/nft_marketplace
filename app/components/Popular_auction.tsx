import React from 'react';
import Image from 'next/image';
import { NFT } from '../../types';
import { BiRightArrow } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import data from '../data/popular_auction.json'

interface Props {
    data: NFT[];
}

const Popular_auction: React.FC<Props> = ({ data }) => {
    return (
        <div className="container xl:max-w-6xl mx-auto">
            <p className='text-[#7780A1] text-center uppercase'>overline</p>
            <h1 className="text-3xl font-bold font-sora mb-4 mt-4 text-white text-center">Most popular live auctions</h1>
            <div className='flex justify-center  space-x-4'>
                    <button className='bg-transparent  text-[#7780A1] text-sm  py-2 px-3 border border-[#262840] rounded-xl'>
                       Architecture
                    </button>
                    <button className='bg-transparent  text-[#7780A1] text-sm  py-2 px-3 border border-[#262840] rounded-xl'>
                      Photography
                    </button>

                    <button className='bg-transparent  text-[#7780A1] text-sm  py-2 px-3 border border-[#262840] rounded-xl'>
                        Games
                   </button>
                   <button className='bg-transparent  text-[#7780A1] text-sm  py-2 px-3 border border-[#262840] rounded-xl'>
                        Music
                   </button>
            </div>
            <div className="mt-10 flex">
                {data.map((item: NFT) => (
                    <div key={item.id} className="bg-[#060714] rounded-2xl p-2">
                        <Image src={item.image} alt="nft image" width={212} height={355} className=" mb-2 rounded-md" />
                        <div className='flex mb-6 mt-4'>
                            <h2 className="text-sm font-normal font-sora text-white">{item.description}</h2>
                        </div>
                        <div className='flex mb-6'>
                            <Image src="/images/nfts/Timer.png" alt="time icon" width={20} height={20} className="" />
                            <p className="ml-4 text-white text-sm font-sora">{item.timeCreated}</p>
                            <div className="flex items-center justify-center bg-[#514CFF26] text-[#514CFF] text-sm  mb-1 w-[62px] h-[30px] rounded ml-auto">
                                <p className='text-sm'>{item.price}ETH</p>
                            </div>
                        </div>
                        <div className='border border-slate-900' />
                        <div className='flex mt-4'>
                            <p className='text-sm text-[#7780A1] '> {item.bidding}</p>
                            <div className='flex'>
                                <div className="text-red-500">
                                    <FaHeart />
                                </div>
                                <p className='ml-2 text-sm text-[#7780A1] '>{item.likes}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-16'>
                    <button className='bg-transparent  text-[#7780A1] text-sm  py-2 px-3 border border-[#262840] rounded-xl'>
                      Show me more
                    </button>
            </div>
            <div className='border border-slate-900 mt-16' />
        </div>
    );
};

export default Popular_auction;
