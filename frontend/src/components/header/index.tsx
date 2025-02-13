import { Navigation } from "../navigation";

import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};
