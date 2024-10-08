import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-500">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/" className="text-white">Dashboard</Link>
        </li>
        <li>
          <Link to="/" className="text-white">Profile</Link>
        </li>
        <li>
          <Link to="/" className="text-white">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
