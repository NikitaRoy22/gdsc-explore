import Card from "./Card"
import {BsCircleFill} from "react-icons/bs"
import { useState } from "react";
import {SpeakersData} from "../../utils/speakersData"



export default function Carousel() {


    const [activeIndex, setActiveIndex] = useState(2);
    const changeIndex = (index) => {
        setActiveIndex(index)
    }
    
    


    return(
        <>
            <div className="py-14 ">
                <h1 className="text-[2rem] md:text-[48px] text-[#373F41] mb-[5rem] text-center">Speakers</h1>
                <div className="w-full px-4 flex justify-center">
                    <div id="carousel" >
                        <div className="carousel-inner flex justify-center">
                            {activeIndex==0?
                            (
                            <div className="carousel-item bg-gray-300 opacity-20 hidden md:block mx-2">
                                <Card name={SpeakersData.at(-1).name} title={SpeakersData.at(-1).title} disable={true} linkedIn={SpeakersData.at(-1).linkedIn} twitter={SpeakersData.at(-1).twitter}/>
                            </div>
                            )
                            
                            :
                            (
                                <div className="carousel-item bg-gray-300 opacity-20 hidden md:block mx-2">
                                    <Card name={SpeakersData[activeIndex-1].name} title={SpeakersData[activeIndex-1].title} disable={true} linkedIn={SpeakersData[activeIndex-1].linkedIn} twitter={SpeakersData[activeIndex-1].twitter}/>
                                </div>
                            )}
                            

                            {SpeakersData.map((i,index)=>{
                                return(
                                    <div key={index} className={index==activeIndex?"carousel-item active mx-2 animate-wiggle -translate-y-[1.5rem]":"carousel-item  mx-2 hidden"}>
                                        <Card name={i.name} title={i.title} disable={false} linkedIn={i.linkedIn} twitter={i.twitter}/>
                                    </div>
                                )
                            })}
                            {activeIndex==SpeakersData.length-1?
                            (
                            <div className="carousel-item bg-gray-300 opacity-20 hidden md:block mx-2">
                                <Card name={SpeakersData[0].name} title={SpeakersData[0].title} disable={true} linkedIn={SpeakersData[0].linkedIn} twitter={SpeakersData[0].twitter}/>
                            </div>
                            )
                            
                            :
                            (
                                <div className="carousel-item bg-gray-300 opacity-20 hidden md:block mx-2">
                                    <Card name={SpeakersData[activeIndex+1].name} title={SpeakersData[activeIndex+1].title} disable={true} linkedIn={SpeakersData[activeIndex+1].linkedIn} twitter={SpeakersData[activeIndex+1].twitter}/>
                                </div>
                            )}
                            
                            
                            
                        </div>    
                        <div className="flex justify-center mt-8">
                            {SpeakersData.map((i,index)=>{
                                return(
                                    <button key={index} className={activeIndex==index?"mx-2 text-gray-800":"mx-2 text-gray-400"} onClick={()=>{changeIndex(index)}}>
                                        <BsCircleFill/>
                                    </button>

                                )

                            })}
                            
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}