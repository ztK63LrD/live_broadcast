<template>
    <div class="container">
        <div class="room">
            <LeftMenu></LeftMenu>
            <Studio></Studio>
            <Message></Message>
        </div>
    </div>
</template>

<script setup lang="ts">
import LeftMenu from './leftmenu.vue'
import Studio from './studio.vue'
import Message from './message.vue'

</script>

<style scoped lang="scss">
.container {
    width: 80%;
    margin: auto;
    .room {
        width: 100%;
        display: flex;
        padding: 20px 0 20px;
        gap: 0 20px;
    }
}
</style>
