import './Navbar.css'
import app from '../firebase';

const Navbar = () => {
    return(
        <div>
            Navbar
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Navbar;