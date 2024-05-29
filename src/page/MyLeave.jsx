import React from 'react'
import LeaveAttendanceTable from '../components/baseComponent/LeaveAttendanceTable'
import ProgressBar from '../components/baseComponent/Progressbar'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from 'next-themes';
import LeaveBalance from '../components/baseComponent/LeaveBalance';

const MyLeave = () => {
  const { theme } = useTheme();

  const data = [
    {
      month: 'January',
      no_of_leave: 2
    },
    {
      month: 'february',
      no_of_leave: 3
    },
    {
      month: 'March',
      no_of_leave: 5
    },
    {
      month: 'April',
      no_of_leave: 0
    },
    {
      month: 'May',
      no_of_leave: 6
    },
    {
      month: 'June',
      no_of_leave: 10
    },
    {
      month: 'July',
      no_of_leave: 1
    },
  ];


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rechart__custom-tooltip bg-black dark:bg-white">
          <p className="value text-sm m-0 text-white dark:text-black">{`${label} month no of leaves ${payload[0]?.value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="main-inner-wrapper leavemenu-wrapper">
        <div className="graph-wrapper px-4">
        <div className="attendance-graph__wrapper">
          <div className="graph-box bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-lg">
            <div className="graph-header p-4">
              <h2 className='text-black dark:text-white'>Weekly Working Hours</h2>
            </div>
            <div className="graph-body pb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <defs>
                    <linearGradient id="colorpv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6B45BC" stopOpacity={0.9}/>
                      <stop offset="45%" stopColor="#6B45BC" stopOpacity={0.55}/>
                      <stop offset="95%" stopColor="#6B45BC" stopOpacity={0.25}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tick={{fill: theme === 'light' ? '#707070' : '#ffffff',fontSize:13}} />
                  <YAxis tick={{fill: theme === 'light' ? '#707070' : '#ffffff',fontSize:13}} />
                  <Tooltip cursor={{fill: 'transparent'}} content={<CustomTooltip />}/>
                  <Legend />
                  <Bar name={"Months"} dataKey="no_of_leave" stroke='#6B45BC' fillOpacity={1} fill="url(#colorpv)" radius={[8,8,0,0]}/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="todo-list__wrapper">
          <div className="graph-box bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-lg">
            <div className="graph-header p-4">
              <h2 className='text-black dark:text-white'>Leave Balance</h2>
            </div>
            <div className="graph-body p-4 pt-0">
              <LeaveBalance />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="leave-apply__wrapper p-4 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-xl">
          <div className="flex justify-between items-center gap-4">
            <div className="header-wrapper">
              <h2>Leaves</h2>
            </div>
            <button className="py-2 px-3 bg-indigo-500 hover:bg-indigo-800 text-white text-xs font-semibold rounded-md shadow focus:outline-none">
              Leave Apply
            </button>
          </div>
          <div className="leave-section__wrapper my-6">
            <div className="casual-leave__wrapper flex-1 p-4 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-xl">
              <div className="flex flex-col gap-3">
                <div className="c-title flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" className='w-6 h-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='fill-neutral-700 dark:fill-neutral-300' d="M17.3747 10.7072L20.1066 8.13656L20.1225 8.12062C20.6852 7.55795 21.0013 6.7948 21.0013 5.99906C21.0013 5.20332 20.6852 4.44017 20.1225 3.8775C19.5598 3.31482 18.7967 2.99872 18.0009 2.99872C17.2052 2.99872 16.4421 3.31482 15.8794 3.8775C15.8794 3.88312 15.8691 3.88781 15.8634 3.89344L13.2928 6.62531L5.51157 3.79406C5.37746 3.74528 5.23221 3.73578 5.09289 3.76667C4.95356 3.79755 4.82594 3.86755 4.72501 3.96844L2.47501 6.21844C2.3966 6.2969 2.33658 6.39178 2.29926 6.49624C2.26195 6.6007 2.24826 6.71214 2.2592 6.82252C2.27014 6.93291 2.30543 7.03949 2.36253 7.13459C2.41962 7.22969 2.4971 7.31095 2.58938 7.3725L8.57907 11.3653L7.18969 12.75H5.25001C5.05136 12.7501 4.86086 12.829 4.72032 12.9694L2.47032 15.2194C2.38257 15.3069 2.31788 15.4148 2.28204 15.5335C2.2462 15.6521 2.24032 15.7778 2.26493 15.8993C2.28955 16.0208 2.34388 16.1342 2.42307 16.2296C2.50227 16.3249 2.60386 16.3991 2.71876 16.4456L6.17063 17.8266L7.54876 21.2719L7.55438 21.2869C7.60206 21.4023 7.67779 21.504 7.77471 21.5827C7.87164 21.6614 7.98668 21.7147 8.10941 21.7377C8.23214 21.7607 8.35867 21.7527 8.47752 21.7144C8.59637 21.6761 8.70378 21.6087 8.79001 21.5184L11.0278 19.2797C11.0978 19.2103 11.1535 19.1278 11.1916 19.037C11.2298 18.9461 11.2496 18.8486 11.25 18.75V16.8103L12.6338 15.4266L16.6266 21.4162C16.6881 21.5085 16.7694 21.586 16.8645 21.6431C16.9596 21.7002 17.0662 21.7355 17.1765 21.7464C17.2869 21.7574 17.3984 21.7437 17.5028 21.7064C17.6073 21.6691 17.7022 21.609 17.7806 21.5306L20.0306 19.2806C20.1315 19.1797 20.2015 19.0521 20.2324 18.9127C20.2633 18.7734 20.2538 18.6282 20.205 18.4941L17.3747 10.7072ZM17.3681 19.8225L13.3753 13.8337C13.3141 13.7408 13.233 13.6626 13.1378 13.6048C13.0426 13.5471 12.9358 13.5113 12.825 13.5H12.7509C12.6524 13.5 12.5547 13.5195 12.4637 13.5573C12.3726 13.5951 12.2899 13.6505 12.2203 13.7203L9.97032 15.9703C9.82959 16.1107 9.75035 16.3012 9.75001 16.5V18.4397L8.52469 19.665L7.44657 16.9687C7.40885 16.8751 7.35262 16.7901 7.28126 16.7187C7.2099 16.6474 7.12486 16.5912 7.03126 16.5534L4.33688 15.4753L5.56126 14.25H7.50001C7.59853 14.2501 7.6961 14.2307 7.78714 14.1931C7.87819 14.1555 7.96093 14.1002 8.03063 14.0306L10.2806 11.7806C10.3592 11.7022 10.4194 11.6072 10.4568 11.5027C10.4942 11.3981 10.5079 11.2865 10.497 11.176C10.4861 11.0655 10.4507 10.9588 10.3935 10.8636C10.3363 10.7685 10.2587 10.6872 10.1663 10.6256L4.17751 6.63187L5.44313 5.36719L13.245 8.20406C13.3825 8.25457 13.5317 8.26373 13.6743 8.23041C13.8169 8.19709 13.9467 8.12275 14.0475 8.01656L16.9481 4.93125C17.2309 4.65679 17.6102 4.5046 18.0042 4.50757C18.3982 4.51054 18.7753 4.66842 19.0538 4.9471C19.3324 5.22578 19.4901 5.60288 19.4929 5.9969C19.4957 6.39092 19.3433 6.77021 19.0688 7.05281L15.9872 9.9525C15.881 10.0533 15.8067 10.1831 15.7733 10.3257C15.74 10.4683 15.7492 10.6175 15.7997 10.755L18.6366 18.5569L17.3681 19.8225Z" fill="#6B6B75"/>
                  </svg>
                  <h6 className='m-0 text-lg text-neutral-700 dark:text-neutral-300'>Casual Leave</h6>
                </div>
                <ProgressBar value={25} classNames={{
                  base: 'max-w-sm',
                  track: "bg-[#D9D9D9] h-[8px]",
                  indicator: "bg-[#6B45BC]",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60"
                }} />
                <p className='m-0 text-sm text-red-600 font-bold'>4 Days <span className='text-neutral-600 dark:text-neutral-300'>Used</span> <span className='text-green-600'>12 Days Available</span></p>
              </div>
            </div>
            <div className="sick-leave__wrapper flex-1 p-4 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-500 rounded-xl">
              <div className="flex flex-col gap-3">
                <div className="c-title flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" className='w-6 h-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='stroke-neutral-700 dark:stroke-neutral-300' fillRule="evenodd" clipRule="evenodd" d="M12 21.1429C14.4249 21.1429 16.7504 20.1796 18.465 18.465C20.1796 16.7504 21.1429 14.4248 21.1429 12C21.1429 9.57517 20.1796 7.24965 18.465 5.53503C16.7504 3.82041 14.4249 2.85715 12 2.85715C9.5752 2.85715 7.24968 3.82041 5.53506 5.53503C3.82044 7.24965 2.85718 9.57517 2.85718 12C2.85718 14.4248 3.82044 16.7504 5.53506 18.465C7.24968 20.1796 9.5752 21.1429 12 21.1429Z" stroke="black" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className='fill-neutral-700 dark:fill-neutral-300' d="M9.14286 10.2857C9.77404 10.2857 10.2857 9.77404 10.2857 9.14286C10.2857 8.51167 9.77404 8 9.14286 8C8.51167 8 8 8.51167 8 9.14286C8 9.77404 8.51167 10.2857 9.14286 10.2857Z" fill="black"/>
                    <path className='fill-neutral-700 dark:fill-neutral-300' d="M14.8572 10.2857C15.4884 10.2857 16.0001 9.77404 16.0001 9.14286C16.0001 8.51167 15.4884 8 14.8572 8C14.226 8 13.7144 8.51167 13.7144 9.14286C13.7144 9.77404 14.226 10.2857 14.8572 10.2857Z" fill="black"/>
                    <path className='stroke-neutral-700 dark:stroke-neutral-300' d="M8.57141 15.4286C9.26055 13.9051 10.4034 13.1429 12 13.1429C13.5966 13.1429 14.7394 13.9051 15.4286 15.4286" stroke="black" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h6 className='m-0 text-lg text-neutral-700 dark:text-neutral-300'>Sick Leave</h6>
                </div>
                <ProgressBar value={25} classNames={{
                  base: 'max-w-sm',
                  track: "bg-[#D9D9D9] h-[8px]",
                  indicator: "bg-[#6B45BC]",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60"
                }} />
                <p className='m-0 text-sm text-red-600 font-bold'>4 Days <span className='text-neutral-600 dark:text-neutral-300'>Used</span> <span className='text-green-600'>12 Days Available</span></p>
              </div>
            </div>
          </div>
          <LeaveAttendanceTable />
        </div>
      </div>
    </div>
  )
}

export default MyLeave
