import React, { useEffect, useState } from 'react'
import Sawo from 'sawo'
import Link from 'next/link'

const LoginPage = () => {
    // const [email, setEmail] = useState("");

    // useEffect(() => {
    //     var config = {
    //         // should be same as the id of the container created on 3rd step
    //         containerID: 'sawo-container',
    //         // can be one of 'email' or 'phone_number_sms'
    //         identifierType: 'email',
    //         // Add the API key copied from 5th step
    //         apiKey: '56e01932-b379-4953-8c4a-80c9ad56db91',
    //         // Add a callback here to handle the payload sent by sdk
    //         onSuccess: payload => {
    //             setEmail(payload.identifier);
    //         },
    //     }
    //     let sawo = new Sawo(config)
    //     sawo.showForm()
    // }, [])

    return (
        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
            <div
                className="flex flex-col overflow-hidden bg-gray-100 bg-opacity-10 rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
            >
                <div
                    className="p-4 py-6 text-black bg-back1 bg-fill bg-no-repeat bg-center md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                >
                    <div className="bg-gray-200 backdrop-filter bg-opacity-50">
                    <div className="my-6 text-4xl font-bold tracking-wider text-center">
                        <a href="#">FarmsConnect
                        </a>
                    </div>

                    <p className="mt-6 font-normal text-center text-black md:mt-0">
                    One Stop Place For Farmers where you can connect with other farmers , Track your crops , get direct exposure to market , You can predict your crop disease , Get instant support from our AI trained bot , Stay Updated About Goverment Schemes and agriculture news and get weather forecasting report based on your location
                    </p>
                    
                    <p className="flex flex-col items-center justify-center mt-10 text-center">
                        <span>Dont have an account?</span>
                        <Link href="/signup" className="underline">Get Started!</Link>
                    </p>
                    
                    <p className="mt-6 text-sm text-center text-black">
                        Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
                    </p>
                    </div>
                    
                    
                </div>
                <div className="p-5 bg-white md:flex-1">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
                    <form action="#" className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                            <input
                                type="email"
                                id="email"
                                pattern="[A-Za-z0-9]{1,20}"
                                autoFocus
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                                <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                pattern="[A-Za-z0-9]{1,20}"
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <Link href="/home">
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                >
                                    Log in
                                </button>
                            </Link>

                        </div>
                        
                        {/* <div className="flex flex-col space-y-5">
                            <span className="flex items-center justify-center space-x-2">
                                <span className="h-px bg-gray-400 w-14"></span>
                                <span className="font-normal text-gray-500">or login with</span>
                                <span className="h-px bg-gray-400 w-14"></span>
                            </span>
                            <div className="flex flex-col space-y-4">

                                <a
                                    href="#"
                                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                >
                                    <span>
                                        <svg className="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm font-medium text-blue-500 group-hover:text-white">Twitter</span>
                                </a>
                            </div>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage