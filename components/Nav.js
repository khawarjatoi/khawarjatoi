import Link from 'next/link';
import StyledNav from './styles/Sidebar/StyledNav';

const toggle = ({ isTablet, toggleSidebar }) =>
  isTablet && window.innerWidth < 831 && toggleSidebar;

const Nav = props => (
  <StyledNav>
    <div className='image-outer'>
      <Link href='/'>
        <img
          onClick={e => toggle(props)}
          className='round-image'
          src='khawarjatoi.svg'
          alt='KhawarJatoi'
          height='100'
          width='100'
        />
      </Link>
    </div>
    <Link href='/about'>
      <a onClick={e => toggle(props)}>About</a>
    </Link>
    <a
      onClick={e => toggle(props)}
      href='https://registry.jsonresume.org/khawarjatoi'
      target='_blank'
      aria-label='jsonresume'
      rel='noreferrer'
    >
      Resume
    </a>
    <Link href='/blog'>
      <a onClick={e => toggle(props)}>Blog</a>
    </Link>
  </StyledNav>
);

export default Nav;

// Developed by

{
  /* <div
  id="icon-wrapper"
  style="
    color: dimgray;
    font-size: 1em;
"
>
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="code"
    class="svg-inline--fa fa-code fa-w-20 "
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
  >
    <path
      fill="currentColor"
      d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
    ></path>
  </svg>
  with ❤️ by Khawar Jatoi
</div>; */
}
