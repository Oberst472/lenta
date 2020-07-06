<template>
    <span class="ui-marker">
        <button class="ui-marker__btn" @mouseenter="$emit('toggleActiveItem', info.id)" @mouseleave="$emit('clearActiveItem')">
            <span class="ui-marker__btn-btn"></span>
            <span class="ui-marker__btn-decor"></span>
        </button>
        <span class="ui-marker__info">
            <span class="ui-marker__title">
                {{ info.title }}
                <span class="ui-marker__desc">{{ info.desc }}</span>
            </span>
            <span class="ui-marker__text">{{ info.text }}</span>
            <span class="ui-marker__price">
                <span class="ui-marker__price-big">{{ info.price[0] }}</span>
                <span class="ui-marker__price-small">.{{ info.price[1] }}</span>
                <svg class="ui-marker__price-svg" id="bigTriangleColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                    <path d="M0 0 L50 36 L100 0 Z"></path>
                </svg>
            </span>
        </span>
    </span>
</template>

<script>
    export default {
        props: {
            info: {
                type: Object,
                default: () => {
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .ui-marker {
        display: inline-flex;
        position: absolute;
        flex-direction: column-reverse;
        align-items: center;
        &--active {
            z-index: 10;
            .ui-marker__info {
                opacity: 1 !important;
                pointer-events: auto !important;
            }
            .ui-marker__title {
                opacity: 1;
                transform: translateY(0);
            }
            .ui-marker__text {
                opacity: 1;
                transform: translateY(0);
            }
            .ui-marker__price {
                opacity: 1;
                transform: translateY(0);
            }
            .ui-marker__btn-decor {
                animation-play-state: paused;
            }
        }
        &__btn {
            width: 28px;
            height: 28px;
            border: 0;
            position: relative;
            bottom: -30px;
            cursor: pointer;
            z-index: 2;
            background-color: transparent;
            &-btn {
                position: absolute;
                background-color: #ffd600;
                box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.7);
                border-radius: 50%;
                width: 28px;
                height: 28px;
                z-index: 4;
                left: 0;
                top: 0;
            }
            &-decor {
                position: absolute;
                width: 68px;
                height: 68px;
                background-color: rgba($color--primary, 0.4);
                border-radius: 50%;
                top: calc(50% - 34px);
                left: calc(50% - 34px);
                z-index: -1;
            }
            &:hover {
                & ~ .ui-marker__info {
                    /*opacity: 1 !important;*/
                }
            }
        }

        &__info {
            transition-duration: 0.3s;
            /*opacity: 0;*/
            width: 145px;
            display: flex;
            flex-direction: column;
            align-items: center;
            pointer-events: none;
        }

        &__title {
            width: 100%;
            box-sizing: border-box;
           transform: translateY(-10px);
            transition-duration: 0.3s;
            transition-delay: 0.2s;
            font-weight: 700;
            display: flex;
            flex-direction: column;
            text-transform: uppercase;
            text-align: left;
            padding: 5px;
            background-color: $color--text-light;
            font-size: 17px;
            opacity: 0;
        }

        &__desc {
            font-weight: 400;
            font-size: 12px;
            padding: 5px 0;
            background-color: $color--text-light;
            width: 100%;
            text-align: left;
            box-sizing: border-box;
        }

        &__text {
            transform: translateY(-10px);
            transition-duration: 0.3s;
            transition-delay: 0.1s;
            opacity: 0;
            width: 100%;
            padding: 5px;
            box-sizing: border-box;
            background-color: #ff0000;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 24px;
            margin-top: 4px;
        }

        &__price {
            transform: translateY(-10px);
            transition-duration: 0.3s;
            opacity: 0;
            margin-top: 4px;
            padding: 5px;
            box-sizing: border-box;
            display: flex;
            background-color: $color--primary;
            width: 100%;
            color: $color--accent;
            justify-content: center;
            position: relative;
            &-big {
                font-weight: 700;
                font-size: 54px;
            }
            &-small {
                font-size: 20px;
                font-weight: 700;
            }
            &-svg {
                pointer-events: none;
                fill: $color--primary;
                top: 100%;
                width: 100%;
                left: 0;
                position: absolute;
            }
        }
    }
</style>
