import Header from "../components/header/Header";
import Phone_Booth from "../resources/img/im1.png";
import Focus_Room from "../resources/img/im2.png";
import Meeting_Room from "../resources/img/im3.png";
import Open_Meeting_Room from "../resources/img/im4.png";
import Brands from "../resources/img/brands.png";
import Carousel from "../components/carousel/Carousel.js";
import img1 from "../resources/img/img1.png";
import img2 from "../resources/img/img2.png";
import img3 from "../resources/img/img3.png";
import img4 from "../resources/img/img4.png";
import cost from "../resources/img/cost.svg";
import time from "../resources/img/time.svg";
import flexible from "../resources/img/flex.svg";
import {DataReviews} from "../components/dates/Dates";
import star from "../resources/img/star.svg";
import ims1 from "../resources/img/image.png";
import ims2 from "../resources/img/image2.png";
import ims3 from "../resources/img/image3.png";
import free_image from "../resources/img/free_shop.svg";
import play_image from "../resources/img/play.svg";
import returns_image from "../resources/img/returns.svg";
import { Link } from "react-router-dom";
import WOW from 'wowjs';
import React, { useEffect } from 'react';

import 'animate.css/animate.min.css'; 

const slides = [
    `${img1}`,
    `${img2}`,
    `${img3}`,
    `${img4}`,
];

