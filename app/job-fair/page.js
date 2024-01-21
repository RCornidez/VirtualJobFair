
import Image from 'next/image';

import Navigation from "@/components/Navigation/Navigation";
import styles from "./page.module.css";
import JobFairListing from '@/components/JobFairListing/JobFairListing';

export default function Page() {
  const data = [
    {
      id: 1,
      employees: [
        {
          id: 1,
          avatar: "/avatar.png",
          first_name: "Rodrigo"
        },
        {
          id: 2,
          avatar: "/avatar3.png",
          first_name: "Alianna"
        }
      ],
      table_color: "blue",
      logo: "/logo.png",
      youtube_video_id: "pBy1zgt0XPc",
      talk_with_us_link: "https://meet.google.com/",
      details: ""
    },
    {
      id: 2,
      employees: [
        {
          id: 1,
          avatar: "/avatar2.png",
          first_name: "Lindsey"
        },
        {
          id: 2,
          avatar: "/avatar1.png",
          first_name: "Ramiro"
        }
      ],
      table_color: "blue",
      logo: "/logo1.png",
      youtube_video_id: "i307esUZTSc",
      talk_with_us_link: "https://meet.google.com/",
      details: ""
    },
    {
      id: 3,
      employees: [
        {
          id: 1,
          avatar: "/avatar.png",
          first_name: "Rodrigo"
        },
        {
          id: 2,
          avatar: "/avatar3.png",
          first_name: "Lindsey"
        },
        {
          id: 3,
          avatar: "/avatar2.png",
          first_name: "Alianna"
        }
      ],
      table_color: "blue",
      logo: "/logo3.png",
      youtube_video_id: "9GQfEM8osVk",
      talk_with_us_link: "https://meet.google.com/",
      details: ""
    },
    {
      id: 4,
      employees: [
        {
          id: 1,
          avatar: "/avatar.png",
          first_name: "Rodrigo"
        }
      ],
      table_color: "blue",
      logo: "/logo5.png",
      youtube_video_id: "CYqOnILg8N4",
      talk_with_us_link: "https://meet.google.com/",
      details: ""
    },

  ]

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
              { data? 
                  data.map(listing => (<JobFairListing key={listing.id} listing={listing} />))
                  :
                  ""
              }
              <div className={styles.Floor}></div>
            </div> 
              
              {/* 
                  These rows will need to be conditionally rendered based on number of Job Fair listings.
                  ~3-5 per row.
              */}

            <div className={styles.Row}>
              <div className={styles.Floor}></div>
            </div>
            <div className={styles.Row}>
              <div className={styles.Floor}></div>
            </div>

          </div>

        </div>

      </div>
      
    </>
  );
}