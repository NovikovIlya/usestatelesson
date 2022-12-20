import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const [users, setUsers] = React.useState();

  
  React.useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((json)=>setUsers(json));
  },[])


  console.log(users);
  

  return (
    <>

    {<ul>
      {users?.map((obj) => (
          <li key={obj.id}>{obj.name}🟢</li>
          ))
      }
      </ul>}
    </>
  )
}

export default App;
