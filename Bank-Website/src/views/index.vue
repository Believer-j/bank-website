<template>
  <div class="app-container">
    <vue-particles id="tsparticles" :options="particlesjsConfigBg" />
    <div class="wrap">
      <div class="header text-[18px] text-white">
        <img src="../assets/img/BANK_logo.png" class="scale" style="width: 208px; height: 58px" />
        <div class="flex items-center">
          <div
            v-for="(item, index) in segments"
            :key="index"
            class="px-[14px] text-[18px] text-white"
            style="font-weight: 700"
            :class="[index == segmentIndex && 'textColor']"
            @click.stop="segmentTap(item, index)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="flex items-center">
          <div
            class="flex items-center justify-center relative"
            style="margin-right: 33px"
            @mouseenter="showLanguages = true"
            @mouseleave="showLanguages = false"
          >
            <span class="px-[5px]" style="font-weight: 700">Language</span>
            <img src="../assets/img/arrow-bottom-white.png" class="w-[24px] h-[24px] ml-[10px]" />
            <Transition name="fade-scale">
              <div
                v-if="showLanguages"
                class="absolute w-[120px] top-[0px] flex flex-col pt-[40px] pb-[5px]"
              >
                <div
                  v-for="(item, index) in languages"
                  :key="index"
                  class="h-[40px] flex items-center pl-[13px] text-black bg-white"
                  :class="[
                    index == 0 && 'rounded-t-[4px]',
                    index == languages.length - 1 && 'rounded-b-[4px]',
                  ]"
                  @click.stop="languageSelected(index)"
                >
                  {{ item }}
                </div>
              </div>
            </Transition>
          </div>
          <div
            class="shake bg-[#2659FF] w-[108px] h-[40px] rounded-full flex items-center justify-center text-[18px] text-white"
            style="font-weight: 700"
          >
            Log in
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import particlesjsConfigBg from '../assets/particlesjs-config-bg.json'

export default {
  components: {},
  data() {
    return {
      particlesjsConfigBg,
      showLanguages: false,
      languages: ['English', '中文'],
      segments: [
        { name: 'Home', path: '/' },
        { name: 'Service', path: '/aboutView' },
        { name: 'Enterprise account', path: '/' },
        { name: 'Card', path: '/' },
        { name: 'Investment', path: '/' },
        { name: 'Insurance', path: '/' },
        { name: 'Support', path: '/' },
      ],
      segmentIndex: 0,
    }
  },
  mounted() {},
  methods: {
    segmentTap(item, index) {
      this.segmentIndex = index
      this.$router.push(item.path)
    },
    languageSelected(index) {
      this.showLanguages = false
    },
  },
}
</script>

<style scoped>
@import '../assets/custom.css';
.textColor {
  color: #679fff;
  transition: color 0.3s;
}
.header {
  height: 78px;
  width: 100%;
  background-color: black;
  padding-left: 38px;
  padding-right: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.wrap {
  z-index: 1;
  width: 100%;
}

#tsparticles {
  position: absolute;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.app-container {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: black;
}
</style>
