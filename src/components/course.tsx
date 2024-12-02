import React from "react";

const courses = [
  {
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, and modern frameworks to become a web developer.",
    imageUrl: "/images/web-development.jpg",
  },
  {
    title: "Data Science",
    description:
      "Dive into data analysis, machine learning, and visualization with Python.",
    imageUrl: "/images/data-science.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Understand SEO, social media marketing, and content strategies to grow brands.",
    imageUrl: "/images/digital-marketing.jpg",
  },
];

export default function Course() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-10 bg-gray-100 text-black">
        <h1 className="text-4xl font-bold mb-10">Our Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{course.title}</h2>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-center">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
