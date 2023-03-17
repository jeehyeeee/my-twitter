import { FaDove } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { IoArrowBackSharp } from "react-icons/io5";
import { CgMoreAlt } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import "./App.css";
import catimage from "./image/First cat.jpeg";

function App() {
  return (
    <div>
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
            <div className="post">
              <div className="head">
                <div className="profile">
                  <FaGithubAlt size={40} />
                </div>
              </div>
              <div className="body">
                <div className="user-id">Jeehyeee_</div>
                <div className="text">고양이귀여워나만고양이없어</div>
                <div className="image"></div>
                <img src={catimage} className="image2" />
              </div>
            </div>
          </div>
          <div className="sidebar">
            <section className="twitter-greeting">트위터에 처음이세요?</section>
            <section className="signup">
              지금 가입해서 나에게 맞춤 설정된 타임라인을 만들어 보세요!
            </section>
            <section className="google-signup">
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
