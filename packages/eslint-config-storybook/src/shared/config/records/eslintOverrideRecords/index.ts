import { FILES } from "../../../const/FILES"
import { eslintOverrideRules } from "../../rules/eslintOverrideRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const eslintOverrideRecords = [
  {
    files: FILES.JS,
    rules: {
      ...eslintOverrideRules,
    },
  },
] as const satisfies EslintFlatConfig[]
