import { GetStaticProps } from "next";
import Link from "next/link";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/home";
import List from "../../components/List";

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <div className="min-h-screen flex items-start justify-center">
  <div className="bg-gray-100 p-8 rounded-lg shadow-md text-left">
    <img
      src="https://placekitten.com/200/200" // Replace with your profile picture URL
      alt="Profile Picture"
      className="w-32 h-32 rounded-full border-4 border-blue-500 mb-6"
    />
    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Sample Name</h1>
    <p className="text-gray-600">Web Developer</p>
    <ul className="mt-4">
      <li className="flex items-center space-x-2">
        <span className="text-gray-700">Email:</span>
        <a href="mailto:you@example.com" className="text-blue-500">you@example.com</a>
      </li>
      <li className="flex items-center space-x-2">
        <span className="text-gray-700">GitHub:</span>
        <a href="https://github.com/yourusername" className="text-blue-500" target="_blank" rel="noopener noreferrer">github.com/yourusername</a>
      </li>
      <li className="flex items-center space-x-2">
        <span className="text-gray-700">LinkedIn:</span>
        <a href="https://www.linkedin.com/in/yourlinkedin" className="text-blue-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourlinkedin</a>
      </li>
      <li className="flex items-center space-x-2">
        <span className="text-gray-700">Twitter:</span>
        <a href="https://twitter.com/yourtwitter" className="text-blue-500" target="_blank" rel="noopener noreferrer">@yourtwitter</a>
      </li>
          <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Posts</h2>
          <div className="border-t border-gray-300 pt-4">
          <div className="mb-8 relative flex">
  <img
    src="https://placekitten.com/200/200" // Replace with your profile picture URL
    alt="Profile Picture"
    className="w-[50%] h-[40%] object-cover rounded border-4 border-blue-500 mr-2"
  />
  <div>
    <span className="absolute left-2 bottom-2">
      <button
        className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Like
      </button>
    </span>
    <p className="text-gray-700">Post Title 1</p>
    <p className="text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
</div>


            <div>
              <p className="text-gray-700">Post Title 2</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            {/* Add more posts as needed */}
          </div>
          </div>
        </ul>
      </div>
    </div>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
