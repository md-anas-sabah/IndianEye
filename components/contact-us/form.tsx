import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Form = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-20 px-4 md:px-8 lg:px-16">
      <div className="w-[1100px] flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">
        {/* Left Section */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h1 className="font-(family-name:--font-albert-sans) font-semibold text-[48px] leading-[100%] text-white mb-6">
            Contact Us
          </h1>
          <p className="font-(family-name:--font-albert-sans) font-normal text-[20px] leading-[150%] text-white mb-8">
            Get in touch with our team. We&apos;re here to help you build your
            gaming empire and answer any questions you may have.
          </p>
          <div className="flex items-center mb-3 gap-3">
            <Mail size={18} className="text-white" />
            <span className="font-inter font-normal text-base leading-6 text-white">
              info@indianeyesecurity.com
            </span>
          </div>
          <div className="flex items-center mb-6 gap-3">
            <Phone size={18} className="text-white" />
            <span className="font-inter font-normal text-base leading-6 text-white">
              0120-4655300, 011-49556600
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-12 mt-4">
            <div>
              <div className="font-sora font-semibold text-[20px] leading-6 text-[#EA580C] mb-2">
                Registered Office
              </div>
              <div className="flex items-start gap-2">
                <MapPin
                  size={50}
                  className="text-white -mt-3 hidden md:block"
                />
                <span className="font-inter font-normal text-base leading-6 text-white">
                  2, Panchsheel Community Center, New Delhi- 110017, India
                </span>
              </div>
            </div>
            <div>
              <div className="font-sora font-semibold text-[20px] leading-6 text-[#EA580C] mb-2">
                Corporate Office
              </div>
              <div className="flex items-start gap-2">
                <MapPin
                  size={50}
                  className="text-white -mt-3 hidden md:block"
                />
                <span className="font-inter font-normal text-base leading-6 text-white">
                  1706/17th Floor, Logix City Center, Plot.no- BW-58, Noida
                  Uttar Pradesh- 201301, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="md:w-1/2 w-full rounded-4xl py-2 px-7 flex flex-col gap-1 min-w-[340px] border border-[#FFFFFF26]"
          style={{
            background:
              "linear-gradient(180deg, rgba(46, 51, 90, 0) 0%, rgba(28, 27, 51, 0.1) 100%), radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 99.59%)",
            boxShadow:
              "0px 0px 100px 0px #CCD7FF26 inset, 0px 30px 60px 0px #0000001A, 0px 15px 30px 0px #0000000D, 0px 5px 10px 0px #0000000D",
            backdropFilter: "blur(20px)",
          }}
        >
          <h2 className="font-(family-name:--font-albert-sans) font-bold text-[30px] leading-[60px] text-white">
            Get In Touch :
          </h2>
          <form className="flex flex-col gap-2">
            <label className="font-inter font-semibold text-[14px] leading-5 text-white mb-1 mt-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full h-[42px] rounded-md py-[9px] px-[13px] border border-[#FFFFFF26] font-inter font-normal text-base leading-6 text-white outline-none placeholder:text-[#cccccc] backdrop-blur-[14px] transition-all duration-300 ease-out mb-2"
            />
            <label className="font-inter font-semibold text-[14px] leading-5 text-white mb-1 mt-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full h-[42px] rounded-md py-[9px] px-[13px] border border-[#FFFFFF26] font-inter font-normal text-base leading-6 text-white outline-none placeholder:text-[#cccccc] backdrop-blur-[14px] transition-all duration-300 ease-out mb-2"
            />
            <label className="font-inter font-semibold text-[14px] leading-5 text-white mb-1 mt-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter Company Name"
              className="w-full h-[42px] rounded-md py-[9px] px-[13px] border border-[#FFFFFF26] font-inter font-normal text-base leading-6 text-white outline-none placeholder:text-[#cccccc] backdrop-blur-[14px] transition-all duration-300 ease-out mb-2"
            />
            <label className="font-inter font-semibold text-[14px] leading-5 text-white mb-1 mt-2">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full h-[42px] rounded-md py-[9px] px-[13px] border border-[#FFFFFF26] font-inter font-normal text-base leading-6 text-white outline-none placeholder:text-[#cccccc] backdrop-blur-[14px] transition-all duration-300 ease-out mb-2"
            />
            <label className="font-inter font-semibold text-[14px] leading-5 text-white mb-1 mt-2">
              Leave us a message
            </label>
            <textarea
              placeholder="Enter your message"
              className="w-full h-[105px] rounded-md py-[9px] px-[13px] border border-[#FFFFFF26] font-inter font-normal text-base leading-6 text-white outline-none placeholder:text-[#cccccc] backdrop-blur-[14px] transition-all duration-300 ease-out resize-none mb-2"
            />
            <div className="flex items-start my-1">
              <input
                type="checkbox"
                id="consent"
                className="w-5 h-5 mr-3 accent-[#FF801F]"
              />
              <label
                htmlFor="consent"
                className="font-sora font-normal text-[14px] leading-5 text-white"
              >
                By submitting this form, you are giving consent to Indianeye to
                store your submitted information.
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#EA580C] mb-3 cursor-pointer  text-white rounded-full py-2.5 px-10 font-(family-name:--font-albert-sans) font-semibold text-[19px] leading-[100%] flex items-center justify-center gap-2 mt-2 hover:opacity-90 transition-all duration-300 ease-out mx-auto w-fit"
            >
              Submit Now <ArrowRight size={22} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
