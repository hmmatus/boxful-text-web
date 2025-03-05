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
import useCreateOrderHook from "@/hooks/useCreateOrderHook";
import { useDeliveryStore } from "@/zustand/delivery";
import { OrderI } from "@/types/order.type";
import { convertToISOString } from "@/utils/parse-date";
export default function PackageListPage() {
  const deliveryData = useDeliveryStore((state) => state.delivery);
  const { mutateAsync } = useCreateOrderHook();
  const router = useRouter();
  const [lums, setLums] = useState<LumpI[]>([]);
  const onGoBack = () => {
    router.replace("/order/deliver-info");
  };
  const onRemoveLum = (index: number) => {
    const newLums = lums.filter((lum, i) => i !== index);
    setLums(newLums);
  };
  const handleSaveOrder = async () => {
    try {
      const orderData: OrderI = {
        ...deliveryData,
        scheduledDate: convertToISOString(
          deliveryData.scheduledDate,
          "dd / MM / yyyy"
        ),
        lumps: lums,
      };
      await mutateAsync(orderData);
    } catch (error) {
      console.log(error);
      alert("Error al enviar la orden");
    }
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
          Volver
        </Button>
        <Button
          className={styles["next-button"]}
          color="primary"
          variant="solid"
          icon={<ArrowRightOutlined className={styles["next-icon"]} />}
          iconPosition="end"
          onClick={handleSaveOrder}
        >
          Enviar
        </Button>
      </div>
    </main>
  );
}
