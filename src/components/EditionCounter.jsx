/*
 * SPDX-FileCopyrightText: 2026 Department of Decentralization
 * SPDX-License-Identifier: Unlicense
 *
 * This is free and unencumbered software released into the public domain.
 * For more information, please refer to <https://unlicense.org>
 */

/**
 * The edition counter: one digit per ETHBerlin edition under the logo, drawn
 * like an LCD display, and a readout that names the edition a digit stands
 * for. The other editions' digits link their sites; this site's digit is
 * always lit. Facts and strings come from `src/data/editions.mjs`.
 *
 * @module components/EditionCounter
 * @import { Edition } from "../data/editions.mjs"
 */

import React, { useState } from "react";
import { editions, editionUrl, linkText, readout } from "../data/editions.mjs";
import "../styles/edition-counter.css";

/**
 * This site's edition, which the readout names while no digit is lit.
 *
 * @type {Readonly<Edition>}
 */
const current = /** @type {Readonly<Edition>} */ (
  editions.find((edition) => edition.current)
);

/**
 * The parts of one digit cell: the digit, the hidden link text, and the unlit
 * segments. The ghost 8 comes last, so the cell's text reads digit, name and
 * year for search engines and screen readers.
 *
 * @param {object} props Component props.
 * @param {Readonly<Edition>} props.edition The edition the cell stands for.
 * @returns {JSX.Element} The three parts.
 */
function DigitFace({ edition }) {
  return (
    <>
      <span className="edition-digit__value">{edition.digit}</span>
      <span className="sr-only">{` ${linkText(edition)} `}</span>
      <span className="edition-digit__ghost" aria-hidden="true">
        8
      </span>
    </>
  );
}

/**
 * The edition counter. One piece of state, the edition whose digit the
 * pointer or keyboard focus is on, lights that digit and switches the readout
 * to it, so a digit is lit exactly when the readout names it. The readout is
 * one element whose text and colour change: hover adds, removes and reveals
 * no element.
 *
 * @param {object} props Component props.
 * @param {boolean} [props.compact] The mobile variant: smaller digits, the
 *   readout to their right, and no hover or focus state.
 * @param {string} [props.className] Classes that place the counter, added to
 *   its own.
 * @returns {JSX.Element} The counter.
 */
export default function EditionCounter({ compact = false, className = "" }) {
  const [active, setActive] = useState(
    /** @type {Readonly<Edition> | null} */ (null),
  );
  const layout = compact
    ? "edition-counter edition-counter--compact flex items-center gap-3 mt-2.5"
    : "edition-counter flex flex-col gap-1.5";
  return (
    <div className={className ? `${layout} ${className}` : layout}>
      <div
        className={
          compact
            ? "flex gap-2 font-digi text-2xl leading-none"
            : "flex gap-[10px] font-digi text-[28px] leading-none"
        }
      >
        {editions.map((edition) =>
          edition.current ? (
            <span
              key={edition.digit}
              className="edition-digit"
              aria-current="page"
            >
              <DigitFace edition={edition} />
            </span>
          ) : (
            <a
              key={edition.digit}
              className={
                active === edition ? "edition-digit is-lit" : "edition-digit"
              }
              href={editionUrl(edition)}
              target="_blank"
              rel="noreferrer"
              aria-keyshortcuts={edition.digit}
              onMouseEnter={compact ? undefined : () => setActive(edition)}
              onMouseLeave={compact ? undefined : () => setActive(null)}
              onFocus={compact ? undefined : () => setActive(edition)}
              onBlur={compact ? undefined : () => setActive(null)}
            >
              <DigitFace edition={edition} />
            </a>
          ),
        )}
      </div>
      <div
        className={
          active
            ? "edition-counter__readout font-w95 text-sm is-lit"
            : "edition-counter__readout font-w95 text-sm"
        }
        aria-hidden="true"
      >
        {readout(active ?? current)}
      </div>
    </div>
  );
}
