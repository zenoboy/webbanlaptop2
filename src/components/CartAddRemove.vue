<template>
  <div v-if="products"  class="input-group plus-minus">
        <button class="btn btn-outline-secondary " :class="loading?'disabled':''" @click="addOrRemove(-1)" type="button" id="button-addon1">-</button>
            <input type="number" v-model="qty"  disabled class="form-control form-control-sm" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
        <button class="btn btn-outline-secondary" :class="loading?'disabled':''"  @click="addOrRemove(1)" type="button" id="button-addon1">+</button>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    name:'CartAddRemove',
    props:['products'],
    data(){
        return{
            qty:1,
            loading:false
        }
    },
    methods:{
        async addOrRemove(number){
            this.loading = true
            if(number ==1){ //add
                if(this.qty < 10){
                    this.qty++
                    this.products.qty = this.qty
                    await this.$store.commit('updateCart',{products:this.products})
                    toast.success('cart updated', {autoClose:500})
                  
                }else{
                    toast.warning('You reached the limit' ,{autoClose:500})
                }
            }
            if(number == -1){ //remove
                if(this.qty > 1){
                    this.qty--
                    this.products.qty = this.qty
                    await this.$store.commit('updateCart',{products:this.products})
                    toast.success('cart updated',{autoClose:500})
                    toast.autoClose=500
                }else{
                    toast.warning('You reached the limit',{autoClose:500})
                }
            }

            this.loading = false
        }
    },
    mounted(){
        this.qty = this.products.qty
    }
    
}
</script>

<style>
.plus-minus input{
    max-width: 50px;
}
</style>