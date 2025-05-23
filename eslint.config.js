// @ts-check

import eslint from "@eslint/js";
import solid from "eslint-plugin-solid/configs/recommended";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    rules: {
      "no-warning-comments": ["warn"],
    },
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  solid,
);
