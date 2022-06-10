import ListCard from "../cards/listCard"
import BoyImage from "../../../../assets/images/boy.png"
// Import Swiper React components
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import "./styles.css"

// import required modules
import { useState } from "react"
import Slide from "../cards/slide"

export default function About() {
    // Create array with 1000 slides
    const slides = Array.from({ length: 10 }).map(
        (el, index) => `Slide ${index + 1}`
    )

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '"> </span>'
        },
    };
    return (
        <>
            <main className="text-white container mx-auto px-16 xl:px-32 mt-28">
                <div className="grid grid-cols-1 gap-4">
                    <p className="text-4xl">Explore My Profile</p>
                    <p className="mt-2 text-green-400 text-xl">I live in Takoradi - Ghana and work for Amalitech</p>
                </div>
                <div className="mt-14 mb-16 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <ListCard title="Work Experience" />
                    <ListCard title="Achievements" />
                    <ListCard title="Education" />
                </div>
                <div className="grid mt-32 mb-10 pb-6 grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className="text-xl text-left">
                            <p className="text-green-400">Personal Life</p>
                            <p className="pt-3">Getting to know me</p>
                            <p className="text-sm pt-7">
                                I grew up in a little valley in the South of Switzerland—home of the
                                Matterhorn—with my grandparents. They unwillingly fostered my interest in technology by letting me break apart VCRs, TVs, computers and more. Ever since then, I wanted to become an IT-Specialist.
                            </p>
                            <p className="text-sm pt-7 text-gray-400">
                                This passion drove me to start a new life in Vancouver, master english and work in various IT related fields. Once back in Switzerland, my career as a web developer began.                        </p>
                        </div>
                    </div>
                    <div className="w-96 mr-0 ml-auto justify-end">
                        <img src={BoyImage} alt="boy"></img>
                    </div>
                </div>
            </main>
            <div className="grid pt-12 text-white relative pb-28 bg-[#131d27] grid-cols-1 gap-4">
                <p className="text-4xl">Projects I’ve worked on</p>
                <p className="mt-2 text-green-400 text-xl">I live in Takoradi - Ghana and work for Amalitech</p>
                <div className="lg:mx-32">
                    <Swiper
                        modules={[Pagination]}
                        pagination={pagination}
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1
                            },
                            // when window width is >= 640px
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }
                        }
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}

                    >
                        {slides.map((slideContent, index) => (
                            <SwiperSlide className="w-auto bg-transparent" key={index}>
                                <Slide />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>


        </>
    )
}