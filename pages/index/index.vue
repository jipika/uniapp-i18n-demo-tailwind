<!--  -->
<template>
    <div>
        你好,世界
        {{ time }}
        <j-card></j-card>
    </div>
</template>

<script>
import jCard from "@/components/j-card.vue"
import { dateFormat } from "@/util/index"
// import引入的组件需要注入到对象中才能使用
export default {
    components: { jCard },
    data() {
        // 这里存放数据
        return {
            time: dateFormat(),
        }
    },
    // 监听属性 类似于data概念
    computed: {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    // 方法集合
    methods: {},
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
