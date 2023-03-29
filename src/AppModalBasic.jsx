import { useState } from "react";
import ModalBasic from "./ModalBasic";

export default function AppModalBasic() {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <div>
      <button onClick={showModal}>모달띄우기</button>
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
    </div>
  );
}
