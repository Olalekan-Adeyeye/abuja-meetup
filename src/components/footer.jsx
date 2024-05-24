import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white mt-16 p-8 md:p-8 lg:p-16">
      <div className="w-[90vw] max-w-[1440px] mx-auto">
        <h2 className="text-[25px]">Abuja Starters Meetup</h2>
        <div className="flex  flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 text-[18px]">
          <img
            src="/images/atc_logo.svg"
            alt=""
            className="w-[150px] mt-4 md:mt-0"
          />

          <ul className="list-disc list-inside">
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Schedule</Link>
            </li>
            <li>
              <Link to="#speaker">Speaker</Link>
            </li>
          </ul>
          <ul className="list-disc list-inside">
            <li>
              <Link>#ASM</Link>
            </li>
            <li>
              <Link to="https://getdp.co/abtm ">Generate Dp</Link>
            </li>
            <li>
              <Link>Speakers</Link>
            </li>
          </ul>
          <ul className="flex md:justify-between items-center gap-4">
            <li>
              <Link to="https://web.facebook.com/atcaafricahq">
                <img
                  src="/images/facebook-round-color-icon.svg"
                  alt=""
                  className="w-[25px]"
                />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/atcafricahq">
                <img
                  src="/images/x-social-media-black-icon.svg"
                  alt=""
                  className="w-[25px]"
                />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/company/atcafricahq/?viewAsMember=true">
                <img
                  src="/images/linkedin-app-icon.svg"
                  alt=""
                  className="w-[25px]"
                />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/atcafricahq">
                <img
                  src="/images/ig-instagram-icon.svg"
                  alt=""
                  className="w-[25px]"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
