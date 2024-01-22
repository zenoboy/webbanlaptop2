<template>
    <v-app>
        <v-main>
            <top-bar />
            <v-container class="mt-10">
                <v-row>
                    <v-col class="menu-col" cols="2">
                        <div class="menu-item mt-10 col" v-for="category in laptopCategories" :key="category.id">
                            <a href="" class="text-decoration-none">
                                <v-icon>{{ category.icon }}</v-icon>
                                <span>{{ category.name }}</span>
                            </a>

                        </div>
                    </v-col>
                    <v-col cols="10">
                        <v-carousel cycle="100px">
                            <v-carousel-item v-for="item in silders" :key="item.id" :src="item.url" cover></v-carousel-item>
                        </v-carousel>
                        <div class="d-flex mt-2">
                            <v-img class="mr-2"
                                src="https://hanoicomputercdn.com/media/banner/09_Dec3d401a771449960d10a6faddd8010ca5.jpg"
                                aspect-ratio="1.5"></v-img>
                            <v-img class="mr-2"
                                src="https://hanoicomputercdn.com/media/banner/09_Dec8e2398936c7c65561e43241dc0bba9fe.jpg"
                                aspect-ratio="1.5"></v-img>
                            <v-img
                                src="https://hanoicomputercdn.com/media/banner/09_Dec20b3da87b96e2efdc2617fa483b1a127.jpg"
                                aspect-ratio="1.5"></v-img>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            <div style="text-align: center; margin-left: 13%;">
                <h1>Danh sách sản phẩm</h1>
            </div>
            <v-container>
                <v-row v-if="items && items.length > 0" style="text-align: center; margin-left: 15%;">
                    <v-col v-for="item in items" :key="item.ProductsId" cols="12" sm="6" md="4" lg="3">
                        <v-card>
                            <!-- Display your product details here -->
                            <v-img :src="'https://localhost:7072' + item.ImagerUrl" height="200"
                                @error="handleImageError(item)"></v-img>
                            <v-card-title >{{ item.ProductsName }}</v-card-title>
                            <v-card-subtitle>{{ item.Price }}</v-card-subtitle>
                            <v-card-subtitle>{{ item.promotion  }}</v-card-subtitle>
                            <v-card-subtitle>{{ item.origin }}</v-card-subtitle>
                            
                        </v-card>
                    </v-col>
                </v-row>
                <v-row v-else>
                    <v-col cols="12" class="text-center">
                        <p>No items to display.</p>
                    </v-col>
                </v-row>
                <v-row v-if="loading">
                    <v-col cols="12" class="text-center">
                        <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-col>
                </v-row>
            </v-container>

            <v-dialog v-model="dialog" max-width="600px">
                <v-card>
                    <v-card-title>{{ selectedProduct.ProductName }}</v-card-title>
                    <v-card-subtitle>{{ selectedProduct.Price }}</v-card-subtitle>
                    <v-img :src="selectedProduct.Avatar" alt="Hình ảnh sản phẩm"></v-img>
                    <v-card-text>
                        <!-- Thêm thông tin chi tiết sản phẩm ở đây -->
                        {{ selectedProduct.description }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="addToCart(selectedProduct)">Thêm vào giỏ hàng</v-btn>
                        <v-btn @click="dialog = false">Đóng</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <footer-bar />
        </v-main>
    </v-app>
</template>
  
<script>
import productdetail from '@/components/users/productdetail.vue';
import axios from 'axios';
import TopBar from '@/components/users/TopBar.vue';
import FooterBar from '@/components/users/FooterBar.vue';

export default {
    components: {
        productdetail,
        TopBar,
        FooterBar,
    },
    data() {
        return {
            dialog: false,
            selectedProduct: null,
            products: [],
            items: [],
            errors: [],
            loading: false,
            laptopCategories: [
                { id: 1, name: 'Laptop Dell', icon: 'mdi-laptop' },
                { id: 2, name: 'Laptop Acer', icon: 'mdi-laptop' },
                { id: 3, name: 'Laptop Asus', icon: 'mdi-laptop' },
                { id: 4, name: 'Laptop HP', icon: 'mdi-laptop' },
                { id: 5, name: 'Laptop Lenovo', icon: 'mdi-laptop' },
            ],
            displayType: 'grid',
            displayTypes: ['grid', 'list'],
            itemsPerPage: 6,
            currentPage: 1,

            silders: [
                {
                    id: 1,
                    url: "https://hanoicomputercdn.com/media/banner/05_Dec42b8748f5d09ddb7b69643958c5f7580.jpg"
                },
                {
                    id: 2,
                    url: "https://hanoicomputercdn.com/media/banner/10_Nov54996437df548ee7736b9ec3939ffc2b.jpg"
                },
                {
                    id: 3,
                    url: "https://hanoicomputercdn.com/media/banner/11_Nov7b239a58cc35a66d8b8b572522be1bef.jpg"
                }
            ]
        };
    },
    computed: {
        displayedProducts() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            const displayed = this.products.slice(start, end).map(product => {
                // Format the price using toLocaleString
                product.formattedPrice = parseFloat(product.Price).toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                });
                return product;
            });
            return displayed;
        },
        totalPages() {
            return Math.ceil(this.products.length / this.itemsPerPage);
        },
    },
    mounted() {
        this.fetchProducts();
    },
    created() {
        this.loading = true;
        axios.get('https://localhost:7072/api/Products/GetProducts')
            .then(response => {
                if (response.data && Array.isArray(response.data)) {
                    this.items = response.data.map(item => {
                        // Log image URL for debugging
                        return item;
                    });
                } else {
                    console.error('Invalid or unexpected API response format:', response.data);
                }
                this.loading = false;
            })
            .catch(error => {
                this.errors.push(error);
                this.loading = false;
            });
    },
    methods: {
        async fetchProducts() {
            try {
                // const response = await axios.get('https://localhost:44384/api/Product');
                const response = await axios.get('https://localhost:7072/api/Products/GetProducts');
                this.products = response.data;
            } catch (error) {
                console.error('Lỗi khi lấy sản phẩm:', error);
            }
        },
        addToCart(product) {
            console.log('Đã thêm vào giỏ hàng:', product);
        },
        updateDisplayedProducts() {
        },
        handleImageError(item) {
            if (item && typeof item === 'object') {
                console.error('Error loading image for item:', item);

                // Check if ImagerUrl is a valid string
                if (item.ImagerUrl && typeof item.ImagerUrl === 'string' && item.ImagerUrl.trim() !== '') {
                    console.log('Valid Image URL:', item.ImagerUrl);
                } else {
                    console.warn('Invalid or empty image URL for item:', item);
                    // Set a default image URL or handle the error in another way
                   
                }
            }
            else {
                console.warn('Invalid item object:', item);
            }
        },
    },
};
</script>
<style></style>
  
  