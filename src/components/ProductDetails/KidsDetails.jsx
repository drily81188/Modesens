import React from 'react'
import { useParams } from 'react-router-dom'
import { kidsdata } from '../ProductData/dataBase'
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/action'

const KidsDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = kidsdata.find(e => e.id == id)

    return (
        <section>
            <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
                <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <div className="aspect-w-1 aspect-h-1">
                            <img
                                alt="Mobile Phone Stand"
                                className="object-cover rounded-xl"
                                src={product.images[0]}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 lg:mt-4">
                            {product.images.map((e) => {
                                return (
                                    <div className="aspect-w-1 aspect-h-1">
                                        <img
                                            alt="Mobile Phone Stand"
                                            className="object-cover rounded-xl"
                                            src={e}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="sticky top-0">
                        <strong className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600"> Pre Order </strong>

                        <div className="flex justify-between mt-8">
                            <div className="max-w-[35ch]">
                                <h1 className="text-2xl font-bold">
                                    {product.name}
                                </h1>

                                <p className="mt-0.5 text-sm">
                                    {product.rating}
                                </p>

                                <div className="flex mt-2 -ml-0.5">
                                    <svg
                                        className="w-5 h-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg
                                        className="w-5 h-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg
                                        className="w-5 h-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg
                                        className="w-5 h-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg
                                        className="w-5 h-5 text-gray-200"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>

                            <p className="text-lg font-bold">
                                $ {product.price} -  <b className='line-through'>$ {product.origPrice}</b>
                            </p>
                        </div>

                        <div className="relative mt-4 group">
                            <div>
                                <div className="prose max-w-none ">
                                    <p>
                                        {product.description}
                                    </p>
                                </div>

                            </div>


                        </div>

                        <div className="mt-8">
                            <fieldset>
                                <legend className="mb-1 text-sm font-medium">Brand</legend>

                                <div className="flow-root">
                                    <div className="flex flex-wrap -m-0.5">
                                        <label for="color_tt" className="cursor-pointer p-0.5">
                                            <input type="radio" name="color" id="color_tt" className="sr-only peer" />

                                            <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                                                {product.brand}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset className="mt-4">
                                <legend className="mb-1 text-sm font-medium">Size</legend>

                                <div className="flow-root">
                                    <div className="flex flex-wrap -m-0.5">
                                        <label for="size_xs" className="cursor-pointer p-0.5">
                                            <input type="radio" name="size" id="size_xs" className="sr-only peer" />

                                            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                                                XS
                                            </span>
                                        </label>

                                        <label for="size_s" className="cursor-pointer p-0.5">
                                            <input type="radio" name="size" id="size_s" className="sr-only peer" />

                                            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                                                S
                                            </span>
                                        </label>

                                        <label for="size_m" className="cursor-pointer p-0.5">
                                            <input type="radio" name="size" id="size_m" className="sr-only peer" />

                                            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                                                M
                                            </span>
                                        </label>

                                        <label for="size_l" className="cursor-pointer p-0.5">
                                            <input type="radio" name="size" id="size_l" className="sr-only peer" />

                                            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                                                L
                                            </span>
                                        </label>

                                        <label for="size_xl" className="cursor-pointer p-0.5">
                                            <input type="radio" name="size" id="size_xl" className="sr-only peer" />

                                            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                                                XL
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>

                            <div className="flex mt-8">
                                <div>
                                    <label for="quantity" className="sr-only">Qty</label>

                                    <input
                                        type="number"
                                        id="quantity"
                                        min="1"
                                        placeholder='0'
                                        className="w-12 py-3 text-xs text-center border-gray-200 rounded no-spinners"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                                    onClick={() => dispatch(addCart(product))}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KidsDetails