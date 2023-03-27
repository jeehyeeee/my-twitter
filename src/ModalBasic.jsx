import "./App.css";
import { FaDove } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const buttonInfos = [
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
  console.log(setModalOpen);
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
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
          <p className="login">트위터에 로그인하기</p>
          {/* buttonInfos 를 map 으로 돌려서 만들기~! */}
          {buttonInfos.map((buttonInfo) => {
            return (
              <div className={buttonInfo.buttonName + 1}>
                <p className={buttonInfo.buttonName}>
                  {buttonInfo.buttonIcon}
                  {buttonInfo.buttonLabel}
                </p>
              </div>
            );
          })}
          <br />
          <div className="newUser">
            <p className="NewId">
              계정이 없으신가요? <div className="sign-up">가입하기</div>
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
