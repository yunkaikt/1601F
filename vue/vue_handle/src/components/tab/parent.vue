<template>
  <div>
      <ul>
        <li @click="fn('tab1')">显示tab1</li>
        <li @click="fn('tab2')">显示tab2</li>
        <li @click="fn('tab3')">显示tab3</li>
      </ul>
      <keep-alive>
          <component :is="state" names="state"></component>
      </keep-alive>
     
  </div>
</template>

<script>
  // import tab1 from "./tab1"
  // import tab2 from "./tab2"
  // import tab3 from "./tab3"

  export default {
    data(){
      return {
        state:"tab1"
      }
    },
    methods:{
      fn(item){
        this.state=item
      }
    },
    components: {
      // tab1: function(resolve){return require(['./tab1'], resolve)},
      // tab1:  () => import(/* webpackChunkName: "async" */'.tab1.vue'),
      tab1: resolve =>require(['./tab1'], resolve),
      tab2: resolve =>require(['./tab2'], resolve),
      tab3: resolve =>require(['./tab3'], resolve)
   
    }
    
  }
</script>
<style scoped>
  ul{
    list-style: none;
    display: flex;
    justify-content: flex-start;
  }
  ul li{
    width: 100px;
  }
</style>