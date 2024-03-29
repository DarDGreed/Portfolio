<script setup>
</script>

<template>
    <div class="container">
        <div class="header">
            <div class="name">
                <span>Umpad, James Darrel G.</span>
            </div>
        </div>
        <div class="content">
            <div class="left_container">
                <div class="contact">
                    <span class="title">Contact</span>
                    <span class="phone bold">Phone : 09707590534</span>
                    <span class="email bold">Email : jamesdarrelumpad@gmail.com</span>
                </div>
                <div class="technical_skills">
                    <span class="title">Technical Skills</span>
                    <span class="bold">> Installing Computer Systems and Networks</span>
                    <span class="bold">> Configuring Computer Systems and Networks</span>
                    <span class="bold">> Setup Computer Server</span>
                    <span class="bold">> Maintaining Computer Systems and Networks</span>
                </div>
                <div class="programming_skills">
                    <span class="title">Programming Skills</span>
                    <span class="bold">> VueJS</span>
                    <span class="bold">> Vanilla JS</span>
                    <span class="bold">> HTML</span>
                    <span class="bold">> firebase</span>
                    <span class="bold">> API</span>
                </div>
            </div>
            <div class="right_container">
                <div class="personal_statement">
                    <span class="title">Summary Statement</span>
                    <span class="bold">
                        I am Darrel a BSIT student and offering you a service for your innovative company,
                        As an IT student I am confident about my knowledge and skills that i can contribute
                        on your firm, I admire innovation as I admire technology, being part of your organization
                        will be my stepping stone to achieve my grail in life.
                    </span>
                </div>
                <div class="work_experience">
                    <span class="title">Work Experience</span>
                    <span class="bold">No experience yet</span>
                </div>
                <div class="education">
                    <span class="title">Education</span>
                    <span class="bold">
                        Cordova Public College(BSIT)
                    </span>
                    <span class="bold" style="font-weight: lighter;">Gabi Cordova, Cebu</span>
                </div>
                <div class="socials_container">
                    <span class="title" style="margin-left: 10px;">Connect With Me</span>
                    <a href="https://discord.com/users/shadydar">
                        <img class="socials" src="@/assets/images/discord.png" alt="">
                    </a>
                    <a href="https://web.facebook.com/james.darrel.12914">
                        <img class="socials" src="@/assets/images/facebook.png" alt="">
                    </a>
                    <a href="https://www.instagram.com/dardgreed/">
                        <img class="socials" src="@/assets/images/instagram.png" alt="">
                    </a>
                    <a href="https://github.com/DarDGreed">
                        <img class="socials" src="@/assets/images/github.png" alt="">
                    </a>
                    <a href="https://www.linkedin.com/in/james-darrel-umpad-040276288/">
                        <img class="socials" src="@/assets/images/linkedin.png" alt="">
                    </a>
                    <a href="https://www.upwork.com/freelancers/~0108585903ca35f5c1">
                        <img class="socials" src="@/assets/images/upwork.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        <!-- <div class="socials_container">
            <a href="https://discord.com/users/shadydar">
                <img class="socials" src="@/assets/images/discord.png" alt="">
            </a>
            <a href="https://web.facebook.com/james.darrel.12914">
                <img class="socials" src="@/assets/images/facebook.png" alt="">
            </a>
            <a href="https://www.instagram.com/dardgreed/">
                <img class="socials" src="@/assets/images/instagram.png" alt="">
            </a>
            <a href="https://github.com/DarDGreed">
                <img class="socials" src="@/assets/images/github.png" alt="">
            </a>
            <a href="https://www.linkedin.com/in/james-darrel-umpad-040276288/">
                <img class="socials" src="@/assets/images/linkedin.png" alt="">
            </a>
            <a href="https://www.upwork.com/freelancers/~0108585903ca35f5c1">
                <img class="socials" src="@/assets/images/upwork.png" alt="">
            </a>
        </div> -->
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.header{
    display: flex;
    align-items: center;
    justify-content: center;
}
.name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1020px;
    height: 100px;
    background-color: rgb(92, 203, 247);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: white;
    font-weight: bolder;
    font-size: 50px;
}
.content {
    display: flex;
    justify-content: space-between;
    width: 1020px;
    background-color: whitesmoke;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.left_container {
    width: 350px;
}
.title {
    color: rgb(3, 139, 230);
    font-weight: bolder;
    font-size: 27px;
    padding: 10px 0px 10px 0px;
    display: block;
}
.contact {
    display: flex;
    flex-direction: column;
    width: 320px;
    border-radius: 10px;
    background-color: rgb(139, 222, 255);
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 0px 10px 10px;
}
.technical_skills {
    display: flex;
    flex-direction: column;
    width: 320px;
    border-radius: 10px;
    background-color: rgb(139, 222, 255);
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 0px 10px 10px;
}
.programming_skills {
    display: flex;
    flex-direction: column;
    width: 320px;
    border-radius: 10px;
    background-color: rgb(139, 222, 255);
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 0px 10px 10px;
}
.right_container {
    width: 640px;
}
.personal_statement {
    display: flex;
    flex-direction: column;
    width: 600px;
    border-radius: 10px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.work_experience {
    display: flex;
    flex-direction: column;
    width: 600px;
    border-radius: 10px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 0px 10px 10px;
}
.education {
    display: flex;
    flex-direction: column;
    width: 600px;
    border-radius: 10px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 0px 10px 10px;
}
.socials {
    width: 75px;
    margin: 20px 15px 20px 10px;

}
@media only screen and (1024px >= width) {
.name {
    width: 820px;
    height: 80px;
    font-size: 40px;
}
.content {
    width: 820px;
}
.left_container {
    width: 290px;
}
.title {
    font-size: 20px;
    padding: 8px 0px 8px 0px;
}
.bold {
    font-size: 11px;
}
.contact {
    width: 260px;

}
.technical_skills {
    width: 260px;

}
.programming_skills {
    width: 260px;
}
.right_container {
    width: 520px;
}
.personal_statement {
    width: 490px;
}
.work_experience {
    width: 490px;
}
.education {
    width: 490px;
}
.socials {
    width: 55px;
    margin: 10px 10px 10px 10px;
}
}
@media only screen and (768px >= width) {
.name {
    width: 680px;
    height: 70px;
    font-size: 35px;
}
.content {
    width: 680px;
}
.left_container {
    width: 250px;
}
.title {
    font-size: 18px;
    padding: 8px 0px 8px 0px;
}
.bold {
    font-size: 10px;
}
.contact {
    width: 220px;

}
.technical_skills {
    width: 220px;

}
.programming_skills {
    width: 220px;
}
.right_container {
    width: 420px;
}
.personal_statement {
    width: 390px;
}
.work_experience {
    width: 390px;
}
.education {
    width: 390px;
}
.socials {
    width: 40px;
    margin: 10px 10px 10px 10px;
}
}
@media only screen and (600px > width) {
    .name {
    width: 680px;
    height: 70px;
    font-size: 35px;
}
.content {
    width: 680px;
}
.left_container {
    width: 250px;
}
.title {
    font-size: 18px;
    padding: 8px 0px 8px 0px;
}
.bold {
    font-size: 10px;
}
.contact {
    width: 220px;

}
.technical_skills {
    width: 220px;

}
.programming_skills {
    width: 220px;
}
.right_container {
    width: 420px;
}
.personal_statement {
    width: 390px;
}
.work_experience {
    width: 390px;
}
.education {
    width: 390px;
}
.socials {
    width: 40px;
    margin: 10px 10px 10px 10px;
}
}
@media only screen and (425px >= width) {
    .name {
    width: 350px;
    height: 40px;
    font-size: 23px;
}
.content {
    width: 350px;
}
.left_container {
    width: 140px;
}
.title {
    font-size: 10px;
    padding: 5px 0px 5px 0px;
}
.bold {
    font-size: 6px;
}
.contact {
    width: 130px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 0px 5px 5px;
}
.technical_skills {
    width: 130px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 0px 5px 5px;
}
.programming_skills {
    width: 130px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 0px 5px 5px;
}
.right_container {
    width: 200px;
}
.personal_statement {
    width: 170px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 0px 5px 5px;
}
.work_experience {
    width: 170px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 0px 5px 5px;
}
.education {
    width: 170px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 0px 5px 5px;
}
.socials {
    width: 20px;
    margin: 5px 5px 5px 5px;
}
}
@media only screen and (320px >= width) {
.name {
    width: 280px;
    height: 30px;
    font-size: 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.content {
    width: 280px;
}
.left_container {
    width: 110px;
}
.title {
    font-size: 8px;
    padding: 3px 0px 3px 0px;
}
.bold {
    font-size: 4px;
    padding: 3px;
}
.contact {
    width: 95px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 0px 5px 5px;
}
.technical_skills {
    width: 95px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 0px 5px 5px;
}
.programming_skills {
    width: 95px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 0px 5px 5px;
}
.right_container {
    width: 165px;
}
.personal_statement {
    width: 140px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 0px 5px 5px;
}
.work_experience {
    width: 140px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 0px 5px 5px;
}
.education {
    width: 140px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 0px 5px 5px;
}
.socials {
    width: 15px;
    margin: 5px 5px 5px 5px;
}
}
</style>