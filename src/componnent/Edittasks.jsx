import React, { useState } from 'react'
import Editinput from './Editinput'

export default function Edittasks(props) {

  const [serachEdit, setSerachEdit] = useState([])

  const [show, setShow] = useState(false)

  const [input, setInput] = useState('')


  const findtaks = (input) => {

    let result = props.taskslist.filter((val) => (val.title.toLowerCase().indexOf(input) !== -1))

    setSerachEdit(result)
  }


  const showMenu = (val) => {

    if (show) {

      let result = props.taskslist.findIndex((element) => (element == val))
      props.setEditIndex(result)

      return <Editinput val={val} show={show} edit={props.edit} />
    }
  }



  return (
    <div>
      <h1>Edittasks</h1>

      <input onChange={(e) => { setInput(e.target.value) }} type="text" placeholder='Search tasks...' />
      <button onClick={() => { findtaks(input) }}>Serach</button>

      {serachEdit.map((val) => {

        return <div>

          <div className='tasksdiv' onClick={() => { setShow(!show) }} style={{border:'solid 2px black'}}>
            <p >Title: {val.title} </p>
            <p>Description: {val.description}</p>
            <p>Status: {val.status}</p>
            <p>Category: {val.category}</p>
            <p>Dedline: {val.dedline}</p>
          </div>

          {showMenu(val)}

        </div>
      })}

    </div>
  )
}
