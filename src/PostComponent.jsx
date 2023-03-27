import React, { useState, useEffect } from "react";
import { FaGithubAlt } from "react-icons/fa";
import "./App.css";

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
        <div className="post" key={data.userId}>
          <div className="head">
            <div className="profile">
              <FaGithubAlt size={40} />
            </div>
          </div>
          <div className="body">
            <div className="user-id">{data.userId}</div>
            <div className="text">{data.text}</div>
            <img src={data.catImage} className="image2" />
          </div>
        </div>
      ))}
    </>
  );
};

export default PostComponent;
