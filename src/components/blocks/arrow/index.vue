<template>
    <div class="block-arrow">
        <span class="block-arrow__text">Выбирай</span>
        <img class="block-arrow__img" src="@/assets/images/arrow-hover.png" alt="">
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) rotate(8deg);
        }
        40% {
            transform: translateY(-30px) rotate(8deg);
        }
        60% {
            transform: translateY(-15px) rotate(8deg);
        }
    }
    .block-arrow {
        display: flex;
        align-items: flex-start;
       position: relative;
        right: 36px;



        &__text {
            font-size: 25px;
            font-weight: 800;
            font-family: $family--primary;
            color: $color--text-light;
            display: block;
        }

        &__img {
            animation-name: bounce;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            position: relative;
            top: -50px;
            transform: rotate(10deg);
        }
    }
</style>
