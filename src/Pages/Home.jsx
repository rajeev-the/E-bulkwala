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


const Home = () => {
  return (
    <>
    {/* Section 1 */}


    <section className="p-10">
  <div>
    <h3 className="text-start font-bold text-2xl">Featured Products</h3>

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5 place-items-center">
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
          <div className="flex   justify-evenly   items-start  flex-wrap   flex-3 gap-[80px] mt-5">
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
        title="Power&Cables"
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




    
    
    </>
  )
}

export default Home