import "./App.css";
import { FaDove } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";

const loginButtonInfo = [
  {
    buttonName: "google",
    buttonIcon: <FcGoogle size={20} />,
    buttonLabel: "Google 계정으로 로그인",
  },
  {
    buttonName: "apple",
    buttonIcon: <FaApple size={20} />,
    buttonLabel: "Apple로 로그인하기",
  },
];

const signupButtonInfo = [
  {
    buttonName: "google",
    buttonIcon: <FcGoogle size={20} />,
    buttonLabel: "Google 계정으로 가입하기",
  },
  {
    buttonName: "apple",
    buttonIcon: <FaApple size={20} />,
    buttonLabel: "Apple에서 가입하기",
  },
];

function scrollOn() {
  // 스크롤이 되게 만들어라
  document.body.style = "overflow : unset";
  // console.log("스크롤된당ㅋ");
}
function scrollOff() {
  // 스크롤이 안되게 만들어라
  document.body.style = "overflow : hidden";
  // console.log("스크롤안된당ㅋ");
}

export default function ModalBasic({ modalOpen, setModalOpen }) {
  // console.log(setModalOpen);
  // 모달 끄기
  const [isClickedSignUp, setIsClickedSignUp] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
    setIsClickedSignUp(false);
  };

  if (modalOpen) {
    scrollOff();
    return (
      <div className="modalBackground">
        <div className="container">
          <button className="close" onClick={closeModal}>
            X
          </button>
          <p className="bird1">
            <FaDove size={27} color="lightgray" />
          </p>
          <p className="login">
            {isClickedSignUp
              ? "지금 트위터에 가입하세요"
              : "트위터에 로그인하기"}
          </p>
          {/* buttonInfos 를 map 으로 돌려서 만들기~! */}
          {(isClickedSignUp ? signupButtonInfo : loginButtonInfo).map(
            (buttonInfo) => {
              return (
                <div className={buttonInfo.buttonName + 1}>
                  <p className={buttonInfo.buttonName}>
                    {buttonInfo.buttonIcon}
                    {buttonInfo.buttonLabel}
                  </p>
                </div>
              );
            }
          )}
          <br />
          <div className="newUser">
            <p className="NewId">
              계정이 없으신가요?{" "}
              <div className="sign-up" onClick={() => setIsClickedSignUp(true)}>
                가입하기
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    scrollOn();
    return null;
  }
}
