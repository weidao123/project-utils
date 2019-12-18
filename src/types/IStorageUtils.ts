export interface IStorageUtils {
    getStorage: (key: string, json?: boolean) => any

    setStorage: (key: string, value: any, json?: boolean) => void

    deleteStorage: (key: string) => boolean
}
