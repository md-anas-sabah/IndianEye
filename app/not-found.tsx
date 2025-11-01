import Link from "next/link";


export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-black flex items-center justify-center px-4"
      style={{
        background:
          "radial-gradient(circle 800px at center, rgba(7, 241, 101, 0.15) 0%, #000000 100%)",
      }}
    >
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Text */}
        <h1 className="font-(family-name:--font-albert-sans) font-bold text-[120px] md:text-[180px] leading-[100%] text-[#1a5c3a] mb-6">
          404
        </h1>

        {/* Title */}
        <h2 className="font-(family-name:--font-albert-sans) font-semibold text-[36px] md:text-[48px] leading-[100%] text-[#1a5c3a] mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="font-(family-name:--font-albert-sans) font-normal text-[18px] md:text-[20px] leading-[150%] text-[#1a5c3a]/80 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved. Please
          check the URL or return to the homepage.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="bg-[#259351] text-black rounded-full py-3 px-8 font-(family-name:--font-albert-sans) font-semibold text-[18px] leading-[100%] hover:opacity-90 transition-all duration-300 ease-out"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact-us"
            className="bg-transparent border-2 border-[#1a5c3a] text-black rounded-full py-3 px-8 font-(family-name:--font-albert-sans) font-semibold text-[18px] leading-[100%] hover:bg-[#1a5c3a] hover:text-white transition-all duration-300 ease-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
