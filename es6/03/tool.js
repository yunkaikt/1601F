function Test(){
  var aa=Symbol("name")
  this[aa]="sdfsdfsadfsafs"
  this.name="lisi"
  this.fn=function(){
    console.log(this.name)
    console.log(this[aa])
  }
}


module.exports=Test







