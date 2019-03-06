<template>
    <div class="main_content">
        <section class="pay_container">
            <div class="default_title mb20">
                Информация по оплате:
            </div>
            <div class="pay_info">
                <div class="pay_info_row">
                    <div class="default_title pay_info_key">
                        Номер счета:
                    </div>
                    <div class=" pay_info_value">
                        {{ orderNum }}
                    </div>
                </div>
                <div class="pay_info_row">
                    <div class="default_title pay_info_key">
                        Сумма платежа:
                    </div>
                    <div class=" pay_info_value">
                        {{ orderSum }} руб.
                    </div>
                </div>
            </div>
            <div class="titler mb20">
                Данные банковской карты
            </div>
            <form @submit.prevent="formValidate">
                <div class="card">
                    <div class="card_main">
                        <div class="default_title mb5">
                            Номер карты
                        </div>
                        <div class="card_number mb15">
                            <input maxlength="4" :class="{ input_error: formData.errors.cardNumber[key] }" class="card_number_inp" @input="cardInput($event,key)" v-for="(cardNumber,key) in cardNumbers" :key=key>
                        </div>
                        <div class="default_title mb5">
                            Срок действия
                        </div>
                        <div class="card_main_select mb10">
                            <select class="card_select_month" v-model="formData.month">
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>
                                <option value="6">06</option>
                                <option value="8">08</option>
                                <option value="9">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <select class="card_select_year" v-model="formData.year">
                                <option v-for="(year,key) in years" :value="year" :key="key" >
                                    {{ year }}
                                </option>
                            </select>
                        </div>
                        <div class="card_main_holder">
                            <input class="card_holder_input"   :class="{ input_error: formData.errors.holder }" type="text" placeholder="Держатель карты" v-model="formData.holder">
                        </div>
                    </div>
                    <div class="card_side">
                        <div class="card_cvv">
                            <div class="default_title mb5">
                                Код CVV2 / CVC2
                            </div>
                            <div class="card_cvv_container">
                                <input type="text" :class="{ input_error: formData.errors.cvv }" maxlength="3" class="card_cvv_value" v-model="formData.cvv">
                                <span class="card_cvv_tooltip" v-tooltip="'Код на задней части карты'"></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <button class="card_submit" type="submit">
                    Оплатить
                </button>
            </form>
            
        </section>
        <section class="pay_container_bottom">
                Исходя из астатической системы координат Булгакова, соединение стабильно. Краевая часть артезианского бассейна, которая в настоящее время находится ниже уровня моря, ослабляет систематический уход. Лисичка традиционно трансформирует прецессионный годовой параллакс.
                <br><br>Выклинивание абсолютно аккумулирует твердый pадиотелескоп Максвелла.
                <br><br>Алмаз слагает горст. Делювий длительно колеблет лазерный подвижный объект.
                <br><br>Устойчивость, например, параллельна. Аргумент перигелия определяет боксит. Проекция вертикально дает уходящий диабаз. Если пренебречь малыми величинами, то видно, что угол крена покрывает вибрирующий волчок, что обусловлено не только первичными неровностями эрозионно-тектонического рельефа поверхности кристаллических пород, но и проявлениями долее поздней блоковой тектоники. Засветка неба заставляет иначе взглянуть на то, что такое волчок.
        </section>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                formData:{
                    cardNumber: '',
                    holder:'',
                    cvv:'',
                    month:'1',
                    year:'2019',
                    errors:{
                        cardNumber:{

                        },
                        holder: false,
                        cvv: false
                        
                    }
                    
                },
                cardNumbers:{
                    0:{
                        value:''
                    },
                    1:{
                        value:''
                    },
                    2:{
                        value:''
                    },
                    3:{
                        value:''
                    }
                },
                years:{
                    0:'2019',
                    1:'2020',
                    2:'2021',
                    3:'2022',
                    4:'2023',
                    5:'2024',
                }
                
            }
        },
        methods:{
            cardInput(e,key){
                let cardVal = e.target.value;
                this.cardNumbers[key] = cardVal;
                if (cardVal.length === 4){
                    this.activeCardNext(key);
                }
            },
            
            activeCardNext(key){
                let currentKey = parseInt(key);
                let cardInp = document.querySelectorAll('.card_number_inp');
                if(cardInp[currentKey+1] != undefined){
                    cardInp[currentKey+1].focus();
                }
                
            },
            cardValidate(){
                return new Promise( (resolve,reject) =>{
                    for(let num in this.cardNumbers){
                        let cardNum = this.cardNumbers[num];
                        if(typeof(cardNum) != 'string' || cardNum.length != 4){
                            this.$set(this.formData.errors['cardNumber'],num,true);
                            reject();
                        }else{
                            
                            this.$set(this.formData.errors['cardNumber'],num,false);
                            resolve();
                        }
                    }
                });
            },
            cardHolderValidate(){
                return new Promise( (resolve,reject) => {
                    let holder = this.formData.holder;
                    if(/^[a-zA-Z\s]*$/.test(holder) && holder != ''){
                        this.formData.errors.holder = false;
                        resolve();
                    }else{
                        this.formData.errors.holder = true;
                        reject();
                        
                    }
                })
            },
            cardCvvValidate(){
                return new Promise((resolve,reject)=>{
                    let cvv = this.formData.cvv;
                    if(cvv.length === 3){
                        this.formData.errors.cvv = false;
                        resolve();
                    }else{
                        this.formData.errors.cvv = true;
                        reject();
                    }
                })
            },
            formValidate(e){
                Promise.all([
                    this.cardValidate(),
                    this.cardHolderValidate(),
                    this.cardCvvValidate()
                ])
                .then( () => {
                    this.$store.commit('payHistory/setHistory',{id: this.orderNum ,price: this.orderSum, date:this.currentDate});                    
                    this.$router.push({ name: 'success' });
                })
                .catch(e => {
                })
            },
            
        },
        computed:{
            fullCard(){
                this.formData.cardNumber =  this.cardNumbers[0]+this.cardNumbers[1]+this.cardNumbers[2]+this.cardNumbers[3]
            },
            orderNum(){
                return Math.floor(10000000 + Math.random() * 90000000);
            },
            orderSum(){
                return Math.floor(1000 + Math.random() * 9000);
            },
            currentDate(){
                let today = new Date();
                let dd = today.getDate();
                let mm = today.getMonth()+1;
                let yyyy = today.getFullYear();
                if(dd<10) {
                    dd = '0'+dd
                } 

                if(mm<10) {
                    mm = '0'+mm
                } 
                today = mm + '/' + dd + '/' + yyyy;
                return today;

            }
        }
    }
