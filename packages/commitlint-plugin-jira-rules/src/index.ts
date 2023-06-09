import { commitlintJiraConstants } from '../commitlint-jira-utils/src'
import { CommitlintPluginJira } from '../@types'
import jiraTaskIdMaxLengthRuleResolver from './rules/jiraTaskIdMaxLengthRuleResolver'
import jiraTaskIdMinLengthRuleResolver from './rules/jiraTaskIdMinLengthRuleResolver'
import jiraTaskIdEmptyRuleResolver from './rules/jiraTaskIdEmptyRuleResolver'
import jiraTaskIdCaseRuleResolver from './rules/jiraTaskIdCaseRuleResolver'
import jiraCommitStatusCaseRuleResolver from './rules/jiraCommitStatusCaseRuleResolver'
import jiraTaskIdProjectKeyRuleResolver from './rules/jiraTaskIdProjectKeyRuleResolver'

export const commitlintPluginJira: CommitlintPluginJira = {
  rules: {
    [commitlintJiraConstants.JIRA_RULES
      .taskIdEmpty]: jiraTaskIdEmptyRuleResolver,
    [commitlintJiraConstants.JIRA_RULES
      .taskIdMinLength]: jiraTaskIdMinLengthRuleResolver,
    [commitlintJiraConstants.JIRA_RULES
      .taskIdMaxLength]: jiraTaskIdMaxLengthRuleResolver,
    [commitlintJiraConstants.JIRA_RULES.taskIdCase]: jiraTaskIdCaseRuleResolver,
    [commitlintJiraConstants.JIRA_RULES
      .taskIdProjectKey]: jiraTaskIdProjectKeyRuleResolver,
    [commitlintJiraConstants.JIRA_RULES
      .commitStatusCase]: jiraCommitStatusCaseRuleResolver,
  },
}

export default commitlintPluginJira
