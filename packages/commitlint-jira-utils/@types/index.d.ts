export interface Rules {
  commitStatusCase: string
  taskIdEmpty: string
  taskIdCase: string
  taskIdMaxLength: string
  taskIdMinLength: string
  taskIdProjectKey: string
}

export interface TCommitlintJiraConstants {
  JIRA_RULES: Rules
  COMMIT_TASK_STATUS_PATTERN: RegExp
  TASK_ID_SEPARATOR: string
  COMMIT_TASK_ID_PATTERN: RegExp
  UPPERCASE: string
  LOWERCASE: string
  COMMIT_DESCRIPTION_SEPARATOR: string
}

export type TParseCommitMessage = (
  commitMessage: string,
) => {
  commitTaskIds: string[]
  commitStatus: string
}

export interface CommitlintJiraUtils {
  parseCommitMessage: TParseCommitMessage
  commitlintJiraConstants: TCommitlintJiraConstants
}

export const commitlintJiraConstants: TCommitlintJiraConstants
export const parseCommitMessage: TParseCommitMessage

declare const commitlintJiraUtils: CommitlintJiraUtils
export default commitlintJiraUtils
