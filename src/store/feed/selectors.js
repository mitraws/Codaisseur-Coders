 export function selectFeedLoading(state) {
    return state.feed.loading
  }
  
  
export const selectFeedPosts = state => {
    return state.feed.posts
  }
  
    //state.feed.loading -> feed is from from slice reducer