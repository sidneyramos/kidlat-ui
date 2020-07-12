import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import compiler from "@ampproject/rollup-plugin-closure-compiler";
import pkg from "./package.json";
import json from "@rollup/plugin-json";

export default {
  input: "components/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  external: ["react"],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    compiler(),
    terser(),
  ],
};
