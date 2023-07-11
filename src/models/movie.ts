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

export interface IMovieFull extends IMovie {
  ageRating: number;
  backdrop: {
    url: string;
  };
  countries: {
    name: string;
  }[];
  genres: { name: string }[];
  logo: {
    url: string;
  };
  shortDescription: string;
  persons: IPersons[];
}

interface IPersons {
  name: string;
  photo: string;
  profession: 'режиссеры' | 'актеры';
}
