import Head from "next/head";
import Link from "next/link";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";

export default function Index({ allPosts }) {
	return (
		<>
			<Layout>
				<Head>
					<title>Next.js Blog Example</title>
				</Head>
				<Container>
					<Intro />
					This is a Home Page, check our{" "}
					<a href="/blog">
						<span style={{ color: "blue" }}>Blog</span>
					</a>{" "}
					from here
				</Container>
			</Layout>
		</>
	);
}
