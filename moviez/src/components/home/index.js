import { Link } from "react-router-dom";
const Home = () =>{
    return(
      <div>
         <Link to="/login">
            <p>login</p>
         </Link>
         <Link to="/signin">
             <p>sign in</p>
         </Link>
      </div>
    );
}

export default Home;