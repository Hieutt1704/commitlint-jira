import parseCommitMessage from '../parseCommitMessage'

describe('commitlintPluginJiraTests', () => {
  const testCommitMessages = {
    singleScope: 'IB-2121: test commit message',
    multiScope: 'IB-2121, IB-21: test commit message',
    singleScopeWipTask: '[WIP]IB-2121: test commit message',
    multiScopeWipTask: '[WIP]IB-2121, IB-21: test commit message',
    emptyTaskIds: ': my commit message',
    // test data for this issue: https://github.com/Gherciu/commitlint-jira/issues/7
    multiCommitPartsSeparator:
      'IB-2121: test commit message http://gherciu.github.io',
    // test data for issue: https://github.com/Gherciu/commitlint-jira/issues/6
    multiLineCommit: `
      IB-2121: test commit message
      My commit message description
        - SUBTASK-1: I added a new feature
        * SUBTASK-2: I fixed a issue
    `,
    withConventionalCommit: 'chore(work): ND-1234 test commit message',
  }

  it('should return correct commitTaskIds', () => {
    expect(
      parseCommitMessage(testCommitMessages.singleScope).commitTaskIds,
    ).toEqual(['IB-2121'])
    expect(
      parseCommitMessage(testCommitMessages.singleScopeWipTask).commitTaskIds,
    ).toEqual(['IB-2121'])
    expect(
      parseCommitMessage(testCommitMessages.multiScope).commitTaskIds,
    ).toEqual(['IB-2121', 'IB-21'])
    expect(
      parseCommitMessage(testCommitMessages.multiScopeWipTask).commitTaskIds,
    ).toEqual(['IB-2121', 'IB-21'])
  })

  it('should return correct commitStatus', () => {
    expect(
      parseCommitMessage(testCommitMessages.singleScopeWipTask).commitStatus,
    ).toEqual('WIP')
    expect(
      parseCommitMessage(testCommitMessages.multiScopeWipTask).commitStatus,
    ).toEqual('WIP')
  })

  it('should return empty array of taskIds', () => {
    expect(
      parseCommitMessage(testCommitMessages.emptyTaskIds).commitTaskIds,
    ).toEqual([])
  })

  it('should return correct taskIds and commit footer if a url is added in commit message or multiple commit status separators', () => {
    expect(
      parseCommitMessage(testCommitMessages.multiCommitPartsSeparator)
        .commitTaskIds,
    ).toEqual(['IB-2121'])
  })

  it('should return correct taskIds and commit footer if is provided a multiline commit message used for description', () => {
    expect(
      parseCommitMessage(testCommitMessages.multiLineCommit).commitTaskIds,
    ).toEqual(['IB-2121'])
  })

  it('should return correct taskIds with a conventional commit formatter', () => {
    expect(
      parseCommitMessage(testCommitMessages.withConventionalCommit)
        .commitTaskIds,
    ).toEqual(['ND-1234'])
  })
})
