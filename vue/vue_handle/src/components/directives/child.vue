<template>
    <div>
     
    </div>
</template>
<script>
  export default{
    data(){
      return {
       
      }
    },
  
    methods:{
    
    },
   mounted () {
     console.log("child-mounted")
   },
   directives:{
    //  chil:{
    //    bind(){
    //      console.log("child-bind")
    //    },
    //    inserted(){
    //      console.log("child-inserted")
    //    },
    //    updated () {
    //      console.log("child-updated")
    //    },
    //    componentUpdated(){
    //      console.log("child-componentUpdata")
    //    }
    //  }
   }

  }

</script>
<style scoped>
.mainS{
  border: 1px solid black;
  margin:50px
}
</style>