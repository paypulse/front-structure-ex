<template>
  <div>
    <title>하늘끝에는 무엇이 있을까_상_7</title>
    <div>
      <div id="root">
        <!-- 이미지 -->
        <img src="@/assets/images/bg.png" id="bg" class="background">
        <img src="@/assets/images/ans1.png" id="ans1" class="ans">
        <img src="@/assets/images/ans2.png" id="ans2" class="ans">
        <img src="@/assets/images/ans3.png" id="ans3" class="ans">
        <img src="@/assets/images/popup.png" id="popup" class="popup">
        <img src="@/assets/images/page1.png" id="page1_img" class="page">
        <img src="@/assets/images/page2.png" id="page2_img" class="page">
        <img src="@/assets/images/page3.png" id="page3_img" class="page">
        <img src="@/assets/images/page4.png" id="page4_img" class="page">
        <img src="@/assets/images/page5.png" id="page5_img" class="page">
        <img src="@/assets/images/page6.png" id="page6_img" class="page">
        <img src="@/assets/images/page7.png" id="page7_img" class="page">

        <div id="click1" class="click1 click" v-on:click="_iclick(1,'o',1);"></div>


      </div>

    </div>
  </div>


</template>
<script>

export default {
  name: 'FirstView',
  data: function(){
    return {
      audioCtx: '',
      action: [],
      cur_index: 1,
      max_index: 4,
      load_finished: false,
      qIndex: 0,
      minorStep : 0,
      timer_index : 0,
      first : false,
      second : false,
      page: 1,
      flash_index : 0,
      chk_1: false,
      chk_2: false,
      chk_3: false,
      location_info : {"test" : "test"}
    }
  },
  created() {
     // this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      this.createByDong();
  },
  methods: {
    createByDong: function(){

    }
  }
}
</script>
