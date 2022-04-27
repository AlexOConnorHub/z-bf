"use strict";

const $Z = require("@zlanguage/zstdlib")
const matcher = require("@zlanguage/zstdlib/src/js/matcher");

const $eq = $Z.$eq;
const isObject = $Z.isObject;
const typeOf = $Z.typeOf;
const stone = $Z.stone;
const log = $Z.log;
const copy = $Z.copy;
const assertBool = $Z.assertBool;
const $plus = $Z.$plus;
const $minus = $Z.$minus;
const $star = $Z.$star;
const $slash = $Z.$slash;
const $percent = $Z.$percent;
const $carot = $Z.$carot;
const pow = $Z.pow;
const $lt = $Z.$lt;
const $gt$eq = $Z.$gt$eq;
const $gt = $Z.$gt;
const $lt$eq = $Z.$lt$eq;
const not = $Z.not;
const $plus$plus = $Z.$plus$plus;
const m = $Z.m;
const both = $Z.both;
const either = $Z.either;
const and = $Z.and;
const or = $Z.or;
const JS = $Z.JS;
const assertType = $Z.assertType;
const typeGeneric = $Z.typeGeneric;
const chan = $Z.chan;
const send = $Z.send;
const to = $Z.to;
const til = $Z.til;
const by = $Z.by;
const curry = $Z.curry;
const $or$gt = $Z.$or$gt;
const $gt$gt = $Z.$gt$gt;
const $lt$lt = $Z.$lt$lt;
const handleErr = $Z.handleErr;

const gr = stone(require("@zlanguage/zstdlib/src/js/gr"));
const run = stone(require("./parse.zlang"));
const readline = stone(require("readline-sync"));
const main = async function () {
  while (true) {
    const someLine = await gr["line"]("File to run: ")._from();
    if (assertBool($eq(someLine, ""))) {
      break;
    }
    run(someLine);
  }
};
let test = readline["question"]("prompt> ");
log(test);
main();
