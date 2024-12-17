import React from 'react';
import { useState, useEffect } from 'react';
const serverUrl = 'http://localhost:9000/'
interface News {
    newsId: number;
    title: string;
    description: string; 
    image: string;
   
  }
  const NewsList: React.FC = () => {
    const [news, setNews] = useState<News[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(serverUrl+'api/News/');
        const data = await response.json();
        setNews(data);
        setLoading(false);
      } catch (err:any) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>Загрузка...</p>;
  }
  if (error) {
    return <p>Ошибка: {error}</p>;
  }
  return (
    <ul>
      {news.map((News:any) => (
        <li key={News.newsid}>
          <p><strong>Название</strong> {News.title}</p>
          <p><strong>Описание:</strong> {News.description}</p>
          <p><strong>Изображение</strong> {News.image}</p>
        </li>
      ))}
    </ul>
  );
};
export default NewsList;