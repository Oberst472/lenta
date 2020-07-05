<template>
    <div class="block-img">
        <img class="block-img__img" src="@/assets/images/bg_grill.jpg" alt="">
    </div>
</template>

<script>
    export default {
        props: {
            active: {
                type: [Number, String],
                default: 100
            }
        },
        data() {
            return {
                info: [
                    {
                        id: 1,
                        title: 'Шашлык из свиной лопатки',
                        desc: 'в маринаде алабама, без кости, охлажденный, весовой, 1кг',
                        text: 'купить',
                        price: [219, 99]
                    },
                    {
                        id: 2,
                        title: 'Пиво ',
                        desc: 'светлое 0,47 л/Россия',
                        text: 'купить',
                        price: [54, 89]
                    },
                    {
                        id: 3,
                        title: 'Рыба Морская',
                        desc: 'рыба свежая соленая',
                        text: 'купить',
                        price: [345, 23]
                    },
                    {
                        id: 4,
                        title: 'Виски/Настойка William Lawson\'',
                        desc: '1л. Россия',
                        text: 'купить',
                        price: [919, '00']
                    },
                    {
                        id: 5,
                        title: 'Решетка для мяса Giardino Club',
                        desc: '64,5x32x5,5 см',
                        text: 'купить',
                        price: [259, 99]
                    },
                    {
                        id: 6,
                        title: 'Палатка складная',
                        desc: 'палатка туристическая',
                        text: 'купить',
                        price: [54, 89]
                    },
                    {
                        id: 7,
                        title: 'Соки и нектары добрый',
                        desc: '2л, в ассортименте',
                        text: 'купить',
                        price: [99, 89]
                    }
                ]
            }
        },
        methods: {
            toggleActiveItem(id) {
                console.log(556)
                this.$emit('ent', id)
            },
            clearActiveItem() {
                this.$emit('leave')
            }
        }
    }
</script>

<style scoped lang="scss">
    .block-img {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        &__img {
            position: absolute;
            left: -60px;
            width: calc(100% + 60px);
            height: 100%;
            max-width: calc(100% + 60px);
            object-fit: cover;
        }
        .mark {
            position: absolute;
            top: 50%;
            left: calc(50% + 100px);
            transform: translateX(-50%);
        }
    }
</style>
