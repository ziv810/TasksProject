import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='menudiv'>

            <Link to={'/'}><button>Tasks</button></Link>
            <Link to={'/favourites'}><button>Favourites</button></Link>
            <Link to={'/addtasks'}><button>Addtasks</button></Link>
            <Link to={'/edittasks'}><button>Edittasks</button></Link>

        </div>
    )
}
