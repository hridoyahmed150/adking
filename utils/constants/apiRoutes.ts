const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const API_ROUTES = {
  posts: `${BASE_URL}/wp/v2/posts`,
};

export default API_ROUTES;
