"use client";
import WrappedInputText from "@/components/inputs/input-text/WrappedInputText";
import useRegisterUserHook from "@/hooks/useRegisterHook";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const { mutateAsync } = useRegisterUserHook();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleRegister = async () => {
    try {
      await mutateAsync(registerData);
      alert("Usuario registrado correctamente");
      router.push("/auth/login");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="flex flex-1 flex-col gap-10">
      <h1>Register</h1>
      <WrappedInputText
        label="Nombre"
        value={registerData.name}
        onChange={(e) =>
          setRegisterData({ ...registerData, name: e.target.value })
        }
      />
      <WrappedInputText
        label="Email"
        type="email"
        value={registerData.email}
        onChange={(e) =>
          setRegisterData({ ...registerData, email: e.target.value })
        }
      />
      <WrappedInputText
        label="Contraseña"
        type="password"
        value={registerData.password}
        onChange={(e) =>
          setRegisterData({ ...registerData, password: e.target.value })
        }
      />
      <div className="flex gap-2 justify-between">
        <Button
          color="default"
          variant="filled"
          className="flex flex-1 h-10"
          onClick={() => router.back()}
        >
          Volver
        </Button>
        <Button
          color="primary"
          variant="solid"
          className="flex flex-1 h-10"
          onClick={handleRegister}
        >
          Registrarse
        </Button>
      </div>
    </div>
  );
}
