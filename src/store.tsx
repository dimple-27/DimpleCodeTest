import {createSlice, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import saga from './saga/saga';
import {applyMiddleware} from 'redux';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news:{},
    totalResults: 0,

  },
  reducers: {
    fetchData: (state, action) => {

      return {
        news: action.payload,
        totalResults:action.payload
      };
    },
  },
});

export const {fetchData} = newsSlice.actions;

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
