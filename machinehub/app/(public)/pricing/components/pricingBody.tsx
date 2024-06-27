import PricingCard from './pricingCard'
{/* <div className="spacer stackWave">*/}
export default function PricingBody() {
  return (
    <section className="relative bg-gradient-to-b from-primary to-header bg-opacity-90">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-opacity-80 pointer-events-none" aria-hidden="true"></div>
      
      <div className="spacer stackWave">
      <div className="relative max-w-7xl mx-auto px-12 sm:px-6">

        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pt-10 pb-5 ">
            <h1 className="h1 mb-6 text-6xl font-extrabold leading-tighter tracking-tighter text-gray-900" data-aos="zoom-y-out">For your needs</h1>

            <h3 className="h1 text-3xl text-gray-800" data-aos="zoom-y-out" data-aos-delay="150">Whatever your budget and use case, we provide simple and affordable solutions.</h3>
          </div>

          {/* Items */}
          
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <PricingCard/>

            {/* 2nd item */}
            <PricingCard />

            {/* 3rd item */}
            <PricingCard />
          </div>
          </div>
          </div>
        
        </div>
      
    </section>
  )
}