import type { IMovie } from '@/models/movie';
import axios from 'axios';
import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [] as IMovie[],
    isLoading: false,
  }),
  actions: {
    async getMovies(type: string, genre?: string) {
      try {
        this.isLoading = true;
        const { data } = await axios.get(
          `https://api.kinopoisk.dev/v1.3/movie?type=${type}&limit=42&${
            genre ? 'genres.name=' + genre : ''
          }`,
          {
            headers: {
              'X-API-KEY': 'AV16W7K-PQ0436M-H7WH58W-7EQ1W7E',
            },
          },
        );
        this.movies = data.docs;
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
