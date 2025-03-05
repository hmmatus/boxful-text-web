import React from "react";
import styles from "./LumpList.module.scss";
import { LumpI } from "@/types/lum.type";
import LumpItem from "./lump-item/LumpItem";
export interface LumpListProps {
  lums: LumpI[];
  onRemoveItem: (index: number) => void;
}
const LumList: React.FC<LumpListProps> = ({ lums, onRemoveItem }) => {
  return (
    <section id="lum-list" className="mt-20">
      <label>Agrega tus bultos</label>
      <div className={styles["lum-list-container"]}>
        {lums.map((lum, index) => (
          <LumpItem
            key={`lum-${index}`}
            lum={lum}
            onRemove={() => onRemoveItem(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default LumList;
