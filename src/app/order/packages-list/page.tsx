"use client";
import "@ant-design/v5-patch-for-react-19";
import { useRouter } from "next/navigation";
import LumForm from "@/components/forms/lum-form/LumForm";
import styles from "./styles.module.scss";
import LumList from "@/components/sections/lump-list/LumpList";
import { LumpI } from "@/types/lum.type";
import { useState } from "react";
import { Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
export default function PackageListPage() {
  const router = useRouter();
  const [lums, setLums] = useState<LumpI[]>([
    {
      length: 0,
      width: 0,
      height: 0,
      weight: 0,
      content: "Text",
    },
    {
      length: 0,
      width: 0,
      height: 0,
      weight: 0,
      content: "Text 2",
    },
  ]);
  const onGoBack = () => {
    router.replace("/order/deliver-info");
  };
  const onRemoveLum = (index: number) => {
    const newLums = lums.filter((lum, i) => i !== index);
    setLums(newLums);
  };
  return (
    <main className={styles["packages-list-container"]}>
      <LumForm onSend={(data) => setLums([data, ...lums])} />
      <div style={{ margin: "15px 0" }} />
      <LumList lums={lums} onRemoveItem={(index) => onRemoveLum(index)} />
      <div style={{ margin: "15px 0" }} />
      <div className="flex flex-1 flex-row justify-between">
        <Button
          className={styles["back-button"]}
          color="default"
          variant="filled"
          icon={<ArrowLeftOutlined className={styles["back-icon"]} />}
          onClick={onGoBack}
        >
          Siguiente
        </Button>
        <Button
          className={styles["next-button"]}
          color="primary"
          variant="solid"
          icon={<ArrowRightOutlined className={styles["next-icon"]} />}
          iconPosition="end"
          onClick={() => console.log("test")}
        >
          Enviar
        </Button>
      </div>
    </main>
  );
}
