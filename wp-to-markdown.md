# How to convert WP to Markdown:

1. Export the posts xml file
2. Go to the downloaded xml directory (ex. /Downloads directory)
3. Run this command `npx wordpress-export-to-markdown` from this repository https://github.com/lonekorean/wordpress-export-to-markdown
4. Make sure you choose these below option

```
❯ npx wordpress-export-to-markdown
npx: installed 135 in 12.036s

Starting wizard...
? Path to WordPress export file? redq.WordPress.2020-10-05.xml
? Path to output folder? output-new
? Create year folders? No
? Create month folders? No
? Create a folder for each post? No
? Prefix post folders/files with date? No
? Save images attached to posts? Yes
? Save images scraped from post body content? Yes
```

5. You will get all the posts from output-new directory
6. Copy these posts to the `_posts` directory
7. Images should be in `public/assets/blog` directory and post image path needed to be updated to `public/assets/blog/images` to do that use search and replace in VSCode for `images/` string under `_posts` directory.
8. Aws image link can directly be used on the md files
9. For preview banner author check the sample markdown format named as `dynamic-routing.md` or `hello-world.md` or `preview.md`
   10 Make sure under `_posts` directory there is only .md files otherwise you will get error.
