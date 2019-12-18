export interface IArrayUtils {

    /**
     * 找出两个数组的差值
     */
    diff: (array1: any[], array2: any[]) => any[]

    /**
     * 去掉数组重复元素
     * @param array
     */
    removeRepeat: (array: any[]) => any[]

    /**
     * 删除指定元素
     * @param array
     * @param start 开始位置
     * @param count 删除的数量 默认 1
     */
    deleteItem: (array: any[], start: number, count?: number) => any[]

    /**
     * 指定位置新增元素
     */
    addItem: (array: any[], start: number, newItem: any) => any[]
}
