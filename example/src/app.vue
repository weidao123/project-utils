<template>
    <div id="main">
        {{ message }}
    </div>
</template>

<script>
/**
 * 用于测试 project-utils 包
 */
import { request } from "../../dist";

export default {
    data() {
        return {
            message: 'test main app',
        }
    },
    mounted() {
        console.log(request);
    }
}
</script>
