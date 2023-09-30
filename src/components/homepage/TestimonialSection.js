"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        id: 1,
        name: "Usman Ali",
        designation: "CEO, ABC Inc.",
        message:
            "Our CEO is a remarkable leader. Their visionary approach has revolutionized our company. ",
    },
    {
        id: 2,
        name: "Rehan",
        designation: "Manager, XYZ Corp.",
        message:
            "Our manager is an exceptional leader. They're dedicated to our team's success,",
    },
    {
        id: 3,
        name: "Munner",
        designation: "CTO, PQR Ltd.",
        message:
            "Nullam non mauris nec arcu posuere fermentum. Aliquam id orci vel elit accumsan gravida.",
    },
    {
        id: 3,
        name: "Yasir Khan ",
        designation: "CTO, PQR Ltd.",
        message:
            "Nullam non mauris nec arcu posuere fermentum. Aliquam id orci vel elit accumsan gravida.",
    },
    {
        id: 3,
        name: "Huzaifa bro",
        designation: "CTO, PQR Ltd.",
        message:
            "Nullam non mauris nec arcu posuere fermentum. Aliquam id orci vel elit accumsan gravida.",
    },
    // Add more testimonials as needed
];

const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display 3 testimonials at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="bg-gray-800 py-10">
            <div className="mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8">
                    Testimonials
                </h2>
                <div className="max-w-5xl mx-auto">
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="p-4 ">
            <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">{testimonial.message}</p>
                <div className="flex items-center">
                    <div className="mr-4">
                        <div className="h-12 p-3 w-auto rounded-lg bg-blue-500 flex items-center justify-center text-white font-semibold">
                            {testimonial.name}
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-600">{testimonial.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;