/**
 * @file index.ts
 * @description sessionStorage 相关的基础工具类
 * @author TianChao (2209697714@qq.com)
 * @time 2019/12/18
 */

export class StorageUtils  {

    public  static  deleteStorage(key: string): boolean {
        if(window.sessionStorage) {
            window.sessionStorage.removeItem(key);
            return true;
        }
        return false;
    }

    public  static getStorage<T = any>(key: string, isJson?: boolean): T {
        if(window.sessionStorage) {
            let result: any = window.sessionStorage.getItem(key);
            if(!!isJson === true) {
                return JSON.parse(result)
            }
            return result;
        } {
            return null;
        }
    }

    public  static  setStorage(key: string, value: any, json?: boolean): void {
        window.sessionStorage.setItem(key, json ? JSON.stringify(value) : value);
    }

    /**
     * @param key
     * @param value
     * @param expires 过期时间戳 默认值 2 * 60 * 60 * 1000
     */
    public static setCookie(key: string, value: string, expires?): void {
        if (!expires) {
            expires = 2 * 60 * 60 * 1000;
        }
        const date = new Date(Date.now() + expires);
        // @ts-ignore
        document.cookie = key + "=" + value + ";expires=" + date.toGMTString();
    }

    public static removeCookie(key: string): void {
        StorageUtils.setCookie(key, "null", -1);
    }

    public static getCookie(key: string): string {
        const cookies = document.cookie.split(";");
        for (const item of cookies) {
            const cookieKeyValue = item.split("=");
            if (cookieKeyValue[0].replace(" ", "") === key) {
                return cookieKeyValue[1];
            }
        }
        return null;
    }
}
