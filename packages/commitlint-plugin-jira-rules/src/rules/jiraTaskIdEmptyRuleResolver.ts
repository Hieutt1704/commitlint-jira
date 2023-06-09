import { parseCommitMessage } from 'commitlint-jira-utils'
import { TRuleResolver } from '../../@types'

const jiraTaskIdEmptyRuleResolver: TRuleResolver = parsed => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const isRelease = rawCommitMessage.indexOf('release: ') === 0

  const commitMessage = parseCommitMessage(rawCommitMessage)

  const isRuleValid = commitMessage.commitTaskIds.length > 0

  return [
    isRelease || isRuleValid,
    `The commit message must have type "release" or provide minimum one task id symbol. This format is two to five uppercase letters, followed by a hyphen and the issue number, for example: P2P-123.`,
  ]
}
export default jiraTaskIdEmptyRuleResolver
