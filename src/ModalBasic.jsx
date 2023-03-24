import { useState } from "react";
import "./App.css";
import { FaDove } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function ModalBasic({ setModalOpen }) {
  console.log(setModalOpen);
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modalBackground">
      <div className="container">
        <button className="close" onClick={closeModal}>
          X
        </button>
        <p className="bird1">
          <FaDove size={27} color="lightgray" />
        </p>
        <p className="login">트위터에 로그인하기</p>
        <div className="google1">
          <p className="google">
            <FcGoogle size={20} />
            Google 계정으로 로그인
          </p>
        </div>
        <div className="apple1">
          <p className="apple">
            <FaApple size={20} />
            Apple로 로그인하기
          </p>
        </div>
        <br />
        <div className="newUser">
          <p className="NewId">
            계정이 없으신가요? <div className="sign-up">가입하기</div>
          </p>
        </div>
      </div>
    </div>
  );
}
