import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"


export function FakestoreDetails(){

     let params = useParams();
     let navigate = useNavigate();

     const [product, setProduct]  = useState({id:0, title:'', category:'', price:0, description:'', rating:{rate:0, count:0}, image:''});

     useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
             setProduct(response.data);
        })

     },[params.id])

     function handleHomeClick(){
            navigate("/home");
     }

     return(
        <div>
            <h3>Details  <button onClick={handleHomeClick} className="bi bi-house btn btn-primary"> Home</button> </h3>
            <div className="card p-2 m-2" style={{width:'200px'}}>
                <img className="card-img-top" src={product.image}  height="120"/>
                <div className="card-header">
                    {product.title}
                </div>
                <div className="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd>{product.price}</dd>
                        <dt>Rating</dt>
                        <dd>
                            {product.rating.rate} <span className="bi bi-star-fill text-success"></span> [{product.rating.count}]
                        </dd>
                    </dl>
                </div>
                <div className="card-footer">
                   <textarea rows="4" disabled value={product.description}></textarea>
                </div>
            </div>
        </div>
     )
}