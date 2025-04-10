import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getNewsFromLocal, saveNewsToLocal } from "../../local/local_storage";

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState: {
    news: getNewsFromLocal(),
  },
  reducers: {
    addNews: (state, action) => {
      const newsItem = {
        id: nanoid(),
        title: action.payload.title,
        detail: action.payload.detail,
        author: action.payload.author,
        categories: action.payload.categories,
      };
      state.news.push(newsItem);
      saveNewsToLocal(state.news);
    },
    deleteNews: (state, action) => {
      state.news = state.news.filter((item) => item.id !== action.payload);
      saveNewsToLocal(state.news);
    },
    updateNews: (state, action) => {
      const { id, title, detail, author, categories } = action.payload;
      const existingNews = state.news.find((item) => item.id === id);
      if (existingNews) {
        existingNews.title = title;
        existingNews.detail = detail;
        existingNews.author = author;
        existingNews.categories = categories;
        saveNewsToLocal(state.news);
      }
    },
  },
});

export const { addNews, deleteNews, updateNews } = newsSlice.actions;
