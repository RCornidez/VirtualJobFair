import Navigation from "@/components/Navigation/Navigation";
import Link from "next/link";

import styles from "./page.module.css";


export default function Page() {
    return (
      <div className={styles.Container}>
        <Navigation />
        <div className={styles.Dashboard}>
          <div>
            <h1 className={styles.Title}>Welcome to the Virtual Job Fair!</h1>

            <p className={styles.Intro}>In a world where job opportunities are hidden behind keyword filters. We&apos;ve made the online job marketplace a little more personal. Meet one-on-one with company recruiters and hiring managers to get your foot in the door.</p>

            <h3 className={styles.Title}>Quick Start Guide:</h3>
            <p><strong>Job Fair</strong> - Allows you to speak with companies over Google Meet. Click on a booth to review the company and click &quot;Talk with us!&quot; to jump into a one-on-one conversation with one of the reps.</p>
            <p><strong>Job Listings</strong> - View the job listings graciously provided by <Link href="https://www.crackeddevs.com/" target="_blank" rel="noopener noreferrer"><u>CrackedDevs.com</u></Link>. Click &quot;Apply now&quot; to be directed to CrackedDevs application page.</p>
            <p><strong>Events</strong> - Here is where you can view and attend speaking events. Click &quot;Attend&quot; to join the presenter&apos;s webinar.</p>
          </div>
          <div className={styles.Me}>
            <p>Created by Rodrigo Cornidez</p>
            <p><Link href="https://cornidez.com" target="_blank" rel="noopener noreferrer"><u>Cornidez.com</u></Link></p>
            <p><Link href="https://www.linkedin.com/in/rodrigo-cornidez-95b995204/" target="_blank" rel="noopener noreferrer"><u>LinkedIn</u></Link></p>
            <p><Link href="mailto:rodrigo@cornidez.com"><u>Email</u></Link></p>
          </div>
        </div>
      </div>
    );
  }