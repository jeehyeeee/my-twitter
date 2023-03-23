import { useState } from "react";
import "./App.css";

export default function ModalBasic({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <button className="close" onClick={closeModal}>
        X
      </button>
      <p>모달</p>
    </div>
  );
}
