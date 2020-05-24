import axios from "axios";
// import api from "../../config"


const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoadingPost() {
    return {
      type: "post/startLoading"
    };
  }
  

  export function postFullyFetched(data) {
    return {
      type: "post/postsFetched",
      payload: data
    };
  }

  export function fetchPost(id) {
      return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
        axios.get(`${API_URL}/posts/${id}`),
        axios.get(`${API_URL}/posts/${id}/comments`)
      ]);

      dispatch(
        postFullyFetched({
          post: postResponse.data,
          comments: commentsResponse.data
        })
      );
  }
}