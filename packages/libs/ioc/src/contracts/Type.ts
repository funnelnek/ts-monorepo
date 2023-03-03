export interface Type<T extends object = object> {
    new (...args: any[]): T;
}