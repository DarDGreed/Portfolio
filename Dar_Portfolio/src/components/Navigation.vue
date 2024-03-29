<script setup>
</script>

<template>
    <div class="nav_container">
        <div class="dar_logo">
            <img class="logo" src="@/assets/DarLogo.png" alt="Dar Logo">
        </div>
        <div class="main_nav">
            <RouterLink active-class="active" to="/previous-works">Previous Works</RouterLink>
            <span class="divider">|</span>
            <RouterLink active-class="active" to="/projects-in-progress">Projects in Progress</RouterLink>
            <span class="divider">|</span>
            <RouterLink active-class="active" to="/testimonials">Testimonials</RouterLink>
            <span class="divider">|</span>
            <RouterLink active-class="active" to="/my-cv">My CV</RouterLink>
        </div>
    </div>

</template>

<style scoped>
.nav_container {
    height: 50px;
    text-align: center;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;    
}
.main_nav a{
    margin-right: 10px;
    text-decoration: none;
    font-size: 30px;
    color: rgb(3, 139, 230);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
}
.main_nav .active {
    color: rgb(0, 66, 110);
}
.divider {
    font-size: 30px;
    color: rgb(3, 139, 230);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    padding: 0px 5px 0px 5px;
}
.nav_container .dar_logo {
    position: fixed;
    left: 10px;
}
.logo {
    width: 150px;
}
.dar_logo {
    cursor: pointer;
}
@media only screen and (1024px >= width) {
.main_nav a{
    margin-right: 5px;
    font-size: 25px;
}
.main_nav .active {
    color: rgb(0, 66, 110);
}
.divider {
    font-size: 25px;
    padding: 0px 2px 0px 2px;
}
.logo {
    width: 120px;    
}
}
@media only screen and (768px >= width) {
.main_nav a{
    margin-right: 5px;
    font-size: 19px;
}
.main_nav .active {
    color: rgb(0, 66, 110);
}
.divider {
    font-size: 19px;
    padding: 0px 2px 0px 2px;
}
.logo {
    width: 100px;    
}
}
@media only screen and (600px > width) {
.main_nav a{
    margin-right: 5px;
    font-size: 15px;
}
.main_nav .active {
    color: rgb(0, 66, 110);
}
.divider {
    font-size: 15px;
    padding: 0px 2px 0px 2px;
}
.logo {
    width: 60px;    
}
}
@media only screen and (425px >= width) {
.nav_container {
    height: 25px;
    margin-top: 7px;
    margin-bottom: 7px;  
}
.main_nav a{
    margin-right: 5px;
    font-size: 11px;
}
.main_nav .active {
    color: rgb(0, 66, 110);
}
.divider {
    font-size: 19px;
    padding: 0px 2px 0px 2px;
}
.logo {
    width: 40px;    
}
}
@media only screen and (375px >= width) {
.nav_container {
    height: 20px;
    margin-top: 5px;
    margin-bottom: 5px;  
}
.main_nav a{
    margin-right: 3px;
    font-size: 9px;
}
.main_nav .active {
    color: rgb(0, 66, 110);
}
.divider {
    font-size: 9px;
    padding: 0px 2px 0px 2px;
}
.logo {
    width: 30px;    
}
}
@media only screen and (320px >= width) {
.nav_container {
    height: 17px;
    margin-top: 4px;
    margin-bottom: 4px;  
}
.main_nav a{
    margin-right: 2px;
    font-size: 8px;
}
.main_nav .active {
    color: rgb(0, 66, 110);
}
.divider {
    font-size: 8px;
    padding: 0px 2px 0px 2px;
}
.logo {
    width: 30px;    
}
}
</style>