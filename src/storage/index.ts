/**
 * @file index.ts
 * @description sessionStorage 相关的基础工具类
 * @author TianChao (2209697714@qq.com)
 * @time 2019/12/18
 */
import {IStorageUtils} from "../types/IStorageUtils";

class StorageUtilsImpl implements IStorageUtils {

    deleteStorage(key: string): boolean {
        if(window.sessionStorage) {
            window.sessionStorage.removeItem(key);
            return true;
        }
        return false;
    }

    getStorage(key: string, json?: boolean): any {
        if(window.sessionStorage) {
            let result: any = window.sessionStorage.getItem(key);
            if(json) {
                return JSON.parse(result)
            }
            return result;
        } {
            return false;
        }
    }

    setStorage(key: string, value: any, json?: boolean): void {
        window.sessionStorage.setItem(key, json ? JSON.stringify(value) : value);
    }
}
export const StorageUtils: IStorageUtils = new StorageUtilsImpl();
