import { useEffect, useState } from "react";
import styles from "./Komponent.module.css"; 

export default function Komponent(): JSX.Element {
  const [url, setUrl] = useState("");
  const serviceUrl = "https://www.boredapi.com/api/activity";

  function fetchActivity(): void {
    console.log("get from server");
    fetch(serviceUrl)
      .then((res) => res.json())
      .then((resultObj) => {
        const activity = resultObj.activity;
        setUrl(activity); // url=message
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    fetchActivity();
  }, []);

  return (
    <>
      <p className={styles.container}>{url}</p>
    </>
  );
}
