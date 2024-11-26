/** @type {import('next').NextConfig} */
import fs from "fs";
import withLlamaIndex from "llamaindex/next";
import webpack from "./webpack.config.mjs";

const nextConfig = JSON.parse(fs.readFileSync("./next.config.json", "utf-8"));
nextConfig.webpack = webpack;

// use withLlamaIndex to add necessary modifications for llamaindex library
const config = withLlamaIndex(nextConfig);

// Remove the serverExternalPackages option if it exists
if (config.experimental && config.experimental.serverExternalPackages) {
  delete config.experimental.serverExternalPackages;
}

export default config;
