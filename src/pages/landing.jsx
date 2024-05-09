import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Marquee from "react-fast-marquee";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Landing = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2024-06-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="min-h-[100vw] bg-light-gray pt-[20px]">
      <Header />
      <main>
        <div className="bg-hero-pattern flex flex-col justify-center items-center pt-[100px] pb-[150px] px-8 text-white gap-y-4 ">
          <h1 className="">
            <img
              src="/images/TSM.png"
              alt=""
              className="w-[500px] md:w-[600px] lg:w-[700px]"
            />
            <p className="fonts-[600] text-center md:text-[20px]">
              Sat 1st June, 2024 | Nile University of Nigeria
            </p>
          </h1>
          <p className="font-[500] text-[50px] md:text-[80px]">
            {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:
            {timeLeft.seconds}
          </p>
          <img
            src="/icons/bxs_up-arrow.svg"
            alt="arrow up"
            className="w-[37px]"
          />
          <div className="relative ">
            <img
              src="/images/pon.svg"
              alt="vr glasses"
              className="w-[200px] absolute -left-[200px] -top-[110px]"
            />
            <p className="font-[500] text-[25px] text-center lg:text-left">
              A networking event for tech enthusiasts and professionals in Abuja
            </p>
          </div>
        </div>

        <div className="">
          <h2 className="font-[700] text-[25px] py-4 text-center bg-white">
            About the Event
          </h2>
          <div className="p-8 text-white flex flex-col gap-6">
            <div className="bg-white text-black w-[90%] max-w-[900px] h-[450px] flex justify-center items-center rounded-[10px] mx-auto">
              Youtube Video
            </div>
            <p className="font-[300] w-full text-[18px] max-w-[900px] mx-auto">
              The Tech Starters Meetup is a gathering designed for people
              interested in the tech industry, especially those who are new to
              the field. Whether you're a student, enthusiast, thinking about a
              career change, or just curious, this meetup is a welcoming space
              to learn and connect with others.
            </p>
          </div>
          <div className="text-white w-[90%] max-w-[900px] py-8  mx-auto">
            <h3 className="font-[700] text-[25px] py-4 text-center">
              Meetup HIGHLIGHT
            </h3>
            <ul className="list-disc flex flex-col gap-6 font-[300] w-full text-[18px] max-w-[900px] mx-auto px-4">
              <li>
                Tech Skills Development : Equipping students and tech
                enthusiasts with the in-demand skills needed to thrive in the
                digital job market.
              </li>
              <li>
                Entrepreneurship and Innovation : Providing a platform for
                aspiring techies to connect with mentors, investors, and
                collaborators to turn their ideas into reality.
              </li>
              <li>
                Bridging the Digital Divide : Ensuring equitable access to
                digital technologies and resources for all fostering an
                inclusive digital future.
              </li>
              <li>
                Industry Insights and Inspiration : Hearing from successful tech
                leaders and founders about their journeys and the ever-evolving
                digital landscape.
              </li>
            </ul>
          </div>
        </div>
        <div className="" id="ticket">
          <h2 className="font-[700] text-[25px] py-4 text-center bg-white">
            Ticket
          </h2>
          <div className="flex flex-col sm:grid grid-cols-[repeat(2,minmax(150px,350px))]  gap-8 p-8 py-16 justify-center text-[18px]">
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSfTyMB4I2n3JL_LMD7r0QRKze5EC-9nIXrvyey7cryR2hN3LA/viewform"
              className="bg-[#F5F5F5] shadow-sm rounded-[10px] h-[450px]"
            >
              <p className="bg-[#9747FF] p-4 rounded-t-[10px] text-white">
                Basic Ticket
              </p>
              <div className="flex flex-col gap-8 mt-4 p-4">
                <p className="flex text-[#9747FF] items-center gap-4">
                  <img
                    src="/icons/fluent-emoji-flat_check-mark.svg"
                    alt="checked"
                    className="size-[20px]"
                  />
                  Refreshment
                </p>
                <p className="flex text-[#9747FF] items-center gap-4">
                  <img
                    src="/icons/fluent-emoji-flat_check-mark.svg"
                    alt="checked"
                    className="size-[20px]"
                  />
                  Networking
                </p>
              </div>
            </Link>
            <Link
              to="https://flutterwave.com/pay/0ytuvyvgg50b"
              className="bg-[#F5F5F5] shadow-sm rounded-[10px] h-[450px]"
            >
              <p className="bg-[#9747FF] p-4 rounded-t-[10px] text-white">
                Premium Ticket
              </p>
              <div className="flex flex-col gap-8 mt-4 p-4">
                <p className="flex text-[#9747FF] items-center gap-4">
                  <img
                    src="/icons/fluent-emoji-flat_check-mark.svg"
                    alt="checked"
                    className="size-[20px]"
                  />
                  Refreshment
                </p>
                <p className="flex text-[#9747FF] items-center gap-4">
                  <img
                    src="/icons/fluent-emoji-flat_check-mark.svg"
                    alt="checked"
                    className="size-[20px]"
                  />
                  Networking
                </p>
                <p className="flex text-[#9747FF] items-center gap-4">
                  <img
                    src="/icons/fluent-emoji-flat_check-mark.svg"
                    alt="checked"
                    className="size-[20px]"
                  />
                  Souvenirs
                </p>
                <p className="flex text-[#9747FF] items-center gap-4">
                  <img
                    src="/icons/fluent-emoji-flat_check-mark.svg"
                    alt="checked"
                    className="size-[20px]"
                  />
                  Camera Cover
                </p>
                <p className="flex text-[#9747FF] items-center gap-4">
                  <img
                    src="/icons/fluent-emoji-flat_check-mark.svg"
                    alt="checked"
                    className="size-[20px]"
                  />
                  Event Certificate
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="pb-8">
          <h2 className="font-[700] text-[25px] py-4 text-center bg-white">
            FROM PREVOUS MEETUP
          </h2>
          <div className="py-8 px-8 flex-flex-col gap-8 grid grid-cols-[repeat(1,minmax(100px,360px))] sm:grid-cols-[repeat(2,minmax(100px,360px))] md:grid-cols-[repeat(3,minmax(100px,360px))] justify-center items-center">
            <img
              src="/images/image 1.svg"
              alt="previos event"
              className="h-[250px] w-full max-[400px] rounded-[10px] object-cover object-center grayscale hover:grayscale-0"
            />
            <img
              src="/images/image 2.svg"
              alt="previos event"
              className="h-[250px] w-full max-[400px] rounded-[10px] object-cover object-center grayscale hover:grayscale-0"
            />
            <img
              src="/images/image 3.svg"
              alt="previos event"
              className="h-[250px] w-full max-[400px] rounded-[10px] object-cover object-center grayscale hover:grayscale-0"
            />
            <img
              src="/images/image 3.svg"
              alt="previos event"
              className="h-[250px] w-full max-[400px] rounded-[10px] object-cover object-center grayscale hover:grayscale-0"
            />
            <img
              src="/images/image 6.svg"
              alt="previos event"
              className="h-[250px] w-full max-[400px] rounded-[10px] object-cover object-center grayscale hover:grayscale-0"
            />
            <img
              src="/images/image 7.svg"
              alt="previos event"
              className="h-[250px] w-full max-[400px] rounded-[10px] object-cover object-center grayscale hover:grayscale-0"
            />
          </div>
          <button className="bg-white px-4 py-2 block rounded-[10px] mx-auto">
            See More
          </button>
        </div>
        <div className="">
          <h2 className="font-[700] text-[25px] py-4 text-center bg-white">
            Speakers
          </h2>
          <p className="py-16 px-8 text-center text-white text-[18px]">
            Coming soon...
          </p>
          {/* <div className="py-16 px-8 grid grid-cols-[repeat(3,minmax(100px,350px))] gap-8 justify-center items-center">
            <div className="relative">
              <img
                src="/images/speaker.svg"
                alt="previos event"
                className="h-[350px] rounded-[10px] object-cover object-center grayscale hover:grayscale-0"
              />
              <div className="absolute bottom-0 bg-[rgba(255,255,255,0.38)] py-2 px-4 right-0 left-0 rounded-b-[10px]">
                <p>Name</p>
                <span>Position, Company</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/speaker.svg"
                alt="previos event"
                className="h-[350px] rounded-[10px] object-cover object-center grayscale hover:grayscale-0"
              />
              <div className="absolute bottom-0 bg-[rgba(255,255,255,0.38)] py-2 px-4 right-0 left-0 rounded-b-[10px]">
                <p>Name</p>
                <span>Position, Company</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/speaker.svg"
                alt="previos event"
                className="h-[350px] rounded-[10px] object-cover object-center grayscale hover:grayscale-0"
              />
              <div className="absolute bottom-0 bg-[rgba(255,255,255,0.38)] py-2 px-4 right-0 left-0 rounded-b-[10px]">
                <p>Name</p>
                <span>Position, Company</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/speaker.svg"
                alt="previos event"
                className="h-[350px] rounded-[10px] object-cover object-center grayscale hover:grayscale-0"
              />
              <div className="absolute bottom-0 bg-[rgba(255,255,255,0.38)] py-2 px-4 right-0 left-0 rounded-b-[10px]">
                <p>Name</p>
                <span>Position, Company</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/speaker.svg"
                alt="previos event"
                className="h-[350px] rounded-[10px] object-cover object-center grayscale hover:grayscale-0"
              />
              <div className="absolute bottom-0 bg-[rgba(255,255,255,0.38)] py-2 px-4 right-0 left-0 rounded-b-[10px]">
                <p>Name</p>
                <span>Position, Company</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/speaker.svg"
                alt="previos event"
                className="h-[350px] rounded-[10px] object-cover object-center grayscale hover:grayscale-0"
              />
              <div className="absolute bottom-0 bg-[rgba(255,255,255,0.38)] py-2 px-4 right-0 left-0 rounded-b-[10px]">
                <p>Name</p>
                <span>Position, Company</span>
              </div>
            </div> 
          </div>*/}
        </div>
        <div className="bg-white p-8 text-[18px]">
          <h2 className="bg-[#9747FF] px-4 py-2 text-white w-max rounded-[10px] m-auto">
            Sponspors and Partner
          </h2>
          <div className="flex justify-center items-center my-8">
            <img src="/images/innovate.jpeg" alt="" className="h-[50px]" />
          </div>
        </div>
        <div className="bg-white p-8 pt-0 text-[18px]">
          <h2 className="bg-[#9747FF] px-4 py-2 text-white w-max rounded-[10px] m-auto">
            Community Partners
          </h2>
          <Marquee
            className="flex gap-8 justify-center items-center my-8 w-full max-w-[900px] mx-auto"
            speed={20}
          >
            <img
              src="/images/GDG Lokoja Light Horizontal-Logo 1.svg"
              alt=""
              className="mx-4"
            />
            <img
              src="/images/WhatsApp Image 2024-05-06 at 14.34 1.svg"
              alt=""
              className="mx-4"
            />
            <img src="/images/about 1.svg" alt="" className="mx-4" />
            <img
              src="/images/GDSC University of Abuja Vertical color 2 1.svg"
              alt=""
              className="mx-4"
            />
            <img
              src="/images/WhatsApp Image 2024-05-06 at 15.19 1.svg"
              alt=""
              className="mx-4"
            />
          </Marquee>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
