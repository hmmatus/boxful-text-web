"use client";
import { useState } from "react";
import WrappedInputText from "@/components/inputs/input-text/WrappedInputText";
import styles from "./styles.module.scss";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";
import WrappedInputDatePicker from "@/components/inputs/input-datepicker/WrappedInputDatePicker";
import WrappedInputPhone from "@/components/inputs/input-phone/WrappedInputPhone";
import WrappedInputSelect from "@/components/inputs/input-select/WrappedInputSelect";
import addressList from "@/utils/address-list";
import departmentList from "@/utils/department-list";
import municipalityList from "@/utils/municypality-list";
import StepButton from "@/components/buttons/step-button/StepButton";
export default function DeliverInfoPage() {
  const [value, setValue] = useState("");
  return (
    <main className={styles["delivery-info-page-container"]}>
      <div className={styles["row-content"]}>
        <WrappedInputSelect
          containerClassName={"flex-2"}
          label="📍 Dirección de recolección"
          options={addressList}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <WrappedInputDatePicker
          containerClassName={"flex-1"}
          label="📅 Fecha programada"
        />
      </div>
      <div className={styles["row-content"]}>
        <WrappedInputText
          containerClassName={"flex-1"}
          label="Nombres"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <WrappedInputText
          containerClassName="flex-1"
          label="Apellidos"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <WrappedInputText
          containerClassName="flex-1"
          label="Correo electrónico"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={styles["row-content"]}>
        <WrappedInputPhone
          containerClassName={"flex-1"}
          label="Telefono"
          value={value}
          onChange={(value) => setValue(value as string)}
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
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={styles["row-content"]}>
        <WrappedInputSelect
          containerClassName={"flex-1"}
          label="Departamento"
          value={value}
          options={departmentList}
          onChange={(e) => setValue(e.target.value)}
        />
        <WrappedInputSelect
          containerClassName="flex-1"
          label="Municipio"
          value={value}
          options={municipalityList}
          onChange={(e) => setValue(e.target.value)}
        />
        <WrappedInputText
          containerClassName="flex-1"
          label="Punto de referencia"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={styles["row-content"]}>
        <WrappedInputText
          containerClassName={"flex-1"}
          label="Punto de referencia"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={`${styles["row-content"]} justify-end`}>
        <StepButton
          color="primary"
          variant="solid"
          icon={<ArrowRightOutlined className={styles["next-icon"]} />}
          iconPosition="end"
          onClick={() => console.log("test")}
        >
          Siguiente
        </StepButton>
      </div>
    </main>
  );
}
