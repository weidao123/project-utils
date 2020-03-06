/**
 * Math 相关的工具库
 */
import {IMathUtils} from "../types/IMathUtils";

/**
 * 浮点运算类型
 */
enum FloatOperationTypeEnum {
    // 加
    ADD = "ADD",
    // 减
    SUBTRACT = "SUBTRACT",
    // 乘
    MULTIPLY = "MULTIPLY",
    // 除
    DIVIDE = "DIVIDE",
}

/**
 * 为了保证统一规范 使用类作为类型
 */
export class FloatOperationType {
    protected constructor(type: FloatOperationTypeEnum) {
        this.value = type;
    }

    private readonly value: FloatOperationTypeEnum;

    public getValue(): FloatOperationTypeEnum {
        return this.value;
    }

    // 加
    public static ADD: FloatOperationType = new FloatOperationType(FloatOperationTypeEnum.ADD);

    // 减
    public static SUBTRACT: FloatOperationType = new FloatOperationType(FloatOperationTypeEnum.SUBTRACT);

    // 乘
    public static MULTIPLY: FloatOperationType = new FloatOperationType(FloatOperationTypeEnum.MULTIPLY);

    // 除
    public static DIVIDE: FloatOperationType = new FloatOperationType(FloatOperationTypeEnum.DIVIDE);
}

class MathUtilsImpl implements IMathUtils {

    public random(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    public randomInt(min: number, max: number): number {
        return Math.floor(this.random(min, max));
    }

    /**
     * 浮点运算
     * @param num1
     * @param num2
     * @param type
     */
    public floatOperation(num1: number, num2: number, type: FloatOperationType): number {

        if (!(type instanceof FloatOperationType)) {
            throw new Error("'type' must FloatOperationType type");
        }

        const ADD: FloatOperationTypeEnum = FloatOperationType.ADD.getValue();
        const SUBTRACT: FloatOperationTypeEnum = FloatOperationType.SUBTRACT.getValue();
        const MULTIPLY: FloatOperationTypeEnum = FloatOperationType.MULTIPLY.getValue();
        const DIVIDE: FloatOperationTypeEnum = FloatOperationType.DIVIDE.getValue();
        const str1 = String(num1);
        const str2 = String(num2);
        const len1 = str1.substring(str1.indexOf(".") + 1, str1.length).length;
        const len2 = str2.substring(str2.indexOf(".") + 1, str2.length).length;
        const newNum1 = num1;
        const newNum2 = num2;

        let result: number = 0;
        let fixedLen: number = 0;

        switch (type.getValue()) {
            case ADD:
                fixedLen = len1 > len2 ? len1 : len2;
                result = newNum1 + newNum2;
                break;
            case SUBTRACT:
                fixedLen = len1 > len2 ? len1 : len2;
                result = newNum1 - newNum2;
                break;
            case MULTIPLY:
                fixedLen = len1 + len2;
                result = newNum1 * newNum2;
                break;
            case DIVIDE:
                fixedLen = len1 + len2;
                result = newNum1 / newNum2;
                break;
        }
        result = Number(result.toFixed(fixedLen));
        return Number(result);
    }
}

export const MathUtils: IMathUtils = new MathUtilsImpl();
