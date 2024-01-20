import Image from 'next/image';

import Navigation from "@/components/Navigation/Navigation";
import styles from "./page.module.css";

export default function Page() {
    return (
      <>
        <Navigation />
        <div className={styles.JobFairContainer}>
          <div className={styles.JobFair}>
            <Image
              src="/job_fair_banner.png"
              alt="Job Fair Banner"
              width={384}
              height={216}
            />
            <div className={styles.ListingContainer}>
              <div className={styles.Row}>
               <div className={styles.Company}>
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <div className={styles.Table}></div>
                </div>
                <div className={styles.Company}>
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <div className={styles.Table}></div>
                </div>
                <div className={styles.Company}>
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <div className={styles.Table}></div>
                </div>
                <div className={styles.Floor}></div>
              </div> 
              <div className={styles.Row}>
              <div className={styles.Company}>
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <div className={styles.Table}></div>
                </div>
                <div className={styles.Company}>
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <div className={styles.Table}></div>
                </div>
                <div className={styles.Company}>
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <Image
                    className={styles.Employee}
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <div className={styles.Table}></div>
                </div>
                <div className={styles.Floor}></div>
              </div>

            </div>

          </div>

        </div>
        
      </>
    );
  }