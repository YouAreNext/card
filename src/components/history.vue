<template>
    <div class="main_content pay_history">
        <div class="titler mb20">
            История платежей
        </div>
        <table class="pay_history_table">
            <tr>
                <th>№ счета</th>
                <th>Цена</th>
                <th>Дата перевода</th>
            </tr>
            <tr v-for="(pay,key) in payHistory" :key="key">
                <td>{{pay.id}}</td>
                <td>{{pay.price}} руб.</td>
                <td>{{pay.date}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            
        },
        computed:{
            payHistory(){
                return this.$store.getters['payHistory/getAll'];
            }
        }
    }
</script>

<style scoped lang="scss">
    .pay_history{
        padding-left: 30px;
        padding-top: 40px;
        &_table{
            width: 90%;
            border-collapse: collapse; border-spacing: 0;
            th{
                padding: 5px;
                padding-left:10px;
                text-align: left;
                border-bottom:2px solid #000;
            }
            td{
                padding: 10px;
                border-bottom:1px solid #2a2d371c;
            }
        }
    }
</style>