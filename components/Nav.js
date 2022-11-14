import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/backflip_logo.png';
import navStyles from '../styles/nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Image src={logo} alt='/' width="80px" height="38px" className={navStyles.logo}/>
      <ul>
        <li>
          <Link href='#'>Home</Link>
        </li>
        <li>
          <Link href='#'>Blogs</Link>
        </li>
        <li>
          <Link href='#'>About</Link>
        </li>
        <li>
          <Link href='#'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav