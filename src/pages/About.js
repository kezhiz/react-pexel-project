import React from "react";
function About() {
  return (
    <section className="about-page">
      <div className="about-intro">
        <div>
          <p className="eyebrow">About</p>
          <h1>From VFX artist to frontend developer.</h1>
        </div>
      </div>

      <div className="about-grid">
        <aside className="profile-card">
          <img
            src={process.env.PUBLIC_URL + "/images/me.jpg"}
            alt="Zhiyu profile"
            className="circle-img"
          />
          <h2>Zhiyu</h2>
          <p>3D Artist&VFX Artist</p>
          <div className="profile-meta">
            <span>React</span>
            <span>JavaScript</span>
            <span>SCSS</span>
            <span>3D Visual</span>
          </div>
        </aside>

        <div className="about-panel">
          <h2>Experience</h2>
          <article>
            <h3>3D game artist& VFX artist</h3>
            <p>
              <p>2019-2026 達遠軟體 特效美術 6年</p>
              <p>2015-2019 艾鳴網路遊戲公司 3D美術 4年</p>
              <p>2011-2015 亞洲大學 數位多媒體設計系 學士</p>
            </p>
          </article>
          <article>
            <h3>Frontend</h3>
            <p>
              <p>
                大學一年級時曾為資訊應用學系，後轉為數位媒體設計系對於程式仍感興趣，遊戲美術工作內容也時常與前端做對接，之後透過Udemy網路課程自學前端網頁技術。
              </p>
            </p>
          </article>
        </div>

        <div className="about-panel">
          <h2>Skills</h2>
          <div className="skill-group">
            <h3>Frontend</h3>
            <div className="tech-row">
              <span>HTML</span>
              <span>CSS / SCSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Tools</h3>
            <div className="tech-row">
              <span>Git</span>
              <span>GitHub Pages</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
