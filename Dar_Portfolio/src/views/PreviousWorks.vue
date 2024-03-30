<script setup>

</script>
<template>
    <div class="container">
        <div class="projects">
            <RouterLink to="/previous-works/notes-app">
                <img class="image" src="@/assets/images/notesapp.png" alt="notes app image">
                <span class="project_name">Notes App</span>
            </RouterLink>
        </div>
        <div class="projects">
            <RouterLink to="/previous-works/todo-app">
                <img class="image" src="@/assets/images/todo.jpg" alt="todo app image">
                <span class="project_name">Todo App</span>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin: 30px 60px 30px 60px;
    display: flex;
}
.projects {
    width: 275px;
    height: 275px;
    margin-right: 75px;
    display: flex;
}
.projects a{
    text-decoration: none;
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
.projects {
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
    margin: 20px 50px 20px 50px;
}
.projects {
    width: 235px;
    height: 235px;
    margin-right: 15px;
}
.image {
    width: 210px;
    height: 195px;
    border-radius: 35px;
}
.project_name {
    font-size: 20px;
}
}
@media only screen and (600px >= width) {
.container {
    margin: 20px 20px 20px 20px;
}
.projects {
    width: 205px;
    height: 175px;
    margin-right: 10px;
}
.image {
    width: 180px;
    height: 145px;
    border-radius: 15px;
}
.project_name {
    font-size: 17px;
}
}
@media only screen and (425px >= width) {
.container {
    margin: 15px 10px 15x 10px;
}
.projects {
    width: 105px;
    height: 95px;
    margin-right: 5px;
}
.image {
    width: 100px;
    height: 75px;
    border-radius: 10px;
}
.project_name {
    font-size: 10px;
}
}
@media only screen and (375px >= width) {
.container {
    margin: 15px 20px 15px 20px;
}
.projects {
    width: 95px;
    height: 95px;
    margin-right: 5px;
}
.image {
    width: 90px;
    height: 75px;
    border-radius: 8px;
}
.project_name {
    font-size: 10px;
}
}
@media only screen and (320px >= width) {
    .container {
    margin: 15px 20px 15px 20px;
}
.projects {
    width: 85px;
    height: 85px;
    margin-right: 5x;
}
.image {
    width: 80px;
    height: 70;
    border-radius: 5px;
}
.project_name {
    font-size: 8px;
}
}
</style>