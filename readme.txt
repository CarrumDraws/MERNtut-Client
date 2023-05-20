"npm i react-redux @reduxjs/toolkit redux-persist react-dropzone dotenv formik yup react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material"

react-redux: State management
@reduxjs/toolkit: Redux Wrapper that makes redux easier. Reccomended
redux-persist: Can store state into local storage
react-dropzone: Handles file upload
dotenv
formik yup: form handling and validation
react-router-dom@6
@mui/material @emotion/react @emotion/styled @mui/icons-material: Material UI stuff

import google fonts

Structure:
Scenes Folder: Our pages
    Widgets Folder: ?
Components Folder: Reusable components
State Folder: Redux/Toolkit Info. Best to keep data seperate.

Fill up the State Folder with Redux state.
In main index.js file, use configureStore and <Provider > as a wrapper to pass state down to children. Incorporate redux-persist as well.

Note: Using .jsx means the file has React Components in them

Optional: make jsconfig.json, set config to simplify import routes.

Add a theme.js file to centeralize colors

Make Navbar Page

Make Login Page

DEPLOYMENT -----
npm i @fvilers/disable-react-devtools

QUESTIONS : 
- What is FormData()?
- Where are the values of the form being stored?

THINGS I LEARNED :
react-redux/redux-persist
    - Instead of storing data directly in localStorage, you can use redux-persist. For sensitive data (like Bearer Token), you should make an API call.
    - Seems that changes to REDUX state rerenders all components. We can use this to make state changes like liking posts work without having to refresh the page.
MUI
    - Styled Components : MUI's method of DRYing up repetitive 
    - Themes : MUI's method of centralizing global values
    - useMediaQuery : MUI's method to aid in Website Dynamic Scaling. Use to resize and change layout dynamically.
yup
    - A library for validating form input. the idea is to create a schema for a "form object" and match the user input with the schema.
Formik
    - A library that ties your form together. It passes you handleFormSubmit function to the form itself, validates with yup schemas, sets initial values. 
Dropzone
    - 