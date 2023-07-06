export interface IMovie {
  id: number;
  name: string;
  year: number;
  movieLength: number;
  rating: {
    imdb: number;
  };
  poster: {
    url: string;
    previewUrl: string;
  };
}
