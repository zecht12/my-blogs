import React from 'react'
import Image from 'next/image'

export default function BlogItem (props) {
    const { title, image, description, details } = props

  return (
  <div className=' h-full w-full bg-slate-200 pt-24 pb-6'>
    <div className=' max-w-sm h-auto m-auto overflow-hidden rounded shadow-lg shadow-gray-500'>
      <Image src={image} width="100%" height="60%" alt={title}/>
      <div className='px-6 py-4'>
        <div className='mb-2 text-xl font-bold'>{title}</div>
          <p className='text-base text-gray-700'>{description}</p>
          {details&&
          <p className='text-base text-blue-500 font-semibold'>{details}</p>}
        </div>
        {!details &&(<div className='text-center px-6 py-4'>
        <button className='px-4 py-2 bg-transparent font-semibold text-blue-700 border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'>
          Read More...
        </button>
      </div>)}
    </div>
  </div>
  )
}