/**
 * @file index.ts
 * @description Array 相关的基础工具类
 * @author TianChao (2209697714@qq.com)
 * @time 2019/12/18
 */
import {IArrayUtils} from "../types/IArrayUtils";

class ArrayUtilsImpl implements IArrayUtils {

    /**
     * 找出两个数组的差值
     * @param array1
     * @param array2
     */
    public diff(array1: any[], array2: any[] | any): any[] {
        const result: any[] = [];
        array1.forEach((item: any) => {
            if (typeof item === 'object') {
                array2.forEach((val: any) => {
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
    public removeRepeat(array: any[]): any[] {
        let flag: boolean = false;
        let result: any[] = [];
        array.forEach((item: any) => {
            if (typeof item === 'object') flag = true;
        });
        if (flag) {
            let newArray: string[] = array.map(item => String(JSON.stringify(item)));
            result = Array.from(new Set(newArray));
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
    public deleteItem(array: any[], start: number, count: number = 1): any[] {
        let newArray: any[] = [];
        array.forEach((item: any, index: number) => {
            if (index !== start && index > start + count - 1) {
                newArray.push(item);
            }
        });
        return newArray;
    }

    /**
     * 在指定位置添加元素
     */
    public addItem(array: any[], start: number, newItem: any): any[] {
        if(start >= array.length) return array;
        let newArray: any[] = [];
        array.forEach((item: any, index: number) => {
            if (index === start) newArray.push(newItem);
            newArray.push(item);
        });
        return newArray;
    }
}

export const ArrayUtils: IArrayUtils = new ArrayUtilsImpl();

