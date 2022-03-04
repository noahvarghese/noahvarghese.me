import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import { Nav } from "../components/nav";

const NotFoundPage = () => {
    return (
        <>
            <header>
                <Helmet>
                    <meta charset="utf-8" />
                    <title>Noah Varghese &middot; 404</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    ></meta>
                </Helmet>
                <Nav />
            </header>
            <main
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                    }}
                >
                    <h1>Page not found</h1>
                    <p>
                        Sorry{" "}
                        <span role="img" aria-label="Pensive emoji">
                            😔
                        </span>{" "}
                        we couldn’t find what you were looking for.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default NotFoundPage;
