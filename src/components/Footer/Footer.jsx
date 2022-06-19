import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="bg-gray-50 mt-10 mb-10">
                <div class="max-w-screen-xl border-t-2 border-b-2 border-black px-4 py-16 mx-auto sm:px-6 lg:px-8 ">

                    <div class="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p class="font-medium">
                                CUSTOMER CARE
                            </p>

                            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <span class="hover:opacity-75 cursor-pointer"> Shopper Protection </span>
                                <span class="hover:opacity-75 cursor-pointer"> Loyalty Program </span>
                                <span class="hover:opacity-75 cursor-pointer"> Help Center </span>
                                <span class="hover:opacity-75 cursor-pointer"> Size Guides </span>
                                <span class="hover:opacity-75 cursor-pointer"> Contact Us / Feedback </span>
                                <span class="hover:opacity-75 cursor-pointer"> Shipping / Returnss </span>
                            </nav>
                        </div>

                        <div>
                            <p class="font-medium">
                                INFORMATION
                            </p>

                            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <span class="hover:opacity-75 cursor-pointer"> About Us </span>
                                <span class="hover:opacity-75 cursor-pointer"> Influencer Program </span>
                                <span class="hover:opacity-75 cursor-pointer"> Partner Stores </span>
                                <span class="hover:opacity-75 cursor-pointer"> Sitemap </span>
                            </nav>
                        </div>

                        <div>
                            <p class="font-medium">
                                LEGAL
                            </p>

                            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <span class="hover:opacity-75 cursor-pointer"> Terms Of Use </span>
                                <span class="hover:opacity-75 cursor-pointer"> Disclosure </span>
                                <span class="hover:opacity-75 cursor-pointer"> Privacy Policy </span>
                                <span class="hover:opacity-75 cursor-pointer"> Community Guidelines </span>
                            </nav>
                        </div>

                        <div>
                            <p class="font-medium">
                                CONNECT WITH US
                            </p>

                            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <span class="hover:opacity-75"> Modesens App for IOS and Android  </span>
                                <span class="hover:opacity-75"> Add to Browser  </span>
                            </nav>
                        </div>
                    </div>

                    <div class="pt-8 mt-8 border-t border-gray-100 sm:items-center sm:justify-between sm:flex">
                        <p class="text-xs text-gray-500">
                            &copy; 2022 Company Name
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer