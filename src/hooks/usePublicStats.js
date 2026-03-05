import { useState, useEffect } from 'react';

export const usePublicStats = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement
    setTimeout(() => {
      setData({
        students_count: 1250,
        teachers_count: 48,
        courses_count: 156,
        success_rate: 78
      });
      setIsLoading(false);
    }, 500);
  }, []);

  return { data, isLoading };
};