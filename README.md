#### 项目的常用工具类

* 无任何第三方依赖

#### 导入
```typescript
import {ArrayUtils, 
        ObjectUtils,
        DateUtils,
        StorageUtils,
        MathUtils} from "project-util";

```

##### V1.0.5 版本修改

* 添加泛型支持
* 新增MathUtils 工具类



##### MathUtils（新增）：

```typescript
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
 * 浮点运算 可返回精确的浮点运算结果
 * @param num1
 * @param num2
 * @param type 运算的类型 (例如加法：FloatOperationType.ADD)
 */
floatOperation(num1: number, num2: number, type: FloatOperationType): number;
```



##### DateUtils：

```typescript
//获取当前或指定日期
getDate(temp?: number | string, type?: string) => string

//获取年月日
getYearMonthDay(temp?: number | string, type?: string) => string                     

//获取时分秒
getHoursMinutesSeconds (temp?: number | string) => string

//获取两个年月日的差值
getYearMonthDayDiff(start: number | string, end: number | string) => string

//时分秒差值
getHoursMinutesSecondsDiff(start: number | string, end: number | string) => string 
```


##### ArrayUtils：

```typescript
// 所有的数组操作不贵改变原数组

//返回两个数组的差值 返回新的数组
diff<T = any>(array1: T[], array2: T[]) => T[]

//去掉重复元素 返回新的数组
removeRepeat<T = any>(array: T[]) => T[]

//删除指定元素 返回新的数组
deleteItem<T = any>(array: T[], start: number, count?: number) => T[] 

//指定位置新增元素 返回新的数组
addItem<T = any>(array: T[], start: number, newItem: T) => T[]
```


##### ObjectUtils：

```typescript
//深度拷贝一个对象， 返回新的对象
deepClone<T = any>(obj: T) => T 
```


##### StorageUtils： 

```typescript
//获取一个储存的值
getStorage<T = any>(key: string, isJson?: boolean) => T                 

//设置值
setStorage (key: string, value: any, json?: boolean) => void

//删除值 
deleteStorage (key: string) => boolean
```

