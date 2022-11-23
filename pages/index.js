import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Form from '/components/Form.js';
import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/index.module.css';
import Posts from './Posts/posts.js';
import banner from '../images/backflip_banner.png';
import Image from 'next/image';


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function AboutText({ desc }) {
  return <p className={styles.smallDesc}>{desc ? desc : 'Default description'}</p>
}

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Layout>
      <div className={styles.main}>
        <Head>
          <title>Backflip Blog</title>
        </Head>
        <header className={styles.header}> 
          <Header title="The Backflip Blog" />
          <br />
          <Image src={banner} alt='/' width="1600px" height="320px" />
          <br />
          <br />
          <AboutText desc="Welcome to the Backflip Blog where imagination goes wild." />
          <AboutText desc="The rules are... you are not allowed to post anything you want, unless you are able to do a backflip ;)"/>
        </header>
        <br />
        <br />
        <h3>Welcome to your posts</h3>
        <main className={styles.container}>
          <section className={styles.post}>
            <Posts />
          </section>
          <section className={styles.form}>
            <Form />
          </section>
        </main>
      </div>
    </Layout>
  );
}