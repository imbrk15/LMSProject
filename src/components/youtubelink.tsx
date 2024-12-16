const YouTubeSection = () => (
  <section className="min-h-screen bg-[url('/back.jpg')] bg-cover bg-center text-gray-800 py-22">
    <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8">
      {/* Left Side: YouTube Video */}
      <div className="lg:w-1/2 w-full">
        <div className="w-full">
          <iframe
            className="w-full h-[600px] rounded-[20px] shadow-lg transform transition duration-300 hover:scale-105"
            src="https://www.youtube.com/embed/25RdTDN2Trg"
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Right Side: Project Description */}
      <div className="lg:w-1/2 h-[600px] w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-2xl rounded-3xl p-8 text-white">
        <h3 className="text-4xl font-bold mb-4 font-mono tracking-tight text-gray-100">
          Project: Web-Application
        </h3>
        <p className="text-lg mb-6 font-mono text-gray-300">
          <span className="font-semibold text-lg text-indigo-200">
            Description:
          </span>{" "}
          Creators-Mind is a cutting-edge platform designed for digital creators
          to showcase their work, manage projects, and engage with their
          audience.
        </p>
        <div className="text-lg mb-6 font-mono text-gray-300">
          <span className="font-semibold text-indigo-200">
            Technologies Used:
          </span>
          <ul className="list-disc list-inside ml-6 text-gray-300">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>YouTube API</li>
          </ul>
        </div>
        <div className="text-lg font-mono text-gray-300">
          <span className="font-semibold text-indigo-200">Key Features:</span>
          <ul className="list-disc list-inside ml-6 text-gray-300">
            <li>Responsive design with smooth user experience</li>
            <li>Integrated YouTube video showcase</li>
            <li>Interactive and user-friendly interface</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default YouTubeSection;
