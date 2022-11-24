import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const pages = ['Home', 'Sign In', 'Sign Up'];
  const links = ['/', '/signin', '/signup'];
  const nav = useNavigate();

  const handleClick = (index) => (e) => {
    nav(links[index]);
  };

  return (
    <header className='header'>
      <nav className='header_nav'>
        <div style={{ width: '45vw' }}></div>
        {pages.map((page, index) => (
          <div
            className='header_nav_menu'
            key={index}
            onClick={handleClick(index)}
          >
            {page}
          </div>
        ))}
      </nav>
    </header>
  );
};
