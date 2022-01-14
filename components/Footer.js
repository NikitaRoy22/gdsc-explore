import Image from 'next/image';
import GDSCexplore from '../public/gdscexplore.svg'
import Link from 'next/link';

export default function Footer() {
    return(
        <>
            <div className="py-14 flex flex-col items-center">
                <div className="flex flex-row justify-center">
                    <p>email us at </p>
                    <Link href={"/"}><p className="mr-1 px-1 text-indigo-600">example@gmail.com</p></Link>
                </div>
                <div className='w-40 py-4 pt-8'><Image src={GDSCexplore} className="w-8 h-8"/></div>
                <div className="flex flex-col justify-center items-center">
                    <p className=" text-center text-[1.8rem] text-[#4F5356] font-bold mr-1 pb-2">GDSC EXPLORE</p>
                    <hr className="w-[8%] pt-3"></hr>
                    <Link href={"/"} >
                        <a className="pt-1">
                            <p className="text-[#737B7D] mr-1">Website Developers</p>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}