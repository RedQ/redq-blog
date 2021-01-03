import Head from 'next/head';
import Layout from '../components/layout/layout';
import Intro from '../components/ui/intro';
import Container from '../components/ui/container';
import Categories from '../components/ui/categories';
import PostList from '../components/post/post-list';
// api and utils
import { getAllPosts } from '../lib/api';
import { getPostCategories } from '../lib/utils';

export default function Blog({ allPosts }) {
  // collect allPosts category to an array
  let postsCategories = [];
  allPosts.forEach((post) => {
    if (post.category !== undefined && post.category !== '') {
      postsCategories.push(post.category);
    }
  });
  /*
   * Make a long string from an array,
   * removed whitespace after each comma,
   * converted the long string to an array.
   */
  const allCategories = postsCategories
    .join()
    .replace(/\s*,\s*/gi, ',')
    .split(',');
  // filter unique categories from allCategories
  const uniqueCategories = allCategories.filter(
    (value, index) => allCategories.indexOf(value) === index
  );

  return (
    <Layout>
      <Head>
        <title>Blog | RedQ Inc</title>
      </Head>
      <Intro title="Blog" />
      <Container>
        <Categories
          className="mb-6 sm:mb-8 flex flex-wrap"
          items={getPostCategories(uniqueCategories.join(', '))}
        />
        {allPosts.length > 0 && <PostList posts={allPosts.slice(0, 5)} />}
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'category',
    'author',
    'coverImage',
    'excerpt',
  ]);
  return {
    props: { allPosts },
  };
}
