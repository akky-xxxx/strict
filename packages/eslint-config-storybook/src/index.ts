import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { baseRecords } from "./shared/config/records/baseRecords"
import { eslintOverrideRecord } from "./shared/config/records/eslintOverrideRecord"
import { eslintOverrideRecords } from "./shared/config/records/eslintOverrideRecords"
import { storybookConfigRecords } from "./shared/config/records/storybookConfigRecords"
import { overrideTypescriptRecord } from "./shared/config/records/overrideTypescriptRecord"
import { typescriptEslintOverrideRecords } from "./shared/config/records/typescriptEslintOverrideRecords"
import { PACKAGE_NAME } from "./shared/const/PACKAGE_NAME"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: PACKAGE_NAME,
  },

  configs: {
    legacy: legacyConfig,
    recommended: flatConfig,

    // TODO: 0.0.4 以降で削除 ここから
    baseRecords,

    eslintOverrideRecords,
    typescriptEslintOverrideRecords,
    // TODO: 0.0.4 以降で削除 ここまで

    storybookConfigRecords,

    eslintOverrideRecord,
    overrideTypescriptRecord,
  },
} as const satisfies Plugin

export = plugin
