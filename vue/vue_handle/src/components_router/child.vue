<template>
    <div>
      这里是子路由
    </div>
</template>
<script>

  export default {
      data(){
        return {
          data:[]
        }
      },
      mounted(){
        console.log(this.$route.matched)
      }
     
  }
</script>