"use client";

import { useState } from "react";

type PlayableWindowProps = Readonly<{
  src: string;
  title: string;
  cover: string;
}>;

export function PlayableWindow({ src, title, cover }: PlayableWindowProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="play-window">
      <div className="window-bar">
        <span className="window-dot" aria-hidden="true" />
        <span className="window-dot" aria-hidden="true" />
        <span className="window-dot" aria-hidden="true" />
        <span className="window-title">{active ? "PLAYING" : "LIVE PLAYABLE"}</span>
        {active && (
          <button
            type="button"
            className="window-stop"
            onClick={() => setActive(false)}
            aria-label={`停止 ${title}`}
          >
            ×
          </button>
        )}
      </div>

      {active ? (
        <iframe
          src={src}
          title={title}
          scrolling="no"
          allow="autoplay; fullscreen; accelerometer; gyroscope"
        />
      ) : (
        <button
          type="button"
          className="play-launch"
          onClick={() => setActive(true)}
          style={{ backgroundImage: `url(${cover})` }}
          aria-label={`加载并试玩 ${title}`}
        >
          <span className="play-launch__veil" aria-hidden="true" />
          <span className="play-launch__action">
            <span className="play-launch__icon" aria-hidden="true">▶</span>
            <span>点击加载试玩</span>
          </span>
        </button>
      )}
    </div>
  );
}
