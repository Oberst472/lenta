<template>
    <div id="app" class="main">
        <BlockTop class="main__top"/>
        <BlockImg class="main__img" :active="activeItem" @ent="toggleActiveItem" @leave="clearActiveItem"/>
        <BlockTitle class="main__title"/>
        <BlockBottom class="main__bottom" :active="activeItem" @ent="toggleActiveItem" @leave="clearActiveItem"/>
        <UiMarker
            class="block-marker"
            :class="[`block-marker--${item.id}`, {'ui-marker--active': +activeItem === item.id}]"
            :info="item"
            v-for="item in info"
            :key="item.id"
            @mouseenter.native="toggleActiveItem(item.id)" @mouseleave.native="clearActiveItem"
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
            console.log(6)
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
        box-shadow: 0 0 0;
    }
</style>
