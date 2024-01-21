import Image from "next/image";

import JobListing from "@/components/JobListing/JobListing";
import Navigation from "@/components/Navigation/Navigation";

import styles from "./page.module.css";

export default async function Page() {

  const API_KEY = process.env.CD_API_KEY;
  const limit = 10;
  
  if (API_KEY == null) {
    throw new Error(`No CrackedDevs API Key provided, verify .env file is setup properly.`);
  }

  const res = await fetch(
    `https://api.crackeddevs.com/api/get-jobs?limit=${limit}`,
    {
      headers: {
        "api-key": `${API_KEY}`,
      },
    });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  
  const data = await res.json();

    return (
      <>
        <Navigation />
        <div className={styles.JobListingsContainer}>
          <div className={styles.JobListings}>
            <Image
              priority={true}
              src="/job_listings_banner.png"
              alt="Job Fair Banner"
              width={384}
              height={216}
            />
            <div className={styles.Jobs}>
              { data? 
                  data.map(job => (<JobListing key={job.id} listing={job} />))
                  :
                  <p>There&apos;s no Jobs! Don&apos;t worry we&apos;re searching.</p>
              }
            </div>
          </div>
        </div>
      </>
    );
  }