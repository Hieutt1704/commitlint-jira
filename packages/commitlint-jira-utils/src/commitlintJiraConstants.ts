export const JIRA_RULES = {
  commitStatusCase: 'jira-commit-status-case',
  taskIdCase: 'jira-task-id-case',
  taskIdEmpty: 'jira-task-id-empty',
  taskIdMaxLength: 'jira-task-id-max-length',
  taskIdMinLength: 'jira-task-id-min-length',
  taskIdProjectKey: 'jira-task-id-project-key',
}

export const COMMIT_TASK_STATUS_PATTERN = /\[.*\]/gi
export const TASK_ID_SEPARATOR = '-'
export const UPPERCASE = 'uppercase'
export const LOWERCASE = 'lowercase'
export const COMMIT_DESCRIPTION_SEPARATOR = '\n'

/**
 * Adapted from rules at https://support.atlassian.com/bitbucket-cloud/docs/use-smart-commits/
 *
 * > Smart Commits only support the default Jira Software issue key format.
 * > This format is two or more uppercase letters, followed by a hyphen and the issue number,
 * > for example JRA - 123.
 */
export const COMMIT_TASK_ID_PATTERN = /([A-Z_0-9]{2,5}-\d+)/g
