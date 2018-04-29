<template>
    <div>
      <h2>这里是routerPage</h2>
        {{data.user.name}}
    </div>
</template>
<script>
  export default {
      data(){
        return {
          data:null
        }
      },
      
      beforeRouteEnter(to,from,next){
          if(sessionStorage.getItem("pcuser")){
              next()
          }else{
            let cb=()=>{
              return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    sessionStorage.setItem("pcuser",JSON.stringify({
                      user:{
                        name:"zhagnsan"
                      }
                    }))
              
                    resolve("/pc")
                  },5000)
              })
            }
          next({path:"loading",query:{cb}})
           
          }
      },
      created(){
      
        this.data=JSON.parse(sessionStorage.getItem("pcuser"))
       
      }
  }
</script>