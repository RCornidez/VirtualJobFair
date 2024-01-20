import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';


const SpeakerListing = ({ listing }) => {
  let socialsProp;

  if (listing != null) {
    socialsProp = listing.socials;
  }

  let socials = socialsProp >= 0 ? [...socialsProp] : [];

  return (
    <div className={styles.SpeakerListing}>
      <h4 className={styles.PresentationTitle}>Machine Learning with LLM</h4>
      <p className={styles.PresentationTime}>12pm - 1:45pm UTC</p>
      <button className={styles.Attend}>Attend</button>
      <div className={styles.Image}>
        <Image
          src="/profile.png"
          alt="Speaker Image"
          width={100}
          height={100}
        />
      </div>
      <h3 className={styles.Name}>Rodrigo Cornidez</h3>
      
      <p className={styles.Title}>Full-Stack Developer</p>
      { socials? 
            socials.map(platform => (console.log(platform)))
            :
            ""
        }
      
    </div>
  );
};

export default SpeakerListing;
