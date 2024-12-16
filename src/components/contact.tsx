// export default function Contact() {
//   return (
//     <>
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="w-1/2 flex flex-col items-center">
//           <h2 className="text-2xl font-semibold mb-4 dark:text-black">
//             Contact Form
//           </h2>
//           <form className="w-full mt-4 flex flex-col dark:text-black">
//             <input
//               className="h-14 px-4 mb-3 rounded-lg border border-gray-300 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//               name="senderEmail"
//               type="email"
//               required
//               maxLength={200}
//               placeholder="Your email"
//             />
//             <textarea
//               className="h-52 mb-3 rounded-lg border border-gray-300 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//               name="message"
//               placeholder="Your message"
//               required
//               maxLength={200}
//             />
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-gray-50 py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Contact Form */}
          <div className="lg:w-1/2 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Links and Icons */}
          <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0 flex flex-col items-center text-center space-y-8">
            <h3 className="text-2xl font-semibold">Follow Me</h3>
            <div className="grid grid-cols-3 gap-6">
              {/* GitHub */}
              <div className="flex flex-col items-center">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-blue-500 text-3xl"
                >
                  <i className="fab fa-github"></i>
                </a>
                <span className="text-sm mt-2">GitHub</span>
              </div>
              {/* Twitter */}
              <div className="flex flex-col items-center">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-blue-400 text-3xl"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <span className="text-sm mt-2">Twitter</span>
              </div>
              {/* Facebook */}
              <div className="flex flex-col items-center">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-blue-700 text-3xl"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <span className="text-sm mt-2">Facebook</span>
              </div>
              {/* Mail */}
              <div className="flex flex-col items-center">
                <a
                  href="mailto:example@mail.com"
                  className="text-gray-800 hover:text-red-600 text-3xl"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <span className="text-sm mt-2">Mail</span>
              </div>
              {/* Instagram */}
              <div className="flex flex-col items-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-pink-500 text-3xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <span className="text-sm mt-2">Instagram</span>
              </div>
              {/* YouTube */}
              <div className="flex flex-col items-center">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-500 text-3xl"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <span className="text-sm mt-2">YouTube</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
