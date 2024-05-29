import React from 'react'

const Card2 = () => {
  return (
    <div className="card2 flex gap-2 py-2 px-3 rounded-lg border border-neutral-200 border-opacity-70 dark:border-opacity-50">
      <div className="c-content w-full flex flex-col gap-y-2">
        <p className='m-0 text-md text-neutral-800 dark:text-neutral-300 font-semibold'>Independence Day</p>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <span className='m-0 text-xs text-gray-700 dark:text-gray-300 font-medium'>15 Aug</span>
            <p className='m-0 text-xs text-gray-700 dark:text-gray-300 font-semibold'>Thursday</p>
          </div>
          <p className='m-0 text-xs text-gray-700 dark:text-gray-300 font-semibold'>30 days to left</p>
        </div>
      </div>
    </div>
  )
}

export default Card2
