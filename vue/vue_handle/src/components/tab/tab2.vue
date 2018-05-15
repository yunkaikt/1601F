<template>
  <div>这里是tab2</div>
</template>


<script>
  export default {
  
    data(){
      return {
        
      }
    },
    mounted(){
      console.log("tab2Mounted")
    },
    beforeUpdate () {
      console.log(222)
    },
    activated(){
      console.log(4444)
    }
  }
</script>