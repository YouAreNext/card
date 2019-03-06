<template>
    <aside class="side_block">
        <nav>
            <a class="nav_link" href="">Личный кабинет</a>
            <router-link class="nav_link" to="/pay">Платежи</router-link>
            <router-link class="nav_link" to="/history">История платежей</router-link>
            <a class="nav_link" href="">Настройки</a>
            <a class="nav_link" href="">Выйти</a>
        </nav>
    </aside>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .side_block{
        width: 33%;
    }
    nav{
        display: flex;
        flex-direction: column;
       .nav_link{
            font-family: 'Open Sans', sans-serif;
            display: flex;
            align-items: center;
            height: 75px;
            padding-left: 25px;
            background: #191c24;
            font-size:18px;
            font-weight:bold;
            text-decoration: none;
            color:#FFF;
            transition: .2s ease-in;
            &:hover{
                background: #1F2229;
                transition: .2s ease-in;
            }
            &.router-link-active{
                background: #2A2D37;
                color: #808592;
            }
        }
    }

    @media (max-width: 1000px) {
        
        .side_block{
            width: 25%;
            .nav_link{
                font-size:16px;
                padding-left: 10%;
            }
        }
        
        
    }
    @media (max-width: 768px) {
        .side_block{
            width: 100%;
            nav{
                flex-direction: row;
                .nav_link{
                    font-size:16px;
                    padding-left: 0%;
                    flex:1;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
            }
        }
    }
    @media (max-width: 580px) {
        .side_block{
            nav{
                .nav_link{
                    font-size: 13px;
                }
            }
        }
    }
    @media (max-width: 400px) {
        .side_block{
            nav{
                .nav_link{
                    font-size: 12px;
                }
            }
        }
    }
    
</style>