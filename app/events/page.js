import Image from "next/image";

import Navigation from "@/components/Navigation/Navigation";
import styles from "./page.module.css";
import SpeakerListing from "@/components/SpeakerListing/SpeakerListing";

export default function Page() {
  let data = [
    {
      id: 1,
      presentation_title : "Machine Learning Introduction",
      start_time: "2024-01-20T12:30:00Z",
      stop_time: "2024-01-20T14:00:00Z",
      webinar_link: "https://meet.google.com/",
      image: "/profile.png",
      presentor_name: "Rodrigo Cornidez",
      presentor_title: "Full-Stack Developer",
      socials: [
        {
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/rodrigo-cornidez-95b995204/"
        },
        {
          title: "Website",
          link: "https://www.Cornidez.com"
        }
      ]
    },
    {
      id: 1,
      presentation_title : "Next.js Field Guide",
      start_time: "2024-01-20T14:04:00Z",
      stop_time: "2024-01-20T15:00:00Z",
      webinar_link: "https://meet.google.com/",
      image: "/profile.png",
      presentor_name: "Rodrigo Cornidez",
      presentor_title: "Full-Stack Developer",
      socials: [
        {
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/rodrigo-cornidez-95b995204/"
        },
        {
          title: "Website",
          link: "https://www.Cornidez.com"
        }
      ]
    }
  ];


  return (
    <>
      <Navigation />  
      <div className={styles.EventsContainer}>
        <Image
          priority={true}
          src="/events_banner.png"
          alt="Events Banner"
          width={384}
          height={216}
        />
        <div className={styles.SpeakerListings}>
          { data? 
              data.map(speaker => (<SpeakerListing key={speaker.id} listing={speaker} />))
              :
              <p>There are no speakers scheduled.</p>
          }
        </div>
      </div>
    </>
  );
  }