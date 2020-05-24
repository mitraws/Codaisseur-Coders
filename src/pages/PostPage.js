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
          <h1>{postData.post.title}</h1>
          <p className="meta">TODO</p>

          <ReactMarkdown source={postData.post.content} />

          <h2>Comments</h2>
          <p>TODO</p>
        </>
      )}
    </div>
  );
}
