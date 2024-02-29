// NFTList.js
"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNFTs, selectNFTs } from '../../lib/features/nftsSlice';
import { AppDispatch } from '../../lib/store';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiRightArrow } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const NFTList = () => {
  const dispatch: AppDispatch = useDispatch();
  const nfts = useSelector(selectNFTs);

  useEffect(() => {
    dispatch(fetchNFTs());
  }, [dispatch]);

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
   
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="container p-0 relative">
      <h1 className="text-3xl font-bold font-sora mb-4 mt-32 text-white text-center">Latest live Updates</h1>
      <div className="overflow-hidden relative mt-10">
        <Slider {...settings}>
          {nfts.map((nft) => (
            <div key={nft.id} className="bg-[#060714] border border-slate-900 rounded-2xl p-4">
              <Image src={nft.image} alt="nft image" width={400} height={520} className=" mb-2 rounded-md" />
              <div className='flex mb-6 mt-4'>
                <h2 className="text-sm font-normal w-[60%] font-sora text-white">{nft.description}</h2>
                <div className="flex items-center justify-center bg-[#514CFF26] text-[#514CFF] text-sm  mb-1 w-[62px] h-[30px] rounded ml-auto">
                  <p className='text-sm'>{nft.price}ETH</p>
                </div>
              </div>
              <div className='flex mb-6'>
                 <Image src="/images/nfts/Timer.png" alt="time icon" width={20} height={20} className="" />
                 <p className="ml-4 text-white text-sm font-sora">{nft.timeCreated} min left</p>
              </div>
              <div className='border border-slate-900 '/>
              <div className='flex mt-4'>
                 <Image src={nft.profile} alt="profiles" width={150} height={32} className="" />
                 <p className='text-sm text-[#7780A1] '> {nft.bidding}</p>
                 <div className='flex'>
                    <div className="text-red-500">
                          <FaHeart />
                    </div>
                    <p className='ml-2 text-sm text-[#7780A1] '>{nft.likes}</p>
                 </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <div className="bg-gray-900 rounded-full p-2">
            <BiRightArrow className="text-6xl text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTList;
