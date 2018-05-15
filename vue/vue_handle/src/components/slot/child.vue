<template>
    <div class="mainS">
      <h2>子组件：</h2>
      <!-- <div v-html="els"></div> -->
      <slot :text="name"></slot>
      <slot name="head"></slot>
    </div>  
</template>
<script>
  export default{
    // props:["els"],
    data(){
      return {
       name:"子组件name"
      }
    },
    
    methods:{

    }

  }

</script>
<style scoped>
.mainS{
  border: 1px solid black;
  margin:50px
}
</style>