---
title: "Build a Hotel Listing React App with TripFinder Template"
date: "2020-02-13"
category: "Theme, Article"
excerpt: "React Next can be implemented for making a Hotel template. Today we will talk about such a Template which is based on React Next and solely developed keeping mind Hotel. So let us start the article. TripFinder - React Hotel Listing Template TripFinder is the fastest template built with React, NextJS, Context API, & Styled-Components."
coverImage: "https://d2qklehrvrfpx7.cloudfront.net/blogimages/TripFinder.png"
ogImage:
  url: "https://d2qklehrvrfpx7.cloudfront.net/blogimages/TripFinder.png"
---

React Next can be implemented for making a Hotel template. Today we will talk about such a Template which is based on React Next and solely developed keeping mind Hotel. So let us start the article.

[![cartsy-banner](https://d2qklehrvrfpx7.cloudfront.net/blogimages/cartsy-banner.jpg)](https://bit.ly/cartsyTheme)

## TripFinder - React Hotel Listing Template

![TripFinder](https://d2qklehrvrfpx7.cloudfront.net/blogimages/TripFinder-2.jpg)

TripFinder is the fastest template built with React, NextJS, Context API, & Styled-Components. It is very easy to use, comes with beautiful ready-made components. Build your amazing react app with this template. Both Create React App, and Next Js versions are available.

### **Features:**

- React.Js, React Context, React Hooks, React Router, Built with Create React App
- Next.Js, Separate Next.Js implementation
- Monorepo supported with Lerna configuration
- Can be used without Monorepo
- Beautiful ready-made components for your App
- Search Components, Hotel listing
- Glide, Ant design, Google Map, Map Marker
- User Profile, Post Submission, Mobile Friendly design

<a href="http://bit.ly/2H8xSGO" class="btn">View Template</a>

## Technology Used in TripFinder

### Monorepo

The idea behind a monorepo is to store all code in a single version control system (VCS) repository. The alternative, of course, is to store code split into many different VCS repositories, usually on a service/application/library basis.

Check the below link if you want to learn more about yarn workspaces.

1. [Introducing-workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

2. [Workspaces](https://yarnpkg.com/en/docs/workspaces).

### **Why developer use monorepo**

1. To store all code in a single version control system (VCS) repository,

2. Easier collaboration and code sharing,

3. Code refactors are easy/atomic commits.

### Technology Credits

#### _**For TripFinder \[ Hotel-CRA \]**_

- Create React App
- React
- React Router 5
- React Hooks
- React Context API
- Ant Design
- Google Map
- Styled Components .... etc.

#### _**For TripFinder \[ Hotel-Next (SSR) \]**_

- Create Next App
- React
- Next.Js
- React Hooks
- Context API
- Ant Design
- React Router 5
- Formik
- Google Map .... etc.

## Now step by step process to make React Next Hotel App

### Installation

**Installation Process**

- Install node & npm
- Install yarn
- Install packages & dependencies

TripFinder is based on Create React App and Create Next App. It would be better if you can check their website too. There are lot of tricks that can help your app, like API connection, Deployment, etc.

[https://create-react-app.dev](https://create-react-app.dev/) (for hotel cra).

[https://nextjs.org](https://nextjs.org/) (for hotel next).

**Installing Node & NPM:**

To work with `TripFinder` the first thing you need is to have a stable [Node](https://nodejs.org/en/) version install on your system. To make sure you have already Node.Js installed on your system you may follow the below instructions:-

As Node will make sure you have node and npm commands are available via command line, just run the below command on your terminal.

```
node -v

npm -v
```

Note that if you find the npm version less than 5.0.0 you need to update it to the latest version using the below command. You may need to use `sudo` to grant permission.

```
npm install npm@latest -g

or

sudo npm install npm@latest -g
```

**Installing YARN:**

You will need to Install [Yarn](https://www.gitbook.com/book/redq/isomorphic/edit#) for Fast, Reliable, and Secure Dependency Management. Before you start using [Yarn](https://yarnpkg.com/lang/en/docs/install/), you'll first need to install it on your system. And to make sure it running on your system with the latest version run the below command

```
yarn --version
```

**Installing Packages & Dependencies :**

This Product is based on monorepo structure. To provide easy access to different item developer provides some command line scripts, to begin with

```
$ yarn
```

**NB: make sure you use yarn for installing packages, dependencies and running script.**

**Run the project in dev mode:**

To run all the item at the same time:

```
$ yarn start:all
```

Which is start development version of every item on a different port:

```
hotel: at localhost:3000
hotel-next: at localhost:3001
etc.
```

To Run Individual Item: (ex: hotel / hotel-next)

```
$ yarn start:hotel


$ yarn start:hotel-next
```

For other scripts just follow this:

```
"scripts": {
    "clean": "lerna clean --yes && rimraf node_modules",
    "clean:build": "lerna exec -- rimraf \"{.next,dist,out,build,.docz}\"",
    "start:all": "lerna run --parallel start",
    "start:hotel": "yarn workspace hotel run start",
    "start:hotel-next": "yarn workspace hotel-next run dev",
    "build:hotel": "yarn workspace hotel run build",
    "build:hotel-next": "yarn workspace hotel-next run build",
    "serve:hotel": "yarn workspace hotel run serve",
    "serve:hotel-next": "yarn workspace hotel-next run serve"
  },
```

**Google Map API Key:**

**For Hotel version:**

First, go to .env file, Put your google map API key inside this code

```
REACT_APP_GOOGLE_MAP_API_KEY=https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_MAP_API_KEY&libraries=geometry,drawing,placesyou need to put your google map api key between &key= and &libraries=geometry like this
```

place your map API key in place of

```
YOUR_GOOGLE_MAP_API_KEY
```

**For Hotel Next version:**

go to next.config.json then change the highlighted code

```
YOUR_GOOGLE_MAP_API_KEY
```

with your google map API key

![map_import](/assets/blog/images/map_import.png)

## Folder Structure: (Monorepo Structure using Lerna and yarn workspace)

### Top-Level Folders:

![Top Level Folder](/assets/blog/images/Top-Level-Folder.png)

### Project within packages (hotel):

![Project within packages](/assets/blog/images/Project-within-packages.png)

### Project's src:

![Project's src](/assets/blog/images/Projects-src.png)

## Data Provider

### To get your require data from a rest end-point use useDataApi hook as

```
import useDataApi from '../hooks/useDataApi';

const Posts = () => {
  const { data, error, loading } = useDataApi('url');
  if (!data || loading) {
    return <div>Loading...</div>;
  };
  if (error) {
    return <div>Error! {error.message}</div>;
  };

  return (
    <ul>
      {data.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
```

this hook also accepts limit as the second parameter and many more you can add into it according to your requirements.

```
import { useState, useReducer, useEffect } from 'react';

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function SuperFetch(
  url,
  method = 'GET',
  headers = {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  body = {}
) {
  await sleep(2000); // demo purpose only
  let options = {
    method,
    headers,
  };
  if (method === 'POST' || method === 'PUT') options = { ...options, body };

  // authentication
  // we will had custom headers here.

  return fetch(url, options)
    .then(res => {
      return Promise.resolve(res.json());
    })
    .catch(error => Promise.reject(error));
}
function dataFetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload.slice(0, state.limit),
        total: action.payload,
        loading: false,
        error: false,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'LOAD_MORE':
      return {
        ...state,
        data: [
          ...state.data,
          ...state.total.slice(
            state.data.length,
            state.data.length + state.limit
          ),
        ],
        loading: false,
        error: false,
      };
    default:
      throw new Error();
  }
}

const useDataApi = (initialUrl, limit = 12, initialData = []) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    loading: false,
    error: false,
    data: initialData,
    total: initialData,
    limit: limit,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await SuperFetch(url);
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);
  const loadMoreData = () => {
    // dispatch({ type: 'FETCH_INIT' });
    dispatch({ type: 'LOAD_MORE' });
  };
  const doFetch = url => {
    setUrl(url);
  };

  return { ...state, doFetch, loadMoreData };
};

export default useDataApi;
```

## Authentication Provider

In this chapter the authentication process with pseudocode will be demoed here.

At first create a react context for the authentication and export it as we will used the AuthContext in multiple places inside the containers, components.

export const AuthContext = React.createContext();

### Then you will have to build the AuthProvider component.

const fakeUserData = {

id: 1, name: 'Jhon Doe', avatar: '', roles: \['USER', 'ADMIN'\], };/\*\* \* We have used Fake JWT token from "jwt.io" \* This is a sample token to show auth is working \* Your token will come from your server when user successfully loggedIn.

\*/

const fakeToken = 'FAKE-JWT-TOKEN-CODE';

const addItem = (key, value = '') => {};

const clearItem = key => {};

const isValidToken = () => {};

const AuthProvider = props => {

const \[loggedIn, setLoggedIn\] = useState(isValidToken()); const \[user, setUser\] = useState(null); const \[token, setToken\] = useState(null);

**Auth. Provider**

const signIn = params => {} const signUp = params => {}; /\*\* \* For 3rd-party Authentication \[e.g. Auth0, firebase, AWS etc \]

\* \*/ const tokenAuth = (token, user = {}) => {}; const forgetPass = params => {}; const changePass = params => {}; const logOut = () => {};

return (

<AuthContext.Provider

value={{

loggedIn, logOut, signIn, signUp, forgetPass, changePass, tokenAuth, }} >

<>{props.children}</> </AuthContext.Provider> ); };export default AuthProvider;

In the code mentioned above, the AuthProvider is build up. All the authentication related functions loggedIn, logOut, signIn ,signUp , forgetPass , changePass, tokenAuth are passing through the AuthContext.

### \*\*\*\*\*\* Example Usages \*\*\*\*\*\*

_**How to use AuthContext in the Login component ??**_

Suppose you need to create a login page for the users. But how to use the AuthProvider??

- At create a login form wrapper component using Formik via the initial values & validation schema.

**Auth. Provider**

// pseudocode
import { Formik } from 'formik'; import \* as Yup from 'yup';
const initialValues = {
email: '', password: '', rememberMe: false, };const getLoginValidationSchema = () => {
return Yup.object().shape({
email: Yup.string()
.email('Invalid email') .required('Email is Required!'), password: Yup.string()
.min(6, 'Password has to be longer than 6 characters!') .max(20, 'Too Long!') .required('Password is required!'), }); };export default () => {
return (
<Formik
initialValues={initialValues} onSubmit={handleSubmit} render={RenderSignInForm} validationSchema={getLoginValidationSchema} /> ); };

- Then Create the login form

`` `// pseudocode` ``

**Auth. Provider**

const RenderBasicInfoForm = props => {
const { values, submitCount, handleSubmit } = props; return (
<FormWrapper>

<Form onSubmit={handleSubmit}>
<Field
component={AntInput} name="email" type="text" size="large" placeholder="Email" submitCount={submitCount} value={values.email} hasFeedback /> <Field
component={AntInput} name="password" type="password" size="large" placeholder="Password" value={values.password} submitCount={submitCount} hasFeedback /> <FieldWrapper className="field-container">
<SwitchWrapper>
<Field
component={AntSwitch} name="rememberMe" submitCount={submitCount} value={values.rememberMe} /> <Label>Remember Me</Label> </SwitchWrapper> <Link to={FORGET\_PASSWORD\_PAGE}>Forget Password ?</Lin k>
</FieldWrapper>

**Auth. Provider**

<Button
className="signin-btn" type="primary" htmlType="submit" size="large" style={{ width: '100%' }} >
<MdLockOpen /> Login </Button> </Form> </FormWrapper> ); };export default RenderBasicInfoForm;

1. Your login form is created, now connect the sign in form wrapper component

\[on step 1\] with the _AuthProvider!_

// pseudocode

import { AuthContext } from '../../context/AuthProvider'; import { Formik } from 'formik'; import \* as Yup from 'yup'; import { Redirect } from 'react-router-dom';
export default () => {
const { signIn, loggedIn } = useContext(AuthContext); if (loggedIn) return <Redirect to={{ pathname: '/' }} />; const handleSubmit = formProps => {
signIn(formProps); }; return (
<Formik
initialValues={initialValues} onSubmit={handleSubmit} render={RenderSignInForm} validationSchema={getLoginValidationSchema} /> ); };

You can see that we are using **\*useContext** \_hook here. Using that hook we manipulate the values/functions from the\* **AuthContext.**

## _**How to use AuthProvider in where some components need to use this?**_

Suppose you need to display a post grid on a page for the user, where it's for the authenticate users only. Then wrap that post grid using the AuthProvider.

Auth. Provider
// pseudocode
import AuthProvider from 'AUTH-PROVIDER-IMPORT-PATH';
export default function DisplayPosts(props) {
return (
<DisplayPostsPage> <AuthProvider> . . . Your components will be here... . . </AuthProvider> </DisplayPostsPage> ); }

That's the overall process of how you can use the **_AuthProvider_** and **_AuthContext_** in isomorphic-hotel projects.
