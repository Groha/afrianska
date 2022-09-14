<script>
export default {
  data() {
    return {
      clients: [
        {
          id: "1",
          imgUrl: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg",
          alt: "LOGO CLIENT 1"
        },
        {
          id: "2",
          imgUrl: "../assets/images/project_1.jpeg",
          alt: "LOGO CLIENT 2"
        },
        {
          id: "3",
          imgUrl: "../assets/images/project_3.jpeg",
          alt: "LOGO CLIENT 3"
        },
        {
          id: "4",
          imgUrl: "",
          alt: "LOGO CLIENT 4"
        },
        {
          id: "5",
          imgUrl: "../assets/images/project_3.jpeg",
          alt: "LOGO CLIENT 5"
        },
        {
          id: "6",
          imgUrl: "../assets/images/project_1.jpeg",
          alt: "LOGO CLIENT 6"
        },
        {
          id: "7",
          imgUrl: "",
          alt: "LOGO CLIENT 7"
        },
      ],
    };
  },
};
</script>

<template>
    <div class="bg-[#5A98D0] rounded-tl-[200px] overflow-hidden">
        <div class="container-sm py-[40px] md:py-[60px] lg:pt-[96px] lg:pb-[125px]">
            <div class="flex flex-col lg:flex-row mb-[40px] md:mb-[60px] lg:mb-[111px] last:mb-0 text-white ml-[14%] lg:ml-0">
                <h2 class="text-[36px] leading-[128%] tracking-wider lg:mr-[9.9%] w-[227px] flex-shrink-0 font-Gilroy font-medium">
                    Our Beloved Client
                </h2>
                <p class="max-w-[540px] leading-[162%] font-Gilroy opacity-60">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam.
                </p>
            </div>
            <div class="grid grid-cols-4 content-center">
                <cardsClient
                    v-for="client in clients"
                    :key="client.id"
                    :imgUrl="client.imgUrl"
                    :id="client.id"
                    :alt="client.alt"
                />
                <div class="p-[42px] border-r border-solid border-white text-white text-center text-20 font-Gilroy font-medium bg-[#1f3f6899] flex items-center justify-center"><a href="#">More Client</a></div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
.grid div:nth-child(4n) {
    @apply border-r-0;
}
</style>