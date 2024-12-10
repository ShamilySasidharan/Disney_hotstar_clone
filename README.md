- Create App
    > npx create-react-app disney_ui_clone
- Configured the tailwind
    > tailwind docs > Framework and guides > create react app
- Created the component folder inside the src
- created the Login,Header,Browse page
- Done routing the app.js file 
- Checked the routing
- created the redux store and added the user
- done validation
- done authentication
- unsubscribe to the store
- fetched TMDB movies and created a movieSlice and store inside the redux store


# Building
- Building the routing inside the `app.js` 
    - installed: npm i -D react-router-dom 
    - provide the appRouter to the RouterProvider 
- creation of the header page 
- creation of the landing login page
- Creation of toggle feature: for signup and login
- Creation of  validation form 
- firebase setup and auth
- enable authentication in firebase app 
    build > authentication > sign-in methods  if you want another provider there is new provider option is there
- TMDB api for movies

    # Browse page creation
    - browse page have two components
    
    - # main conatainer with videoBackground
        - with videoTitle and other details
        - made the trailer preview and other details, done some css
        - create the trailer in movieSlice, made the fetch call and got the trailer, put in store and subscribed to the store to get the trailer
        - create custom hooks for the trailer and now playing movies
        - done the css using the trailer
        - main component is done with styling
    - # secondary container
        - with Movielist and movie card the secondary container will act as a parent and props to the children
        - created additional movieDetails page 
        - so when a card is clicked it should take to movie details page 
    
    
    # Search page 
    - created a search bar and btn
    - created a select option and add the multilingual selection 
         - connecting with the search bar, btn with the option 
                - first create a slice for change language 
                - then click an on click function in the select option and track the event using the a fucntion
                - and dispatch an action to store the event
                - then subscribe to the store and display 
                - note :- important to pass them as langConst[languageOption] otherwise error (need square bracket )
        - created a normal search movie fetch without anyones help 
        - the issue : the fetch api is not fetching the movies for the query and is working  when changed to

         const promise = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e699b2b72bc7f99d37d920089a4bf613&query=${query}`)
      
      # gpt integration
      profile>api key
      - copy the open ai key and paste it in the const file
      - then create a openAi.js file in const and copy the code for openAi basically initialisation/auth of open ai
      


# Authentication
- using the firebase authentications
- follow the steps add the sdk in utils > firebase.js file
- VERY IMPORTANT TO WRITE THE PUBLIC FOLDER OF THE FIREBASE AS "build"
- Basically telling the firebase to use this folder for the deployment
- Done the signup sign in and signout  authentication
- used onAuthStateChanged for the track the change in the state of the authentication, whenever the user signin,signup or signout this function is  called and is always better to write in one place(app.js)
- updated the store with the user name and photoURL and dispatch an action to store in redux store
- updated the signout feature signout btn show only when the 


# Redux store
- User
- created the appStore
- created the userSlice
- provide to the appStore
- provide to the whole store, in app.js we are already using the dispatch function so we are calling the dispatch before providing to the app as a result we need to provide them to the root level that is index.js

- Movies
- created a movie slice
- provide to the store 
- confirmed it by checking the redux store
 
  # custom hook
   - useNowPlayingMovies.js - created a custom hook for the movieSlice and called the function in browse page
   - usePopularMovies.js 
   - useTopRatedMovies.js
   - useTrailerOfMovies.js
   - useUpcomingMovies.js
   - useSearch.js

# Bugfix
- redirection issues solved by placeing the onAuthStateChange in header.js file
- fixed the signout display, show's only when the user is logged in 

# TMDB
- first need to signup and provide the details to create a key and access token
- then go to the tmdb docs > api reference > movie list
- choose the language (JS) and copy the options to the constants 
- in browse fetch the movies using the fetch api 
- call the function inside the useEffect function





