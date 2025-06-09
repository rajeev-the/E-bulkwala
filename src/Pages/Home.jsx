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




const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isCatogrydata, setIsCatogrydata] = useState([]);
  const[issubCatogry ,setIssubCatogry] = useState([])

  useEffect(()=>{
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get('https://bulk-backend-qlo4.onrender.com/api/category/all');
        
        const data = response.data;
        setIsCatogrydata(data);
        setIssubCatogry(data[0].subcategories)
      } catch (error) {
        console.error('Error fetching category data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryData();


  },[])



    const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
  { title: 'Mobile Accessories' ,img: mobile},
  { title: 'Electronics', img: electronics },
  { title: 'Home Decor',img: electronics },
  { title: 'Toys' ,img: electronics},
  { title: 'Beauty' ,img: electronics},
  { title: 'Food & Health' ,img: electronics},
  { title: 'Appliance',img: electronics },
  { title: 'Fashion',img: electronics },
  { title: 'Sports',img: electronics },
  { title: 'Auto Accessories',img: electronics },
  { title: 'Furniture',img: electronics },
  { title: 'Groceries',img: electronics },
];
  return (
    <>
    {/* Section 1 */}


    <section className="p-5 sm:px-10">
        <div className="">
      <div className="flex gap-4 overflow-x-auto pb-3    scrollbar-none [&::-webkit-scrollbar]:hidden">
        {isCatogrydata?.map((val, i) => (
          <div key={i} className="flex flex-col items-center">
           <div
  onClick={() => { setActiveIndex(i)  
     setIssubCatogry(isCatogrydata[i].subcategories)
        
  }
  }
  className={`h-30 w-30 flex-shrink-0 cursor-pointer rounded-xl     shadow-xl  border-3  border-[#C9E0EF] transition-all  `}
>
  <img
    // src={`${isCatogrydata?.img_url[i]}`} // your image URL here
    src={val?.img_url || 'https://via.placeholder.com/150'} // Fallback image if not available
    alt={`Category ${i + 1}`}
    className="h-full w-full object-cover rounded-lg"
  />
  {/* Optional overlay text */}
  
</div>
<span className=" mt-1 text-[13px] font-semibold text-[black]  bg-opacity-50 px-1 rounded">
   {val?.name || 'Category Name'}
  </span>


            {/* Bottom underline under the box */}
            <div
              className={`mt-1 h-1.5 w-[90%] rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-[#C9E0EF]" : "bg-transparent"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
    
  <div>
   
 

   <img src={mainbox} alt="Main Image"  className=' sm:h-[400px] w-auto   rounded-xl   md:hidden' />
   <div className='hidden sm:block'>
<HeroSection />
   </div>

    

   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
  {issubCatogry?.map((category, index) => (
    <div
      key={index}
      className="group relative flex flex-col items-center justify-between bg-white border border-yellow-100 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"></div>

      {/* Image */}
      <div className="w-24 h-24 rounded-full bg-yellow-50 border-2 border-yellow-200 flex items-center justify-center mb-4 shadow-sm">
        <img src={category?.img_url} alt={category?.name} className="w-16 h-16 object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-center font-serif text-base font-semibold text-gray-800 mb-1">{category.name}</h3>

      {/* Price Range */}
      <div className="text-center mb-2">
        <p className="text-[11px] text-gray-400 tracking-wide uppercase">Price Range</p>
        <p className="text-sm font-medium text-emerald-600">₹{category?.price}</p>
      </div>

      {/* Sample Price */}
      <div className="text-center">
        <p className="text-[11px] text-gray-400 tracking-wide uppercase">Sample Price</p>
        <p className="text-sm font-medium text-blue-600">₹{category?.sample_price}</p>
      </div>

    
    </div>
  ))}
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
  
</section>
    
    
    </>
  )
}

export default Home