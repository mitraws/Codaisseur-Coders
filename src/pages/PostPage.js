import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import moment from "moment";

import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";

export default function PostPage() {
  const { id } = useParams();
  //   console.log("Param:", id);
  const dispatch = useDispatch();
  const postData = useSelector(selectPostAndComments);

  useEffect(
    () => {
      dispatch(fetchPost(id));
    },
    [dispatch],
    id
  );

  return (
    <div>
      {!postData ? (
        <p>Loading...</p>
      ) : (
        <>
          {console.log("data:", postData)}
          <h1>{postData.post.title}</h1>
          <p className="meta">
            By <strong>{postData.post.developer.name}</strong> &bull;{" "}
            {moment(postData.post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
            {postData.post.tags.map((tag) => {
              return <button key={tag.id}> {tag.tag} </button>;
            })}
          </p>

          <ReactMarkdown source={postData.post.content} />

          <h2>Comments</h2>
          {postData.comments.rows.length === 0 ? (
            <p>
              <em>No comments left behind yet :(</em>
            </p>
          ) : (
            postData.comments.rows.map(comment => {
              return (
                <div key={comment.id}>
                  <p>{comment.text}</p>
                  <p className="meta">
                    By <strong>{comment.developer.name}</strong> &bull;{" "}
                    {moment(comment.createdAt).format("DD-MM-YYYY")}{" "}
                  </p>
                </div>
              );
            })
          )}
        </>
      )}
    </div>
  );
}
