<template>
    <div class="mainS">
        {{nameP}}
        <button @click="fn">点击</button>
    </div>
</template>
<script>
  export default{
    props:["nameP"],
    // props:{
    //   nameP:{
    //     type:Number,
    //     required:true,
    //     validator(val){ 
    //       return val>1
    //     }
    //   }
    // },
    data(){
      return {
        // name:null
      }
    },
    computed: {
        name(){
          return "$"+this.nameP
        }
    },
    // created () {
    //   this.name=this.nameP
    // },
    // beforeUpdate(){
    //   console.log(222)
    //   this.name=this.nameP
    // },
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