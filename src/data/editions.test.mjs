/*
 * SPDX-FileCopyrightText: 2026 Department of Decentralization
 * SPDX-License-Identifier: Unlicense
 *
 * This is free and unencumbered software released into the public domain.
 * For more information, please refer to <https://unlicense.org>
 */

/**
 * Unit tests for `editions.mjs`: the facts, and every string the edition
 * counter and its keyboard keys use. Run with `npm test`.
 *
 * @module data/editions.test
 */

import assert from "node:assert/strict";
import { test } from "node:test";
import {
  editionKeys,
  editions,
  editionUrl,
  linkText,
  readout,
} from "./editions.mjs";

test("lists the four editions in counter order, frozen", () => {
  assert.deepEqual(
    editions.map((edition) => edition.digit),
    ["1", "2", "3", "4"],
  );
  assert.ok(Object.isFrozen(editions));
  assert.ok(editions.every((edition) => Object.isFrozen(edition)));
});

test("marks this site's edition, and only that one, as current", () => {
  assert.deepEqual(
    editions
      .filter((edition) => edition.current)
      .map((edition) => edition.name),
    ["ETHBerlin³"],
  );
});

test("links each edition's site without a trailing slash", () => {
  assert.deepEqual(editions.map(editionUrl), [
    "https://2018.ethberlin.org",
    "https://2019.ethberlin.org",
    "https://2022.ethberlin.org",
    "https://ethberlin.org",
  ]);
});

test("readouts name the edition and its year", () => {
  assert.deepEqual(editions.map(readout), [
    "ETHBerlin · 2018",
    "ETHBerlin ZWEI · 2019",
    "ETHBerlin³ · 2022",
    "ETHBerlin04 · 2024",
  ]);
});

test("link texts name the edition and its year; this site says so", () => {
  assert.deepEqual(editions.map(linkText), [
    "ETHBerlin 2018",
    "ETHBerlin ZWEI 2019",
    "ETHBerlin³ 2022, this site",
    "ETHBerlin04 2024",
  ]);
});

test("keys 1, 2 and 4 map to the other editions' links; 3 has none", () => {
  assert.deepEqual(editionKeys(), {
    1: "https://2018.ethberlin.org",
    2: "https://2019.ethberlin.org",
    4: "https://ethberlin.org",
  });
  assert.equal(
    JSON.stringify(editionKeys()),
    '{"1":"https://2018.ethberlin.org","2":"https://2019.ethberlin.org","4":"https://ethberlin.org"}',
  );
});
