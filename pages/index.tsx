// IndexPage.js
import Link from "next/link";
import Layout from "../components/home";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="flex justify-center bg-white-500 p-4">
      <div className="flex flex-col justify-center items-center">
        <div className="text-white text-3xl font-medium">Our Trusted Clients</div>
        <div className="flex flex-col max-w-7xl justify-center items-center">
          <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg md:w-[70%] px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <img src="https://source.unsplash.com/150x150/?man,boy" alt="" className="rounded w-[80%]  h-50" />
              <div className="text-stone-600 font-medium m-2">Tailblocks provides the best Tailwind CSS Components and Blocks to create unique websites within minutes.</div>
              <div className="font-bold">John Doe</div>
              <div className="text-cyan-600 italic">
                <button className="bg-cyan-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-cyan-700">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg md:w-[70%] px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <img src="https://source.unsplash.com/150x150/?girl" alt="" className="rounded w-[80%]  h-50" />
              <div className="text-stone-600 font-medium m-2">Tailblocks provides the best Tailwind CSS Components and Blocks to create unique websites within minutes.</div>
              <div className="font-bold">Jessie</div>
              <div className="text-cyan-600 italic">
                <button className="bg-cyan-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-cyan-700">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg md:w-[70%] px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <img src="https://source.unsplash.com/150x150/?girl,woman" alt="" className="rounded w-[80%]  h-50" />
              <div className="text-stone-600 font-medium m-2">Tailblocks provides the best Tailwind CSS Components and Blocks to create unique websites within minutes.</div>
              <div className="font-bold">Davina Claire</div>
              <div className="text-cyan-600 italic">
                <button className="bg-cyan-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-cyan-700">
                  Like
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center bg-white-500 p-4">
      <div className="flex flex-col justify-center items-center">
        <div className="text-white text-3xl font-medium">Our Trusted Clients</div>
        <div className="flex flex-col max-w-7xl justify-center items-center">
          <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg md:w-[70%] px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <img src="https://source.unsplash.com/150x150/?man,boy" alt="" className="rounded w-[80%]  h-50" />
              <div className="text-stone-600 font-medium m-2">Tailblocks provides the best Tailwind CSS Components and Blocks to create unique websites within minutes.</div>
              <div className="font-bold">John Doe</div>
              <div className="text-cyan-600 italic">
                <button className="bg-cyan-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-cyan-700">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg md:w-[70%] px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <img src="https://source.unsplash.com/150x150/?girl" alt="" className="rounded w-[80%]  h-50" />
              <div className="text-stone-600 font-medium m-2">Tailblocks provides the best Tailwind CSS Components and Blocks to create unique websites within minutes.</div>
              <div className="font-bold">Jessie</div>
              <div className="text-cyan-600 italic">
                <button className="bg-cyan-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-cyan-700">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg md:w-[70%] px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <img src="https://source.unsplash.com/150x150/?girl,woman" alt="" className="rounded w-[80%]  h-50" />
              <div className="text-stone-600 font-medium m-2">Tailblocks provides the best Tailwind CSS Components and Blocks to create unique websites within minutes.</div>
              <div className="font-bold">Davina Claire</div>
              <div className="text-cyan-600 italic">
                <button className="bg-cyan-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-cyan-700">
                  Like
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
