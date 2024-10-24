import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { muxInput } from "sanity-plugin-mux-input";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "81yy9x8g",
  dataset: "production",
  title: "Esther Studio",
  apiVersion: "2024-06-24",
  basePath: "/admin",
  plugins: [structureTool(), muxInput({mp4_support: 'standard'})],
  schema: {
    types: schemas,
  },
});
export default config;
