import { COMMIT_TASK_ID_PATTERN, COMMIT_TASK_STATUS_PATTERN, COMMIT_DESCRIPTION_SEPARATOR, } from './commitlintJiraConstants';
const parseCommitMessage = rawCommitMessage => {
    const commitMessage = rawCommitMessage
        .split(COMMIT_DESCRIPTION_SEPARATOR)
        .filter(Boolean)[0];
    const status = commitMessage.match(COMMIT_TASK_STATUS_PATTERN);
    const commitStatus = status ? status[0].replace(/\[|\]/g, '') : '';
    const commitTaskIds = (commitMessage.match(COMMIT_TASK_ID_PATTERN) || [])
        .map(taskId => taskId.trim())
        .filter(taskId => taskId);
    return {
        commitTaskIds,
        commitStatus,
    };
};
export default parseCommitMessage;
