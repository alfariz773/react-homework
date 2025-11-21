import axios from "axios";
import { useDispatch} from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/authslice";
import { useSelector } from "react-redux";
function Navbar() {
       const dispatch = useDispatch();
    const navigate = useNavigate();
    var user = useSelector(store=>store.auth.user);
    function logout(){
        if(user){
            axios.post('https://demo-blog.mashupstack.com/api/logout',{},{
               headers:{'Authorization':"Bearer "+ user.token}
            });
            dispatch(removeUser());
            navigate('/login');
        }
    }

    return <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        
        <div className="navbar-brand">
            <h4>My app</h4>
        </div>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
        className="collapse navbar-collapse mr-auto"
        id="navbarNav"
        style={{ float: "left" }}
        >
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                <li className="nav-item">
                <NavLink to={"/"} className="nav-link">
                    Home
                </NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink 
                    to={"/register"} 
                    className={
                        'nav-link '+
                        (status => status.isActive ? 'active' : '')
                    } 
                    >
                        Register
                    </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to={"/Login"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}>
                    Login
                </NavLink>
                </li>
                 <li className="nav-item">
                <span className="nav-link" onClick={logout}>Logout</span>
                </li>
            </ul>
        </div>
    </nav>;
}

export default Navbar;