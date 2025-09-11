import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function Nav({user}) {
    let navigate = useNavigate()

    function signOut() {
        logOut()
        navigate('/')
        window.location.reload()
    }
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/">Tea Collection 🫖</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/" className={'nav-link'}>Home</Link>
        <Link to="/teas" className={'nav-link'}>All Teas</Link>
        {user ? 
          <>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
          </>
          :
          <>
            <Link to="/teas/new" className={'nav-link'}>Add Tea</Link>
            <Link onClick={signOut}>Log Out</Link>
          </>
        }
      </div>
    </nav>
  );
}
