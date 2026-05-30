import React from "react";
import "../styles/_about.scss";

function About() {
  return (
    // 外層容器
    <section style={{ margin: "5px 5px 2rem 2rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "calc(100vh - 120px)",
          overflow: "hidden",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 左*/}
        <div
          style={{
            width: "300px",
            minWidth: "500px",
            padding: "30px",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              margin: "10px 0 20px 0",
              color: "#fff",
            }}
          >
            About
          </h1>

          <div>
            <img
              style={{ textAlign: "center" }}
              src={process.env.PUBLIC_URL + "/images/me.jpg"}
              alt="我"
              className="circle-img"
            />
            <h2 style={{ margin: "10px 0 20px 0" }}>3D美術、遊戲特效師</h2>

            <h3>2019/9-2026/1 達愉軟體公司 特效美術 6年</h3>
            <h3>2015/7-2019/6 日商艾鳴網路遊戲公司 3D美術 4年</h3>
            <h3>2011-2015 亞洲大學 數位多媒體設計系 學士</h3>
          </div>
        </div>

        {/* 右 */}
        <div
          style={{
            flex: 1,
            padding: "40px",
            boxSizing: "border-box",
            overflowY: "auto",
            textAlign: "left",
          }}
        >
          <h3
            style={{ fontSize: "3rem", margin: "10px 0 20px 0", color: "#fff" }}
          >
            Experience
          </h3>
          <h2
            style={{ fontSize: "2rem", margin: "10px 0 20px 0", color: "#fff" }}
          >
            達遠軟體公司 特效美術
          </h2>
          <p>團隊溝通：整合美術人員檔案，協助完成GIT提交。</p>
          <p>
            技術對接： 負責與前端工程師協作，與資源優化
            ，透過Git實現專案整合，提升開發流程效率。{" "}
          </p>
          <p>外包窗口：曾擔任美術特效撰寫格式文件，與外包人員協調溝通。</p>
          <p>
            -《屠屍對決》、《王者傳說》、《火拼捕魚場》等手遊與 Slot 遊戲 。
          </p>
          <div>
            <h2
              style={{
                fontSize: "2rem",
                margin: "10px 0 20px 0",
                color: "#fff",
              }}
            >
              日商艾鳴網路遊戲公司 3D美術
            </h2>
            <p>負責日系及寫實風格遊戲的3D場景建模、武器模型與貼圖製作。</p>
            <p>-《CARAVAN STORIES》：製作奇幻 MMORPG 場景模型。 </p>
            <p>-《TriLink 光之女神與七魔獸》：製作日系手遊武器模型及貼圖。</p>
            <p>-《街コロマッチ!》：手遊改編桌遊之場景。</p>
          </div>
        </div>
        {/* 4 */}
        <div
          style={{
            flex: 1,
            padding: "40px",
            boxSizing: "border-box",
            overflowY: "auto",
            textAlign: "left",
          }}
        >
          <h3
            style={{ fontSize: "3rem", margin: "10px 0 20px 0", color: "#fff" }}
          >
            Skill
          </h3>
          <div>
            <h3
              style={{
                fontSize: "2rem",
                margin: "10px 0 20px 0",
                color: "#fff",
              }}
            >
              FRONTEND
            </h3>
            <div class="tech-stack-container">
              <div class="tech-row">
                <div class="tech-item">
                  <span>JavaScript</span>
                </div>
                <div class="tech-item">
                  <span>CSS</span>
                </div>
                <div class="tech-item">
                  <span>HTML</span>
                </div>
                <div class="tech-item">
                  <span>React</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3
              style={{
                fontSize: "2rem",
                margin: "10px 0 20px 0",
                color: "#fff",
              }}
            >
              DATABASE
            </h3>
            <div class="tech-stack-container">
              <div class="tech-row">
                <div class="tech-item">
                  <span>My SQL</span>
                </div>
              </div>
            </div>
            <h3
              style={{
                fontSize: "2rem",
                margin: "10px 0 20px 0",
                color: "#fff",
              }}
            >
              TOOLS
            </h3>
            <div class="tech-stack-container">
              <div class="tech-row">
                <div class="tech-item">
                  <span>GIT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
