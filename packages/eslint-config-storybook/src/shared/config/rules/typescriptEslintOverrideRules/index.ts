import { typescriptEslintRules } from "./rules/typescriptEslintRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const typescriptEslintOverrideRules = {
  ...typescriptEslintRules,
} as const satisfies EslintRules
