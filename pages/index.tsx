import type { NextPage } from "next";
import Image from "next/image"
import Link from "next/link";

import Head from "next/head";
import styles from "../styles/Home.module.css";

const posts = [
  {id:1, title: "Post Title #1", content: "#1 content"},
  {id:2, title: "Post Title #2", content: "#2 content"},
  {id:3, title: "Post Title #3", content: "#3 content"},
  {id:4, title: "Post Title #4", content: "#4 content"},
  {id:5, title: "Post Title #5", content: "#5 content"},
  {id:6, title: "Post Title #6", content: "#6 content"},
  {id:7, title: "Post Title #7", content: "#7 content"},
  {id:8, title: "Post Title #8", content: "#8 content"},
  {id:9, title: "Post Title #9", content: "#9 content"}
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>      
      <header>
        <div className="bg-dark collapse show" id="navbarHeader" >
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li><a href="https://getbootstrap.com/docs/4.1/examples/album/#" className="text-white">Follow on Twitter</a></li>
                  <li><a href="https://getbootstrap.com/docs/4.1/examples/album/#" className="text-white">Like on Facebook</a></li>
                  <li><a href="https://getbootstrap.com/docs/4.1/examples/album/#" className="text-white">Email me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <Link href="/home">
              <a className="navbar-brand d-flex align-items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg> */}
                <strong>Album</strong>
              </a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>

      <main role="main">

        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Album example</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don`t simply skip over it entirely.</p>
            <p>
              {/* <a href="https://getbootstrap.com/docs/4.1/examples/album/#" className="btn btn-primary my-2">Main call to action</a> */}
              <Link href="/board3">
                <a className="btn btn-primary my-2">
                  Board
                </a>

              </Link>
              <a href="https://getbootstrap.com/docs/4.1/examples/album/#" className="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">           
          </div>
        </div>

      </main>

      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="https://getbootstrap.com/docs/4.1/examples/album/#">Back to top</a>
          </p>
          <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
          <p>New to Bootstrap? <a href="https://getbootstrap.com/docs/4.1/">Visit the homepage</a> or read our <a href="https://getbootstrap.com/docs/4.1/getting-started/">getting started guide</a>.</p>
        </div>
      </footer>
    </div>

  );
};

export default Home;