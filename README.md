### 项目的常用工具类

* DateUtils：时间日期的相关工具类
    1. getDate(temp?: number | string, type?: string) => string                             获取当前或指定日期
    2. getYearMonthDay(temp?: number | string, type?: string) => string                     获取年月日
    3. getHoursMinutesSeconds (temp?: number | string) => string                            获取时分秒
    4. getYearMonthDayDiff(start: number | string, end: number | string) => string          获取两个年月日的差值
    5. getHoursMinutesSecondsDiff: (start: number | string, end: number | string) => string 时分秒差值
* ArrayUtils：数组相关的工具类
    1. diff: (array1: any[], array2: any[]) => any[] 返回两个数组的差值 返回新的数组
    2. removeRepeat: (array: any[]) => any[] 去掉重复元素 返回新的数组
    3. deleteItem: (array: any[], start: number, count?: number) => any[] 删除指定元素 返回新的数组
    4. addItem: (array: any[], start: number, newItem: any) => any[] 指定位置新增元素 返回新的数组
* ObjectUtils：Object相关的工具类
    1. deepClone: (obj: object | any) => object 深度拷贝一个对象， 返回新的对象
* StorageUtils： sessionStorage 相关的工具类
    1. getStorage (key: string, json?: boolean) => any 获取一个储存的值
    2. setStorage (key: string, value: any, json?: boolean) => void 设置值
    3. deleteStorage (key: string) => boolean 删除值 

```typescript
import {ArrayUtils} from "project-util";
import {ObjectUtils} from "project-util";
import {DateUtils} from "project-utile";
import {StorageUtils} from "project-util";
```
