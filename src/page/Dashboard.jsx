import React from 'react';
import TodoList from '../components/groupComponent/TodoList';
import Card1 from '../components/baseComponent/Card1';
import Card2 from '../components/baseComponent/Card2';
import Card3 from '../components/baseComponent/Card3';


const Dashboard = () => {

  const fakedata = [
    {
      id: 1,
      task: "New product presentation with client",
      status: "completed",
      priority: "high",
      report: "Ramesh"
    },
    {
      id: 2,
      task: "New product page ui",
      status: "over due",
      priority: "high",
      report: "Ramesh"
    },
    {
      id: 3,
      task: "New product page ui",
      status: "over due",
      priority: "high",
      report: "Ramesh"
    },
    {
      id: 4,
      task: "login page ui discussion with development team",
      status: "in process",
      priority: "low",
      report: "Ramesh"
    },
    {
      id: 5,
      task: "New product page ui",
      status: "over due",
      priority: "high",
      report: "Ramesh"
    },
  ]

  return (
    <>
      <div className="main-inner-wrapper dashboard-wrapper">
        <div className="ticket-card__wrapper flex flex-wrap justify-between gap-4 lg:gap-6 px-4">
          <div className="ticket-card flex p-4 rounded-lg justify-between">
            <div className="ticket-card-content">
              <h5 className='m-0 text-3xl	text-white font-bold'>19</h5>
              <p className='m-0 text-base	text-white font-normal'>New Tickets</p>
            </div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
              </svg>
            </div>
          </div>
          <div className="ticket-card flex p-4 rounded-lg justify-between">
            <div className="ticket-card-content">
              <h5 className='m-0 text-3xl	text-white font-bold'>30</h5>
              <p className='m-0 text-base	text-white font-normal'>Ticket Resolved</p>
            </div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
              </svg>
            </div>
          </div>
          <div className="ticket-card flex p-4 rounded-lg justify-between">
            <div className="ticket-card-content">
              <h5 className='m-0 text-3xl	text-white font-bold'>22</h5>
              <p className='m-0 text-base	text-white font-normal'>Available Leaves</p>
            </div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
            </div>
          </div>
          <div className="ticket-card flex p-4 rounded-lg justify-between">
            <div className="ticket-card-content">
              <h5 className='m-0 text-3xl	text-white font-bold'>5</h5>
              <p className='m-0 text-base	text-white font-normal'>Project Assigned</p>
            </div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="graph-wrapper px-4">
          <div className="upcoming-event__wrapper lg:w-1/3">
            <div className="graph-box bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-lg">
              <div className="graph-header p-4">
                <h2 className='text-black dark:text-white'>Events</h2>
              </div>
              <div className="graph-body flex flex-col gap-4 pb-4 px-4">
                <Card3 />
              </div>
            </div>
          </div>
          <div className="upcoming-holidays__wrapper lg:w-1/3">
            <div className="graph-box bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-lg">
              <div className="graph-header p-4">
                <h2 className='text-black dark:text-white'>Upcoming Holidays</h2>
              </div>
              <div className="graph-body flex flex-col gap-4 pb-4 px-4">
                {
                  [1, 2, 3, 4, 5, 6, 7].map((item,idx) => (
                    <Card2 key={idx}/>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="todo-list__wrapper lg:w-1/3">
            <div className="graph-box bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-lg">
              <div className="graph-header p-4">
                <h2 className='text-black dark:text-white'>Todo List</h2>
              </div>
              <div className="graph-body p-4 pt-0">
                <div className="todo-wrapper flex flex-col gap-4">
                  <TodoList />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="teamandtask__wrapper px-4">
          <div className="team-wrapper">
            <div className="box bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-lg">
              <div className="header p-4">
                <h2 className='text-black dark:text-white'>My Team</h2>
              </div>
              <div className="content overflow-auto p-4 pt-0 flex flex-col gap-4">
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
              </div>
            </div>
          </div>
          <div className="mytask-wrapper">
            <div className="box bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-lg">
              <div className="header p-4">
                <h2 className='text-black dark:text-white'>My Tasks</h2>
              </div>
              <div className="content overflow-auto px-4">
                <div className="relative overflow-auto mb-4">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-separate border-spacing-1 sm:rounded-lg">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Task
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Priority
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Reporter
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        fakedata && Array.isArray(fakedata) && fakedata?.map((item, idx) => (
                          <tr key={idx} className="odd:bg-white odd:dark:bg-gray-500 even:bg-gray-300 even:dark:bg-gray-700 border-b dark:border-gray-700 font-medium text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-4">
                              {idx+1}
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {item?.task}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium capitalize ring-1 ring-inset h-fit ${item?.status === "completed" ? "bg-green-100 text-green-700 ring-green-600/20" : item?.status === "over due" ? "bg-rose-100 text-rose-700 ring-rose-600/20" : "bg-yellow-100 text-yellow-700 ring-yellow-600/20" }`}>{item?.status}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className='text-rose-500'>{item?.priority}</span>
                            </td>
                            <td className="px-6 py-4">
                              {item?.report}
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
