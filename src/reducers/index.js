import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// Wire up the reducer to our application, the value (BooksReducer) is the reducer
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;