export default function Contact() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 dark:text-black">
            Contact Form
          </h2>
          <form className="w-full mt-4 flex flex-col dark:text-black">
            <input
              className="h-14 px-4 mb-3 rounded-lg border border-gray-300 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderEmail"
              type="email"
              required
              maxLength={200}
              placeholder="Your email"
            />
            <textarea
              className="h-52 mb-3 rounded-lg border border-gray-300 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="message"
              placeholder="Your message"
              required
              maxLength={200}
            />
          </form>
        </div>
      </div>
    </>
  );
}
