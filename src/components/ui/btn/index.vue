<!--suppress SassScssResolvedByNameOnly -->
<template>
    <div :class="btnClasses" class="ui-btn">
        <component
            :class="btnItemClasses"
            :href="href"
            :is="tag"
            :target="href ? '_blank' : ''"
            :to="to"
            @click="click"
            class="ui-btn__item"
        >
            <span class="ui-btn__item-loading" v-if="loading"></span>
            <span class="ui-btn__item-value" v-else><slot/></span>
        </component>
        <transition name="fade">
            <span class="ui-btn__confirm" v-if="confirm && isConfirmActive">
                <span class="ui-btn__confirm-text">{{ confirm }}</span>
                <span @click="confirmYes" class="ui-btn__confirm-btn">Да</span>
                <span @click="confirmNo" class="ui-btn__confirm-btn">Нет</span>
            </span>
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            theme: {
                type: String,
                default: 'primary'
            },
            size: {
                type: String,
                default: 'default'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            href: {
                type: String,
                default: ''
            },
            to: {
                type: Object,
                default: null
            },
            confirm: {
                type: String,
                default: ''
            },
            confirmPosition: {
                type: String,
                default: 'bottom'
            }
        },
        data() {
            return {
                isConfirmActive: false
            }
        },
        computed: {
            btnItemClasses() {
                return {
                    'ui-btn__item--disabled': this.disabled,
                    'ui-btn__item--loading': this.loading,
                    [`ui-btn__item--theme-${this.theme}`]: true
                }
            },
            btnClasses() {
                return {
                    'ui-btn--confirm-active': this.isConfirmActive,
                    [`ui-btn--confirm-position-${this.confirmPosition}`]: true,
                    [`ui-btn--size-${this.size}`]: true
                }
            },
            tag() {
                if (this.href) {
                    return 'a'
                } else if (this.to) {
                    return 'router-link'
                } else {
                    return 'button'
                }
            }
        },
        methods: {
            click() {
                !this.confirm ? this.$emit('click') : this.isConfirmActive = true
            },
            confirmYes() {
                this.$emit('click')
                this.isConfirmActive = false
            },
            confirmNo() {
                this.isConfirmActive = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .ui-btn {
        position: relative;
        z-index: 2;
        display: inline-flex;

        &__item {
            position: relative;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            font-size: inherit;
            border: 0;
            border-radius: 5px;
            outline: none;
            cursor: pointer;
            user-select: none;
            transition: background-color 0.3s ease;
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;

            &:active {
                opacity: 0.8;
            }

            &--theme {
                &-primary {
                    color: $color--text-light;
                    background-color: $color--primary;

                    &:hover {
                        background-color: darken($color--primary, 20%);
                    }
                }

                &-positive {
                    color: $color--text-light;
                    background-color: $color--positive;

                    &:hover {
                        background-color: darken($color--positive, 20%);
                    }
                }

                &-negative {
                    color: $color--text-light;
                    background-color: $color--negative;

                    &:hover {
                        background-color: darken($color--negative, 20%);
                    }
                }
            }

            &--disabled {
                opacity: 0.5;
                pointer-events: none;
            }

            &--loading {
                font-size: 0;
                opacity: 0.7;
                pointer-events: none;
            }

            &__value {
                pointer-events: none;
            }

            &-loading {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 2px solid transparent;
                border-top-color: currentColor;
                border-bottom-color: currentColor;
                border-radius: 50%;
                animation: spin 1.5s linear infinite;
                pointer-events: none;

                &:before {
                    content: '';
                    display: block;
                    border-radius: 50%;
                    animation: pulse 1s alternate ease-in-out infinite;
                }
            }

        }

        &__confirm {
            position: absolute;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;
            min-width: 150px;
            padding: $gutter / 2;
            font-size: 14px;
            color: $color--text-light;
            border-radius: 5px;
            background-color: lighten($color--dark, 10%);


            &-text {
                width: 100%;
                margin-bottom: 10px;
            }

            &-btn {
                box-sizing: border-box;
                width: 45%;
                padding: 5px;
                border-radius: 5px;
                background-color: $color--primary;
                cursor: pointer;
                user-select: none;
                transition: background-color 0.3s ease;

                &:hover {
                    background-color: darken($color--primary, 15%);
                }

                &:active {
                    opacity: 0.6;
                }
            }

            &:before {
                content: '';
                position: absolute;
                width: 10px;
                height: 10px;
                background-color: lighten($color--dark, 10%);
            }
        }

        &--size {
            &-default {
                width: 100%;
                min-width: 100px;
                height: 50px;
                font-size: 14px;

                .ui-btn__item {
                    padding: 0;
                }

                .ui-btn__item-loading {
                    width: 20px;
                    height: 20px;
                    border-width: 3px;

                    &:before {
                        width: 4px;
                        height: 4px;
                        border: 3px solid currentColor;
                    }
                }
            }

            &-medium {
                width: auto;
                min-width: 100px;
                min-height: 40px;
                font-size: 14px;

                .ui-btn__item {
                    padding: 5px $gutter;
                }

                .ui-btn__item-loading {
                    width: 20px;
                    height: 20px;
                    border-width: 2px;

                    &:before {
                        width: 4px;
                        height: 4px;
                        border: 2px solid currentColor;
                    }
                }
            }

            &-small {
                width: auto;
                min-width: 80px;
                min-height: 35px;
                font-size: 12px;

                .ui-btn__item {
                    padding: 5px $gutter / 3;
                }

                .ui-btn__item-loading {
                    width: 12px;
                    height: 12px;
                    border-width: 2px;

                    &:before {
                        width: 2px;
                        height: 2px;
                        border: 2px solid currentColor;
                    }
                }
            }

            &-mini {
            }
        }

        &--confirm {
            &-active {
                z-index: 3;
            }

            &-position-left {
                .ui-btn__confirm {
                    top: 50%;
                    right: calc(100% + 10px);
                    transform: translateY(-50%);

                    &:before {
                        top: 50%;
                        right: -5px;
                        transform: translateY(-50%) rotate(45deg);
                    }
                }
            }

            &-position-right {
                .ui-btn__confirm {
                    top: 50%;
                    left: calc(100% + 10px);
                    transform: translateY(-50%);

                    &:before {
                        top: 50%;
                        left: -5px;
                        transform: translateY(-50%) rotate(45deg);
                    }
                }
            }

            &-position-top {
                .ui-btn__confirm {
                    bottom: calc(100% + 10px);
                    left: 50%;
                    transform: translateX(-50%);

                    &:before {
                        bottom: -5px;
                        left: 50%;
                        transform: translateX(-50%) rotate(45deg);
                    }
                }
            }

            &-position-bottom {
                .ui-btn__confirm {
                    top: calc(100% + 10px);
                    left: 50%;
                    transform: translateX(-50%);

                    &:before {
                        top: -5px;
                        left: 50%;
                        transform: translateX(-50%) rotate(45deg);
                    }
                }
            }
        }
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes pulse {
        from {
            transform: scale(0.5);
        }
        to {
            transform: scale(1);
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
