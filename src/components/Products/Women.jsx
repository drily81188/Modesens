import React from 'react'
import { Link } from 'react-router-dom'
import { womensdata } from '../ProductData/dataBase'

const Women = () => {
    return (
        <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(4,auto)' }}>
            {womensdata.map((e) => {
                return <Link to={`/womens/${e.id}`}>
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

export default Women