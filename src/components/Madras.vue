<template>
    <div class="madras" :style="color_1">
        <div class="box border">
            <div class="mt_0 h-5" :style="color_2"></div>
            <div class="mt_0 h-3" :style="color_3"></div>
            <div class="mt_1 h-3" :style="color_4"></div>
            <div class="mt-5 h-1" :style="color_5"></div>
            <div class="mt-1 h-1" :style="color_5"></div>
            <div class="mt-1 h-1" :style="color_5"></div>
            <div class="mt-5 h-3" :style="color_4"></div>
            <div class="mt-1 h-3" :style="color_3"></div>
            <div class="mt_0 h-5" :style="color_2"></div>
            <div class="mt_0 h-20" :style="color_3"></div>
            <div class="mt_0 h-5" :style="color_2"></div>
            <div class="mt_0 h-1" :style="color_4"></div>
            <div class="mt-20 h-3" :style="color_3"></div>
            <div class="mt_0 h-5" :style="color_2"></div>
            <div class="mt_0 h-1" :style="color_4"></div>
            <div class="mt_0 h-5" :style="color_2"></div>
            <div class="mt_0 h-1" :style="color_4"></div>
        </div>
        <div class="box stripe">
            <div class="ml-0 w-20" :style="color_2"></div>
            <div class="ml-5 w-3" :style="color_4"></div>
            <div class="ml-0 w-20" :style="color_3"></div>
            <div class="ml-0 w-5" :style="color_2"></div>
            <div class="ml-3 w-1" :style="color_5"></div>
            <div class="ml-1 w-1" :style="color_5"></div>
            <div class="ml-1 w-1" :style="color_5"></div>
            <div class="ml-3 w-5" :style="color_2"></div>
            <div class="ml-5 w-5" :style="color_3"></div>
            <div class="ml-0 w-1" :style="color_4"></div>
            <div class="ml-0 w-1" :style="color_3"></div>
            <div class="ml-0 w-1" :style="color_4"></div>
            <div class="ml-0 w-1" :style="color_3"></div>
            <div class="ml-0 w-1" :style="color_4"></div>
            <div class="ml-0 w-5" :style="color_3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Madras",
        props: ['colors'],
        computed: {
            color_1() {
                return `background-color: rgba(${this.colors[1]}, 1);`
            },
            color_2() {
                return `background-color: rgba(${this.colors[2]}, 0.5);`
            },
            color_3() {
                return `background-color: rgba(${this.colors[3]}, 0.5);`
            },
            color_4() {
                return `background-color: rgba(${this.colors[4]}, 0.5);`
            },
            color_5() {
                return `background-color: rgba(${this.colors[5]}, 0.5);}`
            },
        }
    }
</script>

<style scoped>
    .madras {
        width: 300px;
        height: 300px;
        position: relative;
        font-size: 0;
        text-align: left;
    }

    .box {
        width: 300px;
        height: 300px;
        position: absolute;
    }

    .border div{
        width: 300px;
    }

    .mt-1{
        margin-top: 3px;
    }
    .mt-5{
        margin-top: 15px;
    }
    .mt-20{
        margin-top: 60px;
    }

    .h-1 {
        height: 3px;
    }
    .h-3 {
        height: 9px;
    }
    .h-5 {
        height: 15px;
    }
    .h-20 {
        height: 60px;
    }

    .stripe div{
        height: 300px;
        display: inline-block;
    }

    .ml-1 {
        margin-left: 3px;
    }
    .ml-3 {
        margin-left: 9px;
    }
    .ml-5 {
        margin-left: 15px;
    }

    .w-1 {
        width: 3px;
    }
    .w-3 {
        width: 9px;
    }
    .w-5 {
        width: 15px;
    }
    .w-20 {
        width: 60px;
    }


</style>