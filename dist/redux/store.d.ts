/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
import { TypedUseSelectorHook } from 'react-redux';
import { rootReducer } from './rootReducer';
declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<any, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<any>>;
declare const persistor: import("redux-persist").Persistor;
export declare type RootState = ReturnType<typeof rootReducer>;
export declare type AppDispatch = typeof store.dispatch;
declare const dispatch: any;
declare const useDispatch: () => any;
declare const useSelector: TypedUseSelectorHook<RootState>;
export { store, persistor, dispatch, useSelector, useDispatch };
