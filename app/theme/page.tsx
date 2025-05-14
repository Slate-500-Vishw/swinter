"use client";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { ModeToggle } from "@/components/ModeToggle";
import { useRouter } from "next/navigation";

const ModalComponent = () => {
  const router = useRouter(); // ✅ Call all hooks at the top
  const [mounted, setMounted] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  useEffect(() => {
    setMounted(true);
    setModal2Open(true); 
  }, []);

  if (!mounted) return null; 
  return (
    <>
      <Modal
        title="Which theme would you like to use?"
        centered
        open={modal2Open}
        footer={[
          <Button type="primary" key="back" onClick={() => router.push("/push")}>
            Ok
          </Button>,
          
        ]}
      >
        <ModeToggle />
      </Modal>
    </>
  );
};

export default ModalComponent;
