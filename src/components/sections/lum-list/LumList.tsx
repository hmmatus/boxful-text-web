import React from "react";
import styles from "./LumList.module.scss";
import { LumI } from "@/types/lum.type";
import LumItem from "./lum-item/LumItem";
export interface LumList {
  lums: LumI[];
}
const LumList: React.FC<LumList> = ({ lums }) => {
  console.log("🚀 ~ lums:", lums);
  return (
    <section id="lum-list" className="mt-20">
      <label>Agrega tus bultos</label>
      <div className={styles["lum-list-container"]}>
        {lums.map((lum, index) => (
          <LumItem key={`lum-${index}`} lum={lum} onRemove={() => {}} />
        ))}
      </div>
    </section>
  );
};

export default LumList;
