import axios from "axios";
// import apiUrl from "../../config"


const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoading() {
    return {
      type: "feed/startLoading"
    };
  }

  export async function fetchNext5Posts(dispatch, getState) {
    dispatch(startLoading());
    const offset = getState().feed.posts.length;
    const response = await axios.get(
      `${API_URL}/posts?offset=${offset}&limit=5`
    );
    dispatch(postsFetched(response.data.rows));

  }

  export function postsFetched(morePosts) {
    return {
      type: "feed/postsFetched",
      payload: morePosts
      //payload needs to get data from database 
      //and therefore this data is passed as an argument: 
      //moreposts = (moreposts) = response.data.rows (fetched data)
      //the data is then stored in redux by dispatching it.
    };
  }

