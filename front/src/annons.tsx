import React from 'react';
import { useState, useEffect } from 'react';
const serverUrl = 'http://localhost:9000/'
interface Announcement {
    announcementId: number;
    title: string;
    description: string; 
    image: string;
   
  }
  const AnnouncementList: React.FC = () => {
    const [announcement, setAnnouncement] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(serverUrl+'api/News/');
        const data = await response.json();
        setAnnouncement(data);
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
      {announcement.map((Announcement:any) => (
        <li key={Announcement.newsid}>
          <p><strong>Название</strong> {Announcement.title}</p>
          <p><strong>Описание:</strong> {Announcement.description}</p>
          <p><strong>Изображение</strong> {Announcement.image}</p>
        </li>
      ))}
    </ul>
  );
};
export default AnnouncementList;