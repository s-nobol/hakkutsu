<template>
<div class="main">
    <div class="profile__wapper ">
        <img src="/image/noimage.jpg" class="profile__image"/>
        <h3 class="profile__name">名前：てすと</h3>
        
        <!--ゲージ-->
        <div class="profile__level">
            <span>lev.88</span>
            <div class="profile__level__gauge"></div>
        </div>
        
        <div class="profile__status">
            <span>てすと</span>/<span>てすと</span> 
            <span>てすと</span>/<span>てすと</span> 
            <span>てすと</span>/<span>てすと</span> 
            <span>てすと</span>/<span>てすと</span> 
        </div>
    </div>

</div>
</template>
<style type="text/css">
.profile__wapper{
    text-align: center;
}
.profile__name{
    margin-top: 30px;
}
.profile__level__gauge{
    height:10px;
    width:500px;
    background-color:mediumspringgreen;
    margin: auto;
}
.profile__status{
    color:gray;
}
</style>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'app',
//   components: {
    
//   } ,
// }
</script>