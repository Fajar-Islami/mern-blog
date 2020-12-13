export default (state, action) => {
  switch (action.type) {
    case 'GET_ALL_BLOGS': {
      return {
        ...state,
        totalBlogs: action.payload,
      };
    }
    case 'GET_BLOGS': {
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    }
    case 'ADD_BLOG': {
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    }
    case 'DETAIL_BLOG': {
      return {
        ...state,
        loading: false,
        // blogs: state.blogs.filter((detail) => detail._id === action.payload),
        blogs1: action.payload,
      };
    }
    case 'BLOG_LEAVE': {
      return {
        ...state,
        // loading: true,
        blogs1: [],
      };
    }
    case 'DELETE_BLOG': {
      return {
        ...state,
        blogs: state.blogs.filter((detail) => detail._id !== action.payload),
      };
    }
    case 'BLOG_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
