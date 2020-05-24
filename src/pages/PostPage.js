import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";

import { fetchPost } from "../store/postPage/actions";
// import { selectFeedLoading, selectFeedPosts } from "../store/PostPage/selectors";


export default function PostPage() {
  const { id } = useParams();
  //   console.log("Param:", id);
  const dispatch = useDispatch();

  // const loading = useSelector(selectFeedLoading);
  // const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch], id);

  return <div>PostPage</div>;
}
