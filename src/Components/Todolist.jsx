import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
const Todolist = () => {
    const [todo, setTodo]=useState('enter the data');
    const [name, setName]=useState('');
    const [db,setDb]=useState([]);
    // Data posting 
    function button()
    {
      axios.post(" http://localhost:3000/posts",{todo,name})
      .then(()=>{
        alert("data has been posted")
        setTodo('')
        setName('')
      })
      .catch(()=>{
        alert("data has not been posted")
      })
    }

    function Get()
    {
      axios.get("http://localhost:3000/posts")
      .then((response)=>{
        setDb(response.data)
        alert("data has been retrieved")
        setTodo('')
        setName('')
      })
      .catch(()=>{
        alert("data has not been retrieved")
      })
    }

    function updateData(id,data)
    {
      axios.put(`http://localhost:3000/posts/${id}`,{todo:data})
      .then(()=>{
        console.log("data updated");
        Get();
      })
      .catch(()=>{
           console.log("data cannot update");
      })
    }

    function newData(id)
    {
      const data=prompt("Enter the new data")
      updateData(id,data);
    }
    
    function deleteData(id,data)
    {
      axios.delete(`http://localhost:3000/posts/${id}`,{todo:data})
      .then(()=>{
        console.log("data deleted");
        getData();
      })
      .catch(()=>{
           console.log("data not deleted");
      });
    }

 console.log(db)

  return (
    <div>   
         <p>{todo}</p>
         <TextField id="outlined-basic" label="Todo" variant="outlined" value={todo}  onChange={(ref)=>setTodo(ref.target.value)}/>
         <p>{name}</p>
         <TextField id="outlined-basic" label="Name" variant="outlined" value={name}  onChange={(ref)=>setName(ref.target.value)}/>
         <br></br>
         <br></br>
         <br></br>
         <hr></hr>
        <center> <Button variant="contained" onClick={button}>submit</Button>  </center>
        <br></br>
        <center> <Button variant="contained" onClick={Get}>Get</Button>  </center>
        <div>
          <ul>
            {
              db.map((item)=>(
                <li key={item.id}>{item.todo}<button onClick={()=>newData(item.id)}>Edit</button><br></br>
                <button onClick={()=> deleteData(item.id)}>Delete</button></li>
              ))
            }
          </ul>
          <ul>
            {
              db.map((item)=>(
                <li key={item.id}>{item.name}<button onClick={() => newData(item.name)}>Edit</button></li>
              ))
            }
          </ul>
        </div>

   </div>
  )
}

export default Todolist