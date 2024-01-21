import Link from "next/link";

import styles from "./Navigation.module.css";

const Navigation = () => {



    return (
        <nav className={styles.Navigation}>
            <Link href="/">
                <h1 className={styles.Title}>Hackathon.Cornidez.com</h1>
            </Link>
            <div className={styles.LowerRow}>
                <div className={styles.Links}>
                    <Link href="/job-fair" className={styles.LinkItem}>Job Fair</Link>
                    <Link href="/job-listings" className={styles.LinkItem}>Job Listings</Link>
                    <Link href="/events" className={styles.LinkItem}>Events</Link>
                </div>

                <div>
                    <Link href="/account"><button className={styles.Account}></button></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
