import { ARRAY_FIRST_INDEX, parseOptions } from "../../../../libs/shared-for-plugin"
import { optionsSchema } from "../../schema/optionSchema"
import { hasTarget } from "../hasTarget"

import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type CallExpression = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.CallExpression>

export const callExpression: CallExpression = (context) => {
  const { options, report } = context

  const parsedOptions = parseOptions(options, optionsSchema)
  const targets = parsedOptions.at(ARRAY_FIRST_INDEX)?.targets || []

  return (node) => {
    if (
      node.callee.type !== "MemberExpression" ||
      node.callee.object.type !== "Identifier" ||
      node.callee.property.type !== "Identifier"
    ) {
      return
    }

    const {
      callee: {
        object: { name: moduleName },
        property: { name: propertyName },
      },
    } = node

    if (!hasTarget(targets, moduleName)) return

    report({
      data: {
        lowerModuleName: moduleName.toLowerCase(),
        moduleName,
        propertyName,
      },
      messageId: "NotIndividually",
      node,
    })
  }
}
