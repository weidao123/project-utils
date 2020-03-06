export interface IStorageUtils {
    getStorage: <T = any>(key: string, isJson?: boolean) => T

    setStorage: (key: string, value: any, json?: boolean) => void

    deleteStorage: (key: string) => boolean
}
