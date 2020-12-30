<template>
    <div class="form">
        {{ number }}.
        <select class="months" v-model="month" @change="changeColor">
            <option value="">M</option>
            <option v-for="n in 12" :key="n" :value="n">{{ n }}</option>
        </select>
        /
        <select class="days" v-model="date" @change="changeColor">
            <option value="">D</option>
            <option v-for="n in 31" :key="n" :value="n">{{ n }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "Form",
        props: ['number', 'bdColors'],
        data() {
            return {
                month: "",
                date: ""
            }
        },
        methods: {
            changeColor() {
                let key = 'bd_' + this.month + '_' +  this.date;
                let color = this.bdColors[key];
                if(color !== undefined){
                    this.$emit('input', color);
                }
            }
        }
    }
</script>

<style scoped>
    .form {
        margin-bottom: 24px;
        font-weight: bold;
    }
</style>