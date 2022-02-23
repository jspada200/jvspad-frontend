import React from "react";
import Head from "next/head";
import Page from "../components/Page";
import { Container, InputGroup, Stack } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { BallTriangle } from "react-loading-icons";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import BlogPostLink from "../components/BlogPostLink";

export default function Blog() {
  const defaultPage = "http://localhost:8000/api/v1/posts/";
  const fetchPosts = (args) => {
    if (!args.pageParam) return axios.get(defaultPage);
    return axios.get(args.pageParam);
  };

  // Query that will execute when user scrolls to bottom of the page or on load
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("posts", fetchPosts, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data?.next;
    },
  });

  // Render the posts returned from data
  const RenderPosts = (pages) =>
    pages.data.map(({ data }) =>
      data.results.map((postInfo) => <BlogPostLink {...postInfo} />)
    );

  const Loader = () => (
    <center>
      <BallTriangle />
    </center>
  );

  return (
    <Page>
      <Head>
        <title>James V Spadafora - Blog</title>
      </Head>
      <Container className={styles.description}>
        <InfiniteScroll
          pageStart={0}
          loadMore={fetchNextPage}
          hasMore={hasNextPage}
          loader={<Loader />}
          useWindow={true}
        >
          {data ? <RenderPosts data={data.pages} /> : null}
        </InfiniteScroll>

        {isFetching || isFetchingNextPage || status === "loading" ? (
          <Loader />
        ) : null}
      </Container>
    </Page>
  );
}
