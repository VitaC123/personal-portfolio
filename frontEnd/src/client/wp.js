import { url } from './wpLocation';


const fetchPosts = (customPostType, postId = '', embed = true) => (
  new Promise((resolve, reject) => {
    const request = embed ?
      `${url}/${customPostType}?_embed` :
      `${url}/${customPostType}/${postId}/`;
    fetch(request, { method: 'GET' })
      .then(res => res.json())
      .then(posts => resolve(parsePostsResponse(posts)))
      .catch(e => reject(e));
  })
);

// Helper functions
const parsePostsResponse = (wpPosts) => {
  const toParse = Array.isArray(wpPosts) ? wpPosts : [wpPosts];
  return toParse.map(post => {
    const parsed = { ...post.acf };
    if (post._embedded && post._embedded['wp:featuredmedia']) {
      parsed.images = post._embedded['wp:featuredmedia'][0].media_details.sizes;
    }
    return parsed;
  });
};


export default {
  fetchPosts
};
