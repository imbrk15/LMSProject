export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Creators-Mind. All rights reserved.
        </p>
      </footer>
    </>
  );
}