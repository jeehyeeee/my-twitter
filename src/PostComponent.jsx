import React, { useEffect } from "react";
import { FaGithubAlt } from "react-icons/fa";
// import "./App.css";
import styled from "styled-components";
import { usePosts } from "./components/store";

const PostComponent = () => {
  // const [posts, setPosts] = useState([]);

  const posts = usePosts((state) => state.posts);
  const setPosts = usePosts((state) => state.setPosts);

  useEffect(() => {
    fetch("/data/tweet.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <>
      {posts.map((data, index) => {
        return (
          <Post className="post" key={data.userId}>
            <Head className="head">
              <Profile className="profile">
                <FaGithubAlt size={40} />
              </Profile>
            </Head>
            <Body className="body">
              <UserId className="user-id">{data.userId}</UserId>
              <Text className="text">{data.text}</Text>
              <Image2
                src={data.catImage}
                className="image2"
                color={index % 2 === 0 ? "#0c4660" : "#438bad"}
              ></Image2>
            </Body>
          </Post>
        );
      })}
    </>
  );
};

const Extend = styled.div`
  display: flex;
  justify-content: center;
`;

const Post = styled.div`
  display: flex;
  height: 70vh;
  padding: 12px 20px;
`;
const Head = styled(Extend)`
  width: 100px;
`;
const Body = styled.div`
  width: 100%;
  height: 500px;
`;
const UserId = styled.div`
  font-weight: bold;
`;
const Text = styled.div`
  margin-top: 5px;
`;
const Image2 = styled.img`
  width: 500px;
  height: 550px;
  margin-top: 7px;
  border-radius: 15px;
  padding: 15px;
  background-color: ${(props) => props.color};
`;
const Profile = styled.div`
  padding-right: 10px;
`;
export default PostComponent;
