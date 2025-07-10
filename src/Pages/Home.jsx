import React,{useState , useEffect} from 'react'
import mainbox from '../assets/38686812_8642509.jpg'
import necband from '../assets/necband.png'
import PromoCard from '../Componets/PromoCard '
import cable from '../assets/cable.png'
import handgame from '../assets/handgame.png'
import watch from '../assets/watch.png'
import phonestand from '../assets/phonestand.png'
import taemp from '../assets/tamp.png'
import ProductCard from '../Componets/ProductCard '
import TrendingBox from '../Componets/TrendingBox'
import Earphone from '../assets/Earphone.png'
import pendrive from '../assets/pendrive.png'
import watchphoto from '../assets/watchphoto.png'
import temperimg from '../assets/temperimg.png'
import section3 from '../assets/section-3.png'
import PromotionalBanner from '../Componets/PromotionalBanner '
import mobile from '../assets/mobile.png'
import electronics from '../assets/electronic.png'
import axios from 'axios'
import HeroSection from '../Componets/HeroSection'
import Loading from '../Componets/Loading'
import Aff from '../Componets/Aff'
import aff from "../assets/afff.png"
import affpic from '../assets/BULK_AFFILIATE_PROGRAM[2].png' 




const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isCatogrydata, setIsCatogrydata] = useState([]);
  const[issubCatogry ,setIssubCatogry] = useState([])
  const [isBannerData, setIsBannerData] = useState([]);
  const [iscount, setIscount] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setIscount((prevIndex) =>
       (prevIndex + 1) % isBannerData.length // Loop through the banner images
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isBannerData]);

  useEffect(()=>{
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get('https://bulk-backend-qlo4.onrender.com/api/category/all');
        
        const data = response.data;
      
        setIsCatogrydata(data);
        setIssubCatogry(data[0].subcategories)
        setIsBannerData(data[0].banner);
      } catch (error) {
        console.error('Error fetching category data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryData();


  },[])



    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    {/* Section 1 */}


    <section className="px-5  sm:p-6">
        <div className="">


     <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none [&::-webkit-scrollbar]:hidden">
  {isLoading ? (
    <div className="w-full flex justify-center items-center py-6 min-h-[100px]">
      <Loading size={32} color="#3b82f6" />
    </div>
  ) : (
    isCatogrydata?.map((val, i) => (
      <div key={i} className="flex flex-col items-center">
        <div
          onClick={() => {
            setActiveIndex(i);
            setIssubCatogry(isCatogrydata[i].subcategories);
            setIsBannerData(isCatogrydata[i].banner);
            setIscount(0); // Reset the banner index when category changes
          }}
          className={`h-30 w-30 flex-shrink-0 cursor-pointer rounded-xl shadow-xl border-3 border-[#C9E0EF] transition-all`}
        >
          <img
            src={val?.img_url || 'https://via.placeholder.com/150'}
            alt={`Category ${i + 1}`}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        <span className="mt-1 text-[13px] font-semibold text-black bg-opacity-50 px-1 rounded">
          {val?.name || 'Category Name'}
        </span>

        {/* Underline indicator */}
        <div
          className={`mt-1 h-1.5 w-[90%] rounded-full transition-all duration-300 ${
            activeIndex === i ? "bg-[#C9E0EF]" : "bg-transparent"
          }`}
        />
      </div>
    ))
  )}
</div>



    </div>
    
  <div>
   
 

 {isLoading ? (
    <div className="w-full flex justify-center items-center py-6 min-h-[100px]">
      <Loading size={32} color="#3b82f6" />
    </div>
  ) : (
   <img src={isBannerData[iscount]} alt="Main Image"  className=' sm:h-[400px] w-auto   rounded-xl   md:hidden' />

  )}
   <div className='hidden sm:block'>
<HeroSection />
   </div>

    
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
  {isLoading ? (
    <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-6 flex justify-center items-center py-16">
      <Loading size={36} color="#3b82f6" />
    </div>
  ) : (
    issubCatogry?.map((category, index) => (
    <div
  key={index}
  className="group relative flex flex-col items-center justify-between bg-white border border-[#C9E0EF] rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-100 opacity-0 group-hover:opacity-40 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>

  {/* Image */}
  <div className="w-32 h-32 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center mb-5 shadow-md overflow-hidden">
    <img
      src={category?.img_url}
      alt={category?.name}
      className="w-28 h-28 object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  {/* Category Title */}
  <h3 className="text-center font-serif text-lg font-semibold text-gray-800 mb-2">
    {category?.name}
  </h3>

  {/* Price Info Section */}
  <div className="w-full flex flex-col gap-2 text-center">
    {/* Sample Price */}
    <div className="flex items-center justify-center gap-2">
      <p className="text-[11px] text-gray-500 tracking-wide uppercase">
        Sample Price
      </p>
      <p className="text-[10px] font-semibold text-blue-600">
        ₹{category?.sample_price}
      </p>
    </div>

    {/* Bulk Price */}
    <div className="flex items-center justify-center gap-1 ">
      <p className="text-[11px] text-gray-500 tracking-wide uppercase">
        Bulk Price
      </p>
      <p className="text-[10px] font-semibold text-emerald-600">
        ₹{category?.price}
      </p>
    </div>
  </div>
</div>

    ))
  )}
</div>




    </div>

</section>



    {/* Section 2 */}


  <section  className=' p-10'>
          <div>
          <h3 className='text-start   font-bold  text-2xl'>Electronic Accessories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 mt-5 place-items-center">
      <PromoCard
        image={necband}
        title="AUDIO"
        subtitle="Up to 15% Off"
        buttonText="SHOP NOW"
      />
       <PromoCard
        image={taemp}
        title="MOBILE"
        subtitle="Up to 10% Off"
        buttonText="SHOP NOW"
      />
       <PromoCard
        image={handgame}
        title="PUBG"
        subtitle="Up to 15% Off"
        buttonText="SHOP NOW"
      />
       <PromoCard
        image={phonestand}
        title="HOT"
        subtitle="Up to 15% Off"
        buttonText="SHOP NOW"
      />
      <PromoCard
        image={cable}
        title="Power&Cable"
        subtitle="Up to 15% Off"
        buttonText="SHOP NOW"
      />

<PromoCard
        image={watch}
        title="Wearable"
        subtitle="Up to 15% Off"
        buttonText="SHOP NOW"
      />
    
    </div>
          
        <div>


        </div>



          </div>

   </section>


  {/* Section 3 */}
 <section className="p-10">
  <div>
    <h3 className="text-start font-bold text-2xl">Top Products</h3>

    <div className="mt-5 overflow-x-auto  scrollbar-none [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-4 w-max">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </div>
</section>


  {/* Section 4 */}

<section className="p-10">
  <div>
    <h3 className="text-start font-bold text-2xl">Trending Products</h3>

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 mt-5 place-items-center">
    
        <TrendingBox  img={Earphone} />
        <TrendingBox  img={pendrive} />
        <TrendingBox  img={temperimg} />
        <TrendingBox  img={watchphoto} />
        <TrendingBox  img={Earphone} />
        <TrendingBox  img={pendrive} />
   
      
    </div>
  </div>
</section>


   {/* Section 5 */}
  <section className='w=full mt-2 mb-2  h-auto'>
<img src={section3} alt="sectoin-3" />
  </section>


  {/* Section 6 */}


<section className="p-2">

<PromotionalBanner/>
 {/* Section 5 */}


  
</section>
  {/* <section className='w=full    rounded-sm  h-auto'>
<img src={aff} alt="sectoin-3" className='rounded-sm' />
  </section> */}

 <img src={affpic} alt="Main Image"  className=' sm:h-[400px] w-auto   rounded-xl   md:hidden' />
  <section className='p-2 hidden sm:block'>
  <Aff/>
  </section>

    
    
    </>
  )
}

export default Home