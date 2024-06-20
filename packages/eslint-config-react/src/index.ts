import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { airbnbRecords } from "./shared/config/records/airbnbRecords"
import { baseRecords1 } from "./shared/config/records/baseRecords1"
import { baseRecords2 } from "./shared/config/records/baseRecords2"
import { customRecord } from "./shared/config/records/customRecord"
import { customRecordWithTypescript } from "./shared/config/records/customRecordWithTypescript"
import { customRecords } from "./shared/config/records/customRecords"
import { customRecordsWithTypescript } from "./shared/config/records/customRecordsWithTypescript"
import { eslintRecommendedRecord } from "./shared/config/records/eslintRecommendedRecord"
import { initialRecord } from "./shared/config/records/initialRecord"
import { reactRecords } from "./shared/config/records/reactRecords"
import { resetRecordForStylistic } from "./shared/config/records/resetRecordForStylistic"
import { resetRecordsForStylistic } from "./shared/config/records/resetRecordsForStylistic"
import { scJsCustomRecord } from "./shared/config/records/scJsCustomRecord"
import { stylisticRecord } from "./shared/config/records/stylisticRecord"
import { unicornRecommendedRecords } from "./shared/config/records/unicornRecommendedRecords"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: "@strict/eslint-config-react",
  },

  configs: {
    legacy: legacyConfig,
    recommended: flatConfig,

    baseRecords1,
    baseRecords2,

    customRecords,
    customRecordsWithTypescript,
    resetRecordsForStylistic,

    initialRecord,

    airbnbRecords,
    eslintRecommendedRecord,
    reactRecords,
    stylisticRecord,
    unicornRecommendedRecords,

    customRecord,
    customRecordWithTypescript,
    resetRecordForStylistic,
    scJsCustomRecord,
  },
} as const satisfies Plugin

export = plugin
