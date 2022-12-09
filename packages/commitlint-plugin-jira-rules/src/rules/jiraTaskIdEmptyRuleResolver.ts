import { parseCommitMessage } from 'commitlint-jira-utils'
import { TRuleResolver } from '../../@types'

const jiraTaskIdEmptyRuleResolver: TRuleResolver = parsed => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  const isRuleValid = commitMessage.commitTaskIds.length > 0
  return [
    isRuleValid,
    `the commit message must provide minimum one task id symbol, This format is two or more uppercase letters, followed by a hyphen and the issue number, for example: JRA-123.`,
  ]
}
export default jiraTaskIdEmptyRuleResolver
