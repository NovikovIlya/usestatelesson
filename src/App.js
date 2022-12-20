import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const [tasks, setTasks] = React.useState([{text: 'Тестовая задача'}]);

  function onClickAdd(){
    const text = prompt('Текст задачи');
    setTasks([...tasks, {text}]);
  }

  function onClickEdit(indexEl){
    const text = prompt('Новый текст задачи');
    
    setTasks(tasks.map(function(obj ,i, array){
      if (indexEl === i){
        obj.text = text;
      }
      return obj;
    }))
  }

  function onClickRemove(indexEl){
    setTasks(tasks.filter(function(all ,i, array){
     return i !== indexEl
    }))
  }

  function cns(){
    console.log(tasks)
  }
 



  

  return (
    <>
    {<ul>
      {tasks.map((task, indexEl) => (
          <li key={indexEl}>
            {task.text}
            <button onClick={()=> onClickEdit(indexEl)}>Edit</button>
            <button onClick={()=> onClickRemove(indexEl)}>Delete</button>
            </li> 
          ))
      }
      </ul>}
      <button onClick={onClickAdd}>Добавить</button>
      <button onClick={cns}>Тык</button>
    </>
  )
}

export default App;
