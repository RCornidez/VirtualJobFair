"use client"

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

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
        avatar: "/avatar.png",
        first_name: "Ramiro"
      }
    ],
    table_color: "blue",
    logo: "/logo.png",
    youtube_video_id: "21341234",
    talk_with_us_link: "#",
    details: "This is a sample job listing. This is a sample job listing. This is a sample job listing. This is a sample job listing. This is a sample job listing. This is a sample job listing. This is a sample job listing. This is a sample job listing."
  },
]


const JobFairListing = ({ listing }) => {

  const data = listing.employees;

  const availableTables = {
    red : "/red_table.png",
    blue : "/blue_table.png",
    green : "/green_table.png",
    orange : "/orange_table.png",
    grey : "/grey_table.png",
  }

  const tableColorImage = availableTables[listing.table_Color]
  const tableStyle = {
    backgroundImage: `url(${tableColorImage || "/blue_table.png"})`,
  }


  const listingDetails = {
    id: listing.id,
    logo: listing.logo,
    youtube_video_id: listing.youtube_video_id,
    employees: listing.employees,
    talk_with_us_link: listing.talk_with_us_link,
    details: listing.details
  }

  const saveDetailsToSessionStorage = () => {
    // Serialize and store the object in session storage
    localStorage.clear();
    localStorage.setItem(`${listingDetails.id}`, JSON.stringify(listingDetails))
  };

  // Dynamic Link
  const dyanamicLink = `/job-fair/${listingDetails.id}`

  return (
    <Link href={dyanamicLink} target="_blank" rel="noopener noreferrer">
    <div className={styles.JobFairListing} id={listing.id} onClick={saveDetailsToSessionStorage}>      
      <div className={styles.Employees}>
        { data? 
            data.map(employee => (
              <Image
                key={employee.id}
                className={styles.Employee}
                src={employee.avatar}
                alt="Avatar"
                width={48}
                height={126}
              />
              ))
            :
            ""
        }
      </div>
      <div className={styles.Table} style={tableStyle}></div>
      <Image
        className={styles.Logo}
        src={listing.logo}
        alt="Logo"
        width={85}
        height={35}
      />
    </div>
    </Link>
  );
};

export default JobFairListing;
