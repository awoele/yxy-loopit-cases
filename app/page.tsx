import { PlayableWindow } from "./PlayableWindow";

const cases = [
  {
    index: "01",
    title: "#MyJJKDomain",
    subtitle: "三卡策略游戏",
    meta: "CARD STRATEGY",
    description: "选择三张角色卡，在有限行动中组合技能、判断克制关系并完成战斗。",
    src: "/cases/jjk/index.html",
    href: "https://share.loopit.me/game/bf21b412-b9f9-44bf-9888-030ef1c95912",
    cover: "/covers/jjk.webp",
    accent: "violet",
  },
  {
    index: "02",
    title: "BLACK or PINK",
    subtitle: "30 秒滑动选择",
    meta: "SWIPE · COMBO · RESULT",
    description: "通过连续左右滑动完成选择，叠加 Combo 与 FEVER，生成个人结果光谱。",
    src: "https://cdn-cf.loopit.me/public/game/049b0445-dfe4-439f-8bcc-6930f464993f/2082045843170414592/workspace/dist/index.html?cfg_hash=d3e8f213",
    href: "https://cdn-cf.loopit.me/public/game/049b0445-dfe4-439f-8bcc-6930f464993f/2082045843170414592/workspace/dist/index.html?cfg_hash=d3e8f213",
    cover: "/covers/black-or-pink.webp",
    accent: "pink",
  },
  {
    index: "03",
    title: "KATSEYE Beat Flip",
    subtitle: "音乐卡点互动",
    meta: "SWIPE · RHYTHM · COMBO",
    description: "跟随音乐节拍滑动翻卡，以 Perfect、Great 与 Combo 反馈完成一轮挑战。",
    src: "/cases/katseye/index.html",
    href: "/cases/katseye/index.html",
    cover: "/covers/katseye.webp",
    accent: "cyan",
  },
] as const;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="返回页面顶部">
          YXY <span>/ LOOPIT CASES</span>
        </a>
        <a
          className="official-link"
          href="https://www.loopit.me/"
          target="_blank"
          rel="noreferrer"
        >
          LOOPIT.ME <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">AI CREATIVE INTERACTIONS · 03 PLAYABLE CASES</p>
        <div className="hero-copy">
          <h1>AI 创意互动实验</h1>
          <p>
            将创意假设转化为可直接试玩的移动端互动原型，覆盖策略、选择与节奏三类机制。
          </p>
        </div>
      </section>

      <section className="case-track" aria-label="三个可试玩的 Loopit Case">
        {cases.map((item) => (
          <article className={`case-card case-card--${item.accent}`} key={item.title}>
            <div className="case-topline">
              <span>{item.index}</span>
              <span>{item.meta}</span>
            </div>

            <PlayableWindow
              src={item.src}
              title={`${item.title} ${item.subtitle}`}
              cover={item.cover}
            />

            <div className="case-copy">
              <div>
                <h2>{item.title}</h2>
                <p className="case-subtitle">{item.subtitle}</p>
              </div>
              <p className="case-description">{item.description}</p>
              <a href={item.href} target="_blank" rel="noreferrer">
                独立窗口试玩 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </section>

      <footer>
        <p>PERSONAL PORTFOLIO · NON-COMMERCIAL CONCEPT PROTOTYPES</p>
        <p>2026 / PRODUCT DESIGN &amp; VIBE CODING</p>
      </footer>
    </main>
  );
}
