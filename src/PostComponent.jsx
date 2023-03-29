import React, { useState, useEffect } from "react";
import { FaGithubAlt } from "react-icons/fa";
import "./App.css";
import styled from "styled-components";

const Extend = styled.div`
  display: flex;
  justify-content: center
`

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
const Image2 = styled.image`
  width: 500px;
  height: 550px;
  margin-top: 7px;
  border-radius: 15px;
`;

const PostComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/tweet.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <>
      {posts.map((data) => (
        // console.log(data);
        <Post className="post" key={data.userId}>
          <Head className="head">
            <div className="profile">
              <FaGithubAlt size={40} />
            </div>
          </Head>
          <Body className="body">
            <UserId className="user-id">{data.userId}</UserId>
            <Text className="text">{data.text}</Text>
            <Image2 src={data.catImage} className="image2"></Image2>
          </Body>
        </Post>
      ))}
    </>
  );
};

export default PostComponent;
