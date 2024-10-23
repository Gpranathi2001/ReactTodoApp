import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products(props) {
  const products = props.test;

 
  return (
    <>
      <div className="container">
        <h1 className="text-center">products</h1>

        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-3 mb-4">
              <div
                style={{
                  border: "2px solid grey",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                <div>
                  <img
                    src={product.image}
                    style={{ width: "150px", height: "150px" }}
                    alt={product.title}
                  />
                </div>
                <Link to={`/products/${product.id}`}>
                  {product.title.length > 25
                    ? `${product.title.substring(0, 20)}`
                    : product.title}
                </Link>

                <h3>${product.price}</h3>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <button
                    className="btn btn-warning"
                    style={{ flex: "1", marginRight: "3px" }}
                  >
                    Add to Cart
                  </button>
                  <button className="btn btn-success" style={{ flex: "1" }}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;























// import React, { useState,useEffect } from "react";


// function Products(props){
//   const products=props.test;
//     // const[todos,setTodos]=useState([])
//     // function fetchTools(){
//     //     fetch('https://fakestoreapi.com/products')
//     //     .then((response)=>response.json()).then((data)=>{
//     //     setTodos(data.slice(0,5))
//     //     })
    
      

//       useEffect(()=>{
//         fetchTools()
//           },[])
            
    
//     return(
//         <div>
//             <div>
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

//         </div>
//     )
// }
// export default Products;