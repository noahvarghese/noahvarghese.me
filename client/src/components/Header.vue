<template>
  <div id="header">
    <div id="headerText">
      <h1>Noah Varghese</h1>
      <h2>Software Developer</h2>
      <div id="links">
        <ul>
            <li>
                <img alt="location" src="@/assets/home.png"/>
                <a href="https://maps.google.com/?q=Oakville Ontario Canada" target="_blank">Oakville ON, Canada</a>
            </li>
            <li>
                <img alt="GitHub Logo" src="@/assets/github.png"/>
                <a href="https://github.com/noahvarghese" target="_blank">GitHub.com/noahvarghese</a>
            </li>
            <li>
                <img alt="LinkedIn Logo" src="@/assets/linkedin.png"/>
                <a href="https://linkedin.com/in/varghese-noah" target="_blank">LinkedIn.com/in/varghese-noah</a>
            </li>
            <li>
                <img alt="Envelope representing email" src="@/assets/email.png"/>
                <a href="mailto:varghese.noah@gmail.com" target="_blank">varghese.noah@gmail.com</a>
            </li>
            <li>
                <img alt="World wide web" src="@/assets/www.png"/>
                <a href="https://noahvarghese.me" target="_blank">noahvarghese.me</a>
            </li>
        </ul>
      </div>
    </div>
    <div id="picture">
      <img src="@/assets/me.png" alt="Me smiling making coffee"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Header"
});
</script>

<style lang="scss">
    #header {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;

        & > #headerText {
            & > h1, & > h2 {
                line-height: 0.75rem;
            }

            & > #links {
                margin-top: 3rem;
                ul {
                    padding: 0;
                    padding-left: 1rem;
                    border-left: 3px solid black;
                    height: 14rem;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: no-wrap;
                    align-items: flex-start;
                    justify-content: space-evenly;
                    
                    & > li {
                        width: 23rem;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: no-wrap;
                        align-items: center;
                        justify-content: space-between;

                        & > img {
                            height: auto;
                            width: 2rem;
                        }

                        & > a {
                            width: 20rem;
                            padding-left: 2rem;
                        }
                    }
                }
                width: 100%;
            }
        }
    }

</style>