<script setup lang="ts">
import cards from "@/data.json";
</script>


<template>
    <div class="container-sm py-[40px] md:py-[60px] lg:py-[192px]">
        <div class="grid lg:grid-cols-2 gap-[40px] lg:gap-[100px]">
            <h2 class="max-w-[360px] text-[36px] leading-[128%] text-[#316099] tracking-wider font-Gilroy font-medium lg:translate-x-[-80px]">What we do to help our client grow in digital era,</h2>
            <cardsCard 
                v-for="card in cards"
                :key="card.id"
                :imgUrl="card.imgUrl"
                :title="card.title"
                :content="card.content"
                :btn="card.btn"
                :id="card.id"
            />
        </div>
    </div>
</template>