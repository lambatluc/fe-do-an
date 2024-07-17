import { ILiveStream } from "@/types/lives";
import React from "react";
import { Link } from "react-router-dom";
interface IProps {
  livestream: ILiveStream;
}
const LiveStream = ({ livestream }: IProps) => {
  return (
    <>
      <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
        <Link
          to={`/livestreams/${livestream?.streamerName}`}
          className="w-full"
        >
          <img
            src={`/images/livestream/${livestream?.titleImage}`}
            alt={livestream?.title}
            className="w-full h-64 object-cover"
          />
        </Link>
      </div>
    </>
  );
};

export default LiveStream;
