## 项目的常用工具类

#### import
```typescript
import {ArrayUtils} from "project-util";
import {ObjectUtils} from "project-util";
import {DateUtils} from "project-utile";
import {StorageUtils} from "project-util";
```


#### DateUtils：时间日期的相关工具类

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


#### ArrayUtils：数组相关的工具类
    
```typescript
//返回两个数组的差值 返回新的数组
diff: (array1: any[], array2: any[]) => any[]

//去掉重复元素 返回新的数组
removeRepeat: (array: any[]) => any[]

//删除指定元素 返回新的数组
deleteItem: (array: any[], start: number, count?: number) => any[] 

//指定位置新增元素 返回新的数组
addItem: (array: any[], start: number, newItem: any) => any[]
```


#### ObjectUtils：Object相关的工具类
    
```typescript
//深度拷贝一个对象， 返回新的对象
deepClone: (obj: object | any) => object 
```


#### StorageUtils： sessionStorage 相关的工具类
   
```typescript
//获取一个储存的值
getStorage (key: string, json?: boolean) => any                 

//设置值
setStorage (key: string, value: any, json?: boolean) => void

//删除值 
deleteStorage (key: string) => boolean
```

