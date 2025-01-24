import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
      <html lang="en">
      <body>
      <div>
        <ul>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/blog" className={styles.link}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/login" className={styles.link}>
              Logout
            </Link>
          </li>
        </ul>
        <hr/>
        <div className={styles.container}>{children}</div>
      </div>
      </body>
      </html>
  );
}
