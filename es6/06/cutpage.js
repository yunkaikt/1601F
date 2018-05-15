class CutPage{
  constructor(arg){
    Object.assign(this,arg)
  }
  // 样式的添加
  styleHandle(){
    let $styleStr=` *{margin:0;padding:0;list-style: none}
          #cutpage{
              display: flex;
              align-items: center;
              justify-content: center;
              margin:20px 0;
          }
          #cutpage ul{
            display: flex;
            justify-content: flex-start;
            margin-left: 20px;
          }
          #cutpage li{
            width: 30px;
            height: 30px;
            border: 1px solid blue;
            line-height: 30px;
            text-align: center;
          }
          .active{
            background: red;
            color: white;
          }`

      let $head=document.getElementsByTagName("head")[0]
      let $style=document.createElement("style")
      $style.innerHTML=$styleStr
      $head.appendChild($style)
  }
  // pageNum渲染函数
  pageNumRender(){
    let num=Math.ceil(this.data.length/this.pageNum)
    let $html=``
    for(var i=1;i<=num;i++){
      $html+=`<li>${i}</li>`
    }
    return $html
  }
  // 初始化渲染函数
  domRender(){
    let $html=`<div id="cutpage">
            <span>总条数：${this.data.length}</span>
            <select name="" id="">`
      // 渲染select框
    this.pageLength.forEach(function(i) {
        $html+=`<option value="${i}">${i}条/页</option>`
    }, this);

    $html+=`</select><ul>`
    // 渲染按钮（页数）
    $html+=this.pageNumRender()
    $html+=`</ul></div>`

    this.el.innerHTML=$html
    // 添加事件
    this.pageListen()
    this.selectListen()
  }
  // 更新渲染函数
  updateRenderDom(){
    let $ul=this.el.getElementsByTagName("ul")[0]
    $ul.innerHTML=this.pageNumRender()
      // 添加事件
      this.pageListen()
  }
  // 页码事件的添加
  pageListen(){
    let $li=this.el.getElementsByTagName("li")
    let clearStyle=()=>{
      for(let i=0;i<$li.length;i++){
        $li[i].className=""
      }
    }
    for(var i=0;i<$li.length;i++){
    
      $li[i].onclick=(e)=>{
        clearStyle()
        e.target.className="active"
        let val=e.target.innerHTML-1
        let data=[...this.data]
        console.log(val)
        let pageData=data.slice(val*this.pageNum,(val+1)*this.pageNum)
        this.pageNumCB(pageData)
      }
    } 
  }
  // select框改变时的事件监听
  selectListen(){
    let $select=this.el.getElementsByTagName("select")
    $select[0].onchange=(e)=>{
        let val=e.target.value
        this.pageNum=val
        this.updateRenderDom()
        this.pageLengthNumCB(val)
    }
  }
  init(){
    this.styleHandle()
    this.pageNum=this.pageLength[0]
    this.domRender()
  }
}
