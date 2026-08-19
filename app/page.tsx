import { PlayableWindow } from "./PlayableWindow";

const jjkPublishedUrl =
  "https://share.loopit.me/game/bf21b412-b9f9-44bf-9888-030ef1c95912?l_data=%7B%22said%22%3A%22sa_5Zp4NDM7%22%2C%22ssuid%22%3A%22ss_KYDKucT4%22%2C%22sharer%22%3A%22028DD5C4-D53C-4981-A5B6-532E6B78C3B8%22%2C%22share_id%22%3A%22bf21b412-b9f9-44bf-9888-030ef1c95912%22%7D";
const jjkEmbedUrl =
  "https://cdn-cf.loopit.me/public/game/bf21b412-b9f9-44bf-9888-030ef1c95912/2080563005904424960/workspace/dist/index.html?cfg_hash=d3e8f213";
const blackpinkCardHuntPublishedUrl =
  "https://share.loopit.me/game/db87efd6-0d72-455c-a5ad-868e5b27b601?l_data=%7B%22said%22%3A%22sa_yN7SkXWM%22%2C%22ssuid%22%3A%22ss_eF4FnCWZ%22%2C%22sharer%22%3A%22028DD5C4-D53C-4981-A5B6-532E6B78C3B8%22%2C%22share_id%22%3A%22db87efd6-0d72-455c-a5ad-868e5b27b601%22%7D";
const blackpinkCardHuntEmbedUrl =
  "https://cdn-cf.loopit.me/public/game/db87efd6-0d72-455c-a5ad-868e5b27b601/2081720053337690112/workspace/dist/index.html?cfg_hash=d3e8f213";
const katseyePublishedUrl =
  "https://share.loopit.me/game/31aa1f18-6298-48ef-b7f4-da9c5988fc28?l_data=%7B%22said%22%3A%22sa_9nHN9qqZ%22%2C%22ssuid%22%3A%22ss_EcWTtzLW%22%2C%22sharer%22%3A%22028DD5C4-D53C-4981-A5B6-532E6B78C3B8%22%2C%22share_id%22%3A%2231aa1f18-6298-48ef-b7f4-da9c5988fc28%22%7D";
const katseyeEmbedUrl =
  "https://cdn-cf.loopit.me/public/game/31aa1f18-6298-48ef-b7f4-da9c5988fc28/2076582810969190400/workspace/dist/index.html?cfg_hash=d3e8f213";

const cases = [
  {
    index: "01",
    title: "#MyJJKDomain",
    subtitle: "三卡策略游戏",
    meta: "CARD STRATEGY",
    description: "选择三张角色卡，在有限行动中组合技能、判断克制关系并完成战斗。",
    src: jjkEmbedUrl,
    href: jjkPublishedUrl,
    cover:
      "https://cdn-cf.loopit.me/users/loopit/2061303765843070976/auto_workspace/bf21b412-b9f9-44bf-9888-030ef1c95912/2080563005904424960/thumbnail-3a9cc5d054af0077.webp",
    accent: "violet",
  },
  {
    index: "02",
    title: "BLACKPINK Card Hunt",
    subtitle: "翻牌配对收集",
    meta: "MATCH · FLIP · COLLECTION",
    description: "识别模糊照片完成配对，通过连续翻牌建立 Combo，并解锁收集 28 张 BLACKPINK 卡牌。",
    src: blackpinkCardHuntEmbedUrl,
    href: blackpinkCardHuntPublishedUrl,
    cover:
      "https://cdn-cf.loopit.me/users/loopit/2061303765843070976/auto_workspace/db87efd6-0d72-455c-a5ad-868e5b27b601/2081720053337690112/thumbnail-4fc659d8bf883626.webp",
    accent: "pink",
  },
  {
    index: "03",
    title: "KATSEYE Beat Flip",
    subtitle: "音乐卡点互动",
    meta: "SWIPE · RHYTHM · COMBO",
    description: "跟随音乐节拍滑动翻卡，以 Perfect、Great 与 Combo 反馈完成一轮挑战。",
    src: katseyeEmbedUrl,
    href: katseyePublishedUrl,
    cover:
      "https://cdn-cf.loopit.me/users/loopit/2061303765843070976/auto_workspace/31aa1f18-6298-48ef-b7f4-da9c5988fc28/2076582810969190400/thumbnail-0ad715fddbf8ce48.webp",
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
