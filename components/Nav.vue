<template>
    <nav class="fixed top-0 left-0 right-0 bg-white z-50 w-full">
        <div class="flex justify-between items-center py-[20px] lg:py-[48px] wrap">
            <div class="w-[48px] h-[32px]">
                <img src="~/assets/images/logo.svg" alt="">
            </div>
            <div class="w-[24px] h-[16px]">
                <img src="~/assets/images/burger.svg" alt="">
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .wrap {
        @apply max-w-[1200px] mx-auto px-[10px] transition-all duration-300;
    }

    .wrap--scrolled {
        @apply lg:py-[20px] transition-all duration-200;
    }
</style>

<script>
export default {
    mounted() {
        ScrollTrigger.create({
            start: 'top -20',
            end: 99999,
            toggleClass: {className: 'wrap--scrolled', targets: '.wrap'}
        });
    }
}
</script>
