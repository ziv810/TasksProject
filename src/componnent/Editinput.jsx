import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Editinput(props) {

    let nav = useNavigate()

    useEffect(() => {

        document.getElementById('title').value = props.taskslist[props.result].title
        document.getElementById('description').value = props.taskslist[props.result].description
        document.getElementById('status').value = props.taskslist[props.result].status
        document.getElementById('category').value = props.taskslist[props.result].category
        document.getElementById('dedline').value = props.taskslist[props.result].dedline
    })


    const edit = () => {

        let title = document.getElementById('title').value
        let description = document.getElementById('description').value
        let status = document.getElementById('status').value
        let category = document.getElementById('category').value
        let dedline = document.getElementById('dedline').value


        if (title == '' || description == '' || status == '' || category == '' || dedline == '') {

            return
        }
        else {

            props.edit(title, description, status, category, dedline)
            nav('/')
        }
    }


    return (
        <div >
            <h1>Editinput</h1>

            <input type="text" id="title" /><br />
            <input type="text" id="description" /><br />
            <input type="text" id="status" /><br />
            <input type="text" id="category" /><br />
            <input type="text" id="dedline" /><br /><br />

            <button onClick={edit}>Edit</button>

        </div>
    )
}
