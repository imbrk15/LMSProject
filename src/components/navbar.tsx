// "use client";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";

// const navigation = [
//   { name: "About Us", href: "#", current: true },
//   { name: "Contact Me", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

//   const toggleLoginPopup = () => {
//     setLoginPopupOpen(!isLoginPopupOpen);
//   };

//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           {/* Left side: Logo and Website Name */}
//           <div className="flex items-center">
//             <div className="flex shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
//                 className="h-8 w-auto"
//               />
//               <span className="ml-2 text-white text-xl">Website Name</span>
//             </div>
//           </div>

//           {/* Right side: Navigation Links */}
//           <div className="hidden sm:block sm:ml-6">
//             <div className="flex space-x-4">
//               {navigation.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   aria-current={item.current ? "page" : undefined}
//                   className={classNames(
//                     item.current
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "rounded-md px-3 py-2 text-sm font-medium"
//                   )}
//                 >
//                   {item.name}
//                 </a>
//               ))}

//               {/* Log In / Sign Up Card */}
//               <div className="relative">
//                 <button
//                   onClick={toggleLoginPopup}
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
//                 >
//                   Log In / Sign Up
//                 </button>

//                 {/* Login/Signup Popup Card */}
//                 {isLoginPopupOpen && (
//                   <div className="absolute right-0 z-10 mt-2 w-48 bg-white shadow-lg rounded-lg ring-1 ring-black ring-opacity-5">
//                     <div className="py-1">
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         Log In
//                       </a>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         Sign Up
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon
//                 aria-hidden="true"
//                 className="block size-6 group-data-[open]:hidden"
//               />
//               <XMarkIcon
//                 aria-hidden="true"
//                 className="hidden size-6 group-data-[open]:block"
//               />
//             </DisclosureButton>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu items */}
//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? "page" : undefined}
//               className={classNames(
//                 item.current
//                   ? "bg-gray-900 text-white"
//                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                 "block rounded-md px-3 py-2 text-base font-medium"
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }
const Navbar = () => (
  <header
    className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    style={{ backgroundImage: "url('/back.jpg')" }}
  >
    <div className="container mx-auto flex items-center justify-between px-4 py-3">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/apple.png"
          alt="Logo"
          className="w-10 h-10 rounded-md mr-2"
        />
        <span className="font-extrabold text-2xl text-gradient bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Creators<span className="text-yellow-400">-Mind</span>
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button
        id="menu-button"
        className="text-gray-800 md:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav id="menu" className="hidden md:flex md:items-center md:space-x-6">
        <a href="#home" className="text-gray-800 hover:text-yellow-400">
          Home
        </a>
        <a href="#Projects" className="text-gray-800 hover:text-yellow-400">
          Projects
        </a>
        <a href="#youtube" className="text-gray-800 hover:text-yellow-400">
          YouTube
        </a>
        <a href="#about" className="text-gray-800 hover:text-yellow-400">
          About
        </a>
        <a href="#contact" className="text-gray-800 hover:text-yellow-400">
          Contact
        </a>
      </nav>
    </div>
  </header>
);
export default Navbar;
