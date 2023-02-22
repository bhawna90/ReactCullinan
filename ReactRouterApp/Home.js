import { Link, NavLink } from "react-router-dom";

function Home() {
    const litItems=[
        {
            path:"/home",
            label: "Home"
        },
        {
            path: "/about",
            label: "About"
        },
        {
            path: "/contact",
            label: "Contact"
        },
        {
            path: "/products",
            label: "Products"
        }
    ]
  return (
    <ul>
        {litItems.map(item=>{
           return <NavLink key={item.label} to={item.path}>
                <li >{item.label}</li>
            </NavLink>
        })}
    </ul>
  );
}

export default Home;
