import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar flex flex-col fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900'>

            <div className='text-gray-100 text-xl flex flex-col justify-between h-full'>

                <div>
                    <div className='p-2.5 mt-1 flex items-center'>
                        <svg className='my-5' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-capsule" viewBox="0 0 16 16">
                            <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z" />
                        </svg>
                        <h1 className='font-bold text-gray-200 text-[30px] ml-3 my-5'>MediPOS</h1>
                    </div>

                    <hr className='text-gray-50' />

                    <Link to="/dashboard">
                        <div className='p-1 mt-6 mr-5 ml-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-400 text-white'>
                            <i class="bi bi-door-closed-fill"></i>
                            <span className='font-bold text-gray-200 text-[15px] ml-3 my-5'>Dashboard</span>
                        </div>
                    </Link>

                    <Link to="/categories">
                        <div className='p-1 mt-6 mr-5 ml-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-400 text-white'>
                            <i class="bi bi-bag-fill"></i>
                            <span className='font-bold text-gray-200 text-[15px] ml-3 my-5'>Categories</span>
                        </div>
                    </Link>
                </div>

                <div className='p-2.5 self-baseline mt-1 mb-6 items-center '>
                    <span className='font-bold text-gray-200 text-[15px] ml-3 my-5'>John</span>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
