import Navigation from "@/components/Navigation/Navigation";
import styles from "./page.module.css";
import SpeakerListing from "@/components/SpeakerListing/SpeakerListing";

export default function Page() {
    return (
      <>
        <Navigation />
        <h1>Events</h1>
        <SpeakerListing />
      </>
    );
  }