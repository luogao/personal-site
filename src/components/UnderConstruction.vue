<template>
  <div>
    <div id="particles"></div>
    <div class="alert-word"><span>{{message}}</span></div>
    <footer id="copyright" v-if="showFooter">
      <p>Copyright © {{curYear}} www.lglzy.cc All Rights Reserved</p>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'UnderConstruction',
  data () {
    return {
      myParticleground: null,
      showFooter: false,
      message: '抱歉，页面正在建造中'
    }
  },
  computed: {},
  mounted () {
    let vm = this
    /* global Particleground:true */
    /* eslint no-undef: "error" */
    vm.myParticleground = new Particleground(document.getElementById('particles'), {
      dotColor: 'rgba(136,136,136,0.3)',
      lineColor: 'rgba(136,136,136,0.3)'
    })
  },
  beforeDestroy () {
    this.myParticleground.destroy()
  },
  methods: { }
}
</script>

<style lang="Sass">
.alert-word{
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 0.015em;
    color: #5a6067;
    animation: 2s fadeIn ease-in-out;
    align-items: center;
    justify-content: center;
    span{
        text-align:center;
    }
}
#particles{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
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
