<template>
    <div>
        <button type="button" @click="addOrRemove()" class="mdi mdi-cart-arrow-down">
        <i :class="toAdd?'bi bi-cart':'bi bi-cart-check'"></i>
        </button> 
        <!-- <CartAddRemove v-if="!toAdd" :products="item"/> -->
    
    </div>
    
 </template>

<script>
import CartAddRemove from './CartAddRemove.vue';
import { toast } from 'vue3-toastify'
export default {
    props:['products'],
    components :{CartAddRemove},
    data(){
        return{
            toAdd:true,
            item:[]
        }
    },
    methods:{
        async addOrRemove(){
            this.item.qty = 1
            this.$store.commit('addRemoveCart',{products:this.item, toAdd:this.toAdd})
            let toastMSG
            this.toAdd? toastMSG = 'Added to cart' : toastMSG = 'Remove from cart'
            toast(toastMSG,{
                autoClose:1000,
            });
            this.toAdd = !this.toAdd
        }
    },
    mounted(){
        let cart = this.$store.state.cart
        let obj = cart.find(o =>o.ProductsId === this.products.ProductsId)
        if(obj){
            this.toAdd = false
            this.item = obj
        }else{
            this.item = this.products
            this.toAdd = true
        }
    }
}   
</script>

<style>
 .cart-btn{
   width:40px;
   height: 38px;
 }
.plus-minus input{
    max-width: 50px;
}
</style>