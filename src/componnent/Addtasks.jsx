import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Addtasks(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [category, setCategory] = useState('')
    const [dedline, setDedline] = useState('')

    let nav = useNavigate()

    const add = () => {

        let titelinput = document.getElementById('titelinput')
        let descriptioninput = document.getElementById('descriptioninput')
        let statusinput = document.getElementById('statusinput')
        let categoryinput = document.getElementById('categoryinput')
        let titededlineinputlinput = document.getElementById('dedlineinput')

        if (title == '') {

            titelinput.value = 'ERROR'
            titelinput.style.color = 'red'
        }
        else if (description == '') {

            descriptioninput.value = 'ERROR'
            descriptioninput.style.color = 'red'
        }
        else if (status == '') {

            statusinput.value = 'ERROR'
            statusinput.style.color = 'red'
        }
        else if (category == '') {

            categoryinput.value = 'ERROR'
            categoryinput.style.color = 'red'
        }
        else if (dedline == '') {

            titededlineinputlinput.value = 'ERROR'
            titededlineinputlinput.style.color = 'red'
        }
        else {

            props.addtasks(title, description, status, category, dedline);
            nav('/')
        }

    }

    useEffect(() => {

        document.getElementById('titelinput').style.color = ''
        document.getElementById('descriptioninput').style.color = ''
        document.getElementById('statusinput').style.color = ''
        document.getElementById('categoryinput').style.color = ''
        document.getElementById('dedlineinput').style.color = ''

    })

    return (
        <div>
            <h1>Addtasks</h1>

            <input onChange={(e) => { setTitle(e.target.value) }} id='titelinput' type="text" placeholder='Enter Title' /><br />
            <input onChange={(e) => { setDescription(e.target.value) }} id='descriptioninput' type="text" placeholder='Enter Description' /><br />
            <input onChange={(e) => { setStatus(e.target.value) }} id='statusinput' type="text" placeholder='Enter Status' /><br />
            <input onChange={(e) => { setCategory(e.target.value) }} id='categoryinput' type="text" placeholder='Enter Category' /><br />
            <input onChange={(e) => { setDedline(e.target.value) }} id='dedlineinput' type="text" placeholder='Enter Dedline' /><br /><br />

            <button onClick={add}>Add Tasks</button>

        </div>
    )
}
