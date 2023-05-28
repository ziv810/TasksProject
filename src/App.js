import { HashRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Menu from './componnent/Menu';
import Tasks from './componnent/Tasks';
import Favourites from './componnent/Favourites';
import Addtasks from './componnent/Addtasks';
import Edittasks from './componnent/Edittasks';

function App() {

  const [taskslist, setTaskslist] = useState([])

  const [favouriteslist, setFavouriteslist] = useState([])

  const [searchtasks, setSearchtasks] = useState([])

  const [editIndex, setEditIndex] = useState(0)



  const addtasks = (title, description, status, category, dedline) => {

    setTaskslist([...taskslist, { title, description, status, category, dedline, color: '' }])

    setSearchtasks([...taskslist, { title, description, status, category, dedline, color: '' }])
  }



  const addFavourites = (val, index) => {

    let result = favouriteslist.find((element) => (element === val))

    if (result === undefined) {

      taskslist[index].color = 'green'
      setFavouriteslist([...favouriteslist, val])

    } else {

      let result2 = favouriteslist.filter((element) => (element !== val))
      taskslist[index].color = ''
      setFavouriteslist(result2)
    }
  }


  const findtaks = (event) => {

    let result = taskslist.filter((val) => (val.title.toLowerCase().indexOf(event.toLowerCase()) !== -1))

    setSearchtasks(result)
  }


  const edit = (title, description, status, category, dedline) => {

    taskslist[editIndex].title = title
    taskslist[editIndex].description = description
    taskslist[editIndex].status = status
    taskslist[editIndex].category = category
    taskslist[editIndex].dedline = dedline

    setTaskslist([...taskslist])
    setSearchtasks([...taskslist])
  }



  return (
    <div className="App">

      <HashRouter>
        <Menu />
        <Routes>

          <Route path='/' element={<Tasks addFavourites={addFavourites} findtaks={findtaks} searchtasks={searchtasks} />} />
          <Route path='/favourites' element={<Favourites favouriteslist={favouriteslist} />} />
          <Route path='/addtasks' element={<Addtasks addtasks={addtasks} />} />
          <Route path='/edittasks' element={<Edittasks taskslist={taskslist} setEditIndex={setEditIndex} edit={edit} />} />

        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;