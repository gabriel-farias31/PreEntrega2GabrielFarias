
import { Fragment } from 'react'
import './NavBar.css'
import cartWidget from '../cartwidget/cartWidget'
import {NavLink, Link} from "react-router-dom"

const NavBar = () => {
    return(
<>
        <Fragment>
        <nav className="NavBar" >
            <Link to='/'>
                <h3>E-Commerce</h3>
            </Link>
            <div className="categories">
                <NavLink to={`category/celular`} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Celulares</NavLink>

            </div>

            


        </nav>
        </Fragment>

        </>
    )
}
export default NavBar