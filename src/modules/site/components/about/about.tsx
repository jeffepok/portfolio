import ListCard from "../cards/listCard";
import BoyImage from "../../../../assets/images/boy.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function About() {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <>
            <main className="text-white container mx-auto px-16 xl:px-32 mt-28">
                <div className="grid grid-cols-1 gap-4">
                    <p className="text-4xl">Explore My Profile</p>
                    <p className="mt-2 text-green-400 text-xl">I live in Takoradi - Ghana and work for Amalitech</p>
                </div>
                <div className="mt-14 mb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <div className="grid pt-12 text-white bg-[#131d27] grid-cols-1 gap-4">
                <p className="text-4xl">Projects I’ve worked on</p>
                <p className="mt-2 text-green-400 text-xl">I live in Takoradi - Ghana and work for Amalitech</p>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>


        </>
    )
}