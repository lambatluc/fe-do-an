import useFetchData from "@/components/hooks/useFetchData";
import Layout from "@/Layout/Layout";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart, FaPlay } from "react-icons/fa";
const SingleLive = () => {
  const { data } = useFetchData();
  let { id } = useParams();
  const live = data?.find((livestream) => livestream.streamerName === id);
  const [play, setPlay] = useState(false);
  return (
    <Layout>
      <div className="w-11/12 mx-auto bg-dry p-4 mb-12">
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
          <Link
            to={`/lives`}
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray"
          >
            <BiArrowBack /> {live?.streamerName}
          </Link>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button className="bg-white hover:text-subMain transitons bg-opacity-30 text-white rounded px-4 py-3 text-sm">
              <FaHeart />
            </button>
            <button className="bg-subMain flex-rows gap-2 hover:text-main transitons text-white rounded px-8 font-medium py-3 text-sm">
              <FaCloudDownloadAlt /> Download
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-2/3">
            {play ? (
              <video controls autoPlay={play} className="w-full h-full rounded">
                <source src="" type="video/mp4" title={live?.title} />
              </video>
            ) : (
              <div className="w-full h-full rounded-lg overflow-hidden relative">
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-main bg-opacity-30 flex-colo">
                  <button
                    onClick={() => setPlay(true)}
                    className="bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl"
                  >
                    <FaPlay />
                  </button>
                </div>
                <img
                  src={`/images/livestream/${live?.titleImage}`}
                  alt={live?.streamerName}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
          </div>
          <div className="w-1/4 h-[65%] fixed right-20 bg-gray-800 rounded-lg p-4 text-white">
            <h2 className="text-lg font-bold mb-4">Comments</h2>
            <div className="overflow-y-auto max-h-64 mb-4">
              
            </div>
            <div className="flex w-11/12 absolute mx-auto bottom-4">
              <input
                type="text"
                className="flex-grow p-2 rounded-l-lg text-black"
                placeholder="Add a comment"
              />
              <button
                className="bg-subMain text-white px-4 py-2 rounded-r-lg"
              >
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-screen">

        </div>
      </div>
    </Layout>
  );
};

export default SingleLive;
