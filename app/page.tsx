import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col md:flex-row w-full min-h-[calc(100vh-74px)] bg-cover -mt-1.5 bg-center bg-no-repeat justify-around items-center gap-8 px-8"
      style={{ backgroundImage: "url('/landing/bg.png')" }}
    >
      {/* Left Container */}
      <div
        className="rounded-[40px]"
        style={{
          width: "532px",
          height: "287px",
          background: "#00000066",
          backdropFilter: "blur(28px)",
          opacity: 1,
        }}
      ></div>

      {/* Right Container */}
      <div
        className="rounded-[40px]"
        style={{
          width: "532px",
          height: "287px",
          background: "#00000066",
          backdropFilter: "blur(28px)",
          opacity: 1,
        }}
      ></div>
    </div>
  );
}
