<template>
    <div class="tartan">
        <div class="card" :style="baseStyle" ></div>

        <div class="thickWide_v card">
            <div :style="thickWStyle" class="ml-0"></div>
            <div :style="thickWStyle" class="ml-100"></div>
        </div>
        <div class="thickWide_h card">
            <div :style="thickWStyle" class="mt-0"></div>
            <div :style="thickWStyle" class="mt-100"></div>
        </div>

        <div class="thickNarrow_v card">
            <div :style="thickNStyle" class="ml-50"></div>
            <div :style="thickNStyle" class="ml-20"></div>
        </div>
        <div class="thickNarrow_h card">
            <div :style="thickNStyle" class="mt-50"></div>
            <div :style="thickNStyle" class="mt-20"></div>
        </div>

        <div class="thinDouble_v card">
            <div :style="thinDStyle" class="ml-50"></div>
            <div :style="thinDStyle" class="ml-90"></div>
        </div>
        <div class="thinDouble_h card">
            <div :style="thinDStyle" class="mt-50"></div>
            <div :style="thinDStyle" class="mt-90"></div>
        </div>

        <div class="thinSingle_v card">
            <div :style="thinSStyle" class="ml-250"></div>
        </div>
        <div class="thinSingle_h card">
            <div :style="thinSStyle" class="mt-250"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Tartan",
        props: ['colors'],
        computed: {
            baseStyle(){
                return `background-color: rgba(${this.colors[1]}, 1);`;
            },
            thickWStyle(){
                return `background-color: rgba(${this.colors[2]}, 0.5);`;
            },
            thickNStyle(){
                return `background-color: rgba(${this.colors[3]}, 0.5);`;
            },
            thinDStyle(){
                return `background-color: rgba(${this.colors[4]}, 0.5);`;
            },
            thinSStyle(){
                return `background-color: rgba(${this.colors[5]}, 0.5);`;
            }
        }
    }
</script>

<style scoped>
    .tartan {
        position:relative;
    }

    .card {
        position: absolute;
        width:300px;
        height:300px;
        text-align: left;
    }

    .card div{
        display: inline-block;
    }

    .thickWide_v div{
        width: 50px;
        height: 300px;
    }
    .thickWide_h div{
        width: 300px;
        height: 50px;
    }

    .thickNarrow_v div{
        width: 40px;
        height: 300px;
    }
    .thickNarrow_h div{
        width: 300px;
        height: 40px;
    }

    .thinDouble_v div, .thinSingle_v div{
        width: 5px;
        height: 300px;
    }
    .thinDouble_h div, .thinSingle_h div{
        width: 300px;
        height: 5px;
    }

    .mt-20{
        margin-top: 20px;
    }
    .mt-50{
        margin-top: 50px;
    }
    .mt-90{
        margin-top: 90px;
    }
    .mt-100{
        margin-top: 100px;
    }
    .mt-250{
        margin-top: 250px;
    }

    .ml-20{
        margin-left: 20px;
    }
    .ml-50{
        margin-left: 50px;
    }
    .ml-90{
        margin-left: 90px;
    }
    .ml-100{
        margin-left: 100px;
    }
    .ml-250{
        margin-left: 250px;
    }


</style>