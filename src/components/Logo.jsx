import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <div className={styles.container}>
        <img src="/icon.png" alt="Locate logo" className={styles.logo} />
        <span>Locate</span>
      </div>
    </Link>
  );
}

export default Logo;
