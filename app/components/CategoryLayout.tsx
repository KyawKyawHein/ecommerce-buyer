import Image from 'next/image'
import "./categoryLayout.css"
const CategoryLayout = () => {
  return (
    <div className='my-3 relative'>
    <div className="block md:grid grid-cols-2 gap-3">
      <div className="relative category-layout overflow-hidden h-96 w-full">
          <Image src={'/woman photo.webp'} fill alt="layout" className='layout-img' />
          <div className="absolute bottom-14 left-[40%] text-white">
              <p className="uppercase font-extrabold mb-3">shop women's</p>
              <button className='bg-white font-semibold p-2 md:py-3 md:px-8 text-black'>Shop now</button>
          </div>
      </div>
      <div className="relative category-layout h-96 w-full">
          <Image src={'/man photo.webp'} fill alt="layout" className='layout-img ' />
          <div className="absolute bottom-14 left-[40%] text-white">
              <p className="uppercase font-extrabold mb-3">shop men's</p>
              <button className='bg-white font-semibold p-2 md:py-3 md:px-8 text-black'>Shop now</button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default CategoryLayout
