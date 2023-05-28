import React, { useState } from 'react'
import Editinput from './Editinput'

export default function Edittasks(props) {

  const [serachEdit, setSerachEdit] = useState([])
  const [show, setShow] = useState(false)
  const [input, setInput] = useState('')
  const [value, setValue] = useState({})


  const findtaks = (input) => {

    if (input == '') {

      setSerachEdit([])
      return
    }
    else {

      let result = props.taskslist.filter((val) => (val.title.toLowerCase().indexOf(input) !== -1))
      setSerachEdit(result)
    }
  }


  const showMenu = () => {
    if (show) {
      let result = props.taskslist.findIndex((element) => (element == value))
      props.setEditIndex(result)
      return <Editinput taskslist={props.taskslist} result={result} show={show} edit={props.edit} />
    }

  }



  return (
    <div>
      <h1>Edittasks</h1>

      <input onChange={(e) => { setInput(e.target.value) }} type="text" placeholder='Search tasks...' />
      <button onClick={() => { findtaks(input) }}>Serach</button>
      {serachEdit.map((val) => {
        return <div>
          <div className='tasksdiv' onClick={() => { setShow(!show); setValue(val) }} style={{ border: 'solid 2px black' }}>
            <p >Title: {val.title} </p>
            <p>Description: {val.description}</p>
            <p>Status: {val.status}</p>
            <p>Category: {val.category}</p>
            <p>Dedline: {val.dedline}</p>
          </div>
        </div>
      })}
      {showMenu()}
    </div>
  )
}
