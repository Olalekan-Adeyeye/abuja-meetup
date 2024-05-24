import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Marquee from "react-fast-marquee";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Speaker from "../components/speaker";

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
          <h1 title="Abuja Tech Starter Meetup">
            <img
              src="/images/TSM.png"
              alt="Abuja TSM"
              className="w-[500px] md:w-[600px] lg:w-[700px]"
            />
          </h1>
          <p className="fonts-[600] text-center md:text-[20px]">
            Sat 1st June, 2024 | Nile University of Nigeria
          </p>
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
          <div className="w-full max-w-[900px] mx-auto">
            <div className="p-8 pb-0 text-white flex flex-col gap-6">
              <iframe
                src="https://www.youtube.com/embed/lpN9pBQkhy0?si=Qh-JRImFznbXLj"
                title="Abuja TSM Video"
                className="bg-white text-black w-full h-[250px] sm:h-[350px] md:h-[450px] flex justify-center items-center rounded-[10px] mx-auto border-[1px ]"
              ></iframe>
              <p className="font-[300] w-full text-[18px] max-w-[900px] mx-auto">
                The Tech Starters Meetup is a gathering designed for people
                interested in the tech industry, especially those who are new to
                the field. Whether you're a student, enthusiast, thinking about
                a career change, or just curious, this meetup is a welcoming
                space to learn and connect with others.
              </p>
            </div>
            <div className="text-white w-full max-w-[900px] py-8  mx-auto">
              <h3 className="font-[700] text-[25px] py-4 text-center">
                Meetup HIGHLIGHT
              </h3>
              <ul className="list-disc flex flex-col gap-6 font-[300] w-full text-[18px] max-w-[900px] mx-auto px-12">
                <li>
                  <span className="font-[700]">Tech Skills Development: </span>
                  Equipping students and tech enthusiasts with the in-demand
                  skills needed to thrive in the digital job market.
                </li>
                <li>
                  <span className="font-[700]">
                    Entrepreneurship and Innovation: 
                  </span>
                  Providing a platform for aspiring techies to connect with
                  mentors, investors, and collaborators to turn their ideas into
                  reality.
                </li>
                <li>
                  <span className="font-[700]">
                    Bridging the Digital Divide: 
                  </span>
                  Ensuring equitable access to digital technologies and
                  resources for all fostering an inclusive digital future.
                </li>
                <li>
                  <span className="font-[700]">
                    Industry Insights and Inspiration: 
                  </span>
                  Hearing from successful tech leaders and founders about their
                  journeys and the ever-evolving digital landscape.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="" id="ticket">
          <h2 className="font-[700] text-[25px] py-4 text-center bg-white">
            Ticket
          </h2>
          <div className="grid grid-cols-[repeat(1,minmax(150px,300px))] sm:grid-cols-[repeat(2,minmax(150px,350px))]  gap-8 p-8 py-16 justify-center text-[18px]">
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSfTyMB4I2n3JL_LMD7r0QRKze5EC-9nIXrvyey7cryR2hN3LA/viewform"
              className="bg-[#F5F5F5] shadow-sm rounded-[10px] h-[365px]"
            >
              <p className="bg-[#9747FF] p-4 rounded-t-[10px] text-white">
                Basic Ticket
              </p>
              <div className="flex flex-col gap-6 mt-2 p-4">
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
              className="bg-[#F5F5F5] shadow-sm rounded-[10px] h-[365px]"
            >
              <p className="bg-[#9747FF] p-4 rounded-t-[10px] text-white">
                Premium Ticket
              </p>
              <div className="flex flex-col gap-6 mt-2 p-4">
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
            FROM PREVIOUS MEETUP
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

          <div
            className=" py-8 px-8 flex-flex-col gap-8 grid
            grid-cols-[repeat(1,minmax(100px,350px))]
            sm:grid-cols-[repeat(2,minmax(100px,350px))]
            md:grid-cols-[repeat(3,minmax(100px,350px))] justify-center
            items-center"
            id="speaker"
          >
            <Speaker
              speakerImage="/images/samson.png"
              speakerName="Samson Goddy"
              speakerPosition="Co-Founder, Open Source Community Africa"
              speakerLinkedIn="https://www.linkedin.com/in/samsongoddy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              imageTop="-top-8"
            />
            <Speaker
              speakerImage="/images/david.png"
              speakerName="David Adeleke"
              speakerPosition="Co-Founder & CEO, Zeeh AFrica"
              speakerLinkedIn="https://www.linkedin.com/in/adelekedavid?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              sa
              imageTop="-top-6"
            />
            <Speaker
              speakerImage="/images/chisom.jpg"
              speakerName="Cynthia E. Chisom"
              speakerPosition="VP, Venture Labs, Spark HQ"
              speakerLinkedIn="https://www.linkedin.com/in/cynthiachisom?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              imageTop="-top-4"
            />
            <Speaker
              speakerImage="/images/tope.png"
              speakerName="Tope James Mose"
              speakerPosition="Lead, ATC Africa"
              speakerLinkedIn="https://www.linkedin.com/in/tope-james-moses-ccs-6ab49b139?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              imageTop="-top-10"
            />
            <Speaker
              speakerImage="/images/stephen.png"
              speakerName="Stephen Edache Paul"
              speakerPosition="Director, Startup Grind Abuja "
              speakerLinkedIn=""
              imageTop="-top-4"
            />
            <Speaker
              speakerImage="/images/wahab.png"
              speakerName="Abdulwahab Ashimi"
              speakerPosition="Principal, Next Billion Creators"
              speakerLinkedIn="https://x.com/Ashimi0x?t=DdaG8DmdP-Gtwr4aJeeURQ&s=08"
              imageTop="top-2"
            />
            <Speaker
              speakerImage="/images/peter.png"
              speakerName="Otobong Peter"
              speakerPosition="Software Engineer"
              speakerLinkedIn="https://www.linkedin.com/in/otobongfp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              imageTop="top-0"
            />
            <Speaker
              speakerImage="/images/fatimah.png"
              speakerName="Alhassan Fatimah"
              speakerPosition="Community Manager,GDG Gwagwalda"
              speakerLinkedIn="https://www.linkedin.com/in/fatima-alhassang?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              imageTop="-top-[65px]"
            />
            <Speaker
              speakerImage="/images/nike.png"
              speakerName="Adenike Ogunmodede"
              speakerPosition="Women Techmakers Ambassador"
              speakerLinkedIn="https://www.linkedin.com/in/adenike-ogunmodede?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              imageTop="-top-[115px]"
            />

            <Speaker
              speakerImage="/images/dele.png"
              speakerName="Ayodele Aransiola"
              speakerPosition="Developer Relations Engineer"
              speakerLinkedIn="https://www.linkedin.com/in/aransiolaayo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              imageTop="-top-2"
            />
            <Speaker
              speakerImage="/images/khairat.png"
              speakerName="Khairat Ayinde"
              speakerPosition="Community Manager, GDG Abuja"
              speakerLinkedIn="https://www.linkedin.com/in/khairat-ayinde?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              imageTop="-top-16"
            />
            <Speaker
              speakerImage="/images/bolarinde.png"
              speakerName="David Bolarinde"
              speakerPosition="GDSC Lead, Uni Abuja"
              speakerLinkedIn=""
              imageTop="-top-4"
            />
            <Speaker
              speakerImage="/images/idris.jpg"
              speakerName="Idris Shabba"
              speakerPosition="CEO, Startup Campus Nile"
              speakerLinkedIn=""
              imageTop="top-0"
            />
            <Speaker
              speakerImage="/images/usman.jpg"
              speakerName="Umar Adam I. Ph.D"
              speakerPosition="Startup Advisor"
              speakerLinkedIn="https://www.linkedin.com/in/umar-adam-ibrahim?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              imageTop="top-0"
            />
          </div>
        </div>
        <div className="bg-white p-8 text-[18px]">
          <h2 className="bg-[#9747FF] px-4 py-2 text-white w-max rounded-[10px] m-auto">
            Sponsors and Partners
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center items-center my-8">
            <img src="/images/innovate.jpeg" alt="" className="h-[50px]" />
            <img src="/images/Paywave.png" alt="" className="h-[50px]" />
          </div>
        </div>
        <div className="bg-white p-8 pt-0 text-[18px]">
          <h2 className="bg-[#9747FF] px-4 py-2 text-white w-max rounded-[10px] m-auto">
            Community Partners
          </h2>
          <Marquee
            className="flex justify-center items-center my-8 max-w-[1000px] mx-auto"
            speed={20}
            autoFill={true}
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
            <img src="/images/tks.png" alt="" className="h-[50px] mx-4" />
            <img src="/images/gdg-nile.png" alt="" className="h-[50px] mx-4" />
          </Marquee>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
