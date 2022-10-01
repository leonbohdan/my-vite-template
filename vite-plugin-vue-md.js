import { marked } from "marked";
export default (userOptions = { wrapperElement: "div" }) => {
  const { wrapperElement: el } = userOptions;

  return {
    name: "vite-plugin-vue-md",
    enforce: "pre",
    transform(raw, id) {
      if (/\.(md)$/.test(id)) {
        return `<template><${el}>${marked(raw)}</${el}></template>`;
      }
    },
  };
};
