import React, { useEffect, useState } from "react";
import{BrowserRouter, Routes ,Route} from 'react-router-dom';
import Products from "./Products";
import Login from "./Login";
import ProductDetail from "./ProductDetail";
import TodoApp from "./TodoApp";


function App(){
  const[products,setProducts]=useState([]);
  const[loading, setLoading]=useState(false);

  const fetchdata=async()=>{
    setLoading(true);
    const response=await fetch("https://fakestoreapi.com/products");

    const data = await response.json();
    setProducts(data);

    setLoading(false);
  };

useEffect(()=>{
  fetchdata();
},[]);



  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/products" element={<Products test={products}/>} />

      <Route path="/products/:id" 
      element={<ProductDetail product={products}/>}
      />

      <Route path='/todo' element={<TodoApp/>} />
         
    </Routes>
    </BrowserRouter>
  );
}
export default App;





















// import { useEffect,useState} from "react";
// function App(){
//   const [todos,setTodos]=useState([])

//   function fetchTools(){
//     fetch('https://fakestoreapi.com/products')
//     .then((response)=>response.json()).then((data)=>{
//     setTodos(data.slice(0,5))
//     })

//   }

//   console.log(todos);

//   useEffect(()=>{
// fetchTools()
//   },[])
  
//   return(
//     <div>
//       <h1>Products</h1>
//       {/* <button onClick={fetchTools}>fetch tools</button> */}

        
//       <div>
//         {todos.map ((todos,index)=>(
//           <div key={index}>
            
//           <div>
//             {todos.title}
//            </div>
//            <div>
//             <img src={todos.image} alt="" style={{width:"100px",height:"100px"}} />
//            </div>
//            <h3>${todos.price}</h3>
//            <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
//             <button className="btn btn-warning" style={{flex:'1', marginRight:'5px'}}>Add to cart</button>
//             <button className="btn btn-sucess" style={{flex:'1'}}>Buy now</button>
//            </div>

//           </div>
//         ))}
//       </div>
    
//     </div>
//   );
// }
// export default App;

















// import { useEffect,useState} from "react";
// function App(){


//   // let counter=0;

//   // function changeCounter()
//   // {
//   //   counter=4
//   //   console.log(counter,'counter');
    

//   // }

//   const [counter,setCounter]=useState(0)

//   function IncrementCounter(){
//     console.log(counter,'triggered')
   
//     setCounter(counter+1)
//   }

//   function DecCounter(){
//     console.log(counter,'triggered')
   
//     setCounter(counter-1)
//   }
//   function reSetCounter(){
//     console.log(counter,'triggered')
   
//     setCounter(0)
//   }

//   return(
//     <div>
//     <h1>counter:{counter}</h1>
//     <button onClick={IncrementCounter}>Increment</button>
//     <button onClick={DecCounter}>Decrement</button>
//     <button onClick={reSetCounter}>Reset</button>

//     </div>
//   );
// }
// export default App;








// function App()
// {
//     const[windowSize,setWindowsize]=useEffect({
//       width:window.innerWidth,
//       height:window.innerHeight
//     })

//     useEffect(()=>{
//       const handleResize=()=>{
//         setWindowsize({
//           width:window.innerWidth,
//           height:window.innerHeight
        
//       })
//       }
//       window.addEventListener('resize', handleResize)

//       return(
//         window.removeEventListener('resize',handleResize)
//       )
//     },[])
    

//     return (
//         <div>
//           <h1>window size tracker</h1>
//           <p>width:{windowSize.width}</p>
//           <p>height:{windowSize.height}</p>
//         </div>
    
//       );
    
//     }
//     export default App;

