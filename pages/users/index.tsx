import { useState } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { User } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/home';

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => {
  const [posts, setPosts] = useState([
    // Existing posts
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    image: '',
    title: '',
    description: '',
  });

  const handleNewPost = () => {
    setPosts((prevPosts) => [...prevPosts, { id: prevPosts.length + 1, ...newPost }]);
    closeNewPostModal();
  };

  const openNewPostModal = () => {
    setIsModalOpen(true);
  };

  const closeNewPostModal = () => {
    setIsModalOpen(false);
    setNewPost({
      image: '',
      title: '',
      description: '',
    });
  };

  const handleDeletePost = (postId: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <div className="min-h-screen flex items-start justify-center">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-left">
          <img
            src="https://placekitten.com/200/200"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-6"
          />
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Sample Name</h1>
          <p className="text-gray-600">Web Developer</p>
          <ul className="mt-4">
            <li className="flex items-center space-x-2">
              <span className="text-gray-700">Email:</span>
              <a href="mailto:you@example.com" className="text-blue-500">
                you@example.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-700">GitHub:</span>
              <a
                href="https://github.com/yourusername"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/yourusername
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-700">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/yourlinkedin"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/yourlinkedin
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-700">Twitter:</span>
              <a
                href="https://twitter.com/yourtwitter"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                @yourtwitter
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Posts</h2>
            <div className="border-t border-gray-300 pt-4">
              {posts.map((post) => (
                <div key={post.id} className="mb-8 relative flex">
                  <img
                    src={post.image}
                    alt="Post Image"
                    className="w-[50%] h-[40%] object-cover rounded border-4 border-blue-500 mr-2"
                  />
                  <div className="relative flex-grow">
                    <span className="absolute right-2 top-2">
                      <div className="relative group inline-block">
                        <button
                          className="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300"
                        >
                          ⋮
                        </button>
                        <div className="absolute hidden text-left mt-2 space-y-2 group-hover:block right-0 bg-white border border-gray-300 rounded">
                          <button
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => alert('Update Post')}
                          >
                            Update Post
                          </button>
                          <button
                            className="block px-4 py-2 text-red-500 hover:bg-gray-100"
                            onClick={() => handleDeletePost(post.id)}
                          >
                            Delete Post
                          </button>
                        </div>
                      </div>
                    </span>
                    <p className="text-gray-700 font-bold">{post.title}</p>
                    <p className="text-gray-600">{post.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={openNewPostModal}
            >
              Create a New Post
            </button>
          </div>
        </div>
      </div>

      {/* New Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="bg-white p-8 rounded-lg z-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">New Post</h2>
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2 text-md">
                  Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={newPost.image}
              onChange={(e) => setNewPost((prev) => ({ ...prev, image: e.target.value }))}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newPost.title}
              onChange={(e) => setNewPost((prev) => ({ ...prev, title: e.target.value }))}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newPost.description}
              onChange={(e) => setNewPost((prev) => ({ ...prev, description: e.target.value }))}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleNewPost}
              >
                Create Post
              </button>
              <button
                className="ml-4 text-gray-600 hover:text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={closeNewPostModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <p>
        <Link href="/">Go home</Link>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
