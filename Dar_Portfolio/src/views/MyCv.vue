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
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
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
        padding: 10px 0px 10px 10px;
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
</style>