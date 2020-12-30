<template>
    <div class="basket">
        <div class="box" :style="border"></div>
        <div class="box" :style="stripe"></div>
        <div class="box" :style="stripe"></div>
        <div class="box" :style="border"></div>
    </div>
</template>

<script>
    export default {
        name: "Basket",
        props: ['colors'],
        computed: {
            border() {
                return `background-color:rgba(${this.colors[1]}, 1);background-image: linear-gradient( transparent 20%, rgba(${this.colors[2]}, 0.5) 20%, rgba(${this.colors[2]}, 0.5) 40%, rgba(${this.colors[3]}, 0.5) 40%, rgba(${this.colors[3]}, 0.5) 60%, rgba(${this.colors[4]}, 0.5) 60%, rgba(${this.colors[4]}, 0.5) 80%, rgba(${this.colors[5]}, 0.5) 80%, rgba(${this.colors[5]}, 0.5));`
            },
            stripe() {
                return `background-color:rgba(${this.colors[1]}, 1);background-image: linear-gradient(-90deg,transparent 20%, rgba(${this.colors[2]}, 0.5) 20%, rgba(${this.colors[2]}, 0.5) 40%, rgba(${this.colors[3]}, 0.5) 40%, rgba(${this.colors[3]}, 0.5) 60%, rgba(${this.colors[4]}, 0.5) 60%, rgba(${this.colors[4]}, 0.5) 80%, rgba(${this.colors[5]}, 0.5) 80%, rgba(${this.colors[5]}, 0.5));`
            },
        }
    }
</script>

<style scoped>
    .basket {
        width: 300px;
        height: 300px;
        font-size: 0;
    }

    .box {
        display: inline-block;
        width: 150px;
        height: 150px;
    }
</style>