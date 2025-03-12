import Image from 'next/image';
import React from 'react';
import swimming from '../../assets/swimming.jpg'
import Link from 'next/link';
const Recreation = () => {
    return (
        <div className='bg-[#F7F7F7] pb-10 xl:pt-10'>
            <div className='grid md:grid-cols-2 align-middle gap-4 lg:gap-10 items-center max-w-7xl mx-auto bg-[#fff] px-4 py-10 rounded-lg'>
                <div className='lg:py-16 lg:pl-16'>
                    <Image className='rounded-md' src={swimming} width={700} height={500} alt='restaurants' />
                </div>
                <div className='md:mt-0 lg:px-20'>
                    <p className="text-primary font-semibold">Have Fun with Us
                    </p>
                    <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4">
                        Recreation
                    </h1>
                    <p className='text-[15px] text-[#333334] mb-10'>
                        Indulge in leisure and excitement at our resort, offering an array of entertainment and recreational amenities for all ages.
                    </p>
                    <div className='grid grid-cols-2 gap-3'>
                        <Link href="/restaurants" className='border p-3 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-md text-center'>Turag Restaurants</Link>
                        <Link href="/restaurants" className='border p-3 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-md text-center'>Turag Restaurants</Link>
                        <Link href="/restaurants" className='border p-3 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-md text-center'>Turag Restaurants</Link>
                        <Link href="/restaurants" className='border p-3 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-md text-center'>Turag Restaurants</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recreation;