import React from "react";
import Image from "next/image";

const locations = [
  {
    city: "Belgundi, Belgaum",
    info: (
      <>
        SY. No. 301, Village Belgundi,
        <br />
        Tal & Dist. Belgaum
        <br />
        Karnataka-591108 Tel:
        <br />
        0831-2555 525
      </>
    ),
  },
  {
    city: "Mumbai",
    info: (
      <>
        301,Mahalaxmi Industrial Estate Gandhi Nagar, Lower Parel (West) Mumbai,
        <br />
        Maharashtra - 400013 Tel:
        <br />
        022-6141 3444
      </>
    ),
  },
  {
    city: "Bangaluru",
    info: (
      <>
        503, 15th Main, 7th Cross, 3rd Block Koramangala Extension, Bangalore,
        <br />
        Karnataka - 560034 Tel:
        <br />
        080-4907 7600
      </>
    ),
  },
  {
    city: "Aizawl",
    info: (
      <>
        4th Floor, Aijal Club, Near Tennis Court, Khatla, Aizawl, Mizoram -
        796001 Phone :<br />
        0389-2300 712
      </>
    ),
  },
];

const OtherLocations = () => {
  return (
    <section
      className="w-full flex items-center justify-center py-12 bg-black"
      style={{
        background:
          "radial-gradient(circle 800px at center, rgba(37, 147, 81, 0.25) 0%, rgba(0, 0, 0, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1300px] px-8 py-5 mx-auto">
        <h2 className="font-(family-name:--font-albert-sans) font-bold text-[48px] leading-[100%] text-center text-white mb-4">
          Other Locations
        </h2>
        {/* Underline */}
        <div className="flex justify-center mb-14">
          <Image
            src="/line.png"
            alt="Underline"
            width={220}
            height={18}
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 mb-10">
          {locations.map((loc, i) => (
            <div key={i} className="flex flex-col">
              <div className="font-roboto font-bold w-72 text-[28px] leading-[100%] text-white mb-4">
                {loc.city}
              </div>
              <div className="font-poppins font-normal text-[20px] leading-[100%] text-white/80">
                {loc.info}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherLocations;
