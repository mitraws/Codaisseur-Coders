export const selectPostAndComments = state => {
    return state.postPage.loading
    ? null: {
        post: state.postPage.post,
        comments: state.postPage.comments
    }
  }

  //state.postPage.loading -> from slice reducer