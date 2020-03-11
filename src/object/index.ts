/**
 * @file index.ts
 * @description Object 相关的基础工具类
 * @author TianChao (2209697714@qq.com)
 * @time 2019/12/18
 */
import {IObjectUtils} from "../types/IObjectUtils";

class ObjectUtilsImpl implements IObjectUtils {

    /**
     * 对象的深拷贝
     * @param obj
     */
    public deepClone<T = any>(obj: T): T {
        const result: any = {};
        let keys: string[] = Object.getOwnPropertyNames(obj);
        keys.forEach((item: string) => {
            if(typeof obj[item] === 'object') {
                result[item] = this.deepClone(obj[item]);
            } else {
                let old: any = Object.getOwnPropertyDescriptors(obj)[item];
                result[item] = obj[item];
                Object.defineProperty(result, item, {
                    configurable: old.configurable,
                    enumerable: old.enumerable,
                    value: old.value,
                    writable: old.writable
                });
            }
        });
        return  result;
    }

    /**
     * 根据对象地址获取值
     * @param obj
     * @param path (aaa.bbb.ccc)
     */
    public getPath<T = any>(obj: any, path: string): T {
        const pathArray = path.split(".");
        let result: any = obj;
        for (const item of pathArray) {
            if (typeof result[item] !== 'undefined') {
                result = result[item];
            } else {
                return null;
            }
        }
        return result;
    }
}

export const ObjectUtils: IObjectUtils = new ObjectUtilsImpl();

