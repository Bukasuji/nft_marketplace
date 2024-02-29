"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { NFT } from '../../types'
import { BiRightArrow } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

interface Props {
    data: NFT;
  }
  

const Popular_auction:React.FC<Props> = ({ data }) => {
  
  return (
    <div className="container">
      <h1 className="text-3xl font-bold font-sora mb-4 mt-32 text-white text-center">Latest live Updates</h1>
      <div className="mt-10 flex">
            <div key={data.id} className="bg-[#060714] border border-slate-900 rounded-2xl p-4">
              <Image src={data.image} alt="nft image" width={400} height={520} className=" mb-2 rounded-md" />
              <div className='flex mb-6 mt-4'>
                <h2 className="text-sm font-normal w-[60%] font-sora text-white">{data.description}</h2>
                <div className="flex items-center justify-center bg-[#514CFF26] text-[#514CFF] text-sm  mb-1 w-[62px] h-[30px] rounded ml-auto">
                  <p className='text-sm'>{data.price}ETH</p>
                </div>
              </div>
              <div className='flex mb-6'>
                 <Image src="/images/nfts/Timer.png" alt="time icon" width={20} height={20} className="" />
                 <p className="ml-4 text-white text-sm font-sora">{data.timeCreated} min left</p>
              </div>
              <div className='border border-slate-900 '/>
              <div className='flex mt-4'>
                 <Image src={data.profile} alt="profiles" width={150} height={32} className="" />
                 <p className='text-sm text-[#7780A1] '> {data.bidding}</p>
                 <div className='flex'>
                    <div className="text-red-500">
                          <FaHeart />
                    </div>
                    <p className='ml-2 text-sm text-[#7780A1] '>{data.likes}</p>
                 </div>
              </div>
            </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <div className="bg-gray-900 rounded-full p-2">
            <BiRightArrow className="text-6xl text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular_auction;

