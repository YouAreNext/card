import Vue from 'vue';

const articles = {
    namespaced: true,
    state:{
        payHistory:[

        ]
    },
    getters:{
        
        getAll(state){
            return state.payHistory;
        }
    },
    mutations:{
        setHistory(state,value){
            state.payHistory.push(value);
        },
        getAll(state,posts){
            state.items = posts;
        },
    },
    actions:{
    }
};

export default articles;