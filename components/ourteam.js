import LogoSvg from '../public/images/logo.svg'
import Image from 'next/image'
import AECLOGO from '../public/images/logos/AEC.png'
import IIITGLOGO from '../public/images/logos/IIITG.png'
import NITALOGO from '../public/images/logos/NITA.png'


export default function Ourteam(){
    return (
        <>  <div className="bg-[#F9F9F9] py-14">
                <div id="section_heading" className="flex justify-center">
                    <div className="text-[36px] md:text-[48px] font-[400] mb-2">
                        Our Team
                    </div>
                </div>
                <div id='subheading' className="flex justify-center font-[300] mx-[10%] md:mx-[20%] text-[#737B7D] text-[18px] md:text-[25px] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum et et diam.
                </div>

                {/* border-2 border-black */}

                <div id="cards" className="flex flex-wrap justify-content mx-[4rem] md:mx-[19%] lg:mx-[15%] mt-[40px] mb-[10px]">
                    <div className='flex flex-col w-[100%] px-0 sm:w-[50%] lg:w-[25%]'>
                        <Image src={LogoSvg}/>
                        <div className='text-[#737B7D] text-[14.5px] text-center mt-[10px]'>Google Developer Student Clubs</div>
                        <div className='text-[#737B7D] text-[9.39px] text-center'>National Institute Of Technology Silchar</div>
                    </div>
                    <div className='flex flex-col w-[100%] sm:w-[50%] lg:w-[25%]'>
                        <Image src={LogoSvg}/>
                        <div className='text-[#737B7D] text-[14.5px] text-center mt-[10px]'>Google Developer Student Clubs</div>
                        <div className='text-[#737B7D] text-[9.39px] text-center'>National Institute Of Technology Silchar</div>
                    </div>
                    <div className='flex flex-col w-[100%] sm:w-[50%] lg:w-[25%]'>
                        <Image src={LogoSvg}/>
                        <div className='text-[#737B7D] text-[14.5px] text-center mt-[10px]'>Google Developer Student Clubs</div>
                        <div className='text-[#737B7D] text-[9.39px] text-center'>National Institute Of Technology Silchar</div>
                    </div>
                    <div className='flex flex-col w-[100%] sm:w-[50%] lg:w-[25%]'>
                        <Image src={LogoSvg}/>
                        <div className='text-[#737B7D] text-[14.5px] text-center mt-[10px]'>Google Developer Student Clubs</div>
                        <div className='text-[#737B7D] text-[9.39px] text-center'>National Institute Of Technology Silchar</div>
                    </div>
                </div>
            </div>
        </>



    )


}