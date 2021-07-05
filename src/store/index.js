import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filename: '',
    filePath: ''
  },
  mutations: {
  },
  actions: {
    //ajax 비동기식 처기
    getContentRes(param){
        return new Promise((resolve, reject) => {
          let params = new URLSearchParams();
          params.append('filename',param.state.filename);

          //api에 filepath질의
          axios({
            method:"post",
            url: "/edulab/menuItem/sampeDownload",
            data: params,
            headers: { 'Access-Control-Allow-Origin': true },
            mode:'cors'
          }).then(response =>{
            //file Download path
            this.state.filePath = response.data.filePath;
            resolve("SUCCESS");
          }).catch(error =>{
            reject(error);
          });
        })
    }
  },
  modules: {
  }
})
