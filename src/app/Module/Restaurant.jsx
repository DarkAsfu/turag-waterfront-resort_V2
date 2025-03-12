import Image from 'next/image';
import React from 'react';
import restaurants from '../../assets/restaurants.jpg'
import Link from 'next/link';
const Restaurant = () => {
    return (
        <div className='bg-[#F7F7F7] xl:pt-10'>
            <div className='grid md:grid-cols-2 align-middle gap-4 lg:gap-10 items-center max-w-7xl mx-auto bg-[#fff] px-4 py-10 rounded-lg'>

                <div className='lg:py-16 lg:pl-16'>
                    <Image className='rounded-md' src={restaurants} width={700} height={500} alt='restaurants' />
                </div>
                <div className='md:mt-0 lg:px-20'>
                    <p className="text-primary font-semibold">Dine with Us</p>
                    <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4">
                        Restaurant
                    </h1>
                    <p className='text-[15px] text-[#333334] mb-10'>
                        In our restaurant buffet breakfast, lunch and dinner are served. From exclusive breakfast to dinner, we have a superb range of relaxed and exciting dining option. We have also BBQ options for our guests.
                    </p>
                    <Link href="/restaurants" className='border p-3 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-md'>Turag Restaurants</Link>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;