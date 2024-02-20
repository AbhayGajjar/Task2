import React from 'react'


export const metadata = {
  title: "AddTask : Work_Manager "
}

const AddTask = () => {
  return (
    <div className=' grid grid-cols-12  justify-center text-white'>
      <div className=' col-span-6 col-start-4  p-5'>
        <h1 className='text-4xl font-medium'>Add your Task hear</h1>


        <form action="">

          <div className='mt-4'>
            <label htmlFor="" className='block '>title</label>
            <input type="text" className='bg-gray-600 rounded-xl mt-1 py-1 px-[50px]' id='task_title'/>
          </div>
          <div className='mt-4'>
            <label htmlFor="" className='block '>Content</label>
           <textarea  id="task_content" className='bg-gray-600 focus:ring-gray-400-100 rounded-xl' cols={60} rows={5}></textarea>
          </div>
          <div className='mt-4'>
            <label htmlFor="" className='block '>Content</label>
            <select required className='bg-gray-600 rounded-xl mt-1 py-1 px-[10vw]'>
              <option value="none" disabled selected>---Select-Status---</option>
              <option value="">Panding</option>
              <option value="">Not yet</option>

            </select>
          </div>

          {/* button */}

          <div className='mt-5 ml-[21vh] '>
            <button className='px-3 py-3 rounded-lg hover:bg-[#6B21A8] bg-[#9333EA]'>Add Todo</button>
            <button className='px-3 py-3 ml-5 rounded-lg hover:bg-[#6B21A8] bg-[#9333EA]'>Clear</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask