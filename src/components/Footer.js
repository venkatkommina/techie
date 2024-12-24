import Image from "next/image"
import call from "../../public/assests/icons/call.png";
import msg from "../../public/assests/icons/msg.png";
import ppl from "../../public/assests/icons/ppl.png";

export default function Footer() {
  return (
    <section
      className="bg-cover bg-center h-[150vh] w-full bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/assests/images/Footerbg.png')" }}
    >
      <div className=" text-white 2xl:text-[190px] xl:text-[140px] lg:text-[130px]  md:text-[100px] sm:text-[100px] text-[40px] 2xl:leading-[190px] xl:leading-[150px] lg:leading-[130px] md:leading-[100px] font-normal font-[Impact] leading-[231.75px] pt-40">
        ADVITIYA
      </div>
      <p className="w-[55%] py-10 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text{" "}
      </p>
      <div className="h-[2px] bg-gradient-to-r from-[#36362f] via-green-500 to-[#36362f] text-white w-[60%]">
        {" "}
      </div>
      <div className="flex flex-col my-8">
        <div className="flex justify-between w-[70vw]">
          <div className="flex items-center">
            <Image src={ppl} className="h-7 w-7" alt="Decoration" />
            <div className=" py-5 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
              kenzilawson
            </div>
          </div>
          <div className="flex items-center">
            <Image src={msg} className="h-6 w-7" alt="Decoration" />
            <div className=" py-5 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
              kenzi.lawson@example.com
            </div>
          </div>
          <div className="flex items-center">
            <Image src={call} className="h-7 w-7" alt="Decoration" />
            <div className=" py-5 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
              +91 98556 30374
            </div>
          </div>
        </div>
        <div className="flex  justify-between w-[70vw]">
          <div className="flex items-center">
            <Image src={ppl} className="h-7 w-7" alt="Decoration" />
            <div className=" py-5 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
              kenzilawson
            </div>
          </div>
          <div className="flex items-center">
            <Image src={msg} className="h-6 w-7" alt="Decoration" />
            <div className=" py-5 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
              kenzi.lawson@example.com
            </div>
          </div>
          <div className="flex items-center">
            <Image src={call} className="h-7 w-7" alt="Decoration" />
            <div className=" py-5 px-5 font-roboto text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base sm:text-base text-white font-medium leading-loose text-center">
              +91 98556 30374
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}