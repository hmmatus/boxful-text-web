import { LumI } from "@/types/lum.type";
import styles from "./LumItem.module.scss";
import Image from "next/image";
import WrappedInputText from "@/components/inputs/input-text/WrappedInputText";
import InputVolume from "@/components/inputs/input-volume/InputVolume";
import { useState } from "react";
import { VolumeI } from "@/types/volume.type";
export interface LumItemProps {
  lum: LumI;
  onRemove: (lum: LumI) => void;
}
const LumItem: React.FC<LumItemProps> = ({ lum, onRemove }) => {
  const [lumData, setLumData] = useState<LumI>(lum);

  const onChangeInputVolume = (key: keyof VolumeI, value: VolumeI) => {
    const newValue = value[key];
    setLumData({ ...lumData, [key]: newValue });
  };
  return (
    <div className={styles["lum-item-container"]}>
      <div className={styles["form-container"]}>
        <div className={`flex flex-1 flex-row gap-2`}>
          <WrappedInputText
            className="flex flex-1"
            label="Peso en libras"
            suffix={"lb"}
            value={lumData.weight}
            onChange={(e) =>
              setLumData({ ...lumData, weight: parseInt(e.target.value) })
            }
          />
          <div className="flex flex-3">
            <WrappedInputText
              containerClassName={styles["full-width"]}
              label="Contenido"
              value={lumData.content}
              onChange={(e) =>
                setLumData({ ...lumData, content: e.target.value })
              }
            />
          </div>
          <InputVolume
            value={{
              height: lumData.height,
              length: lumData.length,
              width: lumData.width,
            }}
            onChangeValue={(key, value) => onChangeInputVolume(key, value)}
          />
        </div>
      </div>
      <div
        className="flex flex-1 flex-row justify-end"
        style={{ marginTop: "10px" }}
      >
        <Image
          className={styles["delete-icon"]}
          src="/icons/trash-can.svg"
          alt="trash"
          width={30}
          height={30}
          onClick={() => onRemove(lum)}
        />
      </div>
    </div>
  );
};

export default LumItem;
