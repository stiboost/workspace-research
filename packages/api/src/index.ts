import type { Movie } from "./types";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const createApi = (baseDelay: number) => {
  const fetchMovies = async (): Promise<Movie[]> => {
    await delay(baseDelay);
    return [
      { id: 1, title: 'Inception', year: 2010 },
      { id: 2, title: 'Interstellar', year: 2014 },
      { id: 3, title: 'The Dark Knight', year: 2008 },
    ];
  };

  return {
    fetchMovies,
  }
};

export type * from './types';
