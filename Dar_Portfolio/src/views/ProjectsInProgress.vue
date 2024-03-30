<script setup>

</script>
<template>
    <div class="container">
        <div class="inProgress">
            <img class="image" src="@/assets/images/realtimechat.jpg" alt="realtime chat image">
            <a class="project_name" href="https://github.com/DarDGreed/TUF">Realtime Chat App</a>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin: 30px 60px 30px 60px;
    display: flex;
}
.inProgress {
    width: 275px;
    height: 275px;
    margin-right: 75px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.image {
    width: 275px;
    height: 225px;
    border-radius: 60px;
}
.project_name {
    color: rgb(3, 139, 230);
    font-weight: bolder;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media only screen and (1024px >= width) {
.container {
    margin: 28px 55px 28px 55px;
}
.inProgress {
    width: 245px;
    height: 275px;
    margin-right: 45px;
}
.image {
    width: 240px;
    height: 225px;
    border-radius: 40px;
}
.project_name {
    font-size: 25px;
}
}
@media only screen and (768px >= width) {
.container {
    margin: 25px 50px 25px 50px;
}
.inProgress {
    width: 235px;
    height: 255px;
    margin-right: 45px;
}
.image {
    width: 230px;
    height: 215px;
    border-radius: 35px;
}
.project_name {
    font-size: 20px;
}
}
@media only screen and (600px >= width) {
.container {
    margin: 23px 47px 23px 47px;
}
.inProgress {
    width: 225px;
    height: 235px;
    margin-right: 40px;
}
.image {
    width: 220px;
    height: 185px;
    border-radius: 30px;
}
.project_name {
    font-size: 18px;
}
}
@media only screen and (425px >= width) {
.container {
    margin: 20px 24px 20px 24px;
}
.inProgress {
    width: 185px;
    height: 155px;
    margin-right: 30px;
}
.image {
    width: 170px;
    height: 135px;
    border-radius: 20px;
}
.project_name {
    font-size: 15px;
}
}
@media only screen and (375px >= width) {
.container {
    margin: 15px 20px 15px 20px;
}
.inProgress {
    width: 125px;
    height: 115px;
    margin-right: 30px;
}
.image {
    width: 120px;
    height: 95px;
    border-radius: 15px;
}
.project_name {
    font-size: 10px;
}
}
@media only screen and (320px >= width) {
    .container {
    margin: 15px 20px 15px 20px;
}
.inProgress {
    width: 105px;
    height: 85px;
    margin-right: 30px;
}
.image {
    width: 100px;
    height: 75px;
    border-radius: 8px;
}
.project_name {
    font-size: 8px;
}
}
</style>