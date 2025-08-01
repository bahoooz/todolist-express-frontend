import Image from "next/image";
import React from "react";

export default function Credits() {
  return (
    <div className="absolute top-3/4">
      <h2 className="text-xl flex items-center gap-2">
        Build by{" "}
        <Image
          src={
            "https://www.bahoz-dev.com/_next/image?url=%2Fassets%2Flogo_portfolio_dark.png&w=2048&q=75"
          }
          width={513}
          height={512}
          alt="logo"
          className="size-12"
        />
        <a
          className="text-violet-600 underline underline-offset-4 decoration-2"
          href="https://bahoz-dev.com"
          target="_blank"
        >
          Bahoz
        </a>
      </h2>
    </div>
  );
}
