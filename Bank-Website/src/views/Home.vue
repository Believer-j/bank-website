<template>
  <div class="wrap flex flex-col items-center pt-[100px]">
    <span class="colorChange custom-font text-white text-[48px] text-center"
      >Make your assets more thoughtful</span
    >
    <span class="scale text-white text-center text-[14px] mt-[38px] max-w-[990px]"
      >Our aim is to reshape the digital transformation of modern enterprise organizations. By
      implementing the comprehensive digitalization of enterprise organizations, we will transform
      the traditional pyramid-shaped organizational structure into a more efficient, transparent and
      fair decentralized autonomous economy, and strive to create a new era of digital business
      ecosystems.</span
    >
    <div class="flex items-center pt-[30px] text-[14px] text-white">
      <div
        class="shake bg-[#045FFA] w-[150px] h-[40px] flex items-center justify-center rounded-full"
        style="margin-right: 12px"
      >
        introduction
      </div>
      <div
        class="shake w-[150px] h-[40px] flex items-center justify-center rounded-full border-[1px] border-white border-solid"
      >
        Download
      </div>
    </div>
    <div
      class="flex flex-row-reverse"
      :class="[showRotate && 'flipped']"
      style="margin-top: 32px; z-index: 1"
      @mouseenter="rotateing"
    >
      <img src="../assets/img/home/card-fan.png" class="w-[285px] h-[180px]" />
      <img
        src="../assets/img/home/card-zheng.png"
        class="w-[378px] h-[233px]"
        style="margin-top: 21px; margin-right: -80px; z-index: 1"
      />
    </div>
    <img src="../assets/img/home/home-bg.png" class="w-screen" style="margin-top: -240px" />
    <div class="w-full relative min-h-[459px]">
      <div class="bg-[#045FFA] flex flex-col py-[27px]" style="margin-top: 70px">
        <span class="custom-font text-[22px] text-white w-1/3 mt-[27px]" style="margin-left: 120px"
          >One card connects the crypto world with real consumption</span
        >
        <span class="text-[13px] text-white w-1/3" style="margin-left: 120px; margin-top: 33px"
          >7Bank's Web3 digital bank card enables you to directly use digital currencies such as
          BTC, ETH, and USDT for global consumption without going through an exchange. It supports
          real-time exchange of multiple fiat currencies and is connected to VISA/ Mastercard
          payment networks, ensuring smooth online shopping and offline consumption. Through smart
          contract automatic settlement and DeFi yield management, we offer you a secure, efficient
          and borderless crypto payment experience, truly integrating digital assets into your daily
          life</span
        >
      </div>
      <div class="absolute right-[145px] top-0 w-[390px]">
        <img src="../assets/img/home/card-back.png" class="w-[389px] h-[344px]" />
        <img
          src="../assets/img/home/card-face.png"
          class="w-[349px] h-[314px] absolute top-[30px] left-[35px]"
        />
      </div>
    </div>
    <span class="custom-font text-white text-[22px] text-center">7BANK Focus News</span>
    <div class="mt-[108px] w-full flex items-center justify-between pt-[34px] pb-[200px]">
      <div
        v-for="(item, index) in news"
        :key="index"
        class="bg-[#045FFA] rounded-[15px] flex flex-col"
        @mouseenter="newsIndex = index"
      >
        <img :src="getImageUrl(index)" :style="{ width: item.width }" />
        <span
          v-if="newsIndex == index"
          class="text-white text-[12px] p-[20px]"
          :style="{ maxWidth: item.width }"
          >{{ item.desc }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showRotate: false,
      news: [
        {
          src: `@/assets/img/home/news0.png`,
          desc: 'Foreign exchange fixed deposits enjoy an annual interest rate as high as 13.8%',
          width: '167px',
        },
        {
          desc: 'Foreign exchange fixed deposits enjoy an annual interest rate as high as 13.8%',
          width: '246px',
        },
        {
          desc: 'Foreign exchange fixed deposits enjoy an annual interest rate as high as 13.8%',
          width: '324px',
        },
        {
          desc: 'Foreign exchange fixed deposits enjoy an annual interest rate as high as 13.8%',
          width: '246px',
        },
        {
          desc: 'Foreign exchange fixed deposits enjoy an annual interest rate as high as 13.8%',
          width: '167px',
        },
      ],
      newsIndex: 2,
    }
  },
  mounted() {
    let that = this
    setTimeout(() => {
      that.rotateing()
    }, 500)
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/home/news${name}.png`, import.meta.url).href
    },
    rotateing() {
      if (this.showRotate) {
        return
      }
      this.showRotate = true
      let that = this
      setTimeout(() => {
        that.showRotate = false
      }, 5000)
    },
  },
}
</script>

<style scoped>
@import '../assets/custom.css';
.wrap {
  width: 100%;
}

.showDesciption:hover {
  display: inline;
}

.colorChange:hover {
  color: #045ffa;
  transition: color 2s;
}

.flipped {
  transform-style: preserve-3d;
  transition: transform 4.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: rotateY(360deg);
}
</style>
