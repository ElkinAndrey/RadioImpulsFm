import { useRef, useState } from "react";

function useFetching(callback, startLoader = false) {
  const ref = useRef(0);
  const [isLoading, setIsLoading] = useState(startLoader); // Равно true, если данные пока, что получаются
  const [error, setError] = useState(null); // Если возникнет ошибка

  // Получение данных
  const fetching = async (...args) => {
    try {
      ref.current++;
      setIsLoading(true);
      await callback(...args); // Начать получение данных
    } catch (e) {
      setError(e);
    } finally {
      ref.current--;
      if (ref.current === 0) setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
}

export default useFetching;
