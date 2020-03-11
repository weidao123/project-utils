export interface IObjectUtils {
    deepClone: <T = any>(obj: T) => T;

    getPath: <T>(obj: any, path: string) => T;
}
