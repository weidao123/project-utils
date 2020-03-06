export interface IArrayUtils {

    /**
     * 找出两个数组的差值
     */
    diff: <T = any>(array1: T[], array2: T[]) => T[]

    /**
     * 去掉数组重复元素
     * @param array
     */
    removeRepeat: <T = any>(array: T[]) => T[]

    /**
     * 删除指定元素
     * @param array
     * @param start 开始位置
     * @param count 删除的数量 默认 1
     */
    deleteItem: <T = any>(array: T[], start: number, count?: number) => T[]

    /**
     * 指定位置新增元素
     */
    addItem: <T = any>(array: T[], start: number, newItem: T) => T[]

    /**
     * 排序
     * @param flag 升序 或者 倒序
     * @key 根据数组的某个字段进行排序
     */
    sort: <T = any>(array: T[], flag: true, key?: string) => T[];
}
