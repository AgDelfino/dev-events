'use client';

import Image from "next/image";
import DownArrow from '../public/icons/arrow-down.svg'

const ExploreBtn = () => {
    return (
        <button type='button' id='explore-btn' className='mt-7 mx-auto' onClick={() => {console.log('CLICK')}}>
            <a href='#events'>
                Explore Events
            </a>
            <Image src={DownArrow} alt='arrow-down' width={24} height={24} />
        </button>
    )
}
export default ExploreBtn
