'use client';

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        quote:
            "We've worked with several agencies, but none have been as responsive, strategic, and creative. Highly recommended!",
        name: "Michael Kaizer",
        title: "CEO of Basecamp Corp",
    },
    {
        quote:
            "We've worked with several agencies, but none have been as responsive, strategic, and creative. Highly recommended!",
        name: "Sarah Lin",
        title: "Marketing Director, NovaTech",
    },
    {
        quote:
            "We've worked with several agencies, but none have been as responsive, strategic, and creative. Highly recommended!",
        name: "James Patel",
        title: "CMO, Elevate Media",
    },
    {
        quote:
            "We've worked with several agencies, but none have been as responsive, strategic, and creative. Highly recommended!",
        name: "Anna Gomez",
        title: "Co-Founder, Horizon Studio",
    },
    {
        quote:
            "We've worked with several agencies, but none have been as responsive, strategic, and creative. Highly recommended!",
        name: "David Ruan",
        title: "Director of Growth, Streamline Co.",
    },
];

const Testimonials = () => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const paginationRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (
                swiperRef.current &&
                swiperRef.current.swiper &&
                prevRef.current &&
                nextRef.current &&
                paginationRef.current
            ) {
                const swiperInstance = swiperRef.current.swiper;
                swiperInstance.params.navigation.prevEl = prevRef.current;
                swiperInstance.params.navigation.nextEl = nextRef.current;
                swiperInstance.params.pagination.el = paginationRef.current;
                swiperInstance.navigation.init();
                swiperInstance.navigation.update();
                swiperInstance.pagination.init();
                swiperInstance.pagination.update();
            }
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gradient-to-br from-[#f7f4fa] to-[#f1f3f8] p-6 md:p-12 rounded-xl w-11/12 my-10 mx-auto relative">
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination]}
                className="relative"
                pagination={{
                    type: 'fraction',
                    renderFraction: (currentClass, totalClass) =>
                        `<span class="${currentClass} font-bold"></span> / <span class="${totalClass} text-gray-500"></span>`,
                }}
                navigation={false}
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                        <blockquote className="text-lg md:text-2xl font-medium text-gray-800 leading-relaxed mb-8 md:mb-10">
                            “ {t.quote} ”
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-300" />
                            <div>
                                <p className="font-semibold text-gray-800">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination*/}
            <div className="absolute bottom-4 md:bottom-8 lg:right-0 transform -translate-x-1/2 flex items-center gap-4 md:gap-6 z-10">
                <button
                    ref={prevRef}
                    className="w-8 h-8 md:w-10 md:h-10 px-4 md:px-6 rounded-full border border-[#0a1f44] text-[#0a1f44] flex items-center justify-center hover:bg-[#001b40] hover:text-white transition"
                >
                    ←
                </button>
                <div
                    ref={paginationRef}
                    className="swiper-pagination text-sm text-gray-600 min-w-[40px] text-center [&_.swiper-pagination-current]:font-bold"
                />
                <button
                    ref={nextRef}
                    className="w-8 h-8 md:w-10 md:h-10 px-4 md:px-6 rounded-full border border-[#0a1f44] text-[#0a1f44] flex items-center justify-center hover:bg-[#001b40] hover:text-white transition"
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default Testimonials;