import {FloatOperationType} from "../math";

export interface IMathUtils {

    /**
     * 获取指定区间的随机数
     * @param min
     * @param max
     */
    random(min: number, max: number): number;

    /**
     * 获取指定区间的随机整数
     * @param min
     * @param max
     */
    randomInt(min: number, max: number): number;

    /**
     * 浮点运算
     * @param num1
     * @param num2
     * @param type 运算的类型
     */
    floatOperation(num1: number, num2: number, type: FloatOperationType): number;

}

