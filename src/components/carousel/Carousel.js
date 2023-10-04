import { useState } from "react";
import left from "../../resources/img/left.svg";
import right from "../../resources/img/right.svg";

export default function Carousel({ children: slides}){
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
    const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
    const goToSlide = (index) => {setCurrent(index);};
      
    return (
        <div className="overflow-hidden relative w-full">
            <div 
                className="flex transition-transform ease-out duration-500" 
                style={{transform: `translateX(-${current * 100}%)`}}
                >
                    {slides}
                </div>
                <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-12">
                    <button 
                        onClick={prev} 
                        className="w-4 h-9 sm:w-6 sm:h-11">
                        <img src={left} alt="left" />
                    </button>
                    <button 
                        onClick={next} 
                        className="w-4 h-9 sm:w-6 sm:h-11">
                        <img src={right} alt="left" />
                    </button>
                </div>
                <div className="mt-6 flex gap-3 w-full justify-center">
                {slides.map((_, index) => (
                <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer z-10
                    ${current === index ? "bg-[#46856E]" : "bg-[#E5E5E5]"}
                    `}
                    onClick={() => goToSlide(index)}
                >
                </div>
                ))}
                </div>
            </div>
    )
}