<template>
  <div class='carousel-view'>
    <agile>
      <div v-for="(image, i) in dogImages"
           class="slide"
           :key="i"
           :style="{ backgroundImage: `url(${image})` }">
      </div>
    </agile>
  </div>
</template>

<script>
import Agile from 'vue-agile'
export default {
  components: { Agile },
  props: {
    images: Array
  },
  data () {
    return {}
  },
  computed: {
    dogImages: {
      get() {
        return this.images
      },
      set() {
        return this.images
      }
    }
  },
  methods: {
    next() {
      const first = this.dogImages.shift()
      this.dogImages = this.dogImages.concat(first)
    },
    previous() {
      const last = this.dogImages.pop()
      this.dogImages = [last].concat(this.dogImages)
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  width: 100%;
  min-height: 25em;
}
.slide {
  flex: 0 0 20rem;
  height: 20rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  &-img {
    background-size: cover;
    width: 100%;
    min-height: 30rem;
  }
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}

</style>
