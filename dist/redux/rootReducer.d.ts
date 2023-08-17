/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
/// <reference types="redux-persist/types/persistreducer" />
declare const rootPersistConfig: {
    key: string;
    storage: import("redux-persist").WebStorage | {
        getItem(_key: string): Promise<null>;
        setItem(_key: string, value: any): Promise<any>;
        removeItem(_key: string): Promise<void>;
    };
    keyPrefix: string;
    whitelist: never[];
};
declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    product: import("../@types/product").ProductState & import("redux-persist/es/persistReducer").PersistPartial;
}>, import("redux").AnyAction>;
export { rootPersistConfig, rootReducer };
