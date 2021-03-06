import * as React from "react"
import "../fonts/Montserrat/Montserrat.css";
import "../fonts/Roboto/Roboto.css";
import "./index.scss";
import {Helmet } from "react-helmet";
import {HomeComponent} from "../components/home";
import {Experience} from "../components/experience";
import {Projects} from "../components/projects";
import { Nav } from "../components/nav";
import { Header } from "../components/header";
import { pages } from "../data/pages";


const IndexPage = () => {
    const [selectedPage, changeSelectedPage] = React.useState(pages.HOME);


    const changeSelected = (page) => (e) => {
        e.preventDefault();
        changeSelectedPage(page);
    }


    return (
        <main>
            <Helmet>
                <meta charset="utf-8"/>
                <title>Noah Varghese</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Helmet>
            <Nav changeSelected={changeSelected} selectedPage={selectedPage}/>
            <div id="body">
                <Header />
                {
                    selectedPage === pages.PROJECTS ? (<Projects />) : selectedPage === pages.EXPERIENCE ? (<Experience />) : (<HomeComponent />)  
                }
            </div>
            <footer>
                <div id="footerContent">
                    <p>&#169; Noah Varghese 2021</p>
                </div>
            </footer>
        </main>
    );
}

export default IndexPage
