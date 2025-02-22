import React from 'react'
import Image from 'next/image'
import { client, urlFor } from '../lib/sanity';
import Link from 'next/link';

async function getData() {
    const query = "*[_type == 'heroImage'][0]";
    const data = await client.fetch(query);
    return data;
}

const Hero = async () => {
    const data = await getData()
  return (
    <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px8'>
        <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
            <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
             <h1 className='mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl'>Top Accessories For Top Price!</h1>
             <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>
                We sell only exclusive and high quality products for you.
                We are the best so come and shop with us.
             </p>
            </div>
            <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
            <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
            <Image
             src={urlFor(data.image1).url()}
             alt='Birds Accessories'
             className='h-full w-full object-cover object-center'
             priority
             width={300}
             height={500}
             />
            </div>
            <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
                <Image
                src={urlFor(data.image2).url()}
                alt='pet accessories'
                className='h-full w-full object-cover object-center'
                priority
                width={300}
                height={500}
                />
            </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
         <div className='flex h-12 w-64 divide-x overflow-hidden rounded-lg border'>
           <Link href={"/Accessories"}
           className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-slate-300'
           >Accessory
           </Link>
           <Link href={"/Foods"}
           className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-slate-300'
           >Food
           </Link>
           <Link href={"/Birds"}
           className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-slate-300'
           >Birds
           </Link>
         </div>
        </div>
    </section>
  )
}

export default Hero