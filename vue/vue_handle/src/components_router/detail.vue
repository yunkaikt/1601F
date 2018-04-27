<template>
    <div>{{data}}</div>
</template>
<script>
  
  export default {
      data(){
        return {
          data:null,
          id:null
        }
      },
      methods:{
          getData(){
            this.axios.get("/api/detail?id="+this.$route.params.id).then((data)=>{
                console.log(data)
                this.data=data.data[0].content
              })
          }
      },
      watch: {
        id(){
          if(this.$route.name=="detail"){
            this.getData()
          }
        }
       
      },
      created () {
        this.getData()
      },
      beforeCreate () {
        
        // console.log(this.$route.query.id)
        
        // this.axios.get("/api/detail?id="+this.$route.query.id).then((data)=>{
        //   console.log(data)
        //   this.data=data.data[0].content
        // })

        // console.log(this.$route.params.id)
        // this.axios.get("/api/detail?id="+this.$route.params.id).then((data)=>{
        //   console.log(data)
        //   this.data=data.data[0].content
        // })
          // this.bus.$on("up",(data)=>{
          //   console.log(123)
          // })
            // console.log(this.global)
      },
      activated () {
        this.id=this.$route.params.id
      }
      // activated () {
      //   console.log(this.$route)
      //   if(!this.$route.meta.id){
      //     this.$route.meta.id=this.$route.params.id
      //     this.axios.get("/api/detail?id="+this.$route.params.id).then((data)=>{
      //         console.log(data)
      //         this.data=data.data[0].content
      //       })
          
      //   }else{
      //     if(this.$route.meta.id!=this.$route.params.id){
      //       this.axios.get("/api/detail?id="+this.$route.params.id).then((data)=>{
      //         console.log(data)
      //         this.data=data.data[0].content
      //       })
      //       this.$route.meta.id=this.$route.params.id
      //     }
          
      //   }
      
      // }
      

  }
</script>