// src/components/PostsFeed.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

import { fetchNext5Posts } from "../store/feed/actions";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";

// const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const dispatch = useDispatch();

  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  // async function fetchNext5Posts() {
  //   setData({ ...data, loading: true });
  //   const offset = data.posts.length;
  //   const response = await axios.get(
  //     `${API_URL}/posts?offset=${offset}&limit=5`
  //   );
  //   console.log("data:", data, "Offset:", offset, "MorePosts:", response);

  //   const morePosts = response.data.rows;
  //   // TODO
  //   // fetch next set of posts (use offset+limit),
  //   //  and define the variable `morePosts`

  //   setData({
  //     loading: false,
  //     posts: [...data.posts, ...morePosts],
  //   });
  // }

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h1>Hello!</h1>
      <h2>Recent posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h3>
            <p>
              {" "}
              {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              {post.tags.map((tag) => {
                return <button key={tag.id}>{tag.tag}</button>;
              })}{" "}
            </p>
          </div>
        );
      })}
      <p>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={() => dispatch(fetchNext5Posts)}>Load more</button>
        )}
      </p>
    </div>
  );
}
