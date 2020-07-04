<template>
    <div class="wrap">
        <section class="section-header">
            Поехали=)
        </section>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    .section-header {
        @include adaptiveFont(15px, 33px);
        background-color: rgba(0, 0, 251, 0.42);
        @include sm {
            background-color: $color--primary;
        }
        @include md {
            background-color: $color--accent;
        }
        @include lg {
            background-color: $color--positive;
        }
    }
</style>
