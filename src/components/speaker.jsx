import React from "react";
import { Link } from "react-router-dom";

const Speaker = ({
  speakerImage,
  speakerName,
  speakerPosition,
  speakerLinkedIn,
  imageTop,
}) => {
  return (
    <Link
      to={speakerLinkedIn}
      className="relative rounded-[10px] h-[250px] lg:h-[300px] bg-gray-200 border-2 shadow-sm speaker overflow-hidden grayscale hover:grayscale-0 flex flex-col justify-center items-center"
    >
      <img
        src={speakerImage}
        alt="speaker"
        className={`absolute ${imageTop} border-red-700 w-[250px] rounded-[10px] object-cover object-top`}
      />
      <div className="h-[90px] name rounded-b-[10px] bg-green-500 text-white absolute bottom-0 w-full px-4 py-1">
        <p className="font-[700] text-[16px] md:text-[18px]">{speakerName}</p>
        <p className="text-[14px]">{speakerPosition}</p>
      </div>
    </Link>
  );
};

export default Speaker;
