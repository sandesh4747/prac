import { Button } from "@material-tailwind/react";
import React from "react";
import NewsAdd from "./NewsAdd";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import NewsCard from "./NewsCard";

export default function NewsPage() {
  const { news } = useSelector((state) => state.newsSlice);
  const nav = useNavigate();
  return (
    <div>
      <div className="flex justify-between item-center mb-6">
        <h1>All News</h1>
        <Button onClick={() => nav("/add-news")}>add news</Button>
      </div>
      {news.length === 0 ? (
        <div className="text-center space-y-3 py-12">
          <h1>No News yet</h1>
          <p>Get started by creating your first news!</p>
          <Button onClick={() => nav("/add-news")}>create first news</Button>
        </div>
      ) : (
        <div className="flex  flex-col gap-4">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      )}
    </div>
  );
}
