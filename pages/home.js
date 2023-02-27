import React from 'react'
import Image from 'next/image'
const home = () => {
    return (
        <>
            <section className="bg-gray-200">
                <div className="container max-w-full mx-auto py-12 px-6">
                    <h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
                        Nft Pricing
                    </h1>
                    <p className="text-center text-lg text-gray-700 mt-2 px-6">
                        FarmsConnect pricing and NFT
                    </p>
                    <div className="h-1 mx-auto bg-gray-800 w-24 opacity-75 mt-4 rounded"></div>

                    <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
                        <div className="relative block flex flex-col md:flex-row items-center">
                            <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                                <div className="flex items-center text-white justify-center">
                                    <div className="my-10 w-72 bg-gray-800 p-5 rounded-md shadow-xl">
                                        {/* <img src="https://miro.medium.com/max/1200/1*qGqMY0LcqT1xgdz0z9r8EA.png" alt="BAYC Ape" /> */}
                                        <Image
                                            className="h-8 rounded-md w-8"
                                            src="/img2.jpeg"
                                            alt="Workflow"
                                            width={300}
                                            height={205}
                                        />
                                        <h2 className="text-md font-bold mt-3">potato</h2>
                                        <p className="text-gray-400 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <div className="flex justify-between items-center text-sm">
                                            <p className="text-cyan-400 font-bold">
                                                <i className="fab fa-ethereum"></i> 70.1 ETH
                                            </p>
                                            <p className="text-gray-400">
                                                <i className="fas fa-clock"></i> 3 days left
                                            </p>
                                        </div>
                                        <p className="bg-gray-600 h-[0.5px] w-full my-2"></p>
                                        {/* <div className="flex items-center">
                    <img src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="BAYC" className="h-8 w-8 border border-white rounded-full mr-2"/>
                      <p className="text-gray-400 text-[12px]">
                        Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                          className="text-white font-bold">Bored Ape Yatch Club</a>
                      </p>
                  </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-gray-800 rounded-lg shadow-lg">
                                <div className="flex items-center text-white justify-center">
                                    <div className="my-10 w-80 bg-gray-800 p-5 rounded-md shadow-xl">
                                        {/* <img src="https://miro.medium.com/max/1200/1*qGqMY0LcqT1xgdz0z9r8EA.png" alt="BAYC Ape" /> */}
                                        <Image
                                            className="h-8 rounded-md w-14"
                                            src="/img1.jpeg"
                                            alt="Workflow"
                                            width={400}
                                            height={300}
                                        />
                                        <h2 className="text-md font-bold mt-3">BAYC Ape</h2>
                                        <p className="text-gray-400 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <div className="flex justify-between items-center text-sm">
                                            <p className="text-cyan-400 font-bold">
                                                <i className="fab fa-ethereum"></i> 70.1 ETH
                                            </p>
                                            <p className="text-gray-400">
                                                <i className="fas fa-clock"></i> 3 days left
                                            </p>
                                        </div>
                                        <p className="bg-gray-600 h-[0.5px] w-full my-2"></p>
                                        {/* <div className="flex items-center">
                    <img src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="BAYC" className="h-8 w-8 border border-white rounded-full mr-2"/>
                      <p className="text-gray-400 text-[12px]">
                        Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                          className="text-white font-bold">Bored Ape Yatch Club</a>
                      </p>
                  </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                                <div className="flex items-center text-white justify-center">
                                    <div className="my-10 w-72 bg-gray-800 p-5 rounded-md shadow-xl">
                                        {/* <img src="https://miro.medium.com/max/1200/1*qGqMY0LcqT1xgdz0z9r8EA.png" alt="BAYC Ape" /> */}
                                        <Image
                                            className="h-8 rounded-md w-8"
                                            src="/img3.jpeg"
                                            alt="Workflow"
                                            width={300}
                                            height={205}
                                        />
                                        <h2 className="text-md font-bold mt-3">apple</h2>
                                        <p className="text-gray-400 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <div className="flex justify-between items-center text-sm">
                                            <p className="text-cyan-400 font-bold">
                                                <i className="fab fa-ethereum"></i> 70.1 ETH
                                            </p>
                                            <p className="text-gray-400">
                                                <i className="fas fa-clock"></i> 3 days left
                                            </p>
                                        </div>
                                        <p className="bg-gray-600 h-[0.5px] w-full my-2"></p>
                                        {/* <div className="flex items-center">
                    <img src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="BAYC" className="h-8 w-8 border border-white rounded-full mr-2"/>
                      <p className="text-gray-400 text-[12px]">
                        Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                          className="text-white font-bold">Bored Ape Yatch Club</a>
                      </p>
                  </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123115.06821493908!2d75.0391066900113!3d15.357743006370821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d6d3a2090b17%3A0xae803e207113397!2sHubballi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1677349155866!5m2!1sen!2sin" width="600" height="450" style={{border: "0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</p> */}
            </section>
        </>
    )
}

export default home