import { Link } from "react-router-dom";
import { nav } from "./config";

import styles from "./index.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {nav.map((link) => (
          <li key={link.id}>
            <Link to={`${link.path}`}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
