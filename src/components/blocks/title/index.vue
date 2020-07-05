<template>
    <div class="block-title">
        <span class="block-title__text">Встречаем</span>
        <span class="block-title__text">Лето</span>
        <span class="block-title__text">С барбекю</span>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
.block-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transform: rotate(-10deg);
    &__text {
        font-size: 86px;
        line-height: 1;
        color: #ffd600;
        font-weight: 800;
        font-family: $family--primary;
        text-transform: uppercase;
        text-align: left;
        background-color: $color--primary;
        padding: 2px;
        & + & {
            margin-top: 5px;
        }
    }
}
</style>
