import { ILiveStream } from "@/types/lives";
import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
interface IProps {
  livestream: ILiveStream;
}
const LiveStream = ({ livestream }: IProps) => {
  return (
    <>
      <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
        <Link
          to={`/live/${livestream?.streamerName}`}
          className="w-full"
        >
          <img
            src={`/images/livestream/${livestream.titleImage}`}
            alt={livestream?.streamerName}
            className="w-full h-64 object-cover"
          />
        </Link>
        <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3'>
          <h3 className="font-semibold truncate">{livestream?.streamerName}</h3>
          <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white">
            <FaHeart/>
          </button>
        </div>
      </div>
    </>
  );
};

export default LiveStream;
