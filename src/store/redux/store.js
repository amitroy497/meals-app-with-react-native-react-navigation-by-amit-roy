import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice.slice';

export const store = configureStore({
	reducer: {
		favoriteMeals: favoritesReducer,
	},
});
