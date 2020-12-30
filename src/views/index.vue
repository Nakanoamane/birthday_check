<template>
    <div class="index">
        <h1>Birthday Check</h1>

        <div v-for="(color, index) of colors" :key="index">
            <Form v-model="colors[index]" :number="index" :bdColors="bdColors"></Form>
        </div>

        <h2>Preview</h2>
        <select v-model="check" class="selectCheck">
            <option v-for="c of checks" :value="c">{{ c }}</option>
        </select>
        <div id="preview">
            <div id="preview_inner">
                <div v-if="check === 'tartan'">
                    <Tartan :colors="colors"></Tartan>
                </div>
                <div v-if="check === 'argyle'">
                    <Argyle :colors="colors"></Argyle>
                </div>
                <div v-if="check === 'block'">
                    <Block :colors="colors"></Block>
                </div>
                <div v-if="check === 'basket'">
                    <Basket :colors="colors"></Basket>
                </div>
                <div v-if="check === 'madras'">
                    <Madras :colors="colors"></Madras>
                </div>
                <div v-if="check === 'pin'">
                    <Pin :colors="colors"></Pin>
                </div>
            </div>
        </div>

        <button @click="generate()">Generate Image</button>

        <h2>Result</h2>
        <a :href="href" download="birthday_check.png" :class="download">
            <div id="result" :style="`background-image: url(${this.src});`">
            </div>
        </a>

    </div>
</template>

<script>
    import html2canvas from 'html2canvas';
    import BirthdayColors from "@/assets/BirthdayColors.json";
    import Form from '@/components/Form.vue';
    import Tartan from '@/components/Tartan.vue';
    import Argyle from '@/components/Argyle.vue';
    import Block from '@/components/Block.vue';
    import Basket from '@/components/Basket.vue';
    import Madras from '@/components/Madras.vue';
    import Pin from '@/components/Pin.vue';


    export default {
        name: 'index',
        components: {
            BirthdayColors,
            Form,
            Tartan,
            Argyle,
            Block,
            Basket,
            Madras,
            Pin
        },
        data() {
            return {
                colors: {
                    1: '255, 255, 255',
                    2: '255, 255, 255',
                    3: '255, 255, 255',
                    4: '255, 255, 255',
                    5: '255, 255, 255'
                },
                bdColors: BirthdayColors,
                check: 'tartan',
                checks: [
                    'tartan',
                    'argyle',
                    'block',
                    'basket',
                    'madras',
                    'pin'
                ],
                src: '',
                href: '',
                download: 'disabled'
            }
        },
        methods: {
            generate(){
                let self = this;
                self.download = 'disabled';
                html2canvas(document.querySelector("#preview_inner")).then(function(canvas){
                    let result = document.querySelector("#result");
                    result.innerHTML = '';
                    self.src = canvas.toDataURL('image/png');
                    html2canvas(result).then(function(canvas){
                        result.appendChild(canvas)
                        self.href = canvas.toDataURL('image/png');
                        self.download = '';
                    });
                });
            }
        }
    }
</script>

<style scoped>
    h2 {
        margin-top: 40px;
    }

    #preview{
        overflow: auto;
        width: 350px;
        border:solid 1px #2c3e50;
        margin: 0 auto 40px;
    }

    #preview_inner, #result{
        width: 300px;
        height: 300px;
        margin: 20px auto;
    }

    #result {
        box-shadow:  20px 20px 60px #cccccc,
        -20px -20px 60px #ffffff;
        margin-bottom:  40px;
        background-size: 80px;
        background-repeat: repeat;
        background-position: -5px -5px;
    }

    button {
        width: 120px;
        height: 30px;
        color: #f0f0f0;
        font-weight: bold;
        border:none;
        background: #2c3e50;
        border-radius: 5px;
        box-shadow:  2px 2px 35px #cccccc,
        -2px -2px 35px #ffffff;
    }

    button:focus {
        outline: none;
    }
    button:hover, #result:hover {
        cursor: pointer;
        opacity: .8;
    }

    .selectCheck {
        display: inline-block;
        margin: 0 auto 20px;
    }

    .disabled {
        pointer-events: none;
    }
</style>