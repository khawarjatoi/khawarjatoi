import Link from 'next/link';
import StyledNav from './styles/Sidebar/StyledNav';

const toggle = ({ isTablet, toggleSidebar }) =>
  isTablet && window.innerWidth < 831 && toggleSidebar();

const Nav = (props) => (
  <StyledNav>
    <div className='image-outer'>
      <Link href='/'>
        <img
          onClick={(e) => toggle(props)}
          className='round-image'
          src='khawarjatoi.svg'
          alt='KhawarJatoi'
          height='100'
          width='100'
        />
      </Link>
    </div>
    <Link href='/about'>
      <a onClick={(e) => toggle(props)}>About</a>
    </Link>
    <a
      onClick={(e) => toggle(props)}
      href='/resume.pdf'
      target='_blank'
      aria-label='resume'
      rel='noreferrer'
    >
      Resume
    </a>
    {/* <Link href='/portfolio'>
      <a onClick={(e) => toggle(props)}>Portfolio</a>
    </Link> */}
    <Link href='/blog'>
      <a onClick={(e) => toggle(props)}>Blog</a>
    </Link>
  </StyledNav>
);

export default Nav;
