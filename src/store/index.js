import { createStore } from 'vuex'
// store/index.js

// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

export default createStore({
  state:{
    searchResults: [],
    cart:[],
    cartTotal:0
  },
  getters:{

  },
  mutations:{
    addRemoveCart(state, payload) {
        payload.toAdd?
        state.cart.push(payload.products):
        state.cart = state.cart.filter(function(object){
            return object.ProductsId !==payload.products.ProductsId
        });
        state.cartTotal = state.cart.reduce((accumlator, object)=>{
            return parseFloat(accumlator) + parseFloat(object.Price*object.qty);
        },0);
        localStorage.setItem('cartTotal',JSON.stringify(state.cartTotal));
        localStorage.setItem('cart',JSON.stringify(state.cart));
    
        console.log(state.cartTotal)
        console.log(state.cart)
    },
    updateCart(state,payload){
        state.cart.find(o => o.ProductsId == payload.products.ProductsId).qty = payload.products.qty;
        state.cartTotal = state.cart.reduce((accumlator, object)=>{
            return parseFloat(accumlator) + parseFloat(object.Price*object.qty);
        },0);
        localStorage.setItem('cartTotal',JSON.stringify(state.cartTotal));
        localStorage.setItem('cart',JSON.stringify(state.cart));

    },
    addCart(state, payload){
        if(payload.Add){
            state.cart.push(payload.products);
        }
        state.cartTotal = state.cart.reduce((accumlator, object)=>{
            return parseFloat(accumlator) + parseFloat(object.Price * object.qty);
        },0);
        localStorage.setItem('cartTotal',JSON.stringify(state.cartTotal));
        localStorage.setItem('cart',JSON.stringify(state.cart));
    },
    updateCart1(state, payload){
        state.cart.find(o => o.ProductsId == payload.products.ProductsId).qty += payload.newQty;
        
        state.cartTotal = state.cart.reduce((accumlator, object)=>{
            return parseFloat(accumlator) + parseFloat(object.Price * object.qty);
        },0);
        localStorage.setItem('cartTotal',JSON.stringify(state.cartTotal));
        localStorage.setItem('cart',JSON.stringify(state.cart));

    },
    setSearchResults(state, results) {
        state.searchResults = results;
      },

  },
  actions:{

  },
  modules: {
  }
})
