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
.testimonials {
    border-radius: 10px;
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
@media only screen and (1024px >= width) {
.container {
    margin: 30px 60px 30px 60px;
}
.testimonial_container {
    width: 300px;
    height: 235px;
    margin-right: 55px;
}
.title {
    font-size: 25px;
    margin-top: 10px
}
}
@media only screen and (768px >= width) {
.container {
    margin: 30px 60px 30px 60px;
}
.testimonial_container {
    width: 250px;
    height:195px;
    margin-right: 45px;
}
.title {
    font-size: 20px;
    margin-top: 10px
}
}
@media only screen and (600px > width) {
.container {
    margin: 30px 60px 30px 60px;
}
.testimonial_container {
    width: 240px;
    height:185px;
    margin-right: 40px;
}
.title {
    font-size: 18px;
    margin-top: 8px
}
}
@media only screen and (425px >= width) {
.container {
    margin: 20px 30px 20px 30px;
}
.testimonial_container {
    width: 140px;
    height:115px;
    margin-right: 25px;
}
.title {
    font-size: 12px;
    margin-top: 8px
}
}
@media only screen and (375px >= width) {
.container {
    margin: 18px 28px 18px 28px;
}
.testimonial_container {
    width: 130px;
    height:105px;
    margin-right: 20px;
}
.title {
    font-size: 11px;
    margin-top: 7px
}
}
@media only screen and (320px >= width) {
.container {
    margin: 15px 25px 15px 25px;
}
.testimonial_container {
    width: 110px;
    height:85px;
    margin-right: 15px;
}
.title {
    font-size: 9px;
    margin-top: 7px
}
}
</style>