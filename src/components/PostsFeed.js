// src/components/PostsFeed.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const [data, setData] = useState({
    loading: true,
    posts: [],
  });

  async function fetchNext5Posts() {
    setData({ ...data, loading: true });
    const offset = data.posts.length;
    const response = await axios.get(
      `${API_URL}/posts?offset=${offset}&limit=5`
    );
    console.log("data:", data, "Offset:", offset, "MorePosts:", response);

    const morePosts = response.data.rows;
    // TODO
    // fetch next set of posts (use offset+limit),
    //  and define the variable `morePosts`

    setData({
      loading: false,
      posts: [...data.posts, ...morePosts],
    });
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className="PostsFeed">
      <h1>Hello!</h1>
      <h2>Recent posts</h2>

      {data.loading === true ? <h1>Loading...</h1> : null}

      {data.posts.map((post) => {
        return (
          <div key={post.id}>
            <p>
              {" "}
              <strong>{post.title}</strong>{" "}
            </p>
            <p>
              {" "}
              {moment(post.updatedAt).format("DD-MM-YYYY")} •{" "}
              {post.tags.map((tag) => (
                <button key={tag.id}>{tag.tag}</button>
              ))}{" "}
            </p>
          </div>
        );
      })}
      <button onClick={fetchNext5Posts}>Load more</button>

      {/* TODO: render the list of posts */}

      {/* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */}
    </div>
  );
}
