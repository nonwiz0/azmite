import React from "react";
import type { Pages } from "../.tina/__generated__/types";
import { Content } from "./blocks/content";
import { Verse } from "./blocks/verse";
import { Social } from "./blocks/social";

export const Blocks = (props: Pages) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PagesBlocksVerseblock":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Verse />
                  </div>
                );
              case "PagesBlocksSocial":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Social data={block} />
                  </div>
                );

              case "PagesBlocksContent":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Content data={block} parentField={`blocks.${i}`} />
                  </div>
                );
             default:
                return null;
            }
          })
        : null}
    </>
  );
};
