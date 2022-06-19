import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header className="border-b border-gray-100 mb-10">
                <div
                    className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
                >
                    <div className="flex items-center">
                        <button type="button" className="p-2 sm:mr-4 lg:hidden">
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        <Link to='/' className="flex mr-10">
                            <img src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg" alt="" />
                            <span className="inline-block w-32 h-10 ">
                            </span>
                        </Link>
                        <nav
                            className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex"
                        >
                            <Link
                                to="/mens"
                                className="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-red-700 hover:border-current"
                            >
                                MENS
                            </Link>

                            <Link
                                to="/womens"
                                className="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-red-700 hover:border-current"
                            >
                                WOMENS
                            </Link>

                            <Link
                                to="/kids"
                                className="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-red-700 hover:border-current"
                            >
                                KIDS
                            </Link>

                            <div
                                className="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-red-700 hover:border-current"
                            >
                                BEAUTY
                            </div>
                            <div
                                className="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-red-700 hover:border-current"
                            >
                                HOME
                            </div>
                            <div
                                className="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-red-700 hover:border-current"
                            >
                                OFFERS
                            </div>
                        </nav>
                    </div>

                    <div className="flex items-center justify-end flex-1">


                        <div className="flex items-center ml-8">
                            <div
                                className="flex items-center border-gray-100 divide-x divide-gray-100 border-x"
                            >
                                <span>
                                    <Link
                                        to="/cart"
                                        className="block p-6 border-b-2 border-transparent hover:border-red-700"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            />
                                        </svg>

                                        <span className="sr-only">Cart</span>
                                    </Link>
                                </span>

                                <span>
                                    <Link
                                        to="/login"
                                        className="block p-6 border-b-2 border-transparent hover:border-red-700"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>

                                        <span className="sr-only"> Account </span>
                                    </Link>
                                </span>

                                <span className="hidden sm:block">
                                    <Link
                                        to="/search"
                                        className="block p-6 border-b-2 border-transparent hover:border-red-700"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>

                                        <span className="sr-only"> Search </span>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar