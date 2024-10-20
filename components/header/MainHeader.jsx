import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/logo.png";
import HeaderBg from "./HeaderBg";
import styles from "./mainHeader.module.css";
import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <>
      <HeaderBg />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="logo" priority />
          <span> Next Level Food</span>
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community"> Our Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
