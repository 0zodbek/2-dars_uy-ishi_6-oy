import React from 'react'

function Card(props) {
    const { data } = props;

    return (
        <div className="card">

            <img src="https://picsum.photos/200?random=1" alt="bu yerda rasm" />

            <div className="part_info">

                <h2>{data.name}</h2>

                <div className="phone_email_wrapper"><h3>{data.phone},{data.email}  email:Therese.Boehm3@gmail.com</h3></div>

                <h3 className="address">{data.address}</h3>

                <h3 className="name">{data.cars}</h3>

            </div>

        </div>
    )
}

export default Card