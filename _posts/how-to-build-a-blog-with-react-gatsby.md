---
title: "How to Build a Blog with React Gatsby Using StoryHub"
date: "2020-02-27"
---

\[vc_row\]\[vc_column\]\[vc_column_text\]Nowadays, React Gatsby is implemented to make blog related template. And it is becoming a trend. So today, we will discuss a blog template entirely based on React Gatsby. We will try to make you understand the complete implementation of this blog template. So let us start the article.

## StoryHub - React Gatsby Blog Template

![StoryHub](/assets/blog/images/StoryHub.jpg "StoryHub")

StoryHub is a blog template powered by React & GatsbyJS. It’s an entirely functional static blog template. It’s swift, optimized for quick render. SEO friendly, complete markdown format supported. You will able to host it anywhere like GitHub, s3, now.sh, etc. It’s straightforward to use, and it provides better performance than WordPress. RedQ Inc. is the developer of this template who created reusable react components and modern monorepo architecture so that you can build multiple apps with standard components.

\[ushop_button_shortcode_blog_wrap btn_align="text-center"\] \[ushop_button_shortcode_blog btn_class="demo-btn" btn_text="View Demo" btn_url="http://bit.ly/2qjgs5h"\] \[/ushop_button_shortcode_blog_wrap\]

### Developed with React, Typescript a Gatsby JS.

Boot your server-side rendering landing page in minutes.

- Gatsby blog starter.
- All components are written in Typescript.
- Monorepo Supported with Lerna Configuration.
- Reusable components across different blog templates.
- Styled System and Style Components are used.

## Hosting & Deployment

### Getting your shiny new Gatsby site deployed within minutes

- Firebase
- Netlify
- AWS
- Github
- Zeit Now
- Amazon S3

### **Template Features:**

- Js Gatsby, TS Typescript, Monorepo Support
- Instagram Feed, SEO Friendly, MailChimp Integration,
- Built-in Components, Disqus Integration, Fast performance

## Step By Step Process to utilize the blog template

### **\*\*How to Configure / How to Install \*\***

This template has 5 different Blog demos. They are

