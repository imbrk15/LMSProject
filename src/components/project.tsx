import Link from "next/link";

const ProjectTiles = () => (
  <section className="py-10">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4, 5, 6].map((project) => (
        <div
          key={project}
          className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105"
        >
          <div
            className="w-full h-56 bg-cover bg-center"
            style={{ backgroundImage: `url('/project${project}.jpg')` }}
          ></div>
          <div className="p-6 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{`Project ${project}`}</h3>
            <p className="text-gray-600 text-sm">
              Description for Project {project} goes here.
            </p>
            <Link href={`https://github.com/project${project}`}>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-500 transition duration-300">
                Show Code
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default ProjectTiles;
