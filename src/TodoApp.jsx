import React, {useState} from "react";

function TodoApp(){
    const[enteredText,setEnteredText]=useState('');

    const[updateTodo,setUpdateTodo]=useState('');


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

const handleCheckbox=(todoId)=>{
    console.log(todoId,'id');

    const updateComplete =todo.map((eachTodo)=> eachTodo.id == todoId ? 
    {...eachTodo,completed:!eachTodo.completed}:eachTodo)

    setTodo(updateComplete)

}


const handleEdit=(todoId,currentText)=>{
     
    const updateEdit =todo.map((eachTodo)=> eachTodo.id == todoId ? 
    {...eachTodo,isEditing:!eachTodo.isEditing}:eachTodo)
    setUpdateTodo(currentText);
    setUpdateTodo('')

    setTodo(updateEdit)

}

const handleSave=(todoId)=>{

    const updateSave =todo.map((eachTodo)=> eachTodo.id == todoId ? 
    {...eachTodo,isEditing: false,text:updateTodo}:eachTodo)

    setTodo(updateSave)
}



    return(
        <div className='text-center mt-2'  >
            <h1>Todo list CRUD</h1>

            <div className='d-flex justify-content-center' >
                <input type="text" 
                placeholder='enter the todo title'
                onChange={(e)=>setEnteredText(e.target.value)}
                value={enteredText}
                />

                <button className='btn btn-success'  onClick={handleAddTodo}>Add todo</button>
                </div>



               <div>
                {
                    todo.length === 0?
                    (
                    <h3>no todos available</h3>
                    ):
                    (
                        todo.map((each,index)=>(

                            <div  className='my-3'  key={index}>
                            <input type='checkbox' 
                            checked = {each.completed}
                            placeholder='enter the todo title'
                            onClick={()=>handleCheckbox(each.id)}
                            onChange={(e)=>setEnteredText(e.target.value)}


                           
                             />


                             {
                                each.isEditing ?(
                                    <input type='text'
                                     value={updateTodo}
                                     onChange={(e)=>setUpdateTodo(e.target.value)}
                                     
                                   />

                                ):(
                                    <span>{each.text}</span>

                                )
                             }



                            {
                                each.isEditing ?(
                                    <button onClick={()=>handleSave(each.id)}>Save</button>
                                ):(
                                    <button onClick={()=>handleEdit(each.id)}>edit</button>


                                )
                            }

                            <button  onClick={()=>handleDelete(each.id)}> Delete</button>

                            </div>
                        ))

                    )


                }
               </div>




        </div>

    );
}

export default TodoApp;