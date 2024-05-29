import React, { useState } from 'react'
import AttendanceTableComponent from '../components/baseComponent/AttendanceTable';
import LeaveAttendanceTable from '../components/baseComponent/LeaveAttendanceTable';
import Card1 from '../components/baseComponent/Card1';
import ModalBox from '../components/baseComponent/ModelBox';

const Attendance = () => {
  const [isModelBox, setIsModelBox] = useState(false);

  const handleModelBoxClick = () => {
    setIsModelBox(!isModelBox)
  }

  return (
    <>
      <div className="main-inner-wrapper attendance-wrapper">
        <div className="attendance-card__wrapper flex flex-wrap justify-between gap-4 lg:gap-6 px-4">
          <div className="attendance-card bg-white dark:bg-neutral-800 flex p-4 border border-gray-300 dark:border-gray-500 rounded-lg justify-between">
            <div className="attendance-card-content">
              <h5 className='m-0 text-3xl	text-gray-800 dark:text-white font-bold'>09:00</h5>
              <p className='m-0 text-base	text-black dark:text-white font-normal'>Check In</p>
              <p className='m-0 text-sm	text-gray-600 dark:text-gray-300 font-normal'>Early</p>
            </div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8 stroke-black dark:stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
          </div>
          <div className="attendance-card bg-white dark:bg-neutral-800 flex p-4 border border-gray-300 dark:border-gray-500 rounded-lg justify-between">
            <div className="attendance-card-content">
              <h5 className='m-0 text-3xl	text-gray-800 dark:text-white font-bold'>-- : --</h5>
              <p className='m-0 text-base	text-black dark:text-white font-normal'>Check Out</p>
              <p className='m-0 text-sm	text-gray-600 dark:text-gray-300 font-normal'>Not Yet</p>
            </div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8 stroke-black dark:stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
          </div>
          <div className="attendance-card bg-white dark:bg-neutral-800 flex p-4 border border-gray-300 dark:border-gray-500 rounded-lg justify-between">
            <div className="attendance-card-content">
              <h5 className='m-0 text-3xl	text-gray-800 dark:text-white font-bold'>5</h5>
              <p className='m-0 text-base	text-black dark:text-white font-normal'>Absence</p>
              <p className='m-0 text-sm	text-gray-600 dark:text-gray-300 font-normal'>In November</p>
            </div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8 stroke-black dark:stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
            </div>
          </div>
          <div className="attendance-card bg-white dark:bg-neutral-800 flex p-4 border border-gray-300 dark:border-gray-500 rounded-lg justify-between">
            <div className="attendance-card-content">
              <h5 className='m-0 text-3xl	text-gray-800 dark:text-white font-bold'>25</h5>
              <p className='m-0 text-base	text-black dark:text-white font-normal'>Total Attended</p>
              <p className='m-0 text-sm	text-gray-600 dark:text-gray-300 font-normal'>In November</p>
            </div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8 stroke-black dark:stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="attendance-table__container p-4 w-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-xl">
            <div className="box-header__wrapper pb-4">
              <h2 className='text-black dark:text-white'>Weekly Working Hours</h2>
            </div>
            <AttendanceTableComponent />
          </div>
        </div>
        <div className="px-4">
          <div className="leave-apply__container">
            <div className="leave-apply__wrapper p-4 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-xl">
              <div className="flex justify-between items-center gap-4 mb-6">
                <div className="header-wrapper">
                  <h2>Regularization & Permission</h2>
                </div>
                <button className="py-2 px-3 bg-indigo-500 hover:bg-indigo-800 text-white text-xs font-semibold rounded-md shadow focus:outline-none" onClick={handleModelBoxClick}>
                  Regularization Apply
                </button>
              </div>
              <LeaveAttendanceTable />
            </div>
            <div className="my-teammate__wrapper bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-xl">
              <div className="flex justify-between p-4 items-center gap-4 mb-6">
                <div className="header-wrapper">
                  <h2>My Team mates Attendances</h2>
                </div>
                <button className="py-2 px-3 bg-indigo-500 hover:bg-indigo-800 text-white text-xs font-semibold rounded-md shadow focus:outline-none">
                  See All Members
                </button>
              </div>
              <div className="flex flex-col gap-4 lg:h-80 overflow-y-auto px-4">
                <Card1 className={'bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800'}/>
                <Card1 className={'bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800'}/>
                <Card1 className={'bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800'}/>
                <Card1 className={'bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800'}/>
                <Card1 className={'bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800'}/>
                <Card1 className={'bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800'}/>
                <Card1 className={'bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalBox isOpen={isModelBox} onOpenChange={handleModelBoxClick} backdrop="opaque"/>
    </>
  )
}

export default Attendance;
