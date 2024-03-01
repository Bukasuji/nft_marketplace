"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNFTs, selectNFTs } from '../../lib/features/nftsSlice'
import { AppDispatch } from '../../lib/store';
import { BiRightArrow } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import { NFT } from '../../types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';



const AvailableNfts:React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const nfts = useSelector(selectNFTs);

  useEffect(() => {
    dispatch(fetchNFTs());
  }, [dispatch]);


  return (
    <div className='flex min-h-screen flex-col bg-cover bg-[#060714] pt-0'>
        <Navbar/>
        <div className="container p-0 relative">
        <h1 className="text-3xl font-bold font-sora mb-4 mt-32 text-white text-center">Available NFTs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {nfts.map((nft) => (
            <Link href={`/${nft.id}`} key={nft.id} className="bg-[#060714] border border-slate-900 rounded-2xl p-4">
                <img src={nft.image} alt="nft image" className="mb-2 rounded-md" />
                <div className='flex mb-6 mt-4'>
                <h2 className="text-sm font-normal w-[60%] font-sora text-white">{nft.description}</h2>
                <div className="flex items-center justify-center bg-[#514CFF26] text-[#514CFF] text-sm mb-1 w-[62px] h-[30px] rounded ml-auto">
                    <p className='text-sm'>{nft.price} ETH</p>
                </div>
                </div>
                <div className='flex mb-6'>
                <img src="/images/nfts/Timer.png" alt="time icon" width={20} height={20} className="" />
                <p className="ml-4 text-white text-sm font-sora">{nft.timeCreated} min left</p>
                </div>
                <div className='border border-slate-900 '/>
                <div className='flex mt-4'>
                <img src={nft.profile} alt="profiles" width={150} height={32} className="" />
                <p className='text-sm text-[#7780A1]'>{nft.bidding}</p>
                <div className='flex ml-auto'>
                    <div className="text-red-500">
                    <FaHeart />
                    </div>
                    <p className='ml-2 text-sm text-[#7780A1]'>{nft.likes}</p>
                </div>
                </div>
            </Link>
            ))}
        </div>
        </div>
        <Footer/>
    </div>
  );
};

export default AvailableNfts

