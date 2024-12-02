import Image from "next/image";

export default function Intro() {
  return (
    <>
      <div className="flex flex-col items-center p-10 bg-gray-50 min-h-screen">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-gray-900">
            Mohmmad Aftab Siddhique
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            30 Days Money Back Guarantee.
          </p>
        </div>
        <p className="text-center text-gray-500 max-w-md">
          Enroll yourself now. Just drop your email-id here and our team will
          contact you with class details.
        </p>
        <div className="relative mt-8">
          <Image
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" // Replace with the path to your image
            alt="Person"
            width={300}
            height={300}
            className="rounded-full object-cover"
          />
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-700 font-medium">
            Top Rated Course From{" "}
            <span className="text-yellow-500 font-semibold">5,000+</span>{" "}
            Students
          </p>
        </div>
      </div>
    </>
  );
}
