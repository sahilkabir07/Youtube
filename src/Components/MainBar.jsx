import React from 'react'

const MainBar = () => {
  return (
    <div>
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800"></a>
		</div>
		<a rel="noopener noreferrer" href="#"></a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">My First Video</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
    </div>
  )
}

export default MainBar