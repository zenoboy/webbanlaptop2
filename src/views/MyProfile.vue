<template>
    <div>
        <top-bar/>
        <h3 style="margin-bottom: 50px;">Hồ sơ của tôi</h3>
        <div v-if="information">
            <div class="d-flex">
                <b>Họ và tên:</b> <p style="margin-left: 15px; margin-bottom: 25px;">{{ information[0].FullName }}</p>
            </div>
            <div class="d-flex">
                <b>Số điện thoại:</b> <p style="margin-left: 15px;margin-bottom: 25px;">{{ information[0].UserPhone }}</p>
            </div>
            <div class="d-flex">
                <b>Email:</b> <p style="margin-left: 15px;margin-bottom: 25px;"> {{ information[0].UserEmail }}</p>
            </div>
            <div class="d-flex">
                <b>Địa chỉ:</b> <p style="margin-left: 15px;margin-bottom: 25px;">{{ information[0].UserAddress }}</p>
            </div>
            <div class="d-flex">
                <b>Chức vụ:</b> <p style="margin-left: 15px;margin-bottom: 25px;">{{ information[0].UserRole }}</p>
            </div>
            <div class="d-flex">
                <v-btn class="ml-3 mr-10" @click="dialogUpdate=true">Thay đổi thông tin</v-btn>
                <v-btn @click="dialogUpdatePass=true">Đổi mật khẩu</v-btn>
            </div>
        </div>
        
        <footer-bar/>
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
    components:{TopBar, FooterBar}
}
</script>

<style scoped>
    footer-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>

