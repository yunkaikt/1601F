<template>
    <div class="mainS">
       
        <button @click="fn">点击</button>
    </div>
</template>
<script>
  export default{
    props:["cb"],
  
    data(){
      return {
        name:"zhangsan"
      }
    },
    created () {
      // console.log(this.cb)
        // this.cb(this.name)
        this.$bus.$emit("up",this.name)
    },
    methods:{
      fn(){
          this.nameP=2345
      }
    }

  }

</script>
<style scoped>
.mainS{
  border: 1px solid black;
  margin:50px
}
</style>