1. [**Agency Blog**](https://storyhub-agency-tarex.redq.now.sh/)![Agency](/assets/blog/images/Agency.jpg)
2. [**Personal Blog**](https://storyhub-personal-tarex.redq.now.sh/)![Personal](/assets/blog/images/Personal.jpg)
3. [**Personal Blog minimal**](https://storyhub-minimal-tarex.redq.now.sh/)![Personal minimal](/assets/blog/images/Personal-minimal.jpg)
4. [**Image Blog**](https://storyhub-image-tarex.redq.now.sh/)![Image](/assets/blog/images/Image.png)
5. [**Minimal Photography Blog**](https://storyhub-minimal-photography-tarex.redq.now.sh/)![Minimal Photography](/assets/blog/images/Minimal-Photography.jpg)



After downloading the file from ThemeForest, You will find the StoryHub zip file. Then unzip StoryHub.zip file and run the following commands.

### **\*\*If you want to run Agency Blog on Gatsby Js server, then\*\***

1. yarn on Storyhub folder.
2. yarn agency-dev on Storyhub folder.

Then, please go to address localhost:8000 on your browser and You will find Agency blog. Similarly,

### **\*\*If you want to run Personal Blog on Gatsby Js server, then\*\***

1. yarn on Storyhub folder.
2. yarn personal-dev on Storyhub folder.

Then, please go to address localhost:8000 on your browser and You will find the personal blog.

### **\*\*If you want to run Personal Blog Minimal on Gatsby Js server, then\*\***

1. yarn on Storyhub folder.
2. yarn minimal-dev on Storyhub folder.

Then, please go to address localhost:8000 on your browser and You will find personal blog minimal demo.

### **\*\*If you want to run Image Blog on Gatsby Js server, then\*\***

1. yarn on Storyhub folder.
2. yarn image-dev on Storyhub folder.

Then, please go to address localhost:8000 on your browser and You will find Image blog.

### **\*\*If you want to run Minimal Photography blog on Gatsby Js server, then\*\***

1. yarn on Storyhub folder.
2. yarn photography-dev on Storyhub folder.

Then, please go to address localhost:8000 on your browser and You will find Minimal Photography blog.

### **\*\*If you want to run Personal blog lite-on Gatsby Js server, then\*\***

1. yarn on Storyhub folder.
2. yarn lite-dev on Storyhub folder.

Then, please go to address localhost:8000 on your browser and You will find Minimal Photography blog.

### **\*\*Stack Used By the developer\*\***

1. Lerna (A tool for managing JavaScript projects with multiple packages. https://lernajs.io)
2. Yarn Workspace.
3. React Js.
4. Typescript.
5. Gatsby Js.
6. GraphQl.
7. Styled System and Styled Components

### **\*\*Folder Structure\*\***

Go to StoryHub - > packages folder.

After entering to packages folder, You will find some other folders.

1. agency-blog
2. components
3. personal-blog-minimal
4. personal-blog
5. image-blog
6. Minimal-photography
7. Minimal-photography-blog
8. Personal-blog-lite

### **\*\*components\*\***

If you are familiar with react architecture, then you are familiar with components. Components are reusable codes that you will use throughout your project. Here in the components folder, developers wrote some custom components which are used in the Blog templates. All the codes are written in Typescript. Developers have styled their components with the styled-components. (https://www.styled-components.com/).

Under the packages -> reuse core folder, you will find some basic components like Text, Heading, Image, Input, etc. Developers have written these components to make the user's life easy. By using these basic components, you can write custom components according to your need. In the common -> components folder, developers have done the same things. Developers have written some custom components for their landing pages by using these reuse core components.

## **\*\*agency-blog, personal-blog, personal-blog-minimal, image-blog, minimal-photography-blog\*\***

The main Gatsby Structure are done in this folder. Each folder(agency-blog/personal-blog/ personal-blog-minimal) is a separate gatsby project. For details, You can follow the gatsby doc (https://www.gatsbyjs.org/docs/)

### **\*\*agency-blog\*\***

You will find the main gatsby structure in this folder. There is a discussion about the main folder structure and their usage.

### ​**\*\*content\*\***

In the Content folder, you will find two folders. ‘assets’ and ‘blog’

1. **assets**

You will find all the assets like images, videos in this folder.

2. **Blog**

You will find blog posts in this folder. Each folder like(installing-Multiple-Versions, art-of-perception) is a single post. You will find an \`index.md\` file in each folder. In this \`index.md\` file, you can write your post. You can keep your images related to your post in this folder.

### **\*\*src\*\***

Inside the ’src’ folder, you will find some folders like components, containers, images, pages, templates, themes.

### **Components**

In the src->component folder, you will find the component which is needed only for this agency-blog template. All the codes are written in Typescript Containers.

In the src->containers folder, developers have written all of the parts of their code by part. You will also find the style.js file. All the codes are written in Typescript.

### **Pages**

In the src->pages folder, you will find the routes of all of the pages used in this template like an index.TSX , 404.tsx etc.

### **Templates**

All the page templates are written in this fold

### **Theme**

colours.TSX: in this file, you can keep all of the custom colours for your specific landing pages.

customeVariant.tsx: For writing custom variants. index.TSX: all of the style props.

Developers have used a styled system for this folder structure (https://github.com/jxnblk/styled-system ).

You can also follow this article for clearing your concept https://varun.ca/styled-system/.

The other templates like personal-blog, personal-blog-minimal are built with the same structures.

### **How to write a blog post**

To write a blog post, please go to packages -> (agency-blog/personal-blog/ personal-blog-minimal) -> content -> blog folder and create a folder with a name like(art-of-perfection). Then create an MD file named index.MD and then write your post in this format

\---

title: Sharing content that makes other people engage

date: '2019-01-01T23:46:37.121Z'

cover: './preview.png'

tags: \['markdown', 'test', 'unity'\]

slug: 'sharing-content-that-makes-other'

---

(Post details Start)Technology companies can do more, but as long as these trends continue, there will be incentives for companies to exploit them for profit. Both technology companies and libraries need to recognize that a core aspect of the problem is social in nature. The most obvious tool that libraries have at their disposal is the promotion of information literacy.(Post details End).

### **Instagram Token**

To add instagram token, please go to packages -> (agency-blog/personal-blog/ personal-blog-minimal) -> gatsby-config.js-> go to 'resolve:gatsby-source-instagram' and put your instagram username,access,id token there. For further info, please check this link https://www.gatsbyjs.org/packages/gatsby-source-instagram

### **Disqus Name**

To add Disqus token, please go to packages -> (agency-blog/personal-blog/ personal-blog-minimal) -> env.development and packages -> (agency-blog/personal-blog/ personal-blog-minimal) env.production and put your Disqus name there.

### **Mailchimp Integration**

To add MailChimp integration, please go to packages -> (agency-blog/personal-blog/ personal-blog-minimal) -> gatsby-config.js-> go to 'resolve:gatsby-plugin-MailChimp' and put your endpoint there. For further info, please check this link https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]

## Conclusion

Now we came to the ending point of this article. We hope you have a great idea about this template. This is a highly rated template in the Envato marketplace. It has sold for more than 300 times. Without any hesitation, you can buy this template according to your requirements. That is all for today. Have a nice day.
