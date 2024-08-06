import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";


export function FakestoreProducts(){

    const [products, setProducts] = useState([{id:0, title:'', category:'', price:0, description:'', rating:{rate:0, count:0}, image:''}]);
    const [cookies, setCookie, removeCookie] = useCookies(['userid']);

    let params = useParams();
    let navigate = useNavigate();



    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })

    },[])

    function handleSignoutClick(){
        removeCookie('userid');
        navigate('/home');
    }

    return(
       <div className="row">
        <h2 className="d-flex justify-content-between"><span> {params.category.toUpperCase()} </span> <span>{cookies['userid']} <button onClick={handleSignoutClick} className="btn btn-warning">Signout</button> </span> </h2>
           <div className="col-2">
           
           <div className="d-flex flex-column justify-content-between">
              {
                products.map(product=> 

                    <div key={product.id}>
                        <img src={product.image} width="50" height="50" />
                        <div style={{width:'150px'}} className="btn my-2 btn-light d-flex justify-content-between"> <span>$ {product.price}</span> <Link to={`details/${product.id}`} className="btn btn-warning"> <span className="bi bi-eye"></span> </Link> </div>
                    </div>

                )
              }
           </div>
           <div>
              <Link to="/categories">Back to Categories</Link>
           </div>
           </div>
           <div className="col-10">
               <Outlet />
           </div>
       </div>
    )
}