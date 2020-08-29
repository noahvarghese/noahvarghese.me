<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Noah" src="https://noahvarghese.me/favicon.ico" width="60" />
  </a>
</p>
<h1 align="center">
  My Portfolio Site
</h1>

Kick off your portfolio with this boilerplate. This uses Gatsby to get up and running blazing fast with the blazing fast app generator for React.

## 🚀 Quick start

1.  **Use as your own template**

    Clone this repository

    ```shell
    # create a new portfolio site using noahvarghese.me
    git clone https://github.com/noahvarghese/noahvarghese.me
    ```

1.  **Install npm packages**

    Navigate into your new site’s directory and install npm dependencies.

    ```shell
    cd noahvarghese.me/
    npm i
    ```
    
1. **Start developing**
    Start it up!

    ```shell
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `noahvarghese.me` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

1. **Replace with your own projects!**
    
    Remove existing projects in src/markdown-pages/
    
    Add your own projects by creating markdown files, filling in these fields in the frontmatter;
    
    slug: {slug}
    date: [some date]
    title: [some title]
    image: [path to image]
    techStack:
      - [language 1]
      - [language 2] 
    description: [some text]
    
1. **Use your own email service to sonfigure the contact form**
    Replace post destination in src/components/ContactForm.js with your own email API

## 💫 Deploy
  Choose a hosting provider
  Can change .travis.yml to configure for your build, be sure to follow https://docs.travis-ci.com/ 
  Or manually upload to server, use gatsby build, and then copy the contents of the public directory to your server
