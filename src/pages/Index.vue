<template>
<div class="main">
    <div class="main__menu ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79466.39458147288!2d136.83300321955454!3d35.041572161561305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600379a0d3c924b3%3A0xa1a962dc2785debe!2z5ZCN5Y-k5bGL5riv5rC05peP6aSo!5e0!3m2!1sja!2sjp!4v1572608591166!5m2!1sja!2sjp" 
        width="100%" height="750" frameborder="0"
        style="border:0;" allowfullscreen="true" ></iframe>
        
        
        <transition name="slide_down">
        <div class="row p-0 m-0 footbar" v-show="isOpened" >
            <div class="col-6 system__wrapper  p-0 m-0">
                <h5>システム</h5>
            <span @click="isOpened = ! isOpened" class="close__tab">colse</span>
            </div>
            
            
            <div class="col-6 chat__wrapper p-0 m-0">
                <!--<h5>チャット</h5>-->
                
                <div class="chat__list">
                    <div>さらにもっと読み込む</div>
                    <div>
                        <span>1: 名無しのまとめーる 2019/10/31(木) 13:18:08.832 ID:bMCoWwAmMHLWN</span>
                        <p class="p-2">虫多すぎだろ…</p>
                    </div>
                    <div>
                        <span>1: 名無しのまとめーる 2019/10/31(木) 13:18:08.832 ID:bMCoWwAmMHLWN</span>
                        <p class="p-2">虫多すぎだろ…</p>
                    </div>
                    <div>
                        <span>1: 名無しのまとめーる 2019/10/31(木) 13:18:08.832 ID:bMCoWwAmMHLWN</span>
                        <p class="p-2">虫多すぎだろ…</p>
                    </div>
                    <div>
                        <span>1: 名無しのまとめーる 2019/10/31(木) 13:18:08.832 ID:bMCoWwAmMHLWN</span>
                        <p class="p-2">虫多すぎだろ…</p>
                    </div>
                    <div>
                        <span>1: 名無しのまとめーる 2019/10/31(木) 13:18:08.832 ID:bMCoWwAmMHLWN</span>
                        <p class="p-2">虫多すぎだろ…</p>
                    </div>
                    <div>
                        <span>1: 名無しのまとめーる 2019/10/31(木) 13:18:08.832 ID:bMCoWwAmMHLWN</span>
                        <p class="p-2">虫多すぎだろ…</p>
                    </div>
                </div>
                
                <form class="chat__form">
                    <input type="text" name=""/>
                    <button class="btn btn-primary">送信</button>
                </form>
            </div>
        </div>
        </transition>
        
        <div class="open_tab" @click="isOpened = ! isOpened" >タブ</div>
    </div>

</div>
</template>
<style type="text/css">
.main{
	margin-left:300px;
	height:100vh;
	position:relative;
}
.main__menu{
    height: 100vh;
    overflow: hidden;
}

.footbar{
    position: absolute;
    bottom: 0;
    left: 0;
    height:250px;
    width:100%;
    z-index: 50;
}


.chat__wrapper{
    position:relative;
    /*background-color: aliceblue;*/
    background-color: white;
}

.chat__list{
    height:250px;
    overflow-y: scroll;
    padding: 0px 30px;
}
.chat__form{
    position:absolute;
    bottom:5px;
    right:15px;
}
.system__wrapper{
    position:relative;
    background-color: darkslategray;
}

.close__tab{
    display: inline-block;
    padding: 0 15px;
    position:absolute;
    top:-25px;
    right:-15px;
    /*width:35px;*/
    background-color: white;
    cursor:pointer;
}
.open_tab{
    display: inline-block;
    position:absolute;
    bottom:0;
    left:50%;
    width:35px;
    margin-left: -35px;
    background-color: white;
    cursor:pointer;
}







</style>
    <script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.3.4/firebase-firestore.js"></script>
<script>

export default {
  name: 'app',
  components: {
    
  } ,
    data(){
        return{
            isOpened: true,
        }
    },
//   created(){
//     var firebaseConfig = {
//         apiKey: "AIzaSyC819d-tnYhWkHq7V60rDvNs2giljIf8Mw",
//         authDomain: "vue-test-53364.firebaseapp.com",
//         databaseURL: "https://vue-test-53364.firebaseio.com",
//         projectId: "vue-test-53364",
//         storageBucket: "vue-test-53364.appspot.com",
//         messagingSenderId: "22199419631",
//         appId: "1:22199419631:web:d102f81619efdd5548511a",
//         measurementId: "G-Y8JYX34D51"
//     };
//         // Initialize Firebase
//         firebase.initializeApp(firebaseConfig);
//         var db = firebase.firestore();
//               db.collection("users").add({
//                     first: "こんにちは",
//                     last: "これはテストコメントです",
//                     born: 1815
//                 })
//                 .then(function(docRef) {
//                     console.log("Document written with ID: ", docRef.id);
//                 })
//                 .catch(function(error) {
//                     console.error("Error adding document: ", error);
//                 });

//     }
}
</script>
