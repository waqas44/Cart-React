import { Fragment } from "react";
import classes from './Header.module.css';
import imagemeal from '../../Assets/meals.jpg';
const Header = (props) => {

    return <React.Fragment>
        <header className={classes.header}>
            <h1> React Meals</h1>
            <button>Cart</button>

        </header>
        <div><img src={imagemeal} /> </div>

    </React.Fragment>


}


export default Header;