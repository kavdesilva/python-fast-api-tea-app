import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/">Tea Collection 🫖</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/" className={'nav-link'}>Home</Link>
        <Link to="/teas" className={'nav-link'}>All Teas</Link>
        <Link to="/teas/new" className={'nav-link'}>Add Tea</Link>
      </div>
    </nav>
  );
}
