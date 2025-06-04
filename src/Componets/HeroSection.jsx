import React,{useEffect , useState} from 'react'

const HeroSection = () => {
     const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 33
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { minutes: minutes - 1, seconds: 59, hours };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (

       <div className="h-[350px] bg-[#c9e0ef] flex items-center justify-between px-8 rounded-xl shadow-md overflow-hidden">
      {/* Left Section: Text */}
      <div className="flex flex-col gap-4 max-w-md">
        <h1 className="text-4xl font-bold text-[#112430]">
          Upgrade Your <br /> Tech Life
        </h1>
        <div className="bg-[#fdc305] text-[#112430] font-medium px-4 py-2 rounded w-max">
          Triple Deal – Up to 40% OFF
        </div>
        <button className="bg-[#112430] text-white px-6 py-3 rounded-full w-max font-semibold">
          Shop the Deal
        </button>
      </div>

      {/* Right Section: Image */}
      <img
        src="/Gemini_Generated_Image_vw5w1nvw5w1nvw5w.png"
        alt="Tech Bundle"
        className="h-[90%] object-contain"
      />
    </div>
  )
}

export default HeroSection