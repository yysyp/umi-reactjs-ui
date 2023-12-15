import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/foo", component: "foo" },
  ],
  npmClient: 'npm',
  plugins: ['@umijs/plugins/dist/dva'],
  dva:{}
});
