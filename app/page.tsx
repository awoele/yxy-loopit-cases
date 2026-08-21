import { PlayableWindow } from "./PlayableWindow";

const assetBase = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const publicAsset = (path: string) => `${assetBase}${path}`;

const jjkPublishedUrl =
  "https://share.loopit.me/game/bf21b412-b9f9-44bf-9888-030ef1c95912?l_data=%7B%22said%22%3A%22sa_5Zp4NDM7%22%2C%22ssuid%22%3A%22ss_KYDKucT4%22%2C%22sharer%22%3A%22028DD5C4-D53C-4981-A5B6-532E6B78C3B8%22%2C%22share_id%22%3A%22bf21b412-b9f9-44bf-9888-030ef1c95912%22%7D";
const jjkEmbedUrl =
  "https://cdn-cf.loopit.me/public/game/bf21b412-b9f9-44bf-9888-030ef1c95912/2080563005904424960/workspace/dist/index.html?cfg_hash=d3e8f213";
const loopitTemplatesPublishedUrl =
  "https://share.loopit.me/game/5f168612-eddb-4432-89f0-a8130fe0599b?l_data=%7B%22said%22%3A%22sa_WseH2SFn%22%2C%22ssuid%22%3A%22ss_EF4vfxK7%22%2C%22sharer%22%3A%22028DD5C4-D53C-4981-A5B6-532E6B78C3B8%22%2C%22share_id%22%3A%225f168612-eddb-4432-89f0-a8130fe0599b%22%7D";
const loopitTemplatesEmbedUrl =
  "https://cdn-cf.loopit.me/public/game/5f168612-eddb-4432-89f0-a8130fe0599b/2090319866601951232/workspace/dist/index.html?cfg_hash=d3e8f213";
const katseyePublishedUrl =
  "https://share.loopit.me/game/31aa1f18-6298-48ef-b7f4-da9c5988fc28?l_data=%7B%22said%22%3A%22sa_9nHN9qqZ%22%2C%22ssuid%22%3A%22ss_EcWTtzLW%22%2C%22sharer%22%3A%22028DD5C4-D53C-4981-A5B6-532E6B78C3B8%22%2C%22share_id%22%3A%2231aa1f18-6298-48ef-b7f4-da9c5988fc28%22%7D";
const katseyeEmbedUrl =
  "https://cdn-cf.loopit.me/public/game/31aa1f18-6298-48ef-b7f4-da9c5988fc28/2076582810969190400/workspace/dist/index.html?cfg_hash=d3e8f213";
const emergencyDraftPublishedUrl =
  "https://share.loopit.me/game/b1f13a6d-3489-4ad3-9a1e-72ea170d5aa2?l_data=%7B%22said%22%3A%22sa_eCJKwVRM%22%2C%22ssuid%22%3A%22ss_t552eWHw%22%2C%22sharer%22%3A%22028DD5C4-D53C-4981-A5B6-532E6B78C3B8%22%2C%22share_id%22%3A%22b1f13a6d-3489-4ad3-9a1e-72ea170d5aa2%22%7D";
const emergencyDraftEmbedUrl =
  "https://cdn-cf.loopit.me/public/game/b1f13a6d-3489-4ad3-9a1e-72ea170d5aa2/2090814302524035072/workspace/dist/index.html?cfg_hash=d3e8f213&l_data=%7B%22said%22%3A%22sa_eCJKwVRM%22%2C%22ssuid%22%3A%22ss_t552eWHw%22%2C%22sharer%22%3A%22028DD5C4-D53C-4981-A5B6-532E6B78C3B8%22%2C%22share_id%22%3A%22b1f13a6d-3489-4ad3-9a1e-72ea170d5aa2%22%7D";
const narutoPublishedUrl =
  "https://share.loopit.me/game/18d149e9-9432-4780-8909-0579e659d371?l_data=%7B%22said%22%3A%22sa_ePf7ArVk%22%2C%22ssuid%22%3A%22ss_f9sAvrt7%22%2C%22sharer%22%3A%22028DD5C4-D53C-4981-A5B6-532E6B78C3B8%22%2C%22share_id%22%3A%2218d149e9-9432-4780-8909-0579e659d371%22%7D";
const narutoEmbedUrl =
  "https://cdn-cf.loopit.me/public/game/18d149e9-9432-4780-8909-0579e659d371/2084919196721901568/workspace/dist/index.html?l_data=%7B%22said%22%3A%22sa_ePf7ArVk%22%2C%22ssuid%22%3A%22ss_f9sAvrt7%22%2C%22sharer%22%3A%22028DD5C4-D53C-4981-A5B6-532E6B78C3B8%22%2C%22share_id%22%3A%2218d149e9-9432-4780-8909-0579e659d371%22%7D";
const spiderSensePublishedUrl =
  "https://share.loopit.me/game/3b750a31-70cf-422e-9452-ae8f5250e632?l_data=%7B%22said%22%3A%22sa_NJ72uLu9%22%2C%22ssuid%22%3A%22ss_xc5fpkJP%22%2C%22sharer%22%3A%22028DD5C4-D53C-4981-A5B6-532E6B78C3B8%22%2C%22share_id%22%3A%223b750a31-70cf-422e-9452-ae8f5250e632%22%7D";
