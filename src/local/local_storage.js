// src/local/news_storage.js
export const saveNewsToLocal = (news) => {
  localStorage.setItem("news", JSON.stringify(news));
};

export const getNewsFromLocal = () => {
  const news = localStorage.getItem("news");
  return news ? JSON.parse(news) : [];
};

export const clearNewsFromLocal = () => {
  localStorage.removeItem("news");
};
