/*
 * SPDX-FileCopyrightText: 2026 Department of Decentralization
 * SPDX-License-Identifier: Unlicense
 *
 * This is free and unencumbered software released into the public domain.
 * For more information, please refer to <https://unlicense.org>
 */

/**
 * The four ETHBerlin editions of the edition counter, and every string the
 * counter and its keyboard keys use. Each edition's facts are written here
 * once; links, readouts, link texts and the key map are made from them.
 *
 * @module data/editions
 */

/**
 * One ETHBerlin edition.
 *
 * @typedef {object} Edition
 * @property {string} digit The edition's digit in the counter, which is also
 *   its keyboard key.
 * @property {string} name Edition name, as the edition's own site titles
 *   itself.
 * @property {number} year Year the edition took place.
 * @property {string} host Host name of the edition's site.
 * @property {boolean} current Whether this site is the edition's site.
 */

/**
 * The editions in counter order. The names come from each edition's own site:
 * the `<title>` of `ethb3rlin/1` and `ethb3rlin/2`, this site's name, and the
 * `siteMetadata.title` of `ethb3rlin/4`.
 *
 * @type {ReadonlyArray<Readonly<Edition>>}
 */
export const editions = Object.freeze(
  [
    {
      digit: "1",
      name: "ETHBerlin",
      year: 2018,
      host: "2018.ethberlin.org",
      current: false,
    },
    {
      digit: "2",
      name: "ETHBerlin ZWEI",
      year: 2019,
      host: "2019.ethberlin.org",
      current: false,
    },
    {
      digit: "3",
      name: "ETHBerlin³",
      year: 2022,
      host: "2022.ethberlin.org",
      current: true,
    },
    {
      digit: "4",
      name: "ETHBerlin04",
      year: 2024,
      host: "ethberlin.org",
      current: false,
    },
  ].map((edition) => Object.freeze(edition)),
);

/**
 * An edition's link target: its site, without a trailing slash.
 *
 * @param {Readonly<Edition>} edition An edition.
 * @returns {string} For example `https://2019.ethberlin.org`.
 */
export function editionUrl(edition) {
  return `https://${edition.host}`;
}

/**
 * The counter's readout for an edition: its name and year.
 *
 * @param {Readonly<Edition>} edition An edition.
 * @returns {string} For example `ETHBerlin ZWEI · 2019`.
 */
export function readout(edition) {
  return `${edition.name} · ${edition.year}`;
}

/**
 * The visually hidden text after an edition's digit, which search engines and
 * screen readers read as the link's text. This site's edition says so.
 *
 * @param {Readonly<Edition>} edition An edition.
 * @returns {string} For example `ETHBerlin ZWEI 2019`, or
 *   `ETHBerlin³ 2022, this site` for this site's edition.
 */
export function linkText(edition) {
  const text = `${edition.name} ${edition.year}`;
  return edition.current ? `${text}, this site` : text;
}

/**
 * The keyboard keys of the other editions, each mapped to that edition's
 * link. `src/html.js` writes this map into its key handler at build time.
 *
 * @returns {Record<string, string>} For example
 *   `{ "1": "https://2018.ethberlin.org", ... }`, without this site's key.
 */
export function editionKeys() {
  return Object.fromEntries(
    editions
      .filter((edition) => !edition.current)
      .map((edition) => [edition.digit, editionUrl(edition)]),
  );
}
