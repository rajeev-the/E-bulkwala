import React,{useState , useEffect, useContext} from 'react'
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
import { CartContext } from '../Context/CartContext'
import Product from './Product'
import { Link } from 'react-router-dom'



const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isCatogrydata, setIsCatogrydata] = useState([]);
  const[issubCatogry ,setIssubCatogry] = useState([])
  const [isBannerData, setIsBannerData] = useState([]);
  const [iscount, setIscount] = useState(0);
  
  const {addtocart,cart} = useContext(CartContext)




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

  
  const handlecart=(Product)=>{

    addtocart(Product)
  }



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
          className={`h-30 w-30 flex-shrink-0 cursor-pointer rounded-xl shadow-xl border-4 border-[#C9E0EF] transition-all`}
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
            activeIndex === i ? "bg-[#112430]" : "bg-transparent"
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
 <Link

  to={`/products-list/${category._id}/${category?.name}`}
  key={index}
  className="group relative flex flex-col bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl overflow-hidden border border-gray-100"
  style={{
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)",
  }}
>
  {/* Gold accent bar */}
  <div className="absolute top-0 left-0 h-1 w-full bg-[#112430]"></div>

  {/* Image container with classic frame */}
  <div className="relative mx-auto mb-6 w-32 h-32 rounded-full flex items-center justify-center bg-white border-8 border-amber-50 shadow-md">
   
    <img
      src={category?.img_url}
      alt={category?.name}
      className="w-32 h-32 object-contain transition-transform duration-500 group-hover:scale-110"
    />
  </div>

  {/* Category Title */}
  <h3 className="text-center font-serif text-xl font-medium text-gray-800 mb-4 tracking-tight">
    {category?.name}
  </h3>

  {/* Divider */}
  <div className="relative mb-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent">
    <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rounded-full bg-amber-400 border-2 border-white"></div>
  </div>

  {/* Price Info Section - classic layout */}
  <div className="space-y-3">
    {/* Sample Price */}
    <div className="flex justify-between items-center px-2">
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Price</span>
      <span className="text-sm font-medium text-gray-700 bg-[#C9E0EF] px-3 py-1 rounded">
        ₹{category?.sample_price}
      </span>
    </div>

    
  </div>

  {/* Classic badge */}
  <div className="absolute top-5 right-5 flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 shadow-sm">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  </div>
</Link>


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

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-20 gap-x-20 gap-y-2 mt-5 place-items-center">
    
        <TrendingBox  img={Earphone}  onAddToCart={handlecart}  id={1}/>
        <TrendingBox  img={pendrive} onAddToCart={handlecart} id={2} />
        <TrendingBox  img={temperimg} onAddToCart={handlecart} id={3} />
        <TrendingBox  img={watchphoto} onAddToCart={handlecart} id={4} />
        <TrendingBox  img={Earphone}  onAddToCart={handlecart}  id={5} />
        <TrendingBox  img={pendrive}  onAddToCart={handlecart}  id={6} />
   
      
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