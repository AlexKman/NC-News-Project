import axios from "axios";

const BASE_URL = "https://tranquil-lake-37102.herokuapp.com/api";

export const getArticles = async () => {
  const res = await axios.get(`${BASE_URL}/articles`);
  return res.data.articles;
};

// export const getUserByUsername = username => {
//   return axios.get(`${BASE_URL}/users/${username}`).then(({ data }) => {
//     ({ users: data });
//   });
// };

export const getArticleById = async id => {
  const res = await axios.get(`${BASE_URL}/articles/${id}`);
  return res.data.article;
};

export const getArticlesByTopic = async topic => {
  const res = await axios.get(`${BASE_URL}/topics/${topic}/articles`);
  return res.data.articles;
};

export const patchVotes = (voteChange, articleId) => {
  return axios.patch(
    `${BASE_URL}/articles/${articleId}?inc_votes=${voteChange}`
  );
};

export const getTopics = async () => {
  const res = await axios.get(`${BASE_URL}/topics`);
  console.log(res.data);
  return res.data.topics;
};

export const getCommentsByArticleId = async id => {
  const res = await axios.get(`${BASE_URL}/articles/${id}/comments`);
  return res.data.comments;
};

export const postArticleByTopic = async (topic, title, body, username) => {
  const postingArticle = { title: title, body: body, username: username };
  const { data } = await axios.post(
    `${BASE_URL}/topics/${topic}/articles`,
    postingArticle
  );
  return data.article;
};
