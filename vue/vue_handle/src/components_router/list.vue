<template>
    <ul>
      <li v-for="i in data" :key="i.id">
        <!-- <router-link :to="{path:'detail',query:{id:i.id}}">
            {{i.id}}---{{i.name}}----{{i.addr}}
        </router-link> -->
        <!-- <router-link :to="{name:'detail',params:{id:i.id}}">
            {{i.id}}---{{i.name}}----{{i.addr}}
        </router-link> -->
        <router-link :to="{path:'detail/'+i.id}" tag="p">
            {{i.id}}---{{i.name}}----{{i.addr}}
        </router-link>
        <!-- <a @click="fn(i.id)">
            {{i.id}}---{{i.name}}----{{i.addr}}
        </a> -->
      </li>
    </ul>
</template>
<script>

  export default {
      data(){
        return {
          data:[]
        }
      },
      beforeCreate(){
        this.axios.get("/api/list").then((data)=>{
          console.log(data)
          this.data=data.data.list
        })
      },
      methods:{
        fn(id){
          console.log(223)
          // this.bus.$emit("up",id)
          // this.global.id=id
          // console.log(this.global)
          // this.$router.push({path:'/detail/'+id})
      
        }
      }
  }
</script>