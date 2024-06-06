import Image from 'next/image'
import React from 'react'

const Faq = () => {
  return (
    <div className='text-center flex flex-col items-center bg-black text-white py-10'>
      <h4 className="tracking-widest uppercase">Welcome to modamate</h4>
      <h1 className="font-medium text-3xl my-5">Fashion&apos;s social & environmental responsibility.</h1>
      <p className='text-sm'>Morbi et justo at enim rutrum molestie sit amet a purus. Quisque vel justo et diam dapibus viverra id vitae ligula. Cras pharetra arcu semper,<br/>interdum purus sed, molestie mauris. Phasellus gravida molestie pulvinar. Pellentesque suscipit vulputate diam luctus egestas.</p>
      <div className="md:flex md:w-[1000px] md:mt-5 justify-between items-center">
        <div className="flex justify-center items-center gap-3">
            <Image src={'/car.png'} width={35} height={35} alt='car' />
            <p className='font-bold text-xs'>Free Shipping on order over $200</p>
        </div>
        <div className="flex justify-center items-center gap-3">
            <Image src={'/gift.png'} width={30} height={30} alt='car' />
            <p className='font-bold text-xs'>Earn Points & Get Rewards</p>
        </div>
        <div className="flex justify-center items-center gap-3">
            <Image src={'/phone.png'} width={30} height={30} alt='car' />
            <p className='font-bold text-xs'>Online Support 24 hours a day</p>
        </div>
      </div>
      <button className='uppercase bg-white px-10 py-4 my-10 text-black text-xs font-extrabold'>Check out our faqs</button>
    </div>
  )
}

export default Faq
