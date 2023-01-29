import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav>
        <ul>
          <br />
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
