#### 项目的常用工具类

* 无任何第三方依赖
* 后续会持续更新。。。

#### 导入
```typescript
import {
    ArrayUtils, 
    ObjectUtils,
    DateUtils,
    StorageUtils,
    MathUtils,
    RegularUtils,
    PlatformUtils,
	request,
	requestContext} from "project-util";

```

##### V1.0.7 版本修改

- 新增 request 基于XMLHttpRequest封装
- 新增 requestContext 来对请求做一些全局配置
- StorageUtils 新增Cookie的相关操作

##### V1.0.6 版本修改

- 新增 PlatformUtils
- 新增常用的正则 RegularUtils

##### V1.0.5 版本修改

- 添加泛型支持
- 新增MathUtils 工具类

##### request：

```ty
// 支持传入泛型 默认返回 Promise<Response> 类型
request<T = Response>(requestParams: RequestOptions): Promise<T>

// 请求的参数的配置项
interface RequestOptions {

    // 请求的URL
    url: string

    // 请求的方法
    method: RequestMethodType

    // 请求的内容参数 GET 参数也可以放到这里
    body?: any

    // 设置单次的请求头
    header?: Header

    // 设置超时时间 default: 30000
    timeout?: number | undefined
}

// 以下是 requestContext 上的一些方法 可用来做一些全局配置 

// 请求失败
requestFail(xhr: XMLHttpRequest): void
// 设置BaseURL
setBaseURL(baseURL: string): void
// 设置全局公共参数
setGlobalParams(params: object): void
// 设置全剧请求头
setRequestHeaders(header: Header): void
// 设置超时时间
setTimeout(timeout: number): void
// 请求超时
onTimeout(): any
// 请求出错
onError(): any
// 文件上传的进度
onprogress(params: any): any

abort(): void

```



##### RegularUtils：

```typescript
// 匹配手机号
checkPhone(phone: string | number): boolean

// 匹配邮箱
checkEmail(email: string): boolean

// 匹配URL
checkUrl(url: string): boolean

// 匹配身份证号码
checkIdNumber(number: number | string): boolean

// 匹配邮编
checkZipCode(zipCode: string): boolean
```



##### PlatformUtils

```typescript
// 获取当前的运行平台 （不支持node环境）
getPlatform(): Platform
// 是否是微信环境
isWeChat(): boolean
```



##### MathUtils：

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
/**
 * 排序
 * @param flag: 升序 或者 降序
 * @param key: 根据数组的某个字段排序
 */
sort<T = any>(array: T[], flag: boolean, key?: string) => T[]
```


##### ObjectUtils：

```typescript
//深度拷贝一个对象， 返回新的对象
deepClone<T = any>(obj: T) => T 
```


##### StorageUtils： 

```typescript
// 获取一个储存的值
getStorage<T = any>(key: string, isJson?: boolean) => T                 

// 设置值
setStorage (key: string, value: any, json?: boolean) => void

// 删除值 
deleteStorage (key: string) => boolean

// 设置cookie
setCookie(key: string, value: string, expires?): void

// 删除
removeCookie(key: string): void
// 获取
getCookie(key: string): string
```

