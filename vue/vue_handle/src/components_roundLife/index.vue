<template>
  <div class="roundLife">
      <router-view ></router-view>
      <button @click="fn">点击</button>
     
  </div>
     
</template>
<script>

    export default {
      data(){
        return {
          name:null
        }
      },
      beforeCreate(){
        // 无法获取data上的数据和methods内的方法；
        // 此时组件还未实例化成功，可以在此发起数据的请求，或者做当前组件实例与否的判断
        // 声明周期函数中，执行最早的一个
        // console.log(this.axios)
        // console.log(this.name)
        // this.axios.get("/api/vuex1").then((data)=>{
        //   console.log(this.name)
        //   this.name=data.data
        // })

      },
      created () {
        // vue声明周期中，最早可以访问到Data和methods内方法的；
        // 当前组件实例化完成，所有的挂载到thi上的东西，全部挂载完毕
        // console.log(this.name)
        console.log("created")
      },
      beforeMount () {
        // 在组件编译之前
        console.log(12)
      },
      mounted () {
        // 组件编译完成，并且将所有的dom挂载真实dom完成；
        // 可以获取模板中，所有的dom节点，可以针对dom节点进行操作；
        // 在vue的声明周期中，最早可以进行dom操作的地方
        console.log("mounted")
      },
      beforeUpdate () {
        // 当组件内部的data数据或者props数据改变时，必然执行的函数，
        // 在新的dom树插入真实dom前执行，类似与beforeMount
      },
      updated () {
         // 当组件内部的data数据或者props数据改变时，必然执行的函数，
        // 在新的dom树插入真实dom后执行，跟mounted类似，可以进行dom操作
      },

      beforeDestroy(){
          // 当前组件销毁，或者说，在js内存中删除之前，执行的钩子函数；
          // 在此钩子函数可以进行事件监听的销毁（dom事件，计时器事件），可以进行全局无用数据的清楚；
          // 如果结合路由时，可以做一个路由的拦截
      },
      destroyed(){
        // 一般不用
      },
      // beforeRouteEnter: (to, from, next) => {
      //   // 在进入组件前（组件开始实例化前）执行
      //   // 一般可以在这里做判断，或者数据请求（保证在组件实例化时，或者进入组件前保证拿到数据）
      //   // this.axios.get("/api/vuex1").then((data)=>{
      //   // next中的回掉函数，必然是在当前组件实例化，并且编译渲染完成之后执行，所以在保证组件实例或渲染前，就能拿到数据，需要借助其他方式进行存储
      //     next((vm)=>{
      //       // vm.name=data.data
      //       console.log("next")
      //     })
      //   // })
        
      // },
      // beforeRouteUpdate: (to, from, next) => {
      //   // 当路由的route对象改变时，会执行此函数；
      //   // 可以在这里做路由信息的监听
      //   console.log("beforeRouteUpdate")
      //   next()
      // },
      beforeRouteLeave : (to, from, next) => {
        // 检测当前页的内容玩不完整，如果符合条件，才能离开此页
        console.log("beforeRouteLeave")
        next()
      },
      methods: {
        fn(){
          this.$router.go(0)
        }
      }

    }
</script>
<style>
.roundLife{
  height: 1400px;
}

</style>