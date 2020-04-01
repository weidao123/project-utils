<template>
    <div id="main">
        <h1 @click="test_Util_throttle">{{ message }}</h1>
    </div>
</template>

<script lang="ts">
/**
 * 用于测试 project-utils 包
 */
import { request, requestContext, Util, ObjectUtils } from "../../src";
// import { request, requestContext } from "project-util";
const testData = [
    { id: 1, value: '1一级目录' },
    { id: 2, value: '2一级目录' },
    { id: 3, value: '3一级目录' },
    { id: 4, value: '4一级目录' },

    { id: 5, value: '二级目录5', pid: 1, },
    { id: 6, value: '二级目录6', pid: 1 },
    { id: 7, value: '二级目录7', pid: 4 },
    { id: 8, value: '二级目录8', pid: 3 },
    { id: 9, value: '二级目录9', pid: 2 },

    { id: 10, value: '三级目录5', pid: 1, },
    { id: 11, value: '三级目录6', pid: 1 },

    { id: 12, value: '四级目录7', pid: 11 },
    { id: 13, value: '五级目录8', pid: 12 },
    { id: 14, value: '四级目录9', pid: 11 },
    { id: 'asd', value: '7级目录9', pid: 7 },
    { id: 'aasdsd', value: '7级目录9', pid: 12},
];

export default {
    data() {
        return {
            message: 'test project-utils',
            obj: {
                name: 10,
                cc: 10
            }
        }
    },
    methods: {
        test_Util_getTreeData() {
            const res = Util.getTreeData({ dataSource: testData, childrenKey: 'cc' });
            console.log(res);
        },
        test() {
            console.log(this);
        },
        test_Util_antiShake() {
            Util.antiShake(this.test)
        },
        test_Util_throttle() {
            Util.throttle(this.test);
        },
        test_ObjectUtil() {
            console.log(ObjectUtils.deepClone(this.obj));
        }
    },
    async mounted() {
        this.test_ObjectUtil();
    }
}
</script>
