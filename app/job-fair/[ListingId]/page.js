"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';


import styles from './page.module.css';
import Navigation from '@/components/Navigation/Navigation';

export default function Page({ params }) {
  const [listingData, setListingData] = useState(null);
  const [videoId, setVideoId] = useState(null); // Example video ID

  const height = 300;
  const width = height * (16/9);


  useEffect(() => {
    // Ensure the code runs in client-side
      const storedData = localStorage.getItem(`${params.ListingId}`);
      setListingData(JSON.parse(storedData));
  }, [params.ListingId]);

  useEffect(() => {
    // This will be called whenever listingData changes
    if (listingData) {
      setVideoId(listingData.youtube_video_id);
    }
  }, [listingData]);


  return (

      <div className={styles.PopUpContainer} >
        <Navigation />
        { listingData? (
          <div className={styles.PopUpDetail}>
            <Image
              className={styles.Logo}
              src={listingData.logo}
              alt="Logo"
              width={170}
              height={70}
            />
            <iframe
              width={width}
              height={height}
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className={styles.Employees} style={{maxWidth:`${width}px`}}>
              { listingData.employees? 
                listingData.employees.map((employee, index) => (
                  <div className={styles.EmployeeContainer} key={index}>
                  <Image
                    className={styles.Employee}
                    src={employee.avatar}
                    alt="Avatar"
                    width={48}
                    height={126}
                  />
                  <p className={styles.EmployeeName}>{employee.first_name}</p>
                  </div>
                ))
                :
                ""
              }
            </div>
            <Link href={listingData.talk_with_us_link} target="_blank" rel="noopener noreferrer">
              <button className={styles.TalkButton}>Talk with us!</button>
            </Link>
            <p className={styles.Details}>{listingData.details}</p>
          </div> )
          :
          <p className={styles.Loading}>Loading Page...</p>
        }
      </div>
  )}



