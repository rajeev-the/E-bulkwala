import React from 'react'
import MainBox from '../Componets/MainBox'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
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





const Home = () => {
  return (
    <>
    {/* Section 1 */}


    <section className="p-10">
  <div>
    <h3 className="text-start font-bold text-2xl">Featured Products</h3>

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-5 place-items-center">
      <MainBox image={img1} title={'Audio Products'} />
      <MainBox image={img2} title={'Gaming Products'} />
      <MainBox image={img3} title={'Watch Products'} />
      <MainBox image={img4} title={'Cover Products'} />
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