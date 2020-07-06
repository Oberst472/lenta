<template>
    <div class="block-bottom">
        <div class="block-bottom__btn-box">
            <button class="block-bottom__btn"
                    v-for="item in info"
                    :key="item.id"
                    @mouseenter="toggleActiveItem(item.id)" @mouseleave="clearActiveItem"
                    :class="[`block-bottom__btn--${item.id}`, {'block-bottom__btn--active': +active === item.id}]">
                <span class="block-bottom__btn-img">
                    <img :src="`images/${item.id}.png`" alt="">
                    <img class="block-bottom__btn-img--hover" :src="`images/${item.id}-hover.png`" alt="">
                </span>
                <span class="block-bottom__btn-text">{{ item.title }}</span>
            </button>
        </div>
        <BlockArrow class="block-bottom__arrow"/>
    </div>
</template>

<script>
    import BlockArrow from '@/components/blocks/arrow'

    export default {
        components: {
            BlockArrow
        },
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
                        title: 'Мясо/Шашлык'
                    },
                    {
                        id: 2,
                        title: 'Пивной сет'
                    },
                    {
                        id: 3,
                        title: 'Вино/Рыба'
                    },
                    {
                        id: 4,
                        title: 'Снеки'
                    },
                    {
                        id: 5,
                        title: 'Мангалы'
                    },
                    {
                        id: 6,
                        title: 'Кемпинг'
                    },
                    {
                        id: 7,
                        title: 'Пикник'
                    }
                ]
            }
        },
        methods: {
            toggleActiveItem(id) {
                console.log(444)
                this.$emit('ent', id)
            },
            clearActiveItem() {
                this.$emit('leave')
            }
        }
    }
</script>

<style scoped lang="scss">
    .block-bottom {
        background-color: $color--primary;
        transform: rotate(-10deg);
        height: 230px;
        width: 200%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        padding-bottom: 6px;
        box-sizing: border-box;

        &__btn-box {
            padding-right: 30px;
            position: fixed;
            right: 20px;
            bottom: 106px;
            width: 800px;
            display: flex;
            justify-content: flex-end;
            height: 100px;
            transform: rotate(10deg);
        }

        &__btn {
            cursor: pointer;
            margin-left: 47px;
            display: flex;
            flex-direction: column;
            background-color: transparent;
            border: 0;
            align-items: center;
            transition-duration: 0.3s;
            &--1 {
                margin-right: -10px;
                .block-bottom__btn-img {
                    width: 77px;
                }
            }

            &--active {
                transform: scale(1.1);
                .block-bottom__btn-img--hover {
                    opacity: 1;
                }

                .block-bottom__btn-text {
                    opacity: 1;
                }
            }

            &:hover {
                transform: scale(1.1);
                .block-bottom__btn-img--hover {
                    opacity: 1;
                }

                .block-bottom__btn-text {
                    opacity: 1;
                }
            }

            &-img {
                position: relative;
                height: 50px;
                width: 50px;

                img {
                    width: 100%;
                    height: 100%;
                    max-width: 100%;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 0;
                    object-fit: contain;
                    transition-duration: 0.3s;
                }

                &--hover {
                    opacity: 0;
                }
            }

            &-text {
                transition-duration: 0.3s;
                opacity: 0;
                font-family: $family--primary;
                margin-top: 2px;
                color: $color--accent;
                font-size: 12px;
                text-transform: uppercase;
            }
        }
    }
    .block-bottom__arrow {
        pointer-events: none;
    }
</style>
