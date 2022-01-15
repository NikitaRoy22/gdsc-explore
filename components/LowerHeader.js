import Image from "next/image"
import LogoSvg from '../public/images/logo.svg'
import Fork from '../public/fork.svg'
import mic from '../public/Ellipse.svg'
import eve from '../public/images/cardImg1.png'

export default function LowerHeader(){
    return (
        <div className="bg-[#C2C2C2] bg-opacity-[0.1] pt-[70px] pb-[100px] md:pb-[120px]">
        
        <div id="decor1" className="absolute inline-block translate-y-[-60px]">
            <Image src={Fork} height={150} width={110}/>
        </div>
        <div id="decor1" className="absolute inline-block right-[0px] translate-y-[700px] md:translate-y-[400px] rotate-[180deg]">
            <Image src={Fork} height={150} width={110}/>
        </div>



      
        <div className="flex justify-center">
            <div className="h-auto w-[53.875rem] text-center font-sans text-[1.75rem] font-light p-10 text-[#373F41] md:h-auto md:w-[53.875rem] md:text-center md:font-sans md:text-[2.125rem] md:font-light md:text-[#373F41] md:leading-[3rem]">
            Lorem ipsum dolor sit <span className="text-[#4285F4]">amet</span>,
            consectetur adipiscing elit. <br /> Enim nec{" "}
            <span className="text-[#EA4335]">tempus faucibus</span> volutpat enim
            a. <span className="text-[#FBBC05]">Tempor</span>, a{" "}
            <span className="text-[#34A853]">elementum</span> et, urna turpis
            congue
            </div>
        </div>

        <div id="cards-wrapper" className="flex justify-center">
            <div className="flex flex-wrap justify-between flex-[0_1_400px] md:flex-[0_1_900px] mx-[5%]">

                <div id="first-row" className="flex justify-between w-[100%] md:w-[46%]">
                <div className="rounded-[12px] w-[165px] mb-[30px] md:mb-[0px] flex flex-col items-center py-[30px] bg-[rgba(255,255,255,0.4)] shadow-[4px_4px_40px_rgba(145,145,145,0.11)]">
                        <div className="rounded-[50%] overflow-hidden">
                            <Image src={LogoSvg} height={100} width={100}/>
                        </div>
                        <div>4</div>
                        <div>DSCs</div>
                    </div>

                    <div className="rounded-[12px] w-[165px] mb-[30px] md:mb-[0px] flex flex-col items-center py-[30px] bg-[rgba(255,255,255,0.4)] shadow-[4px_4px_40px_rgba(145,145,145,0.11)]">
                        <div className="rounded-[50%] overflow-hidden">
                            <Image src={LogoSvg} height={100} width={100}/>
                        </div>
                        <div>4</div>
                        <div>
                            Days of code
                        </div>
                    </div>
                </div>

                <div id="second-row" className="flex justify-between w-[100%] md:w-[46%]">
                    <div className="rounded-[12px] w-[165px] flex flex-col items-center py-[30px] bg-[rgba(255,255,255,0.4)] shadow-[4px_4px_40px_rgba(145,145,145,0.11)]">     
                        <div className="rounded-[50%] overflow-hidden">
                            <Image src={mic} height={100} width={100}/>
                        </div>
                        <div>5+</div>
                        <div>Expert Speakers</div>
                    </div>

                    <div className="rounded-[12px] w-[165px] flex flex-col items-center py-[30px] bg-[rgba(255,255,255,0.4)] shadow-[4px_4px_40px_rgba(145,145,145,0.11)]">
                        <div className="rounded-[50%] overflow-hidden">
                            <Image src={eve} height={100} width={100}/>
                        </div>
                        <div>5</div>
                        <div>Workshops</div>
                    </div>
                </div>


            </div>
        </div>

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
    )
}