const initialState = {
    loading: true,
    posts: []
  };

export default function feedSliceReducer(state = initialState, action) {
    switch (action.type) {
        case "feed/startLoading": {
            return state
            // return {
            //     ...state,
            //     loading: true
            // }
        
        }
        case "feed/postsFetched": {
            return {
                ...state,
                loading: false,
                posts: [...state.posts, ...action.payload]
                //why does the action.payload need to be spread?
            }
        }
        default: {
            return state
        }   
    }
}

