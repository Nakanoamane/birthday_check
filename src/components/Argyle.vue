<template>
    <div class="argyle" :style="base">
        <div class="box" v-for="n in 2">
            <div :style="line_2"></div>
            <div :style="line_3"></div>
            <div :style="line_4"></div>
            <div :style="line_5"></div>
        </div>
        <div class="box" v-for="n in 2">
            <div :style="line_2_r"></div>
            <div :style="line_3_r"></div>
            <div :style="line_4"></div>
            <div :style="line_5"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Argyle",
        props: ['colors'],
        computed: {
            base() {
                return `background-color: rgba(${this.colors[1]}, 1);`
            },
            line_2() {
                return `background-image: linear-gradient(63.5deg, rgba(${this.colors[2]}, 0.5) 33.3%, transparent 33.3%,transparent 66.6%, rgba(${this.colors[2]}, 0.5) 66.6%,  rgba(${this.colors[2]}, 0.5));`
            },
            line_3() {
                return `background-image: linear-gradient(116.5deg, rgba(${this.colors[3]}, 0.5) 33.3%, transparent 33.3%,transparent 66.6%, rgba(${this.colors[3]}, 0.5) 66.6%,  rgba(${this.colors[3]}, 0.5));`
            },
            line_4() {
                return `background-image: linear-gradient(63.5deg, transparent 16.65%, rgba(${this.colors[4]}, 0.5) 16.65%, rgba(${this.colors[4]}, 0.5) 18.65%, transparent 18.65%, transparent 49.95%, rgba(${this.colors[4]}, 0.5) 49.95%, rgba(${this.colors[4]}, 0.5) 51.95%, transparent 51.95%, transparent 83.25%, rgba(${this.colors[4]}, 0.5) 83.25%, rgba(${this.colors[4]}, 0.5) 85.25%, transparent 85.25%, transparent);`
            },
            line_5() {
                return `background-image: linear-gradient(116.5deg, transparent 16.65%, rgba(${this.colors[5]}, 0.5) 16.65%, rgba(${this.colors[5]}, 0.5) 18.65%, transparent 18.65%, transparent 49.95%, rgba(${this.colors[5]}, 0.5) 49.95%, rgba(${this.colors[5]}, 0.5) 51.95%, transparent 51.95%, transparent 83.25%, rgba(${this.colors[5]}, 0.5) 83.25%, rgba(${this.colors[5]}, 0.5) 85.25%, transparent 85.25%, transparent);`
            },
            line_2_r() {
                return `background-image: linear-gradient(63.5deg, transparent 33.3%, rgba(${this.colors[2]}, 0.5) 33.3%,rgba(${this.colors[2]}, 0.5) 66.6%, transparent 66.6%,  transparent);`
            },
            line_3_r() {
                return `background-image: linear-gradient(116.5deg, transparent 33.3%, rgba(${this.colors[3]}, 0.5) 33.3%,rgba(${this.colors[3]}, 0.5) 66.6%, transparent 66.6%,  transparent);`
            }
        }
    }
</script>

<style scoped>
    .argyle {
        width: 300px;
        height: 300px;
        text-align: left;
        font-size: 0;
    }

    .box {
        display: inline-block;
        width: 150px;
        height: 150px;
        position: relative;
    }

    .box div {
        width: 150px;
        height: 150px;
        position: absolute;
    }


</style>