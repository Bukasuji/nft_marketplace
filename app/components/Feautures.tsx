import Image from "next/image";

export default function Feautures() {
  return (
    <div>
        <div className="flex flex-col flex-col-reverse lg:flex-row xl:mx-auto md:mx-32 mx-6 xl:max-w-6xl mt-28">
            <div className="">
                <div>
                    <p className="text-2xl lg:text-start text-center text-[#7780A1] mb-4 uppercase">Overline</p>
                    <p className="xl:text-6xl text-2xl text-center lg:text-start text-white mb-8 lg:w-[300px] xl:w-[400px] lg:text-4xl">Sapien ipsum scelerisque convallis fusce</p>
                    <p className="text-sm lg:text-start text-center text-[#7780A1] mb-10 xl:w-[400px] lg:w-[300px]">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                </div>
                <div className='flex justify-center lg:justify-start'>
                    <button className='bg-gradient-to-br from-indigo-900 to-indigo-700 text-sm py-2 px-3 border border-[#262840] rounded-xl text-white shadow-[inset_4px_4px_4px_#FFFFFF1A]'>
                            Get started 
                    </button>

                    <button className='bg-transparent hover:bg-blue-500 text-[#7780A1] text-sm  hover:text-white ml-4 py-2 px-3 border border-[#262840] hover:border-transparent rounded-xl'>
                        Learn more
                    </button>
                </div>
            </div>

            <div className='ml-auto md:w-500 md:h-500 xl:w-600 xl:h-600 '>
                <Image
                src="/images/bucket.png"
                className=''
                width={500}
                height={500}
                alt="logo"
                />
            </div>
        </div>

        <div className="flex flex-col lg:flex-row xl:mx-auto md:mx-32 mx-6 xl:max-w-6xl">
            <div className="">
               <Image
                src="/images/Left-image.png"
                className=''
                width={600}
                height={600}
                alt="logo"
                />
            </div>

            <div className="ml-auto">
                <div>
                    <p className="text-2xl lg:text-start text-center text-[#7780A1] mb-4 uppercase">Overline</p>
                    <p className="xl:text-6xl text-2xl text-center lg:text-start text-white mb-8 lg:w-[300px] xl:w-[400px] lg:text-4xl">Sapien ipsum scelerisque convallis fusce</p>
                    <p className="text-sm lg:text-start text-center text-[#7780A1] mb-10 xl:w-[400px] lg:w-[300px]">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                    <div className="flex">
                        <div>
                          <Image src="/images/Vector.png" className="h-auto w-auto" width={32} height={32} alt="icon" />
                          <p className="font-semibold text-xl text-white">Sollicitudin sapien</p>
                          <p className="font-sm text-[#7780A1]">Cursus fermentum</p>
                        </div>

                        <div className="ml-8">
                          <Image src="/images/Vector.png" className="h-auto w-auto" width={32} height={32} alt="icon" />
                          <p className="text-xl font-semibold text-white">Pulvinar metus</p>
                          <p className="font-sm text-[#7780A1]">Nunc sed</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center lg:justify-start mt-8'>
                    <button className='bg-gradient-to-br from-indigo-900 to-indigo-700 text-sm py-2 px-3 border border-[#262840] rounded-xl text-white shadow-[inset_4px_4px_4px_#FFFFFF1A]'>
                            Get started 
                    </button>

                    <button className='bg-transparent hover:bg-blue-500 text-[#7780A1] text-sm  hover:text-white ml-4 py-2 px-3 border border-[#262840] hover:border-transparent rounded-xl'>
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
