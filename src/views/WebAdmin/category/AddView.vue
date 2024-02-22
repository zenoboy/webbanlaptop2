<template>
    <div>
        <v-dialog 
          v-model="dialog"
          max-width="640px">
            <v-card>
                <v-card-title>
                    <span>Thêm mới loại sản phẩm</span>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        label="Tên loại sản phẩm"
                                        v-model="data.categoryName"
                                    ></v-text-field>
                                </v-col>
                                
                            </v-row>
                            
                        </v-container>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="mr-2"
                        color="grey darken-3"
                        @click="this.$emit('close')"
                    >Hủy</v-btn>
                    <v-btn
                        color="primary"
                        @click="addCategory"
                    >Lưu</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddView',
    data() {
        return {
            data: {
                categoryName: ''
            }
        };
    },
    methods: {
        addCategory() {
            const postData = {
                newCategorysName: this.data.categoryName
            };

            axios.post('https://localhost:44367/api/Categorys/PostCategorys', null, { params: postData })
                .then(response => {
                    this.$emit('close');
                    this.$emit('updateData');
                    console.log(response.status);
                   

                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    props: ['dialogAdd'],
    computed: {
        dialog: {
            get() {
                return this.dialogAdd;
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            }
        }
    }
};
</script>

<style>
</style>
