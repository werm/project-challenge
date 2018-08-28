<template>
	<div>
		<h2>{{ dog.name }}</h2>
    <p class="text-muted">{{ dog.description }}</p>
    
    <div class="row">
      <div class="col-sm">
        <div class="carousel slide">
          <div class="carousel-inner">

            <ol class="carousel-indicators">
              <li v-for="(image, i) in dog.images" :key="i"
                  @click.prevent="activateImage(i)"
                  :class="{ active : (i === activeImage) }">
                  </li>
            </ol>
            <div class="full-img"
                 v-if="dog.images"
                 :style="{ backgroundImage: `url(${currentImage})` }">
            </div>

            <a class="carousel-control-prev"
               href="#"
               role="button"
               @click.prevent="prevImage">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
            <a class="carousel-control-next"
               href="#"
               role="button"
               @click.prevent="nextImage">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>              
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
import Agile from 'vue-agile';

export default {
  name: 'ShowDog',
	data() {
    return {
      dog: {},
      activeImage: 0
    }
  },
  computed: {
    currentImage() {
      return this.dog.images[this.activeImage];
    }
  },
  methods: {
    nextImage() {
      let active = this.activeImage + 1;
      if (active >= this.dog.images.length) {
        active = 0;
      }
      this.activateImage(active);
    },
    // Go backwards on the images array 
    // or go at the last image
    prevImage() {
      var active = this.activeImage - 1;
      if(active < 0) {
          active = this.dog.images.length - 1;
      }
      this.activateImage(active);
    },
    activateImage(imageIndex) {
      console.log(imageIndex);
      this.activeImage = imageIndex;
    }
  },
  beforeCreate() {
    fetch(`/dogs/${this.$route.params.id}.json`)
      .then(response => response.json())
      .then((dog) => {
        this.dog = dog;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>

<style lang="scss">
.img-thumbnail {
  max-width: 200px;
}

.full-img {
  height: 40rem;
  background-size: cover;
  background-position: center;
}

.carousel-control-prev, .carousel-control-next {
  background-color: rgba(0, 0, 0, 0.25);
  width: 7.5%;
}
</style>
