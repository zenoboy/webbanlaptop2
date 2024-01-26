<template>
  <v-dialog
    max-width="640px"
    v-model="ReviewDialog"
  >
  <v-card>
        <v-card-title>
            <span>Đánh giá sản phẩm</span>
        </v-card-title>

        <v-card-text>
            <v-form>
                <v-container>
                    <v-row >
                        <v-col align="center" justify="center">
                            <v-img
                            :src="'https://localhost:7072/images/' + product[0].ImagerUrl"
                            height="125"
                            width="125"
                            cover
                            >
                            </v-img>

                            <v-card-text>
                                <span class="text-h5">{{ product[0].ProductsName }}</span>
                            </v-card-text>

                            <v-rating
                                hover
                                :length="5"
                                :size="32"
                                :model-value="5"
                                active-color="primary"
                                v-model="Review.newRating"
                            ></v-rating>
                            
                        </v-col>
                        
                    </v-row>
                    <v-row>
                            <v-text-field v-model="Review.UserName" label="Họ và tên"></v-text-field>
                    </v-row>
                    <v-row>
                        <v-textarea v-model="Review.newComment" label="Đánh giá của bạn"></v-textarea>
                    </v-row>
                   
                </v-container>
            </v-form>
        </v-card-text>
        <v-divider></v-divider> <!-- đường kẻ -->
        <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-btn color="grey" flat @click="ReviewDialog=false">Close</v-btn>
            <v-btn color="primary" flat @click ="PostReview">Save</v-btn>
        </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios'
export default {
    props: ['visible','product'],
    data(){
        return{
            Review:[],
        }
    },
    methods:{
        PostReview(){
            this.Review.newProductsID = this.product[0].ProductsId
            this.Review.UsersId = localStorage.getItem('userId')
            console.log(this.Review)
            axios.post("https://localhost:7072/api/Review/PostReviews?newUserID="+this.Review.UsersId+"&newProductsID="+this.Review.newProductsID+"&newComment="+this.Review.newComment+"&newRating="+this.Review.newRating+"&UserName="+this.Review.UserName)
            .then(response =>{
                  this.$emit('close');
                  this.$emit('updateData');
                  console.log(response.status);
                
            })
            .catch(error=>{
                  console.log(error);
              })
        }
    },
    computed:{
        ReviewDialog:{
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
    mounted(){
        
        console.log('product', this.product)
    },
    created(){
        
    }
}
</script>

<style>

</style>