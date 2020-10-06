---
title: "Build an Admin Dashboard Using React & GraphQL"
date: "2020-02-19"
---

\[vc_row\]\[vc_column\]\[vc_column_text\]Inst is a Minimalist React Dashboard built with React, NextJS, TypeScript, GraphQL & Uber’s Base UI. It is very easy to use; GraphQL and TypeGraphQL are implemented. Inst is a Next.js GraphQL powered admin dashboard. Used progressive web application pattern, highly optimized for your next react application. You can use it for both Dashboard and Public pages for your web applications. Available in both Light and Dark mode. To activate the Dark mode, Click on the profile image at the right corner, and you will find the ‘Dark Mode’ in Drop-down. Note: Please note that, This is not an HTML template. It is a React Dashboard template built using Next.js Framework. P.S. Design inspiration was taken from Now.sh

## Inst - React GraphQL Admin Dashboard Template

![](/assets/blog/images/Inst.jpg)

\[ushop_button_shortcode_blog_wrap btn_align="text-center"\]\[ushop_button_shortcode_blog btn_class="download-btn" btn_text="View Demo" btn_url="http://bit.ly/2HAY2m7"\]\[/ushop\_button\_shortcode\_blog\_wrap\]

### Built with

\- Next JS, React Apollo and GraphQL are used.

- All components are written in TypeScript.
- Monorepo Supported with Lerna Configuration.
- SSR support for building highly scalable apps.
- Uber's BaseUi
- React Big Calendar

\[/vc_column_text\]\[vc_column_text\]

### Stack Used by Developer

\- Lerna (A tool for managing JavaScript projects with multiple packages. https://lernajs.io)

- Yarn Work-space
- React Js and Next Js
- TypeScript
- GraphQL
- TypeGraphQL
- Baseweb design for UI components. https://v9-50-0.baseweb.design/
- Now Deployment

\[/vc_column_text\]\[vc_column_text\]

### Template Features

- Create Next App, React Hooks, React Context
- BaseUI Design, Next.Js, Next Optimized Image
- Glide.Js for Slider, TypeScript, Apollo Client
- GraphQL, TypeGraphQL, Styletron
- Comes with both Dark & Light Mode
- Charts, User Profile, ToDo
- Github Search, Firebase CRUD, Product Hunt
- Shop Page, Checkout Page, Invoice
- Pricing Plan, Billing, Authorized Applications

\[ushop_button_shortcode_blog_wrap btn_align="text-center"\]\[ushop_button_shortcode_blog btn_class="download-btn" btn_text="Buy Theme" btn_url="http://bit.ly/2vC7Edz"\]\[/ushop\_button\_shortcode\_blog\_wrap\]

## Getting Started

After downloading the file from Themeforest, You will find inst.zip file. Unzip the inst.zip and run the following commands on inst folder to get started with the project.

yarn

\[/vc_column_text\]\[vc_column_text\]

//For starting dev server run
yarn dev

\[/vc_column_text\]\[vc_column_text\] **NOTE:** Before start the project add your config credentials in next.config.js file\[/vc_column_text\]\[vc_column_text\]

env: {
APOLLO_CLIENT_URL: 'http://localhost:4000/graphql',
APOLLO_GITHUB_CLIENT_URL: 'https://api.github.com/graphql',
APOLLO_PRODUCT_HUNT_CLIENT_URL:
'https://api.producthunt.com/v2/api/graphql',
GITHUB_AUTH_TOKEN: 'your_github_auth_token',
PRODUCT_HUNT_AUTH_TOKEN: 'your_product_hunt_auth_token',
FIREBASE_API_KEY: 'your_firebase_api_key',
FIREBASE_AUTH_DOMAIN: 'your_firebase_auth_domain',
FIREBASE_DATABASE_URL: 'your_firebase_database_url',
FIREBASE_PROJECT_ID: 'your_firebase_project_id',
FIREBASE_STORAGE_BUCKET: 'your_firebase_storage_bucket',
FIREBASE_MESSAGING_SENDER_ID: 'your_firebase_messaging_sender_id',
FIREBASE_APP_ID: 'your_firebase_app_id',
FIREBASE_MEASUREMENT_ID: 'your_firebase_measurement_id',
},

\[/vc_column_text\]\[vc_column_text\]

### Folder Structure

/api
/src
/data
/services
/dashboard
/integration
/invoice
/product
/profile
/frontend
/apollo
/assets
/components
/containers
/contexts
/data \[ui elements api data\]
/firebase
/pages
/types
/utils

\[/vc_column_text\]\[vc_column_text\]

### Routes

/
/apps
/todo
/firebase-crud
/invoice
/\[id\]
/add
/github
/product-hunt
/shop
/\[slug\]
/checkout
/charts
/area
/column
/bar
/mixed
/pie
/radar
/product-view
/cash-flow
/forms
/hook-form
/uielements
/page-title
/widget-card
/carousel
/cart-product
/instagram-card
/product-card
/pricing-card
/listgrid-card
/pricing
/profile
/settings
/password
/billing
/applications
/login
/signup
/terms
/privacy

\[/vc_column_text\]\[vc_column_text\]

### Explaining Containers

In the _containers_ directory you will get folder for _Calendar_, _Crud_, _Formik_, _HookForm\[React hook form\]_, _Posts_, _Shop_, _Todo_ and _Widgets_.

All of these containers contain regular reactjs code.

### Deployment

Developer has provided now.sh deployment support by default. Follow below instruction.

**now.sh**

Developer has given now.sh deployment by default. For hosting the project in now.sh.

1. Add your production credentials on _next.config.js_
2. first you have to go _api_ folder and run _now_

$ cd api/
$ now

\[/vc_column_text\]\[vc_column_text\]

3. After deploying api you will get a url from now. You have to put that url in the

_/frontend/next.config.js APOLLO_CLIENT_URL_.

4. Now go to _frontend_ folder and run _now_

$ cd frontend/
$ now

\[/vc_column_text\]\[vc_column_text\]**Note:** Make sure you have _now-cli_ installed in your system.\[/vc_column_text\]\[/vc_column\]\[/vc_row\]
