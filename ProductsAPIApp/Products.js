import React from "react";
import Filters from "./Filters";

class Products extends React.Component{
    constructor(){
        super()
        this.state={
            products:[],
            loading: false,
            filteredArray: []
        }
    }
    fetchData=async ()=>{
        try{
            this.setState({loading:true})
            const data = await fetch("https://fakestoreapi.com/products")
            const products = await data.json()
            this.setState({products:products, loading: false, filteredArray: products})
        }
        catch(err){
            console.log("Error while fetching products",err);
        }
    }
    componentDidMount(){

        //api call
        this.fetchData()
    }
    filterProducts=(searchStr)=>{
        //use searchStr to filter products and then update the state
        const filteredProds = this.state.products.filter(product=>{
            return product.title.includes(searchStr)||product.description.includes(searchStr)
        })
        this.setState({filteredArray: filteredProds})
    }
    render(){
        if(this.state.loading){
            return <h1>Loading...</h1>
        }
        return <div>
            <Filters filterProducts={this.filterProducts}></Filters>
            {
            this.state.filteredArray.map(product=>{
                console.log(product);
                return <div>
                    <img src={product.image} width={100} height={100}></img>
                    <h1>{product.price}</h1>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
            })
            }</div>
    }
}
export default Products
