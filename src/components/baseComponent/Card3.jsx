import React from 'react'
import { Avatar } from '@nextui-org/react'

const Card3 = () => {

  const dummyData = [
    {
      emp_name: "John",
      event_date: "Today",
      event: "birthday",
      discription: "Wish you many more happy return of the day"
    },
    {
      emp_name: "Durairaj",
      event_date: "12 jun 2024",
      event: "newjoinee",
      discription: "Welcome to our squad"
    },
    {
      emp_name: "John Durairaj",
      event_date: "22 jun 2024",
      event: "birthday",
      discription: "Wish you many more happy return of the day"
    },
    {
      emp_name: "Jd",
      event_date: "24 jun 2024",
      event: "workiversary",
      discription: "Happy Workiversary"
    },
  ]
  return (
    <>
      {
        dummyData && Array.isArray(dummyData) && dummyData?.map((item, idx) => (
          <div key={idx} className="card3 flex items-center gap-4 py-3 px-3 rounded-lg border border-neutral-200 border-opacity-70 dark:border-opacity-50">
            <div className="icon">
              <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className='w-10 h-10'/>
            </div>
            <div className="content flex flex-col gap-y-1.5">
              <h6 className='m-0 text-sm font-semibold text-black dark:text-white'>{item?.emp_name}</h6>
              <p className='m-0 text-xs text-neutral-600 dark:text-neutral-400'>{item?.discription}</p>
            </div>
            {
              item?.event === "birthday" && <div className='end-wrapper ms-auto'>
                <button className='py-1 px-2 flex items-center gap-2 bg-indigo-500 hover:bg-indigo-800 text-white text-xs font-semibold rounded-md focus:outline-none'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                  </svg>
                </button>
              </div>
            }
          </div>
        ))
      }
    </>
  )
}

export default Card3
