<template>
    <transition name="fadeLoading">
        <div class="ui-loading">
            <span class="ui-loading__content"><span></span></span>
        </div>
    </transition>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    .ui-loading {
        background-color: #fff;
        z-index: 100;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        &__content {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: center;
            width: 60px;
            height: 60px;
            pointer-events: none;
            span {
                position: relative;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                border: 2px solid transparent;
                border-top-color: currentColor;
                border-bottom-color: currentColor;
                border-radius: 50%;
                animation: spin 1.5s linear infinite;
                &:before {
                    content: '';
                    display: block;
                    width: 8px;
                    height: 8px;
                    border: 2px solid currentColor;
                    border-radius: 50%;
                    animation: pulse 1s alternate ease-in-out infinite;
                }
            }
        }
    }
    .fadeLoading-enter-active, .fadeLoading-leave-active {
        transition: opacity 0s;
    }

    .fadeLoading-enter, .fadeLoading-leave-to {
        opacity: 0;
        transition: opacity 0.5s;
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
</style>
