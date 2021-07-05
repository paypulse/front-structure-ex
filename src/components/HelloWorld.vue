<template>
  <div>
     <input type="button" value="Button Click" v-on:click="viewHtml"/>

  </div>
</template>

<script>
import Vue from 'vue'
import VueCordova from 'vue-cordova'
import cors from "cors"

Vue.use(VueCordova)
Vue.use(cors)

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data : function (){
   return {
     url :'',
     filePath: '',
     // 슬라이더 이미지 배열
     color : [
       "green",
       "red",
       "blue",
       "orange"
     ],
     // 타이머
     timer : null,
     // 현재 활성화된 인덱스
     currentIndex : 0
   }
  },
  created() {
    alert("start page");
    console.log("start page");


    // this.$store.state.filename = 'A';
    // this.$store.dispatch("getContentRes").then(response =>{
    //   console.log(response);
    //   if(response === "SUCCESS")
    //   {
    //     this.downLoad(this.$store.state.filePath);
    //   }
    // }, error =>{
    //   alert("error");
    //   console.log(error);
    // });

    //File DownloadTest
    //this.fileDownload();



  },
  methods: {
    downLoad: function(url){
      console.log(url);
      console.log(window.cordova);
      console.log(window.cordova.platformId);
      console.log(window.cordova.externalDataDirectory);

      window.addEventListener("filetransfer",this.fileTransfer, false);



    },
    fileDownload: function(){
      //  var fileTransfer = new FileTransfer();
       this.url = encodeURI('http://211.34.230.55/atest/A.zip');

       if(window.cordova.platformId === 'android'){
         alert('android');
         //var fileURL = window.cordova.file.externalRootDirectory+'download/';
         this.filePath = window.cordova.file.externalRootDirectory;
         alert(this.filePath);
         document.addEventListener("deviceready", this.deviceReady, false);
       }else{
         alert('brwoser and ios ');
         this.filePath = 'http://localhost:8080/src/assets/file';


       }


    },
    deviceReady: function(){
      alert(this.url);
      console.log("test");
      console.log(this.url);
      console.log(this.filePath);

      let fileTransfer = new window.File.FileTransfer();
      alert('before Download');
      fileTransfer.download(this.url,this.filePath,
        function(entry){
          alert('Successfully downloaded file, full path is ' + entry.fullPath)
          alert(entry.toURL());
          alert(entry);
        },
        function(error){
          console.log(error);
          alert(error);
        })
    },
    viewHtml: function(){
      alert('test');
      this.$router.push("/firstView");

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
