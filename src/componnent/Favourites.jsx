import React from 'react'

export default function Favourites(props) {
    return (
        <div>
            <h1>Favourites</h1>

            {props.favouriteslist.map((val,index) => {

                return <div className='tasksdiv' style={{ border: 'solid 2px black' }}>

                    <p>Title: {val.title}</p>
                    <p>Description: {val.description}</p>
                    <p>Status: {val.status}</p>
                    <p>Category: {val.category}</p>
                    <p>Dedline: {val.dedline}</p>

                </div>
            })}

        </div>
    )
}
