<template>
  <div>
    <div id="under_construction_particles"></div>
    <div class="alert-word"><span>{{message}}</span></div>
    <footer id="copyright">
      <p>Copyright © {{curYear}} <a href="https://www.lglzy.cn/">www.lglzy.cn</a> All Rights Reserved</p>
    </footer>
  </div>
</template>
<script>
// import dynamicTxtFn from '../assets/js/dynamicTxt'
export default {
  name: 'UnderConstruction',
  data () {
    return {
      myParticleground: null,
      showFooter: false,
      message: '抱歉，页面正在建造中'
    }
  },
  computed: {
    curYear () {
      let date = new Date()
      return date.getFullYear()
    }
  },
  mounted () {
    /* global Particleground:true */
    /* eslint no-undef: "error" */
    this.myParticleground = this.createParticleground('under_construction_particles', {
      dotColor: 'rgba(136,136,136,0.3)',
      lineColor: 'rgba(136,136,136,0.3)'
    })
    // dynamicTxtFn(vm.message, 100)
  },
  beforeDestroy () {
    if (this.myParticleground) {
      this.myParticleground.destroy()
      this.myParticleground = null
    }
  },
  methods: {
    createParticleground (element, option) {
      return new Particleground(document.getElementById(element), option)
    }
  }
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
    align-items: center;
    animation: 2s fadeIn ease-in;
    justify-content: center;
    span{
        text-align:center;
    }
}
#under_construction_particles{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
#copyright {
  position: absolute;
  bottom: 0;
  width: 100%;
  p {
    color: #aaa;
    font-size: 10px;
    text-align: center;
    margin: 0 0 40px 0;
    a{
      color: #aaa;
      text-decoration: none;
    }
  }
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
