import React, {useState} from "react";

function TodoApp(){
    const[enteredText,setEnteredText]=useState('');

    const[counter,setCounter]=useState(1)
    // const handleEntered=(e)=>{
    //     setEnteredText(e.target.value)
    // }


    const[todo,setTodo]=useState([ ])
    //  console.log(enteredText,'enteredtext')

     const handleAddTodo =()=>{

        if(enteredText!=''){


        setTodo(
        [...todo,
            {

            id:counter,
            text :enteredText,
            isEditing : false,
            completed:false

            }
        ]
            
        )
        setCounter(counter+1)
        setEnteredText('')
    }
     }
     console.log(todo,'todos');
     
const handleDelete=(todoId)=>
{
  //  console.log(todoId,'id');

    const deleteTodo = todo.filter((each)=>each.id !== todoId)
   setTodo(deleteTodo)
    
    

}

// const handleCheckbox=(todoId)=>{
//     console.log(todoId,'id');

//     setTodo(
//         (each)=>{
//                each.map((eachTodo)=>eachTodo.id === todoId?{
//                 ...eachTodo,completed:!eachTodo.completed
//                }:eachTodo) 
            
//         }

//     )

// }




    return(
        <div className='text-center' style={{marginTop:'-300px' ,marginLeft:'400px'}} >
            <h1>Todo list CRUD</h1>

            <div className='d-flex'>
                <input type="text" 
                placeholder='enter the todo title'
                onChange={(e)=>setEnteredText(e.target.value)}
                value={enteredText}
                />

                <button className='btn btn-success' style={{marginLeft:'20px',backgroundColor:'green'}} onClick={handleAddTodo}>Add todo</button>
                </div>



               <div>
                {
                    todo.length === 0?
                    (
                    <h3>no todos available</h3>
                    ):
                    (
                        todo.map((each,index)=>(

                            <div  style={{marginTop:'20px'}} key={index}>
                            <input type='checkbox' 
                            checked = {each.completed}
                            onClick={()=>handleCheckbox(each.id)}
                           
                             />

                            <span>{each.text}</span>

                            <button style={{border:'2px black solid'}}>edit</button>
                            <button style={{marginLeft:'20px',border:'2px black solid'}}   onClick={()=>handleDelete(each.id)}> Delete</button>

                            </div>
                        ))

                    )


                }
               </div>




        </div>

    );
}

export default TodoApp;