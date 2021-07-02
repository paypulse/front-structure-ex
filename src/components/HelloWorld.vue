<template>
  <div class="hello">
<!--    <h1>{{ msg }}</h1>-->
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    console.log("start page");

    this.$store.state.filename = 'A';
    this.$store.dispatch("getContentRes").then(response =>{
      console.log(response);
      if(response === "SUCESS")
      {
        this.downLoad(this.$store.state.filePath);
      }
    }, error =>{
      console.log(error);
    });




  },
  methods: {
    downLoad: function(url){
        console.log(url);

      // const link = document.createElement('a');
      // link.href = url;
      // link.src= "./src/assets/";
      // link.download="downloadFile";
      //
      // link.click();

      //let fileTransfer = new FileTransfer();
      // fileTransfer.download(url, );

     // var fileTransfer = new FileTransfer();
     // console.log(fileTransfer);
     //  let loader = new ZipLoader(url);
     //  loader.load();

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
