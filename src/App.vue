<template>
    <div id="app" class="main">
        <BlockTop class="main__top"/>
        <BlockImg class="main__img" :active="activeItem" @ent="toggleActiveItem" @leave="clearActiveItem"/>
        <BlockTitle class="main__title"/>
        <!--        <BlockBottom class="main__bottom" :active="activeItem" @ent="toggleActiveItem" @leave="clearActiveItem"/>-->
        <BlockBottom class="main__bottom"/>
        <UiMarker
            class="block-marker"
            :class="[`block-marker--${item.id}`, {'ui-marker--active': +activeItem === item.id}]"
            :info="item"
            v-for="item in info"
            :key="item.id"
            @toggleActiveItem="toggleActiveItem"
            @clearActiveItem="clearActiveItem"
        />
    </div>
</template>

<script>
import BlockTop from '@/components/blocks/top'
import BlockImg from '@/components/blocks/img'
import BlockTitle from '@/components/blocks/title'
import BlockBottom from '@/components/blocks/bottom'
export default {
  components: {
      BlockTop,
      BlockImg,
      BlockTitle,
      BlockBottom
  },
    data() {
        return {
            activeItem: '',
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
                    title: 'Пиво Heinken',
                    desc: 'светлое <br> 0,47 л/Россия',
                    text: 'купить',
                    price: [54, 89]
                },
                {
                    id: 3,
                    title: 'Вино/Рыба',
                    desc: 'Вино/Рыба',
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
            this.activeItem = id
        },
        clearActiveItem() {
            this.activeItem = ''
        }
    }

}
</script>

<style lang="scss">
    .main {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
        &__top {
            position: absolute;
            top: -72px;
            left: 0;
            transform-origin: bottom left;
            /*//top: -146px;*/
            //left: -100px;
            z-index: 2;
        }
        &__img {
            position: relative;
            z-index: 1;
        }
        &__title {
            position: absolute;
            top: 170px;
            left: 76px;
            z-index: 2;
        }
        &__bottom {
            position: absolute;
            z-index: 2;
            right: 0;
            bottom: -23px;
            transform-origin: top right;
            //bottom: -129px;
            //right: -42px;
        }
    }
    .block-marker {
        z-index: 3;
        /*box-shadow: 0 0 0;*/
       /deep/ .ui-marker__btn-decor {
           animation-name: keyfrScale;
           animation-duration: 2s;
           animation-iteration-count: infinite;
           animation-direction: alternate;
       }
        &--1 {
            bottom: 138px;
            left: 33%;
            /deep/ .ui-marker__btn-decor {
                animation-delay: 0.5s;
            }
        }
        &--2 {
            bottom: 420px;
            left: 59.4%;
            /deep/ .ui-marker__btn-decor {
                animation-delay: 0.4s;
            }
        }
        &--3 {
            bottom: 500px;
            left: 70%;
              /deep/ .ui-marker__btn-decor {
                animation-delay: 1s;
            }
        }
        &--4 {
             bottom: 500px;
             left: 88%;
              /deep/ .ui-marker__btn-decor {
                animation-delay: 0.3s;
            }
         }
        &--5 {
            bottom: 200px;
            left: 5%;
        }
        &--6 {
            bottom: 300px;
            left: 35%;
              /deep/ .ui-marker__btn-decor {
                animation-delay: 1s;
            }
        }
        &--7 {
            bottom: 530px;
            left: 79%;
        }

    }
    @keyframes keyfrScale{
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0.2);
        }
    }
</style>
