
<template>
  <div id="work">
    <work-item/>
    <footer id="copyright">
      <p>Copyright © {{curYear}} www.lglzy.cc All Rights Reserved</p>
    </footer>
  </div>
</template>
<script>
import WorkItem from './WorkItem'
export default {
  name: 'Work',
  data () {
    return {}
  },
  components: {
    WorkItem
  },
  computed: {
    curYear () {
      let date = new Date()
      return date.getFullYear()
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="Sass">
#work{
    width: 900px;
    margin: auto;
}
#copyright {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  animation: .8s fadeIn ease-in-out;
  p {
    color: #aaa;
    font-size: 10px;
    text-align: center;
    margin: 0 0 40px 0;
  }
}
</style>
