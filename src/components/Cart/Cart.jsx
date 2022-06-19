import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, deleteCart } from '../../redux/action'


const Cart = () => {
    const items = useSelector(e => e)
    const dispatch = useDispatch()
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0
        items.map(item => {
            total += item.price
        })
        setTotal(total)
    }, [items])

    return (
        <>
            <section>
                <h1 className="sr-only">Checkout</h1>

                <div className="relative mx-auto max-w-screen-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="py-12 bg-gray-50 md:py-24">
                            <div className="max-w-lg px-4 mx-auto lg:px-8">
                                <div className="mt-8">
                                    <p className="text-2xl font-medium tracking-tight">$ {(total).toFixed(2)}</p>
                                    <p className="mt-1 text-sm text-gray-500">For the purchase of</p>
                                </div>

                                <div className="mt-12">
                                    <div className="flow-root">
                                        <ul className="-my-4 divide-y divide-gray-200">
                                            {items.map((e) => {
                                                return <li className="flex items-center justify-between py-4">
                                                    <div className="flex items-start">
                                                        <img
                                                            className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                                                            src={e.images[0]}
                                                            alt=""
                                                        />

                                                        <div className="ml-4">
                                                            <p className="text-sm">{e.name}</p>

                                                            <dl className="mt-1 space-y-1 text-xs text-gray-500">
                                                                <div>
                                                                    <dt className="inline">Brand: </dt>
                                                                    <dd className="inline">{e.brand}</dd>
                                                                </div>

                                                                <div>
                                                                    <dt className="inline">Rating: </dt>
                                                                    <dd className="inline">{e.rating}</dd>
                                                                </div>
                                                            </dl>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p className="text-sm">
                                                            $ {e.price}
                                                        </p>
                                                        <button onClick={() => dispatch(deleteCart(e.id))} className="opacity-90 float-right" type="button">
                                                            <span className="sr-only"> Close </span>

                                                            <svg
                                                                className="w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                    clip-rule="evenodd"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </li>
                                            })}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-12 bg-white md:py-24">
                            <div className="max-w-lg px-4 mx-auto lg:px-8">
                                <div className="grid grid-cols-6 gap-4">
                                    <div className="col-span-3">
                                        <label className="block mb-1 text-sm text-gray-600" for="first_name">
                                            First Name
                                        </label>

                                        <input
                                            className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                            type="text"
                                            id="frst_name"
                                        />
                                    </div>

                                    <div className="col-span-3">
                                        <label className="block mb-1 text-sm text-gray-600" for="last_name">
                                            Last Name
                                        </label>

                                        <input
                                            className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                            type="text"
                                            id="last_name"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label className="block mb-1 text-sm text-gray-600" for="email">
                                            Email
                                        </label>

                                        <input
                                            className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label className="block mb-1 text-sm text-gray-600" for="phone">
                                            Phone
                                        </label>

                                        <input
                                            className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>

                                    <fieldset className="col-span-6">
                                        <legend className="block mb-1 text-sm text-gray-600">
                                            Card Details
                                        </legend>

                                        <div className="-space-y-px bg-white rounded-lg shadow-sm">
                                            <div>
                                                <label className="sr-only" for="card-number">Card Number</label>

                                                <input
                                                    className="border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                    type="text"
                                                    name="card-number"
                                                    id="card-number"
                                                    placeholder="Card number"
                                                />
                                            </div>

                                            <div className="flex -space-x-px">
                                                <div className="flex-1">
                                                    <label className="sr-only" for="card-expiration-date">
                                                        Expiration Date
                                                    </label>

                                                    <input
                                                        className="border-gray-200 relative rounded-bl-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                        type="text"
                                                        name="card-expiration-date"
                                                        id="card-expiration-date"
                                                        placeholder="MM / YY"
                                                    />
                                                </div>

                                                <div className="flex-1">
                                                    <label className="sr-only" for="card-cvc">CVC</label>

                                                    <input
                                                        className="border-gray-200 relative rounded-br-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                        type="text"
                                                        name="card-cvc"
                                                        id="card-cvc"
                                                        placeholder="CVC"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset className="col-span-6">
                                        <legend className="block mb-1 text-sm text-gray-600">
                                            Billing Address
                                        </legend>

                                        <div className="-space-y-px bg-white rounded-lg shadow-sm">
                                            <div>
                                                <label className="sr-only" for="country">Country</label>

                                                <select
                                                    className="border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5"
                                                    id="country"
                                                    name="country"
                                                    autocomplete="country-name"
                                                >
                                                    <option>England</option>
                                                    <option>Wales</option>
                                                    <option>Scotland</option>
                                                    <option>France</option>
                                                    <option>Belgium</option>
                                                    <option>Japan</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="sr-only" for="postal-code">
                                                    ZIP/Post Code
                                                </label>

                                                <input
                                                    className="border-gray-200 relative rounded-b-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autocomplete="postal-code"
                                                    placeholder="ZIP/Post Code"
                                                />
                                            </div>
                                        </div>
                                    </fieldset>

                                    <div className="col-span-6">
                                        <Link to='/success'><button
                                            className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                                            type="submit"
                                        >
                                            $ {(total).toFixed(2)} Pay Now
                                        </button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart