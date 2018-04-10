<template>
  <div>
    <div id="particles"></div>
    <div id="intro" :class="titleEnter?'enter':''">
      <div class="intro-container">
        <h1 id="dynamicTxt"></h1>
        <div class='links-container'>
          <p v-for="(item, index) in homeLinks" :key="index" v-if="item.show">
            <a :href="item.link?item.link : '#'" v-if="item.normal">{{item.title}}</a>
            <router-link v-else :to="item.link">{{item.title}}</router-link>
          </p>
        </div>
      </div>
    </div>
    <footer id="copyright" v-if="showFooter">
      <p>Copyright © {{curYear}} <a href="https://www.lglzy.cn/">www.lglzy.cn</a> All Rights Reserved</p>
    </footer>
  </div>
</template>
<script>
import dynamicTxtFn from '../assets/js/dynamicTxt'
require('../assets/js/jquery.particleground.js')
export default {
  name: 'Home',
  data () {
    return {
      myParticleground: null,
      message: 'HI this is Roy',
      titleEnter: false,
      enterTimer: null,
      showFooter: false,
      homeLinks: [
        {
          title: 'Blog',
          link: 'https://www.lglzy.cn/blog/',
          show: false,
          normal: false
        },
        {
          title: 'GitHub',
          link: 'https://github.com/luogao',
          show: false,
          normal: true
        },
        {
          title: 'Work',
          link: 'under_construction',
          show: false,
          normal: false
        },
        {
          title: 'About Me',
          link: 'under_construction',
          show: false,
          normal: false
        }
      ]
    }
  },
  computed: {
    curYear () {
      let date = new Date()
      return date.getFullYear()
    }
  },
  mounted () {
    let vm = this
    /* global Particleground:true */
    /* eslint no-undef: "error" */
    vm.enterTimer = setTimeout(() => {
      vm.titleEnter = true
      vm.loadLLinks(500)
    }, 2000)
    dynamicTxtFn(vm.message, 120)
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
    },
    loadLLinks (interval) {
      let vm = this
      let counter = 0
      let target = vm.homeLinks
      clearTimeout(vm.enterTimer)
      vm.myParticleground = vm.createParticleground('particles', {
        dotColor: 'rgba(25,144,255,0.3)',
        lineColor: 'rgba(25,144,255,0.3)'
      })
      addItem()
      function addItem () {
        let timer = setTimeout(() => {
          target[counter].show = true
          counter++
          if (counter !== target.length) {
            addItem()
          } else {
            clearTimeout(timer)
            counter = 0
            vm.showFooter = true
          }
        }, interval)
      }
    }
  }
}
</script>

<style lang="Sass">
#intro {
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(25, 144, 255, 0.7);
  transition: all .3s ease-out;
  &.enter{
    background: none;
    .links-container{
      min-height:435px;
    }
    h1{
      color: #5a6067;
    }
  }
  h1 {
    text-transform: uppercase;
    font-size: 75px;
    font-weight: 700;
    letter-spacing: 0.015em;
    color: #fff;
    margin: 0;
    margin-bottom: 60px;
    transition: all .3s;
    /* animation: 2s fadeIn ease-in-out; */
  }
  .links-container{
    min-height: 0;
    transition: .5s ease-in-out;
    overflow: hidden;
        padding: 5px 0;
    p {
      width: 80%;
      max-width: 450px;
      margin: 0 auto 35px auto;
      transition: all 0.2s;
      animation: .5s fadeInUp;
      &:last-child {
        margin-bottom: 0px;
      }
      a {
        text-decoration: none;
        display: block;
        color: #fff;
        background: rgba(25, 144, 255, 0.7);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        height: 70px;
        font-size: 20px;
        line-height: 70px;
        font-weight: 500;
        &:hover {
          background: none;
          box-shadow: 0 0 0;
          color: #5eb1ff;
          transition: all 0.2s;
        }
      }
    }
  }
}
#copyright {
  position: absolute;
  bottom: 0;
  width: 100%;
  animation: .8s fadeIn ease-in-out;
  p {
    color: #aaa;
    font-size: 10px;
    text-align: center;
    margin: 0 0 40px 0;
    a{color: #aaa;text-decoration:none;}
  }
}
#particles{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
@media only screen and (max-width: 1000px) {
  #intro{
    h1 {
      font-size: 70px;
    }
  }
}
@media only screen and (max-width: 767px) {
  #intro{
    h1 {
      font-size: 48px;
    }
  }
}
@media only screen and (max-width: 568px) {
  #intro {
    padding: 0 10px;
    h1 {
      font-size: 30px;
    }
  }
}
@media only screen and (max-width: 320px) {
  #intro {
    h1 {
      font-size: 28px;
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
