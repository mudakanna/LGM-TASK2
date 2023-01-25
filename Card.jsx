import React from 'react'
import '../CSS/Card.css'

function Card(props) {
    let url=`mailto:${props.email}`;
    return (
        <>
            <div className="content">
                <div className="avtar">
                    <img src={props.img} alt="" />
                </div>
                <div className="data">
                    <div className="name">
                        <span>{props.first_name}  {props.last_name}</span>
                    </div>

                    <a href={url}><span>{props.email}</span></a>
                </div>

            </div>
        </>
    )
}

export default Card