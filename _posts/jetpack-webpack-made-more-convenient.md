---
title: "Jetpack Webpack Made More Convenient"
date: "2019-01-13"
---

???? Jetpack – webpack made more convenient.

**Jetpack wraps webpack** to create a smoother developer experience. Jetpack can be used instead of webpack, webpack-cli, webpack-dev-server and webpack-dev-middleware without writing any configuration. Jetpack is a thin wrapper around webpack, and can be extended with any of the webpack configuration.

- **Sensible defaults** to handle modern JavaScript, CSS and images.
- **Preconfigured Babel** with `@babel/preset-env` and `@babel/preset-react`, configurable via `.babelrc`.
- **Preconfigured PostCSS** with `postcss-preset-env` including autoprefixing, configurable via `postcss.config.js`.
- **CSS modules available** by switching one config flag.
- **Automatic JSX detection** switches between `React.createElement` or `h` depending on dependencies.
- **Hot reloading built in** for React as well as vanilla JavaScript and CSS.
- **Automatic chunk splitting** with inlined runtime and HTML generation.
- **Smooth workflow** for simultaneously developing client and server applications.
- **Single dependency** with hassle-free updates.
- **Run anywhere** without installing locally, just like `nodemon`.

**Why use jetpack?** To avoid rolling your own custom webpack config or having to paste it from old projects. Jetpack has a set of defaults that should get you off the ground quickly. And with the `proxy` config or universal `jetpack/serve` middleware you don't have to worry about wiring up webpack dev middleware or dev server – everything _just works_.

## [](https://github.com/KidkArolis/jetpack#usage)Usage

Install globally or locally:

```javascript
$ npm install -g jetpack
```

In your project with `package.json` or `index.js`, start your app on `http://localhost:3030`:

```javascript
$ jetpack
```

To build the app for production to a `dist` directory:

```javascript
$ jetpack build
```

Inspect the bundle size and make up:

```javascript
$ jetpack inspect
```

## [](https://github.com/KidkArolis/jetpack#use-jetpack-anywhere-anytime)Use jetpack anywhere, anytime

One of jetpack goals is to help you run any piece of JavaScript in a browser as easily as it is to run node scripts. Install jetpack globally and point it to any file on your machine. This is an alternative to jsfiddle / codepen / codesandbox style of hacking on things.

```javascript
$ jetpack ~/Desktop/magic.js
```

Or any project on your machine:

```javascript
$ jetpack --dir ~/projects/manyverse
```

\[ushop\_button\_shortcode\_blog\_wrap btn\_align="text-center"\] \[ushop\_button\_shortcode\_blog btn\_class="github-btn" btn\_text="View on GitHub" btn\_url="https://github.com/KidkArolis/jetpack"\] \[/ushop\_button\_shortcode\_blog\_wrap\]
