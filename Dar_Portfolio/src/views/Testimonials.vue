<script setup>

</script>

<template>
    <div class="container">
        <div class="testimonial_container">
            <video id="testimonials" class="testimonials" controls>
                <source src="@/assets/videos/sample.mp4">
            </video>
            <span class="title">Notes App Testimony</span>
        </div>
        <div class="testimonial_container">
            <video id="testimonials" class="testimonials" controls>
                <source src="@/assets/videos/sample.mp4">
            </video>
            <span class="title">Todo Project Testimony</span>
        </div>
    </div>
</template>
<style scoped>
.container {
    margin: 30px 60px 30px 60px;
    display: flex;
}
.testimonial_container {
    width: 375px;
    height: 325px;
    margin-right: 75px;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.title {
    color: rgb(3, 139, 230);
    font-weight: bolder;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}
@media only screen and (600px > width) {
    .testimonial_container {
        width: 225px;
        height: 175px;
        margin-right: 35px;
    }
    .title {
        color: rgb(3, 139, 230);
        margin-top: 10px;
        font-size: 20px;
    }
}
</style>