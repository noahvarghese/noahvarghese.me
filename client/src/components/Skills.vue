<template>
<div id="skillsContainer" class="rightFloat">
            <div id="technicalSkills">
                <h3>Technial Skills</h3>
                <ul>
                    <li>Proficient in:</li>
                    <ul>
                        <li>Object Oriented Programming</li>
                        <li>Test Driven Development</li>
                        <li>Behaviour Driven Development</li>
                        <li>Test Automation</li>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>C#</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>Cucumber</li>
                        <li>Linux</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>SQL</li>
                    </ul>
                    <li>Conversant in:</li>
                    <ul>
                        <li>PHP</li>
                        <li>Bash</li>
                        <li>SASS</li>
                        <li>AWS</li>
                        <li>Python</li>
                    </ul>
                </ul>
            </div>
            <div id="interpersonalSkills">
                <h3>Interpersonal Skills</h3>
                <ul>
                    <li>Leadership</li>
                    <li>Time Management</li>
                    <li>Teamwork</li>
                    <li>Communication</li>
                    <li>Organization</li>
                </ul>
            </div>
        </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: "Skills"
    });
</script>

<style lang="scss">
li {
    list-style-type: disc;
    line-height: 3rem;
}
</style>