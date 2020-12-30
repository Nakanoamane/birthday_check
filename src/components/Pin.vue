<template>
    <div class="pin" :style="style">
    </div>
</template>

<script>
    export default {
        name: "Pin",
        props:['colors'],
        computed: {
            style(){
                return `background-color: rgba(${this.colors[1]}, 1);background-image: linear-gradient(transparent 6.25%, rgba(${this.colors[2]}, 0.5) 6.25%, rgba(${this.colors[2]}, 0.5) 12.5%, transparent 12.5%, transparent 18.25%, rgba(${this.colors[3]}, 0.5) 18.25%, rgba(${this.colors[3]}, 0.5) 25%, transparent 25%, transparent 31.25%, rgba(${this.colors[4]}, 0.5) 31.25%, rgba(${this.colors[4]}, 0.5) 37.5%, transparent 37.5%, transparent 43.75%, rgba(${this.colors[5]}, 0.5) 43.75%, rgba(${this.colors[5]}, 0.5) 50%, transparent 50%, transparent 56.25%, rgba(${this.colors[2]}, 0.5) 56.25%, rgba(${this.colors[2]}, 0.5) 62.5%, transparent 62.5%, transparent 68.25%, rgba(${this.colors[3]}, 0.5) 68.25%, rgba(${this.colors[3]}, 0.5) 75%, transparent 75%, transparent 81.25%, rgba(${this.colors[4]}, 0.5) 81.25%, rgba(${this.colors[4]}, 0.5) 87.5%, transparent 87.5%, transparent 93.75%, rgba(${this.colors[5]}, 0.5) 93.75%, rgba(${this.colors[5]}, 0.5)),linear-gradient(-90deg, transparent 6.25%, rgba(${this.colors[2]}, 0.5) 6.25%, rgba(${this.colors[2]}, 0.5) 12.5%, transparent 12.5%, transparent 18.25%, rgba(${this.colors[3]}, 0.5) 18.25%, rgba(${this.colors[3]}, 0.5) 25%, transparent 25%, transparent 31.25%, rgba(${this.colors[4]}, 0.5) 31.25%, rgba(${this.colors[4]}, 0.5) 37.5%, transparent 37.5%, transparent 43.75%, rgba(${this.colors[5]}, 0.5) 43.75%, rgba(${this.colors[5]}, 0.5) 50%, transparent 50%, transparent 56.25%, rgba(${this.colors[2]}, 0.5) 56.25%, rgba(${this.colors[2]}, 0.5) 62.5%, transparent 62.5%, transparent 68.25%, rgba(${this.colors[3]}, 0.5) 68.25%, rgba(${this.colors[3]}, 0.5) 75%, transparent 75%, transparent 81.25%, rgba(${this.colors[4]}, 0.5) 81.25%, rgba(${this.colors[4]}, 0.5) 87.5%, transparent 87.5%, transparent 93.75%, rgba(${this.colors[5]}, 0.5) 93.75%, rgba(${this.colors[5]}, 0.5));`
            }
        }
    }
</script>

<style scoped>
    .pin {
        width: 300px;
        height: 300px;
    }
</style>