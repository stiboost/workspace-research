import type { Movie } from '@app/api';

export type StoreState = {
  loading: boolean;
  movies: Movie[];
}

export type Store = {
  getState: () => StoreState;
  initialize: () => Promise<void>;
}
