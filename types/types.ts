export interface Movie {
  id: number;
  title: string;
  posterPath: string;
  rating: number;
  duration: string;
  releaseDate: string;
  upcoming: boolean;
  synopsis: string;
  director: string;
  actors: string;
}

export interface Theater {
  id: number;
  name: string;
  address: string;
  logo?: string;
}

export interface Showtime {
  id: number;
  movieId: number;
  theaterId: number;
  date: string;
  time: string;
  price: number;
  movie: Movie;
  theater: Theater;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  data?: (Movie | Showtime)[]; // Support both Movie and Showtime data
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
}

export interface Comment {
  id: number;
  userId: number;
  movieId: number;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  movie: Movie;
}
