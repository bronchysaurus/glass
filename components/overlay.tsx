import { FC } from "react";
import { useEffect, useState } from "react";

import OverlayAPI from "ffxiv-overlay-api";

import styles from "../styles/Overlay.module.css";

const overlay = new OverlayAPI();

const Overlay: FC = () => {
  const [encounter, setEncounter] = useState<any>({});
  const [zone, setZone] = useState<any>({});

  useEffect(() => {
    overlay.addListener("CombatData", (data) => {
      console.log(data.Encounter.ENCDPS);

      setEncounter(data.Encounter);
    });

    // add listener
    overlay.addListener("ChangeZone", (data) => {
      console.log("new listener of ChangeZone", data);
    });

    // list `ChangeZone` listeners
    // console.log(overlay.getAllListener("ChangeZone"));

    overlay.startEvent();
  }, []);

  return (
    <>
      <h3>Overlay Data</h3>
      <div className={styles.row}>Duration: {encounter.duration}</div>
      <div className={styles.row}>DPS: {encounter.ENCDPS}</div>
    </>
  );
};

export default Overlay;
