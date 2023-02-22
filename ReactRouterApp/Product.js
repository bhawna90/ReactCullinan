import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom"

export default function Product(){
    const params = useParams()
    const location = useLocation()
    console.log(location.state);
    console.log(params);
    const [prodDetails,setProductDetails] = useState({})
    const fetchData = async () => {
        try {
          const data = await fetch(`https://fakestoreapi.com/products/${params.id}`);
          const product = await data.json();
          console.log(product);
          setProductDetails(product);
        } catch (err) {
          console.log("Error while fetching products", err);
        }
      };
      useEffect(() => {
        console.log("useEffect");
        fetchData();
      }, []);
    return <div>
        <h1>{location.state.title}</h1>
            <p>{prodDetails.title}</p>
            <p>{prodDetails.price}</p>
            <p>{prodDetails.description}</p>
            
        </div>
}
