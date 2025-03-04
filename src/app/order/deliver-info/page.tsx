"use client";
import "@ant-design/v5-patch-for-react-19";
import { useState } from "react";
import WrappedInputText from "@/components/inputs/input-text/WrappedInputText";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRightOutlined } from "@ant-design/icons";
import WrappedInputDatePicker from "@/components/inputs/input-datepicker/WrappedInputDatePicker";
import WrappedInputPhone from "@/components/inputs/input-phone/WrappedInputPhone";
import WrappedInputSelect from "@/components/inputs/input-select/WrappedInputSelect";
import addressList from "@/utils/address-list";
import departmentList from "@/utils/department-list";
import municipalityList from "@/utils/municypality-list";
import { Button } from "antd";
import { DeliveryI } from "@/types/delivery.type";
const defaultValues: DeliveryI = {
  recolectionAddress: "",
  scheduledDate: "",
  names: "",
  lastNames: "",
  email: "",
  phone: "",
  destinyAddress: "",
  department: "",
  municipality: "",
  reference: "",
  notes: "",
};
export default function DeliverInfoPage() {
  const router = useRouter();
  const [values, setValues] = useState<DeliveryI>(defaultValues);
  const handleChangeValue = (key: keyof DeliveryI, value: string) => {
    setValues({ ...values, [key]: value });
  };

  const onPressNext = () => {
    router.push("/order/packages-list");
  };
  return (
    <main className={styles["delivery-info-page-container"]}>
      <div className={styles["row-content"]}>
        <WrappedInputSelect
          containerClassName={"flex-2"}
          label="📍 Dirección de recolección"
          options={addressList}
          value={values.recolectionAddress}
          onChange={(value) => handleChangeValue("recolectionAddress", value)}
        />
        <WrappedInputDatePicker
          containerClassName={"flex-1"}
          label="📅 Fecha programada"
          onChange={(_, dateString) =>
            handleChangeValue("scheduledDate", dateString as string)
          }
        />
      </div>
      <div className={styles["row-content"]}>
        <WrappedInputText
          containerClassName={"flex-1"}
          label="Nombres"
          value={values.names}
          onChange={(e) => handleChangeValue("names", e.target.value)}
        />
        <WrappedInputText
          containerClassName="flex-1"
          label="Apellidos"
          value={values.lastNames}
          onChange={(e) => handleChangeValue("lastNames", e.target.value)}
        />
        <WrappedInputText
          containerClassName="flex-1"
          label="Correo electrónico"
          type="email"
          value={values.email}
          onChange={(e) => handleChangeValue("email", e.target.value)}
        />
      </div>
      <div className={styles["row-content"]}>
        <WrappedInputPhone
          containerClassName={"flex-1"}
          label="Telefono"
          value={values.phone}
          onChange={(value) => handleChangeValue("phone", value)}
        />
        <Image
          width={20}
          height={25}
          alt="location"
          src={"/icons/location.svg"}
          className={styles["location-icon"]}
        />
        <WrappedInputText
          containerClassName="flex-2"
          label="Dirección del destinatario"
          value={values.destinyAddress}
          onChange={(e) => handleChangeValue("destinyAddress", e.target.value)}
        />
      </div>
      <div className={styles["row-content"]}>
        <WrappedInputSelect
          containerClassName={"flex-1"}
          label="Departamento"
          value={values.department}
          options={departmentList}
          onChange={(value) => handleChangeValue("department", value)}
        />
        <WrappedInputSelect
          containerClassName="flex-1"
          label="Municipio"
          value={values.municipality}
          options={municipalityList}
          onChange={(value) => handleChangeValue("municipality", value)}
        />
        <WrappedInputText
          containerClassName="flex-1"
          label="Punto de referencia"
          value={values.reference}
          onChange={(e) => handleChangeValue("reference", e.target.value)}
        />
      </div>
      <div className={styles["row-content"]}>
        <WrappedInputText
          containerClassName={"flex-1"}
          label="Indicaciones"
          value={values.notes}
          onChange={(e) => handleChangeValue("notes", e.target.value)}
        />
      </div>
      <div className={`${styles["row-content"]} justify-end`}>
        <Button
          className={styles["next-button"]}
          color="primary"
          variant="solid"
          icon={<ArrowRightOutlined className={styles["next-icon"]} />}
          iconPosition="end"
          onClick={onPressNext}
        >
          Siguiente
        </Button>
      </div>
    </main>
  );
}
