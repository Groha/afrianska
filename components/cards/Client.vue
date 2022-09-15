<script setup lang="ts">
interface IconProps {
  imgUrl?: string;
  alt?: string;
}

const clientProps = defineProps<IconProps>();
</script>

<template>
    <div class="p-[10px] w-full h-[128px] border-r border-solid border-white text-white uppercase text-center text-20 font-Gilroy font-medium client">
        <picture>
            <img :src="imgUrl" :alt="alt" class="w-full h-full object-cover">
        </picture>
    </div>
</template>

<style scoped>
.grid div:nth-child(4n) {
    @apply border-r-0;
}

.grid div:nth-child(-n+4) {
    @apply border-b;
}
</style>