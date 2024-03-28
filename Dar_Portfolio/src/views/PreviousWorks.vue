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
</style>