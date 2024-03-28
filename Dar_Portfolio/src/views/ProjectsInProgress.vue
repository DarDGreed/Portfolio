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
</style>