import axios from "axios";

const BASE_URL = "https://tranquil-lake-37102.herokuapp.com/api";

export const getArticles = async () => {
  const res = await axios.get(`${BASE_URL}/articles?limit=5000`);
  return res.data.articles;
};

export const getArticleById = async id => {
  const res = await axios.get(`${BASE_URL}/articles/${id}`);
  return res.data.article;
};

export const getArticlesByTopic = async topic => {
  const res = await axios.get(
    `${BASE_URL}/topics/${topic}/articles?limit=1000`
  );
  return res.data.articles;
};

export const patchArticleVotes = (voteChange, articleId) => {
  const incVotes = { inc_votes: voteChange };
  return axios.patch(`${BASE_URL}/articles/${articleId}`, incVotes);
};

export const patchCommentVotes = (voteChange, article_id, comment_id) => {
  const incVotes = { inc_votes: voteChange };
  return axios.patch(
    `${BASE_URL}/articles/${article_id}/comments/${comment_id}`,
    incVotes
  );
};

export const getTopics = async () => {
  const res = await axios.get(`${BASE_URL}/topics`);

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

export const postCommentByArticle = async (id, body, username) => {
  const postingComment = { body: body, username: username };
  const { data } = await axios.post(
    `${BASE_URL}/articles/${id}/comments`,
    postingComment
  );
  return data.comment;
};

export const getUserByUsername = username => {
  return axios.get(`${BASE_URL}/users/${username}`).then(({ data }) => {
    return data.user;
  });
};