const spiderSenseEmbedUrl =
  "https://cdn-cf.loopit.me/public/game/3b750a31-70cf-422e-9452-ae8f5250e632/2090825244402028544/workspace/dist/index.html?cfg_hash=d3e8f213&l_data=%7B%22said%22%3A%22sa_NJ72uLu9%22%2C%22ssuid%22%3A%22ss_xc5fpkJP%22%2C%22sharer%22%3A%22028DD5C4-D53C-4981-A5B6-532E6B78C3B8%22%2C%22share_id%22%3A%223b750a31-70cf-422e-9452-ae8f5250e632%22%7D";

const worldStudioCases = [
  {
    index: "01",
    title: "World Studio / Comparison 01",
    description: "冰雪荒原与巨型冰雕构成的世界探索片段。",
    src: publicAsset("/world-studio/world-studio-comparison-01.mp4"),
  },
  {
    index: "02",
    title: "World Studio / Comparison 02",
    description: "暗色未来城市与岩层地貌之间的世界探索片段。",
    src: publicAsset("/world-studio/world-studio-comparison-02.mp4"),
  },
] as const;

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
    contentScale: 1,
  },
  {
    index: "02",
    title: "Pick. Play. Make.",
    subtitle: "Loopit 模板探索互动",
    meta: "TEMPLATE · PLAY · CREATE",
    description: "以图片为入口串联模板选择、热门案例试玩与再创作，让用户在同一页面完成“看懂—试玩—开始制作”。",
    src: loopitTemplatesEmbedUrl,
    href: loopitTemplatesPublishedUrl,
    cover: publicAsset("/covers/loopit-template-case.png"),
    accent: "pink",
    contentScale: 0.85,
  },
  {
    index: "03",
    title: "KATSEYE Beat Flip",
    subtitle: "音乐卡点互动",
    meta: "SWIPE · RHYTHM · COMBO",
    description: "跟随音乐节拍滑动翻卡，以 Perfect、Great 与 Combo 反馈完成一轮挑战。",
    src: katseyeEmbedUrl,
    href: katseyePublishedUrl,
    cover: publicAsset("/covers/katseye-free-normal.png"),
    accent: "cyan",
    contentScale: 1,
  },
  {
    index: "04",
    title: "Emergency Draft",
    subtitle: "三英雄策略游戏",
    meta: "RECRUIT · READ · COUNTER",
    description: "在有限资金中招募三名英雄，读取敌方行动并完成三场战术任务。",
    src: emergencyDraftEmbedUrl,
    href: emergencyDraftPublishedUrl,
    cover: publicAsset("/covers/loopit-case-04-live-v3.png"),
    accent: "violet",
    contentScale: 1,
  },
  {
    index: "05",
    title: "#NarutoNinjaMission",
    subtitle: "忍者姿势匹配互动",
    meta: "DRAG · MATCH · SNAPSHOT",
    description: "拖动角色关节点匹配忍者剪影，在逐级姿势挑战中完成配准并留下快照。",
    src: narutoEmbedUrl,
    href: narutoPublishedUrl,
    cover: "https://share.loopit.me/og/game/18d149e9-9432-4780-8909-0579e659d371",
    accent: "orange",
    contentScale: 1,
  },
  {
    index: "06",
    title: "Spider Sense Online",
    subtitle: "节奏点击互动",
    meta: "TAP · RHYTHM · COMBO",
    description: "跟随城市节奏击中发光区域，把蜘蛛感应转化为连续命中与连击反馈。",
    src: spiderSenseEmbedUrl,
    href: spiderSensePublishedUrl,
    cover: publicAsset("/covers/loopit-case-06-live-v3.png"),
    accent: "cyan",
    contentScale: 1,
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
          aria-label="访问 Loopit 官网"
        >
          <img
            className="loopit-logo"
            src={publicAsset("/loopit-logo.png")}
            alt="Loopit"
          />
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">AI CREATIVE INTERACTIONS · 06 PLAYABLE CASES</p>
        <div className="hero-copy">
          <h1>AI 创意互动实验</h1>
          <p>
            将创意假设转化为可直接试玩的互动原型，覆盖策略、模板探索、节奏与动作匹配等机制。
          </p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="content-cases-title">
        <div className="case-section-heading">
          <p className="eyebrow">01 / CONTENT CASES</p>
          <h2 id="content-cases-title">内容 Case</h2>
          <p>六个可直接试玩的 Loopit 互动原型。</p>
        </div>
        <div className="case-track" aria-label="六个可试玩的 Loopit Case">
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
                contentScale={item.contentScale}
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
        </div>
      </section>

      <section className="world-studio" aria-labelledby="world-studio-title">
        <div className="world-studio-heading">
          <p className="eyebrow">02 / WORLD MODEL CASES</p>
          <h2 id="world-studio-title">世界模型 Case</h2>
          <p>两组世界模型渲染过程与结果对比。</p>
        </div>
        <div className="world-studio-grid">
          {worldStudioCases.map((item) => (
            <article className="world-studio-card" key={item.src}>
              <div className="world-studio-card__topline">
                <span>{item.index}</span>
                <span>VIDEO CASE</span>
              </div>
              <div className="world-studio-video-frame">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  src={item.src}
                  aria-label={item.title}
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>PERSONAL PORTFOLIO · NON-COMMERCIAL CONCEPT PROTOTYPES</p>
        <p>2026 / PRODUCT DESIGN &amp; VIBE CODING</p>
      </footer>
    </main>
  );
}
