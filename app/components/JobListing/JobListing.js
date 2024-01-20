import Link from 'next/link';
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

const formatSalary = (minSalary, maxSalary) => {
  const formattedMinSalary = minSalary.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0, 
  });

  const formattedMaxSalary = maxSalary.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0, 
  });

  return `${formattedMinSalary} - ${formattedMaxSalary}`;
};

const JobListing = ({ listing }) => {
  const jobType = listing.job_type;
  const hasMinSalary = listing.min_salary_usd > 0;
  const hasMaxSalary = listing.max_salary_usd > 0;

  let originalUrl, baseUrl, queryString, updatedUrl;

  // Correct the application URL
  if (listing.url !== null) {
    originalUrl = listing.url;

    // Split the URL at the '?' character to separate the base URL from the query parameters
    [baseUrl, queryString] = originalUrl.split('?');

    // Reconstruct the URL without the query parameters
    updatedUrl = baseUrl;
  }

  // Get a random neutral background color for the JobListing component
  const randomBackgroundColor = getRandomColor(neutralBackgroundColors);

  // Get a single vibrant color for the push-pin buttons
  const vibrantButtonColor = getRandomColor(vibrantColors);

  const jobListingStyle = {
    backgroundColor: randomBackgroundColor,
    borderColor: randomBackgroundColor,
  };

  const buttonStyle = {
    backgroundColor: vibrantButtonColor,
    borderColor: darkenHexColor(vibrantButtonColor, 20),
  };

  return (
    <div className={styles.JobListing} style={jobListingStyle}>
      <h4>{listing.title}</h4>
      {jobType && <p>Employment: {listing.job_type}</p>}
      <p>Company: {listing.company}</p>
      {hasMinSalary && hasMaxSalary && (
        <p>Salary Range: {formatSalary(listing.min_salary_usd, listing.max_salary_usd)}</p>
      )}
      {hasMinSalary && !hasMaxSalary && (
        <p>Min Salary: {listing.min_salary_usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      )}
      {!hasMinSalary && hasMaxSalary && (
        <p>Max Salary: {listing.max_salary_usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      )}
      {originalUrl && (
        <Link href={updatedUrl} target="_blank">
          <button className={styles.Apply}>Apply Now</button>
        </Link>
      )}
      <div className={styles.Button} id={styles['Button1']} style={buttonStyle}></div>
      <div className={styles.Button} id={styles['Button2']} style={buttonStyle}></div>
      <div className={styles.Button} id={styles['Button3']} style={buttonStyle}></div>
      <div className={styles.Button} id={styles['Button4']} style={buttonStyle}></div>
    </div>
  );
};

export default JobListing;
