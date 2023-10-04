import React from 'react';
import Navigation from '../../Component/Navigation/Navigation';
import Typewriter from 'typewriter-effect';
import './_home.scss';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Mouse from '../../Component/Mouse/Mouse';

const Home = () => {
    return (
      <div className="home">
        <Mouse />
        <Navigation />
        <div className="homeContent">
          <div className="content">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <p className="textWelcome">Bienvenue dans mon portfolio </p>
                  <h1>Hi👋je suis Marwa </h1>

                  <h2>
                    <Typewriter
                      options={{
                        strings: [
                          "Développeuse Full Stack",
                          "Développeuse web",
                          "Développeuse back end",
                          "Développeuse front end",
                        ],
                        pauseFor: 1500,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h2>

                  <p className="description">
                    Une développeuse Web Full Stack passionnée, possédant un
                    ensemble solide de compétences techniques et non techniques,
                    et déterminée à concevoir des applications Web utiles et
                    interactives.
                  </p>

                  <div className="pdf">
                    <a
                      href="./media/CV_ GHEDAMSSI.pdf"
                      target="_blank"
                      className="linkPdf colorPdf"
                    >
                      Télécharger mon CV
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
            {/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src="./media/header.png" alt="Header Img" />
                </div>
              )}
            </TrackVisibility> */}
          </div>
        </div>
      </div>
    );
};

export default Home;
