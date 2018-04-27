<template>
    <div class="mainS">
        <ul>
          <li is="p">{{name}}</li>
        </ul>
        <button @click="fn">点击</button>
    </div>
</template>
<script>
  export default{
    data(){
      return {
        name:"zhangsan"
      }
    },
    // data:{
    //   name:"zhangsan"
    // },
    methods:{
      fn(){
        this.name="lisi"
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