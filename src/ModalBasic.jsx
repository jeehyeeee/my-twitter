// import "./App.css";
import { FaDove } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import styled from "styled-components";

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
      <Modalbgc className="modalBackground">
        <Container className="container">
          <Close className="close" onClick={closeModal}>
            X
          </Close>
          <BirdOne className="bird1">
            <FaDove size={27} color="lightgray" />
          </BirdOne>
          <Login className="login">
            {isClickedSignUp
              ? "지금 트위터에 가입하세요"
              : "트위터에 로그인하기"}
          </Login>
          {/* buttonInfos 를 map 으로 돌려서 만들기~! */}
          {(isClickedSignUp ? signupButtonInfo : loginButtonInfo).map(
            (buttonInfo) => {
              return (
                <GoogleApple className="GoogleApple">
                  <Google className={buttonInfo.buttonName + 1}>
                    <Apple className={buttonInfo.buttonName}>
                      {buttonInfo.buttonIcon}
                      {buttonInfo.buttonLabel}
                    </Apple>
                  </Google>
                </GoogleApple>
              );
            }
          )}
          <br />
          <NewUser className="newUser">
            <NewId className="NewId">
              계정이 없으신가요?{" "}
              <SignUp
                className="sign-up"
                onClick={() => setIsClickedSignUp(true)}
              >
                가입하기
              </SignUp>
            </NewId>
          </NewUser>
        </Container>
      </Modalbgc>
    );
  } else {
    scrollOn();
    return null;
  }
}
const Extend = styled.div`
  display: flex;
  justify-content: center;
`;

const SignUp = styled.div`
  margin-left: 4px;
  color: #1d9bf0;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Modalbgc = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(36, 45, 54, 0.4);
  position: fixed;
`;
const Container = styled.div`
  width: 450px;
  height: 400px;
  z-index: 999;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
  border: 1px solid #000;
  border-radius: 17px;
`;
const Close = styled.button`
  width: 35px;
  height: 35px;
  position: absolute;
  left: 10px;
  top: 10px;
  cursor: pointer;
  border: 0;
  color: white;
  background-color: black;
  &:hover {
    border: 1px solid #1f2225;
    background: #1f2225;
    border-radius: 100px;
  }
`;
const BirdOne = styled(Extend)`
  margin-top: 20px;
`;
const Login = styled(Extend)`
  color: #e7e9ea;
  font-weight: bold;
  font-size: 35px;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const NewUser = styled(Extend)``;
const NewId = styled.p`
  display: flex;
  color: white;
  font-size: 14px;
`;
const Google = styled(Extend)`
  width: 350px;
  height: 50px;
  /* margin:  30px; */
  margin: 10px 30px;
  color: #3c4043;
  background-color: #fff;
  border-radius: 50px;
  align-items: center;
  letter-spacing: 0.25px;
  font-weight: 500;
  font-size: 15px;

  cursor: pointer;
`;

const Apple = styled(Extend)`
  align-items: center;
  color: black;
`;

const GoogleApple = styled.div`
  margin: 20px;
`;
