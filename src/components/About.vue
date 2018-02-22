<template>
  <div>
    <div id="particles"></div>
    <div id="intro">
      <div class="intro-container">
        <h1>HI this is Roy</h1>
        <div :class="titleEnter?'enter links-container':'links-container'">
          <p v-for="(item, index) in homeLinks" :key="index" v-if="item.show">
            <a @click="alertMessage(item.link)" :href="item.link?item.link : '#'">{{item.title}}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      
    }
  },
  computed: {
    
  },
  mounted () {
    let vm = this
    /* global Particleground:true */
    /* eslint no-undef: "error" */
  },
  beforeDestroy () {
  },
  methods: {
   
  }
}
</script>

<style lang="Sass">
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
