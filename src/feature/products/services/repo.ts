export type Id = {
    id: string;
};

export type Repo<T> = {
    getAllProducts: () => Promise<T[]>;
};
