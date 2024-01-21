import Link from "next/link";
import Image from "next/image";


import styles from "./page.module.css";

export default function Page() {
    return (
      <div className={styles.Account}>
        <h1><Link href="/">⇦</Link> Account Page</h1>
        <Image
          className={styles.Logo}
          src="/development.png"
          alt="Under Development"
          width={400}
          height={400}
        />
      </div>
    );
  }