import react from "react";
import axios from "axios";

export class Product2 extends react.Component{
    constructor(){
        super();
        this.state={
            categories:[],
            products:[]
        }
    }
    LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            this.setState({
                categories:response.data
            })
        })
    }
    componentDidMount(){
        this.LoadCategories();
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>Select Category</h2>
                <select >
                    {
                        this.state.categories.map(category=><option key={category}>{category}</option>)
                    }
                </select>
            </div>
        )
    }
}