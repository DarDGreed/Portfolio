<script setup>

</script>

<template>
    <div class="nav_container">
        <div class="logo">
            <RouterLink to="/">Dar</RouterLink>
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
.logo {
    float: left;
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
</style>