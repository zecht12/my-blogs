import React from 'react'
import { useRef } from 'react'

export default function Addblog (props) {
  const {addBlogHandler} = props;
  const titleRef = useRef()
  const imageRef = useRef()
  const descriptionRef = useRef()
  const detailsRef = useRef()

  const formSubmitHandler = (e) => {
    e.preventDefault()

    const formData = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      description: descriptionRef.current.value,
      details: detailsRef.current.value
    }
    addBlogHandler(formData)
  }

  return (
    <div className='h-screen w-full'>
      <div className='h-full w-full bg-slate-200 pt-24' onSubmit={formSubmitHandler}>
        <form className='w-full max-w-xl mx-auto'>
          <h1 className='pb-6 font-bold'>Add Blog</h1>
          <div className='flex flex-wrap mb-6 mx-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Title
            </label>
            <input className=' appearance-none w-full block bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-100'
            type='text'
            placeholder='title'
            ref={titleRef}
            />
          </div>
          <div className='flex flex-wrap mb-6 mx-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              image
            </label>
            <input className=' appearance-none w-full block bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-100'
            type='text'
            placeholder='image'
            ref={imageRef}
            />
          </div>
          <div className='flex flex-wrap mb-6 mx-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              description
            </label>
            <input className=' appearance-none w-full block bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-100'
            type='text'
            placeholder='description'
            ref={descriptionRef}
            />
          </div>
          <div className='flex flex-wrap mb-6 mx-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              details
            </label>
            <input className=' appearance-none w-full block bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-100'
            type='text'
            placeholder='details'
            ref={detailsRef}
            />
          </div>
          <div className='pl-3'>
            <button type='submit' 
            className='px-4 py-2 bg-transparent font-semibold text-blue-700 border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}