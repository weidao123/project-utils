/**
 * 一些其他类型的工具类
 */
import {ArrayUtils} from "../array";

interface Tree {
    // 存放子集的 item key  default: children
    childrenKey?: string

    // 唯一标识的key  default: id
    idKey?: string

    // 关联父级的key  default: pid
    pidKey?: string

    // 原始数据
    dataSource: any[]
}

function getChildrenByPid(dataSource: any[], idKey: string, pidValue: string, pidKey: string, childrenKey: string) {
    const result = [];
    let num = 0;
    let allNum = 0;
    for (const item of dataSource) {
        if (item[pidKey] === pidValue) {
            allNum++;
            const {children, count, allCount} = getChildrenByPid(dataSource, idKey, item[idKey], pidKey, childrenKey);
            allNum += allCount;
            if (children.length === 0) {
                num++;
                result.push(item);
            } else {
                const obj = item;
                obj[childrenKey] = children;
                obj._allCount = children.length;
                obj._count = count;
                obj._childrenCount = children.length;
                num += count;
                result.push(obj);
            }
            dataSource = ArrayUtils.deleteItem(dataSource, dataSource.indexOf(item), 1);
        }
    }
    return { children: result, count: num, allCount: allNum };
}

export class Util {

    private static _flag = null;
    private static _flagThrottle = null;

    /**
     * @description 生成一个树型结构的数据 注意：一级结构的 pid 必须为false
     *      并且记录 每一个 children 的子级数量
     *      _count 不包含有的 children 这一项的数量
     *      _allCount 下面的所有的子集数量
     *      _childrenCount 拥有的一级子集数量
     */
    static getTreeData<T = any>(params: Tree): T[] {
        const { idKey = 'id', pidKey = 'pid', childrenKey = 'children', dataSource} = params;
        const result = [];
        for (const item of dataSource) {
            const parent: any = item;
            if (!!item[pidKey] === false) {
                const {children, count, allCount} = getChildrenByPid(dataSource, idKey, item[idKey], pidKey, childrenKey);
                parent[childrenKey] = children;
                parent._allCount = allCount;
                parent._count = count;
                parent._childrenCount = children.length;
                result.push(parent);
            }
        }
        return result;
    }

    /**
     * 防抖
     * @param fun 要执行的方法
     * @param time
     */
    static antiShake(fun: Function, time: number = 500) {
        if (Util._flag !== null) {
            clearTimeout(Util._flag);
        }
        Util._flag = setTimeout(function () {
            fun();
            clearTimeout(Util._flag);
            Util._flag = null;
        }, time)
    }

    /**
     * 节流
     * @param fun 要执行的方法
     * @param time
     */
    static throttle(fun: Function, time: number = 500) {
        if (Util._flagThrottle !== null) {
            return;
        }
        Util._flagThrottle = setTimeout(function () {
            fun();
            clearTimeout(Util._flagThrottle);
            Util._flagThrottle = null;
        }, time)
    }

    /**
     * 获取 URL 上的参数
     * @param params
     */
    static getURLParams<T = any>(params?: { url?: string, key?: string }): T {
        let {key, url} = params || {};
        if (!url) {
            url = location.href;
        }
        url = url.substring(url.indexOf("?") + 1);
        const arr = url.split("&").map((item) => item.split("="));
        const obj: any = {};
        for (const item of arr) {
            obj[item[0]] = item[1];
        }
        return key ? obj[key] : obj;
    }
}
