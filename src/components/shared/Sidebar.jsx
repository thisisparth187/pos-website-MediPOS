import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar flex flex-col fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-[#7B4019]'>

            <div className='text-gray-100 text-xl flex flex-col justify-between h-full'>

                <div>
                    <div className='p-2.5 mt-1 flex items-center'>
                        <i class="bi bi-fork-knife"></i>
                        <h1 className='font-bold text-gray-200 text-[30px] ml-3 my-5'>RestoPOS</h1>
                    </div>

                    <hr className='text-gray-50' />

                    <Link to="/dashboard">
                        <div className='p-1 mt-6 mr-5 ml-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#FFBF78]  text-white'>
                            <i class="bi bi-door-closed-fill"></i>
                            <span className='font-bold text-gray-200 text-[15px] ml-3 my-5 hover:text-[#7B4019]'>Dashboard</span>
                        </div>
                    </Link>

                    <Link to="/categories">
                        <div className='p-1 mt-6 mr-5 ml-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#FFBF78] text-white'>
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
