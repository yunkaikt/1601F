<template>
    <div class="mainS">
        <Child :nameP="name" aa="sfd" class="test"/>
        <button @click="fn">点击</button>
    </div>
</template>
<script>
  export default{
    data(){
      return {
        name:2
      }
    },
    methods:{
      fn(){
        this.name="lisi"
      }
    },
    beforeUpdate(){
      console.log(1111)
      // this.name=this.nameP
    },

  }

</script>
<style scoped>
.mainS{
  border: 1px solid black;
  margin:50px
}
</style>