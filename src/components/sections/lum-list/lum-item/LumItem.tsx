import { LumI } from "@/types/lum.type";
import styles from "./LumItem.module.scss";
import Image from "next/image";
import WrappedInputText from "@/components/inputs/input-text/WrappedInputText";
import InputVolume from "@/components/inputs/input-volume/InputVolume";
export interface LumItemProps {
  lum: LumI;
  onRemove: (lum: LumI) => void;
}
const LumItem: React.FC<LumItemProps> = ({ lum, onRemove }) => {
  const {} = lum;
  return (
    <div className={styles["lum-item-container"]}>
      <div className={styles["form-container"]}>
        <div className={`flex flex-1 flex-row gap-2`}>
          <WrappedInputText
            className="flex flex-1"
            label="Peso en libras"
            suffix={"lb"}
          />
          <div className="flex flex-3">
            <WrappedInputText
              containerClassName={styles["full-width"]}
              label="Contenido"
            />
          </div>
          <InputVolume
            value={{
              height: 0,
              length: 0,
              width: 0,
            }}
            onChangeValue={(key, value) => {
              console.log(key, value);
            }}
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
