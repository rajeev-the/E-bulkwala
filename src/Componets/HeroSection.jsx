import React,{useEffect , useState} from 'react'
import mainn from '../assets/mainn.png'

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

<div className="relative h-[350px] bg-[#fdc305] flex items-center justify-between px-8 rounded-xl shadow-md overflow-hidden  ">

  {/* Animated Background Blobs */}
  <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#fdc305]/30 rounded-full blur-3xl animate-pulse-slow z-0"></div>
  <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#112430]/20 rounded-full blur-3xl animate-pulse-slower z-0"></div>
  <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/20 rounded-full blur-2xl animate-float z-0"></div>

  {/* Left Section: Text */}
  <div className="flex flex-col gap-4 max-w-xl z-10">
    <h1 className="text-4xl font-bold   text-[#112430]">
      Upgrade Your <br /> Tech Life
    </h1>
    <p className="text-[#112430] text-base">
  Explore the latest gadgets, smart devices, and accessories all in one bundle. Limited-time offer.
</p>

    <div className="bg-white text-[#112430] font-medium px-4 py-2 rounded w-max">
      Triple Deal – Up to 40% OFF
    </div>

  </div>
  
  

  {/* Right Section: Image */}
  <img
    src={mainn}
    alt="Tech Bundle"
    className="h-[90%] object-contain z-10    "
   
  />
</div>

  )
}

export default HeroSection