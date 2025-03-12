import Image from 'next/image';
import React from 'react';
import playground from '../../assets/19.jpg'
import Link from 'next/link';
const Conference = () => {
    return (
        <div className='bg-[#F7F7F7] xl:pt-10 pt-0'>
            <div className='grid md:grid-cols-2 align-middle gap-4 lg:gap-10 items-center max-w-7xl mx-auto bg-white px-4 md:py-10 rounded-lg'>
                <div className='md:mt-0 lg:pl-20 order-2 md:order-1'>
                    <p className="text-primary font-semibold">Enjoy with Us</p>
                    <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4">
                    Play Ground
                    </h1>
                    <p className='text-[15px] text-[#333334] mb-10'>
                    Discover the perfect venue for your next event or conference, where every detail is tailored to perfection.
                    </p>
                    <Link href="/conference" className='border p-3 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-md'>Our Play Ground</Link>
                </div>
                <div className='lg:py-16 lg:pr-16 order-1 md:order-2'>
                    <Image className='rounded-md' src={playground} width={700} height={500} alt='Play ground'/>
                </div>
            </div>
        </div>
    );
};

export default Conference;