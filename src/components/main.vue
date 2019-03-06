<template>
    <section class="main">
        <div class="main_wrapper">
            <div class="main_container">
                <side-block></side-block>
                <router-view></router-view>
            </div>
        </div>
        
    </section>
</template>

<script>

import sideBlock from './sibeBlock';

export default {
    data(){
        return{
            
        }
    },
    components:{sideBlock}
};
</script>

<style scoped lang="scss">
    
</style>
