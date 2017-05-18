import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Sidebar from './sidebar/sidebar_container';
import SessionForm from './session_form/session_form_container';
import NotesIndex from './notes/notes_index_container';
import NoteDetail from './notes/note_detail_container';

import NewNote from './notes/new_note_container';

class Home extends React.Component {

  render() {
    return <NewNote />;
    // return this.splashPage();
  }
  splashPage() {
    return (
      <div className="home-container">
        {this.header()}

        <section className="main-content">
          <AuthRoute path="/signin" component={SessionForm} />
          <Route exact path="/" component={SessionForm} />
        </section>

        {this.footer()}
        {this.splashVid()}
      </div>
    );
  }

  header() {
    return (
      <header>
        <div className="left-nav">
          <img
            src="http://res.cloudinary.com/dkuqs8yz1/image/upload/v1495083594/header-logo.png"
            alt="Whenevernote logo" />
          <h1>WHENEVERNOTE</h1>
        </div>

        <div className="header-nav-links">
          <Link to="/signin/">Sign In</Link>
          <a
            target="_blank"
            href="https://github.com/tylerreichle/Whenevernote">Github</a>
        </div>
      </header>
    );
  }

  footer() {
    return (
      <footer>
        <h3>Join <span className="green">tens</span> of people who rely on Whenevernote to more things done every day.</h3>
      </footer>
    );
  }

  splashVid() {
    return (
      <div className="bg-video">
        <video
          autoPlay="autoplay"
          loop="loop"
          poster="https://cdn1.evernote.com/evernote.com/img/homepage/homepage-hero-video-desktop-still.jpg">
          <source
            className="webm"
            type="video/webm"
            src="https://cdn1.evernote.com/evernote.com/video/homepage/homepage-hero-video.webm" />
          <source
            className="mp4"
            type="video/mp4"
            src="https://cdn1.evernote.com/evernote.com/video/homepage/homepage-hero-video.mp4" />
        </video>
      </div>
    );
  }
}

export default Home;
