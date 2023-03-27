import { FaDove } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { IoArrowBackSharp } from "react-icons/io5";
import { CgMoreAlt } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import "./App.css";
import PostComponent from "./PostComponent";
import ModalBasic from "./ModalBasic";
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <ModalBasic modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <div className="wrapper">
        <header className="left">
          <div className="bird">
            <a className="bird-button">
              <FaDove size={27} color="lightgray" />
              {/* <FaDove size={27} color="lightgray" /> */}
            </a>
          </div>
        </header>
        <main className="content-wrapper">
          <div className="content">
            <div className="searchbar">
              <div className="back-button">
                <IoArrowBackSharp size={20} />
              </div>
              <div className="search">
                <div className="searchicon">
                  <BiSearch size={20} color="808080" />
                </div>
              </div>
              <div className="setting">
                <CgMoreAlt size={20} />
              </div>
            </div>
            <PostComponent />
          </div>
          <div className="sidebar">
            <section className="twitter-greeting">트위터에 처음이세요?</section>
            <section className="signup">
              지금 가입해서 나에게 맞춤 설정된 타임라인을 만들어 보세요!
            </section>
            <section
              onClick={() => setModalOpen(true)}
              className="google-signup"
            >
              <section className="google-icon">
                <FcGoogle size={20} />
              </section>
              Google 계정으로 가입하기
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
export default App;
