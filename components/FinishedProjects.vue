<script>
export default {
  data() {
    return {
      icons: [
        {
          id: "1",
          iconUrl: "../assets/images/ic_1.svg",
        },
        {
          id: "2",
          iconUrl: "../assets/images/ic_2.svg",
        },
        {
          id: "3",
          iconUrl: "../assets/images/ic_3.svg",
        },
        {
          id: "4",
          iconUrl: "../assets/images/ic_4.svg",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container-sm mb-[40px] md:mb-[80px] lg:mb-[192px]">
    <div class="flex flex-col md:flex-row mb-[40px] md:mb-[60px] lg:mb-[96px] last:mb-0 text-[#1F3F68]">
      <h2 class="text-[36px] leading-[128%] tracking-wider mr-[9.9%] w-[227px] flex-shrink-0 font-Gilroy font-medium mb-[20px] md:mb-0">
        Our Finished Project
      </h2>
      <p class="max-w-[540px] leading-[162%] font-Gilroy opacity-60">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
    <div class="w-full h-[417px] relative rounded-[10px] overflow-hidden mb-[96px] last:mb-0" style="background: linear-gradient(89.99deg,#1f3f68 3.62%,rgba(31, 63, 104, 0.37) 97.78%)">
        <picture>
            <img
            src="~/assets/images/project_1.jpeg"
            alt=""
            class="w-full h-full object-cover absolute -z-10"
            />
        </picture>
        <div class="max-w-[341px] top-[48px] right-[48px] text-white font-Gilroy text-right absolute z-10">
            <h3 class="text-[28px] leading-[164%]">Smart Home Installation</h3>
            <p class="opacity-80 leading-[288%]">In Muarakana Housing Estate</p>
        </div>
        <div class="relative w-full h-full">
            <div class="absolute w-[144px] h-[144px] flex items-center justify-center border-[5px] border-solid border-white rounded-full left-[-2.45%] bottom-[-6.71%]">
            <picture>
                <img src="~/assets/images/ic_home_48px-w.svg" alt="" />
            </picture>
            </div>
            <iconCircle
                v-for="icon in icons"
                :key="icon.id"
                :iconUrl="icon.iconUrl"
                :id="icon.id"
            />
        </div>
    </div>
    <div class="grid md:grid-cols-2 gap-[40px] md:gap-[96px] w-full h-[417px]">
        <div class="w-full h-full relative rounded-[10px] overflow-hidden">
            <div class="w-full h-full relative" style="background: linear-gradient(308.85deg, rgba(66, 165, 245, 0.4) -1.71%, rgba(21, 101, 192, 0.6) 74.54%);">
                <picture>
                    <img src="~/assets/images/project_2.jpeg" alt="" class="w-full h-full object-cover absolute top-0 left-0 right-0 -z-10">
                </picture>
            </div>
            <div class="max-w-[341px] top-[24px] left-[32px] text-white font-Gilroy absolute z-10">
                <h3 class="text-[28px] leading-[164%]">Sparklite App</h3>
                <p class="opacity-80 leading-[288%]">Marketplace</p>
            </div>
        </div>
        <div class="w-full h-full relative rounded-[10px] overflow-hidden">
            <div class="w-full h-full relative" style="background: linear-gradient(306.48deg, rgba(66, 165, 245, 0.4) 0%, rgba(21, 101, 192, 0.6) 97.81%);">
                <picture>
                    <img src="~/assets/images/project_3.jpeg" alt="" class="w-full h-full object-cover absolute top-0 left-0 right-0 -z-10">
                </picture>
            </div>
            <div class="max-w-[341px] top-[24px] left-[32px] text-white font-Gilroy absolute z-10">
                <h3 class="text-[28px] leading-[164%]">Car-Rapetition App</h3>
                <p class="opacity-80 leading-[288%]">Board</p>
            </div>
        </div>
    </div>
  </div>
</template>