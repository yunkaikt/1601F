<template>
    <div>
       <!-- <section v-if="state"> -->
          <!-- <div v-for="(i,index) in filterdata"  :key="i.id">{{i.id}}---{{i.name}}----{{i.addr}}</div> -->
          <!-- <div v-for="(i,index) in data"  :key="i.id">{{i.id}}---{{i.name}}----{{i.addr}}</div> -->
            <!-- <p v-for="n in 10">{{n}}</p> -->
       <!-- </section> -->
        <!-- <button @click="fn(state)">点击</button>

        <div @click="test">
          haha
          <div @click="test">
            <div @click.stop.self="test">
              点击
              <p>heihei</p>
            </div>
            </div>
        </div> -->

        <!-- <input type="text" v-model="name" @keyup.enter="test"> -->
        <input type="text" v-model.lazy="name" @keyup="test">
        <!-- <input type="checkbox" id="checkbox" name="a" v-model="checked" @change="test"> -->
        <!-- <input type="checkbox" id="checkbox" name="a" v-model="checked" true-value="男" false-value="女" @change="test"> -->
        <!-- <input type="radio" id="one" name="a" value="女" v-model="checked" @change="test">
        <input type="radio" id="one" name="a" value="男" v-model="checked" @change="test"> -->

        <!-- <select v-model="selected" @change="test">
            <option disabled value="">请选择</option>
            <option value="A">A</option>
            <option  value="B">B</option>
            <option  value="C">C</option>
         </select> -->
        
    </div>
</template>

<script>
  export default {
    name:"app",
    data(){
        return {
          data:[{ id: 1, name: '毛娟', addr: '娄底市' },
                { id: 2, name: '朱丽', addr: '上海市' },
                { id: 3, name: '熊杰', addr: '锡林郭勒盟' },
                { id: 4, name: '潘静', addr: '襄阳市' },
                { id: 5, name: '邱军', addr: '九龙' },
                { id: 6, name: '周超', addr: '平凉市' },
                { id: 7, name: '沈涛', addr: '银川市' },
                { id: 8, name: '周涛', addr: '无锡市' },
                { id: 9, name: '郑娟', addr: '阿克苏地区' }],
                state:true,
                name:"zhangsan",
                checked:null,
                selected:null
        }
    },
    computed:{
      filterdata(){
        return this.data.filter((i,index)=>{
          if(index>5){
                return true
              }else{
                return false
              }
        })
      }
    },
    beforeCreate(){
        
        // this.$ajax({
        //   url:"/api",
        //   type:"get"
        // }).then((data)=>{
        //   console.log(data.list)
        //   this.data=data.list
        // })
    },
    methods: {
        fn(data){
          console.log(data)
          // this.data=[{ id: 1, name: '毛娟', addr: '娄底市' },
          //             { id: 4, name: '潘静', addr: '襄阳市' },
          //             { id: 3, name: '熊杰', addr: '锡林郭勒盟' },
          //             { id: 5, name: '邱军', addr: '九龙' },
          //             { id: 2, name: '朱丽', addr: '上海市' },
          //             { id: 6, name: '周超', addr: '平凉市' },
          //             { id: 7, name: '沈涛', addr: '银川市' },
          //             { id: 8, name: '周涛', addr: '无锡市' },
          //             { id: 9, name: '郑娟', addr: '阿克苏地区' }]
          // this.data.push({id: 10, name: '郑娟', addr: '阿克苏地区' })
        //  this.data=this.data.filter((i,index)=>{
        //       if(index>5){
        //         return true
        //       }else{
        //         return false
        //       }
        //   })
        },
        test(){
          // console.log(22)
          // console.log(this.selected)
          // console.log(this.checked)
          console.log(this.name)
        }
    }

  }
</script>