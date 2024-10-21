import { useEffect,useState} from "react";

function App()
{
    const[products,setProducts] = useEffect([])

    const fetchdata  =async()=>
    {
      fetch('https://fakestoreapi.com/products')
      .then((response)=>response.json()).then((data)=>{
        setProducts(data)
    })

    }

    useEffect(()=>{

    },[])

    return (
        <div>
          <h1>products</h1>
          <div>
            {products.map((product, index)=>(

              <>
              <div>
                {product.title}
              </div>

              <div>
                <img src={product.image} style={{width:"100px",height:"100px"}} alt="" />
              </div>
              </>

            ))}
          </div>

 
          
        </div>
    
      );
    
    }
    export default App;
