<template>
    <v-dialog
        max-width="500px"
        v-model="BuySuccessDialog"
        persistent
    >
    <v-card>
            <v-toolbar
              color="green"
              title="Thành Công!!!"
              
            ></v-toolbar>
            <v-card-text>
                <v-row>
                    <v-col cols="12" align="center" justify="center">
                        <img
                        width="100"
                        src="../assets/Check_green_circle.png">   
                    </v-col>
                    <v-col cols="12" align="center" justify="center">
                        <h2>Đặt hàng thành công!</h2>
                    </v-col>
                    <v-col>
                        <v-card-text>
          Đặt hàng thành công! Chuyển về trang sản phẩm trong{{ countdown }} giây...
        </v-card-text>
                    </v-col>
                </v-row>
                
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                variant="text"
                @click="BuySuccessDialog = false"
              >Close</v-btn>
            </v-card-actions>
            
          </v-card>
        
    </v-dialog>
</template>

<script>
export default {
    props: ['visible'],
    data(){
        return{
            countdown: 5,
        }
    },
    methods:{
        startCountdown() {
           
                const timer = setInterval(() => {
                if (this.countdown > 0) {
                    this.countdown--;
                } else {
                // Khi đếm ngược kết thúc, chuyển hướng về trang sản phẩm
                clearInterval(timer);
                this.$router.push('/');
                }
                }, 1000);     
                
        
    },
    },
    computed:{
        BuySuccessDialog:{
            get (){
                return this.visible
            },
            set (value){
                if(!value){
                    this.$emit('close')
                }
            }
        }
    },
    watch: {
    visible(newVal) {
      if (newVal) {
        this.startCountdown();
        
      }
    },
  },
    created(){
        
    },
    mounted(){
        
    }
    }

</script>

<style>

</style>