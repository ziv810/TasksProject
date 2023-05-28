import React from 'react'

export default function Tasks(props) {


    return (
        <div>
            <h1> Tasks</h1>

            <input onChange={(e) => { props.findtaks(e.target.value) }} type="text" placeholder='Search tasks...' />

            {props.searchtasks.map((val, index) => {

                return <div className='tasksdiv' style={{ border: 'solid 2px black' }}>

                    <p>Title: {val.title}</p>
                    <p>Description: {val.description}</p>
                    <p>Status: {val.status}</p>
                    <p>Category: {val.category}</p>
                    <p>Dedline: {val.dedline}</p>
                    <button style={{ backgroundColor: val.color, border: '0px' }} onClick={() => { props.addFavourites(val, index) }}>X</button>

                </div>
            })}

        </div>
    )
}
