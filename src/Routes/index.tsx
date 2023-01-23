import {Link, Outlet} from "react-router-dom";
import "./index.css"

export default function Root() {
    return (
        <>
            <div className='container'>
            <ul className='container__unorderedList'>
                <li><Link to={`categories`}>Categories</Link> </li>
                <li>
                    <Link to={`suppliers`}>Suppliers</Link>
                </li>
                <li>
                    <Link to={`products`}>Products</Link>
                </li>
            </ul>
                <div>Log in</div>
            </div>
            <div id="detail">
                <Outlet/>
            </div>
        </>
    );
}