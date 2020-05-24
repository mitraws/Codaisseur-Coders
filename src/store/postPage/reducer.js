const initialState = {
    loading: true,
    post: null,
    comments: []
  };

export default function postPageSliceReducer(state = initialState, action) {
    switch (action.type) {
        case "post/startLoading": { 
            return {
                ...state, 
                Loading: true
            }
        }
        case "post/postsFetched": {
            return {
                posts: action.payload.post,
                comments: action.payload.comments,
                Loading: false
            }
        }
        default: {
            return state
        }
    } 
}
