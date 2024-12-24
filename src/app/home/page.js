import React, { useState } from "react";
import Image from "next/image";
import mascot from "../../../public/assests/images/mascot1.png";
import Navbar from "../../components/navbar/page.js";
import Slider from "../../components/menu/page.js";
import arrow from "../../../public/assests/images/aboutusLogo.png";
import Lvideo from "../../../public/assests/images/Lvideo.png";
import sec3bg from "../../../public/assests/images/sec3bg.png";
import call from "../../../public/assests/icons/call.png";
import msg from "../../../public/assests/icons/msg.png";
import ppl from "../../../public/assests/icons/ppl.png";

export default function Page() {

  const cards = [
    {
      id: 1,
      title: "AERIS",
      content: "gUARDIANS OF ENGINEERING AND FLIGHT",
      image: { mascot },
    },
    {
      id: 2,
      title: "TERRANOVA",
      content: "ARCHITECTS OF DESIGN AND INNOVATION",
      image: { mascot },
    },
    {
      id: 3,
      title: "VOLTARIS",
      content: "MASTERS OF CODE AND MACHINE",
      image: { mascot },
    },
    {
      id: 4,
      title: "INFERNIX",
      content: "STRATEGISTS OF GAMING AND FINANCE",
      image: { mascot },
    },
  ];

  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show next 2 cards
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % cards.length);
  };

  // Show previous 2 cards
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + cards.length) % cards.length
    );
  };

  return (
    <div>
      <section
        className="bg-cover bg-center h-[120vh] w-full bg-no-repeat"
        style={{ backgroundImage: "url('/assests/images/Homepage.png')" }}
      >
         <div className="flex justify-between px-[5%] 2xl:pt-[0%] xl:pt-[5%] lg:pt-[8%] md:pt-[7%]">
          <div className="flex flex-col mt-[9%] w-[50%] ">
            <div className="text-white bg-gradient-to-r from-green-500 to-green-500/0 text-xl w-[290px] xl:[200px] py-[2%] m rounded-full text-center">
         <div
          style={{
            display: "flex",
            // alignItems: "center",
            padding: "0px 60px",
            justifyContent: "space-between",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "9%",
            }}
          >
            <div
              className="text-white"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(56, 219, 112, 1), rgba(56, 219, 112, 0))",
                fontSize: "24px",
                width: "290px",
                padding: "10px 15px",
                borderRadius: "30px",
                textAlign: "center",
              }}
            >
               TECHFEST IIT ROPAR
            </div>
            <div className=" leading-[100px] text-white 2xl:text-[190px] xl:text-[140px] lg:text-[130px]  md:text-[100px] sm:text-[100px] text-[40px] 2xl:leading-[190px] xl:leading-[150px] lg:leading-[130px] md:leading-[100px]    font-normal font-[Impact] leading-[231.75px]">
              ADVITIYA,24
            </div>
          </div>
          <div className="2xl:w-[460px] xl:w-[400px] lg:w-[350px] md:w-[300px] sg:w-[250px] mr-[12%]">
            <div className="aspect-[420/590]">
              <Image
                src={mascot}
                alt="../"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <div className="h-[10px]  bg-gradient-to-b from-[#1e2614] to-[#10151b]" ></div> */}
      <section
        className="bg-[#121720] px-[13%] py-[10%]"
        style={{ backgroundImage: "url('/assests/images/aboutUsbg.png')" }}
      >
        <div className="flex flex-col justify-center items-center py-5">
          <span className="text-[#3BE174] 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base">
            ABOUT US
          </span>
          <span className="text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            ADVITIYA,24
          </span>
          <Image src={arrow} alt="..." />
        </div>
        <div className="font-roboto text-xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-white font-medium leading-loose text-center">
          Welcome to Zeitgeist, the most anticipated and biggest techno-cultural
          fest in North India that showcases myriad events, workshops and talk
          series and is ornamented by the presence of various big names from
          different industries such as- Diljit Dosanjh, Anubhav Singh Bassi, the
          local Trian band, Vishal-Shekhar, Zakir Khan, Sonam Bajwa etc.
        </div>
      </section>

      <section
        className="bg-[#121720] px-[13%] py-[5%]"
        // style={{ backgroundImage: "url('/assests/images/aboutUsbg.png')" }}
      >
        <div className="flex flex-col justify-center items-center py-1 pb-10">
          <span className="text-[#3BE174] 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base">
            OUR VIDEO
          </span>
          <span className="text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            LATEST VIDEO
          </span>
          <Image src={arrow} alt="..." />
        </div>
        <div className="flex justify-center items-center">
          <div className="text-white bg-green-500 h-20 w-12 rounded-l-full"></div>
          <Image src={Lvideo} alt="..." className="mx-4" />
          <div className="text-white bg-green-500 h-20 w-12 rounded-r-full"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="py-7 text-[#3BE174] font-semibold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-base">
            THEME
          </span>
          <div className=" px-5 font-roboto text-xl 2xl:text-2xl xl:text-lg lg:text-base md:text-sm sm:text-sm text-white font-medium leading-loose text-center">
            Teleport to the 27th Edition of Techfest and celebrate the interplay
            between Magic, Science & Technology. Step into the realm of wonders
            where the frontiers of imagination are translated into real-world
            possibilities. From ancient mysticism to cutting-edge innovations,
            explore the endless spectrum of creativity and ingenuity. Get ready
            for a Techno-Mystical extravaganza and embark on a miraculous
            journey of discovery into the unknown!
          </div>
        </div>
      </section>

      <section className="bg-[#121720]">
        <Image src={sec3bg} className="pt-10" />
      </section>
      <section className="h-[100vh] bg-[#091418]">
        <div className="flex justify-center items-center h-[100vh]">
          <div className="flex flex-col w-[30%]">
            <span className="text-[#3BE174] 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base">
              our Competitions
            </span>
            <span className="pb-8  text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
              Competitions
            </span>
            <div className="flex">
              <div
                className="text-white bg-green-500 h-20 w-12 rounded-l-full"
                onClick={prevSlide}
              ></div>
              <div
                className="text-white bg-green-500 h-20 w-12 rounded-r-full ml-20 "
                onClick={nextSlide}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex overflow-hidden">
              {cards
                .slice(currentIndex, currentIndex + 2) // Display 2 cards at a time
                .map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col justify-center items-center w-[330px] px-4 py-4 mx-10 bg-[#131b23] rounded-2xl border-white"
                  >
                    {/* #36362f */}
                    <div className="bg-gradient-radial from-[3131b23] to-[#36362f]">
                      <Image src={mascot} className="w-[240px]" />
                    </div>
                    <h3 className="text-3xl font-semibold text-white  ">
                      {card.title}
                    </h3>
                    <div className="h-[0.1] w-[100%] bg-white my-2"></div>
                    <p className="text-xl text-white text-center my-3 w-full">
                      {card.content}
                    </p>
                    <div className="bg-[#40EC7B] h-2 w-[70%] rounded-t-xl"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#030d14] px-[13%]  pb-[10%]">
        <div className="flex flex-col justify-center items-center py-10">
          <span className="text-[#3BE174] 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base">
            Our Highlights
          </span>
          <span className="text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            Highlights
          </span>
          <Image src={arrow} alt="..." />
        </div>
        <div className="font-roboto text-xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-white font-medium leading-loose text-center">
          Welcome to Zeitgeist, the most anticipated and biggest techno-cultural
          fest in North India that showcases myriad events, workshops and talk
          series and is ornamented by the presence of various big names from
          different industries such as- Diljit Dosanjh, Anubhav Singh Bassi, the
          local Trian band, Vishal-Shekhar, Zakir Khan, Sonam Bajwa etc.
        </div>
      </section>
      <section
        className="bg-cover bg-center h-[150vh] w-full bg-no-repeat flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/assests/images/Footerbg.png')" }}
      >
        <div className=" leading-[100px] text-white 2xl:text-[190px] xl:text-[140px] lg:text-[130px]  md:text-[100px] sm:text-[100px] text-[40px] 2xl:leading-[190px] xl:leading-[150px] lg:leading-[130px] md:leading-[100px] font-normal font-[Impact] leading-[231.75px] pt-40">
          TECHFEST
        </div>
        <p className="w-[55%] py-10 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text{" "}
        </p>
        <div className="h-[2px] bg-gradient-to-r from-[#36362f] via-green-500 to-[#36362f] text-white w-[60%]">
          {" "}
        </div>
        <div className="flex flex-col my-8">
          <div className="flex  justify-between w-[70vw]">
            <div className="flex items-center">
              <Image src={ppl} className="h-7 w-7" />
              <div className=" py-5 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
                kenzilawson
              </div>
            </div>
            <div className="flex items-center">
              <Image src={msg} className="h-6 w-7" />
              <div className=" py-5 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
                kenzi.lawson@example.com
              </div>
            </div>
            <div className="flex items-center">
              <Image src={call} className="h-7 w-7" />
              <div className=" py-5 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
                +91 98556 30374
              </div>
            </div>
          </div>
          <div className="flex  justify-between w-[70vw]">
            <div className="flex items-center">
              <Image src={ppl} className="h-7 w-7" />
              <div className=" py-5 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
                kenzilawson
              </div>
            </div>
            <div className="flex items-center">
              <Image src={msg} className="h-6 w-7" />
              <div className=" py-5 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
                kenzi.lawson@example.com
              </div>
            </div>
            <div className="flex items-center">
              <Image src={call} className="h-7 w-7" />
              <div className=" py-5 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
                +91 98556 30374
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
