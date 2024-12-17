import React from 'react';
import { useState, useEffect } from 'react';
const serverUrl = 'http://localhost:9000/'
interface Expert {
    expertId: number;
    fio: string;
    phone_number: number; 
   
  }
  const ExpertList: React.FC = () => {
    const [expert, setExpert] = useState<Expert[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(serverUrl+'api/News/');
        const data = await response.json();
        setExpert(data);
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
      {expert.map((Expert:any) => (
        <li key={Expert.newsid}>
          <p><strong>ФИО</strong> {Expert.fio}</p>
          <p><strong>Номер телефона</strong> {Expert.phone_number}</p>
        </li>
      ))}
    </ul>
  );
};
export default ExpertList;