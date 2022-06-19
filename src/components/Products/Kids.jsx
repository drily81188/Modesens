import React from 'react'
import { Link } from 'react-router-dom'
import { kidsdata } from '../ProductData/dataBase'

const Kids = () => {
    return (
        <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(4,auto)' }}>
            {kidsdata.map((e) => {
                return <Link to={`/kids/${e.id}`}>
                    <div className="card w-72 h-96 mb-10 bg-base-100 shadow-xl">
                        <figure><img width='50%' src={e.images[0]} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {e.brand}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{e.name}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{e.price}</div>
                                <div className="badge badge-outline line-through">{e.origPrice}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            })}
        </div>)
}

export default Kids