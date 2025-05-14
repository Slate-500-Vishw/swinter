"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { ModeToggle } from "@/components/ModeToggle";

const ModalComponent = () => {
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
        footer={[]}
      >
        <ModeToggle />
      </Modal>
    </>
  );
};

export default ModalComponent;