</script>

<style scoped lang="scss">
    .pay_container{
        padding-top: 45px;
        padding-left: 30px;
        padding-bottom: 45px;
        &_bottom{
            background: #373C43;
            padding-top:25px;
            padding-bottom: 30px;
            padding-left: 30px;
            padding-right: 40px;
            color:#7F8591;
            font-size: 12px;
            line-height: 1.5;
        }
        @media (max-width: 580px) {
            padding-left: 5%;
        }
    }
    .pay_info{
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        .pay_info_row{
            display: flex;
            margin-bottom: 10px;
            .pay_info_key{
                width: 160px;
            }
        }
    }
    .card{
        position: relative;
        margin-bottom: 40px;
        input,select{
            height: 42px;
            border:1px solid #E4E9EE;
            background: #FFF;
            transition: .2s ease-out;
            &.input_error{
                border:1px solid #e95858;
                transition: .2s ease-in-out;
            }
        }
        &_main{
            background: #F7F8F8;
            border:1px solid #E4E9EE;
            border-radius: 5px;
            padding-left: 15px;
            padding-right: 15px;        
            padding-top: 24px;
            padding-bottom: 13px;
            width: 350px;
            position: relative;
            z-index: 10;
            
            .card_number{
                display: flex;
                @media (max-width: 400px) {
                    flex-wrap: wrap;
                }
                input{
                    width: 65px;
                    margin-right: 9px;  
                    padding-left: 10px;
                    @media (max-width: 400px) {
                        margin-bottom: 10px;
                        width: 50px;
                        margin-right: 3px;
                        padding-left: 5px;
                    }
                }
            }
            &_select{
                select{
                    margin-right: 9px;
                    padding-left: 15px;
                    appearance: none;
                    background: #FFF url('../assets/images/icons/arrow_down.png') no-repeat 90% center;
                }
                .card_select_month{
                    width: 70px;
                }
                .card_select_year{
                    width: 86px;
                }
            }
            
            .card_holder_input{
                width: 100%;
                padding-left: 10px;
                text-transform: uppercase;
                &::placeholder{
                    text-transform: none;
                    color:#BEC6CF;
                }
            }
            @media (max-width: 580px) {
                margin-bottom: 20px;
            }
            @media (max-width: 400px) {
                width: 90%;
            }
        }
        &_side{
            width: 350px;
            height: 236px;
            display: flex;
            justify-content: flex-end;
            border:1px solid #E5EAEF;
            background: #F7F8F8;
            position: absolute;
            left:195px;
            top:20px;
            z-index: 5;
            border-radius: 5px;
            padding-top: 85px;
            padding-right: 15px;

            &:after{
                content:"";
                position: absolute;
                top:25px;
                left:0px;
                background: #E4E9EE;
                height: 42px;
                width: 100%;
            }
            .card_cvv{
                width: 138px; 
                &_container{
                    position: relative;
                }
                 
                &_value{
                    width: 100%;
                    padding-left: 10px;
                }
                &_tooltip{
                    content:"";
                    position: absolute;
                    right:10px;
                    top:50%;
                    width: 30px;
                    height: 30px;
                    margin-top: -15px;
                    background: url('../assets/images/icons/tooltip.png') no-repeat center;
                }
            }
            @media (max-width: 580px) {
                position: relative;
                left:auto;
                top:auto;
            }
            @media (max-width: 400px) {
                width: 90%;
            }
        }


    }
    .card_submit{
        font-size:14px;
        font-weight: bold;
        font-family: "Open Sans", sans-serif;
        color:#FFF;
        height: 40px;
        width: 133px;
        background: linear-gradient(to top,#004CA2 0%, #005ABF 100%);
        border:none;
        border-radius: 25px;
        cursor: pointer;
    }
    
</style>