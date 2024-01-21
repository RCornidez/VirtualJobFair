import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const neutralBackgroundColors = [
  '#fff7ed',
  '#fffbeb',
  '#fef2f2',
  '#f7fee7',
  '#f0fdfa',
  '#f5f3ff',
  '#fafaf9',
];

const vibrantColors = [
  '#dc2626',
  '#fb923c',
  '#fcd34d',
  '#a3e635',
  '#2dd4bf',
  '#0ea5e9',
  '#8b5cf6',
  '#f43f5e',
];

const getRandomColor = (colorArray) => {
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomIndex];
};

function darkenHexColor(hex, percent) {
    // Remove the '#' character if present
    hex = hex.replace(/^#/, '');
  
    // Parse the hex color as an integer
    let num = parseInt(hex, 16);
  
    // Calculate the darkness factor
    const darkness = 1 - percent / 100;
  
    // Apply darkness to the RGB values
    let r = (num >> 16) * darkness;
    let g = ((num >> 8) & 0x00FF) * darkness;
    let b = (num & 0x0000FF) * darkness;
  
    // Ensure the values are within the valid range (0-255)
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
  
    // Convert the RGB values back to hex
    const darkenedHex = `#${Math.round(r).toString(16)}${Math.round(g).toString(16)}${Math.round(b).toString(16)}`;
  
    return darkenedHex;
  }




const SpeakerListing = ({ listing }) => {
  // Check if 'listing' is not null and has valid data
  if (!listing) {
    return null;
  }

  // Get a random neutral background color for the speakerListing component
  const randomBackgroundColor = darkenHexColor(getRandomColor(neutralBackgroundColors), 10);
  const adjustedBorderColor = darkenHexColor(randomBackgroundColor, 10);
  const randomButtonColor = darkenHexColor(getRandomColor(neutralBackgroundColors), 10);
  const adjustedButtonColor = darkenHexColor(randomButtonColor, 10);

  const speakerListingStyle = {
    backgroundColor: randomBackgroundColor,
    borderColor: adjustedBorderColor,
  };

  const buttonStyle = {
    backgroundColor: randomButtonColor,
    borderColor: adjustedButtonColor,
  };

  const profileStyle = {
    borderColor: adjustedBorderColor,
  };

  const {
    presentation_title,
    start_time,
    stop_time,
    webinar_link,
    image,
    presentor_name,
    presentor_title,
    socials,
  } = listing;

  return (
    <div className={styles.SpeakerListing} style={speakerListingStyle}>
      <h4 className={styles.PresentationTitle}>{presentation_title}</h4>
      <p className={styles.PresentationTime}>
        {new Date(start_time).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', timeZone: 'UTC' })} -{' '}
        {new Date(stop_time).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', timeZone: 'UTC' })}
      </p>
      <a href={webinar_link} target="_blank" rel="noopener noreferrer">
        <button className={styles.Attend} style={buttonStyle}>
          Attend
        </button>
      </a>
      <div className={styles.Image} style={profileStyle}>
        <Image src={image} alt="Speaker Image" width={100} height={100} />
      </div>
      <h3 className={styles.Name}>{presentor_name}</h3>
      <p className={styles.Title}>{presentor_title}</p>
      <div className={styles.SocialLinks}>
        {socials &&
          socials.map((platform, index) => (
            <a className={styles.SocialItem} key={index} href={platform.link} target="_blank" rel="noopener noreferrer">
              {platform.title}
            </a>
          ))}
      </div>
    </div>
  );
};

export default SpeakerListing;
