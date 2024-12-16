// import Image from "next/image";
import Link from "next/link";

// export default function Intro() {
//   return (
//     <div className="flex flex-col items-center p-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
//       {/* Heading Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-6xl font-extrabold text-white">
//           Mohammad Aftab Siddhique
//         </h1>
//         <p className="text-lg text-yellow-200 mt-4">
//           30 Days Money Back Guarantee
//         </p>
//       </div>

//       {/* Introduction Text */}
//       <p className="text-center text-gray-100 max-w-2xl mx-auto text-lg">
//         Enroll now to experience quality education. Drop your email, and our
//         team will reach out with class details!
//       </p>

//       {/* Image Section */}
//       <div className="relative mt-8 mb-8">
//         <Image
//           src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
//           alt="Instructor"
//           width={250}
//           height={250}
//           className="rounded-full border-8 border-white shadow-xl object-cover"
//         />
//       </div>

//       {/* Course Details Section */}
//       <div className="mt-6 text-center">
//         <p className="text-gray-200 font-semibold text-xl">
//           Top Rated Course From{" "}
//           <span className="text-yellow-400 font-bold">5,000+</span> Students
//         </p>
//       </div>

//       {/* Email Collection Section */}
//       <div className="mt-10 w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
//         <h3 className="text-center text-2xl font-bold text-gray-700 mb-4">
//           Join Our Community
//         </h3>
//         <form className="flex flex-col space-y-4">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//           <button
//             type="submit"
//             className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Contact Me
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
const Intro = () => (
  <section
    className="min-h-screen h-40 flex items-center justify-center bg-cover bg-center text-black py-12"
    style={{ backgroundImage: "url('/back.jpg')" }}
  >
    <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-5xl font-bold mb-4 font-poppins">
          Hi, I'm Divy Vishwakarma
        </h2>
        <p className="text-xl font-poppins font-semibold mb-6">
          I'm not your ordinary filmmaker that picked up a camera as a kid,
          because I didn’t really know how to use a camera until the age of 26.
        </p>
        <Link href="#explore">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full hover:bg-gradient-to-l transition duration-300">
            Explore
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src="/divy.jpg"
          alt="Divy Vishwakarma"
          className="rounded-full w-100 h-100 object-cover shadow-lg"
        />
      </div>
    </div>
  </section>
);
export default Intro;
