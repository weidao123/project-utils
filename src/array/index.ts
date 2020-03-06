/**
 * @file index.ts
 * @description Array 相关的基础工具类
 * @author TianChao (2209697714@qq.com)
 * @time 2019/12/18
 */
import {IArrayUtils} from "../types/IArrayUtils";

class ArrayUtilsImpl implements IArrayUtils {

    /**
     * 找出两个数组的差集
     * @param array1
     * @param array2
     */
    public diff<T = any>(array1: T[], array2: T[]): T[] {
        const result: any[] = [];
        array1.forEach((item: T) => {
            if (typeof item === 'object') {
                array2.forEach((val: T) => {
                    if (JSON.stringify(val) === JSON.stringify(item)) result.push(item);
                });
            } else if (array2.includes(item)) {
                result.push(item);
            }
        });
        return result;
    }

    /**
     * 去掉重复元素
     * @param array
     */
    public removeRepeat<T = any>(array: T[]): T[] {
        let flag: boolean = false;
        let result: T[] = [];
        array.forEach((item: T) => {
            if (typeof item === 'object') flag = true;
        });
        if (flag) {
            let newArray: string[] = array.map(item => JSON.stringify(item));
            result = Array.from(new Set(newArray)).map( item => JSON.parse(item) );
        } else {
            result = Array.from(new Set(array));
        }
        return result;
    }

    /**
     * 删除指定的元素，不会改变原数组
     * @param array
     * @param start
     * @param count
     */
    public deleteItem<T = any>(array: T[], start: number, count: number = 1): T[] {
        let newArray: T[] = [];
        array.forEach((item: T, index: number) => {
            if (index !== start && index > start + count - 1) {
                newArray.push(item);
            }
        });
        return newArray;
    }

    /**
     * 在指定位置添加元素
     */
    public addItem<T = any>(array: T[], start: number, newItem: T): T[] {
        if(start >= array.length) return array;
        let newArray: any[] = [];
        array.forEach((item: any, index: number) => {
            if (index === start) newArray.push(newItem);
            newArray.push(item);
        });
        return newArray;
    }

    /**
     * 对数组进行排序
     * @param array
     * @param flag 升序 或者 降序
     * @param key 根据数组的某个字段进行排序
     */
    public sort<T = any>(array: T[], flag: boolean = true, key?: string): T[] {
        array.sort((item1: T, item2: T) => {
            if (key) {
                return flag ? item1[key] - item2[key] : item2[key] - item1[key];
            } else {
                return flag ? Number(item1) - Number(item2) : Number(item2) - Number(item1);
            }
        });
        return array;
    }
}

export const ArrayUtils: IArrayUtils = new ArrayUtilsImpl();

