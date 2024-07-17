import React from 'react'
import './index.css'
function Card(props) {
        const {data} = props;
        console.log(data.firstname);
    return (
        <div className="card">
            <img src={data.image} alt="bu yerda rasm" />
            <div className="part_info">
                <h2>{data.firstName}  {data.lastName}</h2>
                <h2>{data.name}</h2><br />
                <div className="phone_email_wrapper"><h3>{data.phone} <br /> {data.email}</h3></div><br />
                {/* <h3 className="address">{data.address}</h3> */}
                <h3 className="name">{data.cars[0]}  {data.cars[1]}  {data.cars[2]}</h3><br />
            </div>
        </div>
    )
}

export default Card