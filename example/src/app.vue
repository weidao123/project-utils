<template>
    <div id="main">
        <h1>{{ message }}</h1>
    </div>
</template>

<script lang="ts">
/**
 * 用于测试 project-utils 包
 */
// import { request, requestContext } from "../../dist";
import { request, requestContext } from "project-util";

export default {
    data() {
        return {
            message: 'test project-utils',
        }
    },
    methods: {
        afterRequest(res) {
            console.log(res);
            console.log('afterRequest');
        },
        timeout() {
            console.log();
        },
    },
    async mounted() {
        console.log(requestContext);
        requestContext.afterRequest = this.afterRequest;
        requestContext.setTimeout(10000);
        requestContext.onTimeout = this.timeout;
        const res = await request({ url: '/dynamic/list', method: 'GET', timeout: 500, body: {
            type: 'HOT'
            }});
        console.log(res);
    }
}
</script>
