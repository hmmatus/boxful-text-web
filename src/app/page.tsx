"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-1 justify-center items-center">
      <Button
        color="primary"
        variant="solid"
        className="flex flex-1 max-h-10"
        onClick={() => router.push("/auth/login")}
      >
        Login
      </Button>
    </main>
  );
}
