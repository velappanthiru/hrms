import React from 'react'
import Avatar from './ProfileAvatar'

const Card1 = ({
  className
}) => {
  return (
    <div className={`team-card flex gap-4 p-2 border border-1 border-gray-300 dark:border-neutral-600 rounded-lg cursor-pointer ${className}`}>
      <Avatar sizeClass="w-8 h-8 sm:w-10 sm:h-10 text-base" radius="rounded-full" containerClassName="border border-2 border-purple-900" />
      <div className="notification-content space-y-1 flex-1">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
          Eden Tuan
        </p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Product Designer
        </p>
      </div>
      <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 h-fit">Available</span>
    </div>
  )
}

export default Card1;
