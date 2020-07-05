<template>
    <div class="block-top">
        <div class="block-top__logo">
            <img class="block-top__logo-img" src="@/assets/images/logo.png" alt="Логотип">
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
.block-top {
    background-color: $color--primary;
    transform: rotate(-10deg);
    height: 230px;
    width: 200%;
    display: flex;
    align-items: flex-end;
    padding-left: 41px;
    padding-bottom: 6px;
    box-sizing: border-box;
    &__logo {
        transform: rotate(10deg);
    }
}
</style>
