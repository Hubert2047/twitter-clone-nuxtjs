<script setup></script>
<template>
    <div class="wrapper">
        <div class="loader"></div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #001d30;
}
.loader {
    position: relative;
    width: 150px;
    height: 150px;
    background: linear-gradient(to top, #001d30 40%, #51eeee);
    border-radius: 50%;
    animation: rotate 2s linear infinite;
}
@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}
.loader::before {
    content: '';
    position: absolute;
    background-color: #001d30;
    inset: 20px 20px 0 0;
    border-radius: 50%;
}
.loader::after {
    content: '';
    position: absolute;
    top: 50px;
    right: -8px;
    width: 40px;
    height: 40px;
    background: #51eeee;
    border-radius: 50%;
    box-shadow: 0 0 5px #51eeee, 0 0 25px #51eeee, 0 0 50px #51eeee, 0 0 75px #51eeee;
}
</style>
