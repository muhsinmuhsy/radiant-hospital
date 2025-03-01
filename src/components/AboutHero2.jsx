import Image from "next/image";

const AboutUsHero2 = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0">
        <Image 
          src="/radiant/18.jpg" 
          alt="ENT Hospital" 
          layout="fill" 
          objectFit="cover" 
          quality={90} 
          className="opacity-60"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Dedicated to Your ENT Health</h1>
        <p className="mt-4 text-lg md:text-xl text-white drop-shadow-md">
          Providing world-class ear, nose, and throat care with advanced treatments and compassionate service.
        </p>
        <a 
          href="#about" 
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default AboutUsHero2;
