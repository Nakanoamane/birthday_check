<template>
    <div class="block" :style="style"></div>
</template>

<script>
    export default {
        name: "Block",
        props: ['colors'],
        computed: {
            style(){
                return `background-color: rgba(${this.colors[1]}, 1);background-image: linear-gradient(transparent 20%,rgba(${this.colors[2]}, 0.50) 20%,rgba(${this.colors[2]}, 0.50) 40%,rgba(${this.colors[3]}, 0.50) 40%,rgba(${this.colors[3]}, 0.50) 60%,transparent 60%,transparent 80%,rgba(${this.colors[4]}, 0.50) 80%,rgba(${this.colors[4]}, 0.50)),linear-gradient(90deg,transparent 18%,rgba(${this.colors[3]}, 0.50) 18%,rgba(${this.colors[3]}, 0.50) 20%,rgba(${this.colors[5]}, 0.50) 20%,rgba(${this.colors[5]}, 0.50) 40%,rgba(${this.colors[2]}, 0.50) 40%,rgba(${this.colors[2]}, 0.50) 42%,transparent 42%,transparent 58%,rgba(${this.colors[4]}, 0.50) 58%,rgba(${this.colors[4]}, 0.50) 60%,rgba(${this.colors[5]}, 0.50) 60%,rgba(${this.colors[5]}, 0.50) 80%,rgba(${this.colors[2]}, 0.50) 80%,rgba(${this.colors[2]}, 0.50) 82%,transparent 82%,transparent);`
            }
        }
    }
</script>

<style scoped>
    .block {
        width: 300px;
        height: 300px;
    }
</style>