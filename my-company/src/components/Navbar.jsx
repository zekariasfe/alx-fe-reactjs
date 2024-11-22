import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '10px',
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'space-around', // Distribute links evenly
    alignItems: 'center',
  };

  const linkStyle = {
    display: 'inline-block',
    width: '120px', // Fixed width for each link
    textAlign: 'center', // Center text inside the link
    padding: '10px',
    color: 'white',
    textDecoration: 'none',
    border: '1px solid transparent', // Optional: Add hover effect
    borderRadius: '5px',
  };

  const linkHoverStyle = {
    ...linkStyle,
    border: '1px solid white',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;

