<template>
<div>

    <!--設定の都合上上にする-->
    <div class="view ">
        <router-view  />
    </div>
    
    
    <!--メインバー-->
    <div class="menu ">
    
        <h3 class="menu__title">発掘王</h3>
        <div class="menu__item">
        
        
            <router-link to="/" class="menu__link">ホーム</router-link><br>
            <router-link to="/search" class="menu__link">お宝を探す</router-link><br>
            <!--<router-link to="/create" class="menu__link">ログイン・サインアップ</router-link><br>-->
            <router-link to="/about" class="menu__link">発掘王について</router-link>
            
            <div>
            <span @click="isOpened = ! isOpened">メッセージ</span>
            </div>
        </div>
        
        
        <div class="menu__login">
            <router-link to="/login" class="menu__link">ログイン</router-link><br>
            <router-link to="/login" class="menu__link">新規登録</router-link><br>
        </div>
        
        
    </div>
    
    
    
    <!--メッセージ(後日Compornetに入れる)-->
    <transition name="slide_down">
        <div class="message" v-show="isOpened">
        タイムカプセルの発掘代行はじめました
        </div>
    </transition>
    
    
    
    <!--ログインユーザーのステータス(後日Compornetに入れる)-->
    <div class="auth__user">
        <img class="auth__user__image" src="/image/noimage.jpg"/>
        <router-link to="/users/1" >てすと</router-link><br>
    </div>



    <link rel="stylesheet" href="css/anime.css" type="text/css" />
</div>
</template>

<style type="text/css">
/*animation*/
.message{
    position: fixed;
    top:30px;
    left:50%;
    margin-left: -100px;
    height:60px;
    width: 500px;
    overflow: hidden;
    background-color: white;
    line-height:60px;
    /*padding: 15px;*/
}


</style>
<style type="text/css">
html, body{
  height:100%;
  margin: 0px;
  padding: 0px;
}


.menu{
    /*position:fixed;*/
    /*top:0px;*/
    /*left:0px;*/
    float:led;
    margin: 0px;
    height: 100vh;
    width: 300px;
    padding-top: 50px;
    background-color: white;
    border-right: solid 1px gray ;
    position:relative;
}

.menu__title{
    font-weight: bold;
    color: #daa520;
    text-align: center;
}
.menu__item{
    width:60%;
    margin: auto;
}
.menu__link{
    font-size: 18px;
    color: black;
}
.menu__login{
    position:absolute;
    width:100%;
    bottom: 50px;
    text-align: center;
    font-size: 16px;
}

.view{
    
    /*固定バーの数だけずらす*/
    float: right;
    /*text-align: center;*/
    width: 100%;
    height: 100vh;
	margin-left:-300px;
    z-index: 1;
    
  
}
/*ログインユーザープロフィール*/
.auth__user{
    display: inline-block;
    position:fixed;
    top: 35px;
    right:35px;
}
.auth__user__image{
    width: 40px;
    height: 40px;
    border-radius: 50px;
}
</style>

<script>
export default {
name: 'app',
    data(){
        return{
            isOpened: false,
        }
    },
    methods:{
    }
}
</script>



