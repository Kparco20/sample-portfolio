// Import necessary modules
import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

// Define the layout component
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    {/* Head section */}
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {/* Header section */}
    <div className="flex justify-center bg-blue-900 text-white">
      <nav className="self-center w-full max-w-7xl">
        <div className="flex md:flex-row flex-col justify-between items-center md:items-start">
          <h1 className="py-4 text-2xl font-sans font-bold px-10">Portfolio</h1>
          <ul className="flex justify-center my-4 items-center text-sm md:text-[18px] font-bold md:px-10">
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
              <Link href="/users">Profile</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
              <Link href="/api/users">Contact</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
              <Link href="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    {/* Main content section */}
    {children}

    {/* Footer section */}
    <footer className="bg-blue-900 text-white p-4 text-center">
    <hr className="border-t border-white" />
    <span className="block mt-2">I'm here to stay (Footer)</span>
  </footer>

    {/* Additional scripts */}
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
  </div>
);

export default Layout;
