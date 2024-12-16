import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory hook
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper for the slider
import "swiper/swiper-bundle.min.css";
import "swiper/css";

const courses = [
  {
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, and modern frameworks to become a web developer.",
    imageUrl: "/images/web-development.jpg",
    details:
      "This course covers all the fundamentals of web development, including front-end and back-end frameworks, databases, and more.",
  },
  {
    title: "Data Science",
    description:
      "Dive into data analysis, machine learning, and visualization with Python.",
    imageUrl: "/images/data-science.jpg",
    details:
      "In this course, we will explore data science techniques using Python, from data cleaning to building machine learning models.",
  },
  {
    title: "Digital Marketing",
    description:
      "Understand SEO, social media marketing, and content strategies to grow brands.",
    imageUrl: "/images/digital-marketing.jpg",
    details:
      "Learn the fundamentals of digital marketing, including SEO, content creation, and campaign management.",
  },
];

export default function Course() {
  const history = useHistory(); // Initialize useHistory hook
  const [swiperRef, setSwiperRef] = useState(null); // For the Swiper

  const handleClick = (course) => {
    history.push(`/course/${course.title.toLowerCase().replace(" ", "-")}`, {
      course,
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-10 bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-10">Our Courses</h1>

      {/* Course Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={setSwiperRef}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => handleClick(course)}
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="text-sm text-gray-600">{course.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