const Home = () => {
    document.title = "ROOM";
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);

      
    return (
        <>
        <Header />
        <section className="mt-[82px] wow animate__animated animate__slideInUp"> 
            <div className="flex justify-evenly px-6 flex-col lg:flex-row gap-8 max-w-[1200px] mx-auto">
                <h1 className="wow zoomIn font-roboto max-w-[450px] leading-[58px] text-4xl sm:text-[58px]" data-wow-duration="500ms">
                    Design that inspires a better way to work.
                </h1>
                <p className="text-gray_2 max-w-[569px] font-roboto text-xl sm:text-2xl leading-10">
                    We've developed a series of purpose-built rooms that offer companies looking for change an affordable, sustainable, and flexible alternative to fixed construction and traditional office design.
                </p>
            </div>
        </section>
        <section className="mt-28 sm:mt-[208px]">
            <div className="px-6 w-full max-w-6xl mx-auto">
                <ul className="flex-wrap sm:flex-nowrap flex sm:grid grid-cols-2 grid-rows-2 gap-6">
                    <li className="w-full max-w-[588px] wow animate__animated animate__fadeInUp">
                        <img className="w-full max-w-[588px]" src={Phone_Booth} alt="img" />
                        <p className="font-roboto text-2xl leading-7 pt-2">
                            Phone Booth
                        </p>
                    </li>
                    <li className="w-full max-w-[588px] wow animate__animated animate__fadeInUp">
                        <img className="w-full max-w-[588px]" src={Focus_Room} alt="img" />
                        <p className="font-roboto text-lg sm:text-2xl leading-7 pt-2">
                            Focus Room
                        </p>
                    </li>
                    <li className="w-full max-w-[588px] wow animate__animated animate__fadeInUp">
                        <img className="w-full max-w-[588px]" alt="img" src={Meeting_Room} />
                        <p className="font-roboto text-lg sm:text-2xl leading-7 pt-2 ">
                            Meeting Room
                        </p>
                    </li>
                    <li className="w-full max-w-[588px] wow animate__animated animate__fadeInUp">
                        <img className="w-full max-w-[588px]" alt="img" src={Open_Meeting_Room} />
                        <p className="font-roboto text-lg sm:text-2xl leading-7 pt-2">
                            Open Meeting Room
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        <section className="mt-28 sm:mt-[212px]">
            <div className="px-6 w-full max-w-6xl mx-auto">
                <h2 className="font-roboto text-center text-3xl sm:text-5xl leading-8 sm:leading-[48px] pb-7 wow animate__animated animate__fadeInUp">
                    The world's leading brands choose ROOM.
                </h2>
                <p className="font-roboto text-center text-[#4A4A4A]  text-lg sm:text-2xl leading-9 wow animate__animated animate__fadeInUp">
                    Over 3,000 and counting.
                </p>
                <div className="flex justify-center mt-20 sm:mt-32 wow animate__animated animate__fadeInUp">
                    <img className="w-full max-w-[1144px]" src={Brands} alt="brans" />
                </div>
            </div>
        </section>
        <section className="mt-28 sm:mt-[190px]">
            <div className="w-full flex-col flex items-center mx-auto wow animate__animated animate__fadeInUp">
                <Carousel>
                    {slides.map((s, id) => (
                        <img key={id} className="w-full" src={s}  alt="SlideImage"/>
                    ))}
                </Carousel>
            </div>
        </section>
        <section className="mt-[83px]">
            <div className="px-6 w-full max-w-6xl mx-auto ">
                <h2 className="text-3xl sm:text-5xl font-roboto max-w-[1077px] wow animate__animated animate__fadeInUp">
                    Our simple and seamless modular products allow teams to shape and then reshape their work environment with ease.
                </h2>
                <p className="text-[#46856E] text-sm pt-6 font-roboto wow animate__animated animate__fadeInUp">
                    GET IN TOUCH
                </p>
                <ul className="mt-[59px] flex justify-center lg:justify-between gap-10 flex-wrap lg:flex-nowrap">
                    <li className="max-w-[316px] wow animate__animated animate__fadeInUp" data-wow-duration="500ms">
                        <img src={cost} className="w-full max-w-[162px] mx-auto" alt="Cost-effective" />
                        <p className="text-xl sm:text-2xl pt-5 font-roboto">Cost-effective</p>
                        <p className="text-gray_2 pt-5 font-roboto">
                            At a fraction of the cost of traditional construction, our pre-fab solutions create additional space for focused work and collaboration without constant noise, debris and distraction.
                        </p>
                    </li>
                    <li className="max-w-[316px] wow animate__animated animate__fadeInUp" data-wow-duration="700ms">
                        <img src={time} className="w-full max-w-[162px] mx-auto" alt="Cost-effective" />
                        <p className="text-xl sm:text-2xl pt-5 font-roboto">Cost-effective</p>
                        <p className="text-gray_2 pt-5 font-roboto">
                            At a fraction of the cost of traditional construction, our pre-fab solutions create additional space for focused work and collaboration without constant noise, debris and distraction.
                        </p>
                    </li>
                    <li className="max-w-[316px] wow animate__animated animate__fadeInUp" data-wow-duration="900ms">
                        <img src={flexible} className="w-full max-w-[162px] mx-auto" alt="Cost-effective" />
                        <p className="text-xl sm:text-2xl pt-5 font-roboto">Cost-effective</p>
                        <p className="text-gray_2 pt-5 font-roboto">
                            At a fraction of the cost of traditional construction, our pre-fab solutions create additional space for focused work and collaboration without constant noise, debris and distraction.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        <section className="mt-28 sm:mt-[237px] wow animate__animated animate__fadeInUp">
            <div className={`bg-img-section justify-center items-center flex sm:block  bg-cover bg-center px-6 w-full max-w-[1340px] mx-auto h-[800px] bg-no-repeat`}>
                <ul className="flex flex-col px-2 sm:px-[70px] gap-[32px] py-2 sm:py-[120px]">
                {DataReviews.map((i, id) =>
                    <li key={id} className="flex flex-col gap-4">
                        <div className="flex gap-[3px]">
                            {Array.from({ length: i.stars }, (_, index) => (
                                <img key={index} src={star} alt="star" />
                            ))}
                            </div>
                        <p className="text-white font-roboto text-xl sm:text-2xl">{i.text}</p>
                        <img src={i.img} className="w-[100px]"  alt="Img"/>
                    </li>  
                )}
                    <p className="text-white font-roboto">
                        READ MORE REVIEWS
                    </p>
                </ul>
            </div>
        </section>
        <section className="mt-28 sm:mt-[240px]">
            <div className="px-6 w-full max-w-[882px] mx-auto">
                <p className="text-gray_2 text-4xl sm:text-5xl font-roboto max-[882px] mx-auto wow animate__animated animate__fadeInUp">
                    We take a human approach to a business-to-business industry, breaking the boundaries between corporate and personal, and rethinking every step of the user experience along the way.
                </p>
                <p className="text-4xl sm:text-5xl font-roboto max-[882px] mx-auto pt-[25px] wow animate__animated animate__fadeInUp">
                    We make work, work for you.
                </p>
            </div>
        </section>
        <section className="mt-[135px]">
            <div className="flex-wrap sm:flex-nowrap px-6 w-full max-w-6xl mx-auto flex items-center justify-between gap-8 sm:gap-[90px]">
                <div className="w-full max-[671px] wow animate__animated animate__fadeInUp" data-wow-duration="500ms">
                    <img className="w-full" src={ims1} alt="We sell direct" />
                </div>
                <div className="w-full max-w-[311px] wow animate__animated animate__fadeInUp" data-wow-duration="1000ms">
                    <h3 className="text-[32px] text-2xl pb-7">
                        We sell direct.
                    </h3>
                    <p className="text-gray_2 font-roboto">
                        We make extra room in the budget without compromising quality by selling direct. No middle man, and no additional construction required.
                    </p>
                </div>
            </div>
        </section>
        <section className="mt-[64px]">
            <div className="flex-wrap sm:flex-nowrap px-6 w-full max-w-6xl mx-auto flex items-center justify-between gap-8 sm:gap-[90px] flex-row sm:flex-row-reverse">
                <div className="w-full max-[671px] wow animate__animated animate__fadeInUp" data-wow-duration="500ms">
                    <img className="w-full" src={ims2} alt="We sell direct" />
                </div>
                <div className="w-full max-w-[311px] wow animate__animated animate__fadeInUp" data-wow-duration="1000ms">
                    <h3 className="text-[32px] text-2xl pb-7">
                        We build with purpose.
                    </h3>
                    <p className="text-gray_2 font-roboto">
                        We’re not just building another room with four walls, we’re building a more productive workspace. We design with you in mind, looking at every detail as an opportunity to enable a better working environment for everyone.
                    </p>
                </div>
            </div>
        </section>
        <section className="mt-[64px]">
            <div className="flex-wrap sm:flex-nowrap px-6 w-full max-w-6xl mx-auto flex items-center justify-between gap-8 sm:gap-[90px]">
                <div className="w-full max-[671px] wow animate__animated animate__fadeInUp" data-wow-duration="500ms">
                    <img className="w-full" src={ims3} alt="We sell direct" />
                </div>
                <div className="w-full max-w-[311px] wow animate__animated animate__fadeInUp" data-wow-duration="1000ms">
                    <h3 className="text-[32px] text-2xl pb-7">
                        We design sustainably.
                    </h3>
                    <p className="text-gray_2 font-roboto">
                        From design to delivery, we strive to lessen our impact on the environment. Our products are engineered with recycled materials and replace multiple cycles of construction, minimizing noise and our footprint.                    </p>
                </div>
            </div>
        </section>
        <section className="mt-28 sm:mt-72 pb-16 wow animate__animated animate__fadeInUp">
            <div className="px-6 w-full max-w-6xl mx-auto">
                <div className="flex justify-center items-center w-full bg-[#F2F2F2] rounded-t-sm">
                    <div className="w-full mx-auto p-10 max-w-[800px]">
                        <h3 className=" text-center font-roboto text-3xl sm:text-5xl">
                            100 day risk-free trial
                        </h3>
                        <ul className="flex flex-wrap md:flex-nowrap gap-3 md:gap-0 justify-center md:justify-between w-full p-16">
                            <li className="w-[200px] h-[100px] flex flex-col justify-between items-center">
                                <img className="w-16 h-16" src={free_image} alt="FREE SHIPPING" />
                                <p className="font-roboto text-center md:text-left text-xs tracking-[0.75px]">FREE SHIPPING</p>
                            </li>
                            <li className="w-[200px] h-[100px] flex flex-col justify-between items-center">
                                <img className="w-16 h-16" src={play_image} alt="PLUG & PLAY" />
                                <p className="font-roboto text-center md:text-left text-xs tracking-[0.75px]">PLUG & PLAY</p>
                            </li>
                            <li className="w-[200px] h-[100px] flex flex-col justify-between items-center">
                                <img className="w-16 h-16" src={returns_image} alt="FREE RETURNS" />
                                <p className="font-roboto text-center md:text-left text-xs tracking-[0.75px]">FREE RETURNS</p>
                            </li>
                        </ul>
                        <Link
                        to="/Room"
                        className="w-[146px] mx-auto h-[50px] flex justify-center items-center bg-[#46856E] text-white font-roboto rounded-sm tracking-[2px] text-xs"
                        >
                            GET A ROOM
                        </Link>
                        <div className="w-full pt-5 flex justify-center">
                            <Link
                            to="/Terms"
                            className="text-gray_2 text-xs font-roboto text-center"
                            >
                                Terms & Conditions apply
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
      )
}
 
export default Home;