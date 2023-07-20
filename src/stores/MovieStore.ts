import type { IMovie } from '@/models/movie';
import axios from 'axios';
import { defineStore } from 'pinia';

interface GetMoviesResponse {
  docs: IMovie[];
  page: number;
  pages: number;
  total: number;
  limit: number;
}

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [] as IMovie[],
    isLoading: false,
    focusPage: 4,
    pages: 5,
    genreSort: '',
    ratingSort: '',
  }),
  actions: {
    async getMovies(type: string) {
      try {
        this.isLoading = true;
        const { data } = await axios.get<GetMoviesResponse>(
          `https://api.kinopoisk.dev/v1.3/movie?type=${type}&${
            this.ratingSort ? 'rating.imdb=' + this.ratingSort : ''
          }&${this.genreSort ? 'genres.name=' + this.genreSort : ''}&limit=42`,
          {
            headers: {
              'X-API-KEY': 'AV16W7K-PQ0436M-H7WH58W-7EQ1W7E',
            },
          },
        );
        this.movies = data.docs;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async getMoreMovies(type: string) {
      if (this.focusPage < this.pages) {
        try {
          const { data } = await axios.get<GetMoviesResponse>(
            `https://api.kinopoisk.dev/v1.3/movie?type=${type}&${
              this.ratingSort ? 'rating.imdb=' + this.ratingSort : ''
            }&${this.genreSort ? 'genres.name=' + this.genreSort : ''}&limit=18&page=${
              this.focusPage
            }`,
            {
              headers: {
                'X-API-KEY': 'AV16W7K-PQ0436M-H7WH58W-7EQ1W7E',
              },
            },
          );
          this.focusPage++;
          this.movies = [...this.movies, ...data.docs];
          this.pages = data.pages;
        } catch (error) {
          console.error(error);
        } finally {
          this.isLoading = false;
        }
      }
    },
  },
});
