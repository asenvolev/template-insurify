import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { defaultReducer } from './reudcers';

export const store = configureStore({
  reducer: {
    defaultReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useShallowEqualSelector: TypedUseSelectorHook<RootState> = (selector) => useSelector(selector, shallowEqual);

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;