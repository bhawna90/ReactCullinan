import { useEffect } from "react"
import {Link, useLocation, useParams} from "react-router-dom"
import {useState} from "react"

function Products() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const params = useParams()
    const location = useLocation()
    console.log(params, location);
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetch("https://fakestoreapi.com/products");
        const products = await data.json();
        console.log(products);
        setProducts(products);
        setLoading(false);
      } catch (err) {
        console.log("Error while fetching products", err);
      }
    };
    useEffect(() => {
      console.log("useEffect");
      fetchData();
    }, []);
    console.log("render");
    if (loading) return <h1>Loading...</h1>;
    return (
      <>
        <ul>
          {products.map((product, index) => {
            return <Link to = {`/product/${product.id}`} state={{title: product.title}}><li key={index}>{product.title}</li></Link>;
          })}
        </ul>
        
      </>
    );
  }
  
  export default Products;
  
