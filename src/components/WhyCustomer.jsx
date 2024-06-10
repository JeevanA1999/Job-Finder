
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import dropbox_icon from "../assests/dropbox.png";
import microsoft_icon from "../assests/microsoft.png";
import amazon_icon from "../assests/amazon.png";
import google_icon from "../assests/google2.png";
import { useMediaQuery } from '@react-hook/media-query';

function WhyCustomer() {
    const md = useMediaQuery('(max-width: 462px)');
    const logos = [microsoft_icon, dropbox_icon, amazon_icon, google_icon];
    const duplicatedImages = [...logos, ...logos, ...logos]; // Ensure duplicatedImages has a length of at least 10

    const data = [
        {
            text: "At Jobline, I am motivated by a team that drives innovation and customer success. The culture of trust and support empowers me to excel and deliver results.",
            author: "Jithesh A",
            company: "Jk Infotech",
        },
        {
            text: "Each day, I'm inspired by my colleagues to drive innovation that accomplishes this. Jobline an environment of trust and support where I can drive customer success.",
            author: "Sachith M",
            company: "Techno India",
        },
        {
            text: "Jobline provides a supportive atmosphere where driving customer success is a shared goal.",
            author: "Shashank Y Amin",
            company: "JustTech Solutions",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="text-center py-24 container mx-auto px-6">
            <h2 className="lg:text-5xl text-2xl font-semibold">
                Why Customers love Us
            </h2>
            <p className="text-2xl mt-4 font-light">
                What our customers say about us
            </p>
            <div className="flex items-center justify-center mt-16 pb-12 gap-x-2 lg:w-1/2 mx-auto">
                <FaChevronLeft size={30} onClick={handlePrev} />
                <p className="md:text-2xl leading-10 text-xl">
                    {data[currentIndex] && data[currentIndex].text}
                    <p className="md:text-3xl font-semibold text-2xl pt-7">
                        {data[currentIndex] && data[currentIndex].author}
                    </p>
                    <p className="text-xl pt-4">{data[currentIndex] && data[currentIndex].company}</p>
                </p>
                <FaChevronRight size={30} onClick={handleNext} />
            </div>
            <div className="flex items-center lg:gap-16 gap-3 overflow-hidden my-24">
                {duplicatedImages.slice(0, md ? 3 : 7).map((image, index) => (
                    <img key={index} src={image} alt="" className={`w-40 h-14 object-cover cursor-pointer ${md ? 'block' : 'hidden'}`} />
                ))}
            </div>
        </div>
    );
}

export default WhyCustomer;