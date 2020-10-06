---
title: "FBT An Internationalization Framework"
date: "2019-01-13"
---

A JavaScript Internationalization Framework [https://facebookincubator.github.io/fbt](https://facebookincubator.github.io/fbt)

## FBT

FBT is an internationalization framework for JavaScript designed to be both powerful and flexible, but also simple and intuitive. It helps with the following:

- Organizing your source text for translation
- Composing grammatically correct translatable UI
- Eliminating verbose boilerplate for generating UI

### [](https://github.com/facebookincubator/fbt#examples)Examples

[See our demo here](https://github.com/facebookincubator/fbt/blob/master/demo-app/src/example/Example.react.js)

### [](https://github.com/facebookincubator/fbt#requirements)Requirements

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Babel](https://babeljs.io/)

### [](https://github.com/facebookincubator/fbt#building-fbt)Building fbt

```javascript
git clone git@github.com:facebookincubator/fbt.git
cd fbt
yarn install
```

### [](https://github.com/facebookincubator/fbt#installing-fbt)Installing fbt

We will make the transform and runtime installable as an npm package soon. Until then, See how to use the source directly with Babel and Webpack in our demo-app:

```javascript
cd demo-app # from fbt repo
yarn install
yarn manifest
yarn collect-fbts
yarn translate-fbts
yarn start
```

#### [](https://github.com/facebookincubator/fbt#how-fbt-works)How FBT works

FBT works by transforming your `<fbt>` and `fbt(...)` constructs via Babel plugins. These plugins serve to extract strings from source and lookup translate payloads generated at build-time. FBT creates tables of all possible variations for the given fbt phrase and accesses this at runtime.

#### [](https://github.com/facebookincubator/fbt#full-documentation)Full documentation

[https://facebookincubator.github.io/fbt](https://facebookincubator.github.io/fbt)

\[ushop\_button\_shortcode\_blog\_wrap btn\_align="text-center"\] \[ushop\_button\_shortcode\_blog btn\_class="github-btn" btn\_text="View on GitHub" btn\_url="https://github.com/facebookincubator/fbt"\] \[/ushop\_button\_shortcode\_blog\_wrap\]
