# NC Knews

## Northcoders News

NC Knews is a news single page webapp, built with React. It pulls data from the NC Knews API [API]**https://tranquil-lake-37102.herokuapp.com/api** to display articles, users and comments. Users can login to post articles and comments, and upvote/downvote them after reading. The repository for the back end API is here [Repository]**https://github.com/AlexKman/BE2_NC_Knews/** . This front end repository is hosted on [FrontEnd]**https://youthful-shockley-af9891.netlify.com/**

## Using the site

On loading of the page you will receive a list of usernames which can then be chosen to login with. After logging you can view a list of topics which lead to a list of articles for the given topic. The list of articles also have the option to view all comments, upload your own articles and upload your own comments.

## Available users

```
  tickle122
  grumpy19
  happyamy2016
  cooljmessy
  weegempbump
  jessjelly
```

On login, you'll now be free to post your own articles or comment on existing ones. You can access these articles through the topics or the articles section.

When posting a new article, you must first select an existing topic from coding, cooking or football. After that, you're free to enter your article's headline and body, and hit post! Following which your article will be live on the site and ready to view.

When viewing an article's page, you may want to read its comments or add one of your own! This is easily done in the add comment section. Voting is available on both articles and comments.

## Getting started locally

To get your own local copy of the site running, fork and clone this repo into your local machine.
Once cloned, navigate to the repo folder in your terminal and run
`npm install`.

### Project Dependencies

The site is built with the latest version of React, 16.8.0, and uses Hooks which are a feature of this version, so at a minimum you must be running React and React-DOM 16.8.0, and React-Scripts at ^2.1.3.

The site also has the following dependencies

```js
"@reach/router": "^1.2.1"
"axios": "^0.18.0"
```

## Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in its development mode development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Built with

[Create React App](https://github.com/facebook/create-react-app) - To bootstrap the app and streamline the creation process.
[Axios](https://www.npmjs.com/package/axios) - Sends requests to the backend API.
[Reach/Router](https://github.com/reach/router) - Routing system used throughout the site.

## Authors

- AlexKMan - [Github](https://github.com/AlexKMan)

## Acknowledgments

- Northcoders
