import { FaDove } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { IoArrowBackSharp } from "react-icons/io5";
import { CgMoreAlt } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
// import "./App.css";
import PostComponent from "./PostComponent";
import ModalBasic from "./ModalBasic";
import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useModal } from "./components/store";

function App() {
  // const [modalOpen, setModalOpen] = useState(false);
  const modalOpen = useModal((state) => state.modalOpen);
  const setModalOpen = useModal((state) => state.setModalOpen);
  return (
    <div>
      <GlobalStyle />
      <SignUp />
      <ModalBasic modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Wrapper>
        <Left className="left">
          <Bird className="bird">
            <BirdButton className="bird-button">
              <FaDove size={27} color="lightgray" />
            </BirdButton>
          </Bird>
        </Left>
        <ContentWrapper className="content-wrapper">
          <Content className="content">
            <Searchbar className="searchbar">
              <BackButton className="back-button">
                <IoArrowBackSharp size={20} />
              </BackButton>
              <Search className="search">
                <SearchIcon className="searchicon">
                  <BiSearch size={20} color="808080" />
                </SearchIcon>
              </Search>
              <Setting className="setting">
                <CgMoreAlt size={20} />
              </Setting>
            </Searchbar>
            <PostComponent />
          </Content>
          <Sidebar className="sidebar">
            <TwitterGreeting paddingleft="5px" className="twitter-greeting">
              최신 소식을 놓치지 마세요
            </TwitterGreeting>
            <Sign paddingleft="15px" className="signup">
              트위터를 사용하면 가장 먼저 알게 됩니다.
            </Sign>
            <GoogleSignUp
              onClick={() => setModalOpen(true)}
              className="google-signup"
            >
              <GoogleLogin className="google-icon">
                <FcGoogle size={20} />
              </GoogleLogin>
              Google 계정으로 로그인하기
            </GoogleSignUp>
          </Sidebar>
        </ContentWrapper>
      </Wrapper>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
`;
const LinkColor = "rgb(239, 243, 244)";
const BodyColor = "#000";
const BorderColor = "rgb(47, 51, 54)";
const BackgroundColor = "rgb(32, 35, 39)";
const MarginTop = "13px";
const PaddingLeft = "12px";

const Extend = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const SignUp = styled.div`
  margin-left: 4px;
  color: #1d9bf0;
  font-size: 14px;
`;
const GoogleLogin = styled(Extend)`
  width: 20px;
  margin-right: 8px;
`;
const Left = styled.header`
  width: 600px;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;
const Bird = styled(Extend)`
  width: 400px;
`;

const BirdButton = styled(Extend)`
  width: 55px;
  height: 55px;
  border: 1px solid ${BodyColor};
  background-color: ${BodyColor};
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #000d1a;
    background: #000d1a;
    border-radius: 100px;
  }
`;

const ContentWrapper = styled.main`
  width: 1317px;
  display: flex;
  align-items: flex-start;
`;
const Content = styled.div`
  width: 100%;
  max-width: 600px;
  color: lightgray;
  border: 1px solid ${BorderColor};
`;
const Searchbar = styled.div`
  border-bottom: 1px solid ${BorderColor};
  padding-bottom: 15px;
  display: flex;
  justify-content: space-around;
`;
const BackButton = styled.div`
  color: ${LinkColor};
  padding-top: 18px;
  margin-top: 5px;
  padding-left: ${PaddingLeft};
  display: flex;
  justify-content: center;
`;
const Search = styled.div`
  width: 446px;
  height: 44px;
  margin-top: 10px;
  background-color: ${BackgroundColor};
  border-bottom-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
`;
const SearchIcon = styled.div`
  margin-top: ${MarginTop};
  padding-left: ${PaddingLeft};
  color: ${LinkColor};
`;

const Setting = styled.div`
  color: ${LinkColor};
  padding-top: 22px;
`;
const Sidebar = styled.div`
  color: ${LinkColor};
  box-shadow: 0 0 0 1px rgb(47, 51, 54);
  width: 348px;
  height: 288px;
  border-radius: 20px;
  margin-top: 20px;
  margin-left: 30px;
`;
const TwitterGreeting = styled.section`
  margin: 10px;
  padding-left: ${PaddingLeft};
  color: ${LinkColor};
  font-weight: bold;
  font-size: 20px;
`;

const Sign = styled.section`
  height: 15px;
  color: ${LinkColor};
  padding-left: ${PaddingLeft};
  font-weight: bold;
  font-size: 14px;
`;
const GoogleSignUp = styled(Extend)`
  width: 300px;
  height: 40px;
  margin-left: 5px;
  color: #3c4043;
  background-color: #fff;
  margin: 18px;
  border-radius: 50px;
  font-size: 14px;
  align-items: center;
  font-weight: 500;
  letter-spacing: 0.25px;
  cursor: pointer;
`;
export default App;
