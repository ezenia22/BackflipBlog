import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout'
import styles from '../styles/index.module.css';
import Posts from '../pages/posts.js';
import banner from '../images/backflip_banner.png';
import Image from 'next/image'

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function AboutText({ desc }) {
  return <p className={styles.smallDesc}>{desc ? desc : 'Default description'}</p>
}

// const MyImage = (props) => {
//   return (
//     <Image
//       src="images/versus.png"
//       alt="next vs react"
//       width={100}
//       height={100}
//     />
//   )
// }

fetch("./post.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data.name);
  })

export default function HomePage() {

  // const posts = [`${images/backflip_logo.png}`, `${images/bar.jpeg}`, `${images/babi.jpg}`];
  const names = ['Cadence', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);
  const [dislikes, setdisLikes] = useState(0);

  function likeClick() {
    setLikes(likes + 1);
  }

  function dislikeClick() {
    setdisLikes(dislikes + 1);
  }

  return (
    <Layout>
      <div className={styles.main}>
        <Head>
          <title>Backflip Blog</title>
        </Head>
        <header>
          <Header title="The Backflip Blog" />
          <br></br>
          <Image src={banner} alt='/' width="1600px" height="320px"/>
          <br></br>
          <br></br>
          <AboutText desc="Welcome to the Backflip Blog where imagination goes wild." />
          <AboutText desc="The rules are... you are not allowed to post anything you want, unless you are able to do a backflip ;)" />
        </header>
        <br></br>
        <br></br>

        <Posts />
        {/* <ul className={styles.bullet}>
          {posts.map((post) => (
            <li key={post}>{post}</li>
          ))}
        </ul> */}

        <button className={styles.button1} onClick={likeClick}><b>Like ({likes})</b></button>
        <button className={styles.button2} onClick={dislikeClick}><b>Dislike ({dislikes})</b></button>
      </div>
    </Layout>
  );
}