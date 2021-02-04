import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {
            USER_LOGGED_IN: false,
        },
        stalls: {
            index: null,
            info: null
        },
        types: ['food', 'clothing', 'produce', 'service', 'shop']
    },
    getters: {
        user(state){
            return state.user
        },
        stalls(state, test){
            return state.stalls
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.USER_LOGGED_IN = value
        },
        SET_STALLS(state, value) {
            state.stalls = value
        }
    },
    actions: {
        updateStoreWithNewUser({ commit }, user) {
            commit("SET_LOGGED_IN", true);
        },
        updateStoreWithStalls({ commit }, stalls) {
            commit("SET_STALLS", stalls);
        }
    }
 });