const core=require('@actions/core')
const github=require('@actions/github')

//command to update dist/index.js is
//npx ncc build .github/actions/issue/index.js -o .github/actions/issue/dist
async function run() {
try {
    const token=core.getInput('token')
    const title=core.getInput('title')
    const body=core.getInput('body')
    const assignees=core.getInput('assignees')

    //github package also has a javascript api client called octokit
    //https://octokit.github.io/rest.js/v18
    const octokit=new github.GitHub(token)
    const response=octokit.issues.create({
        // owner: github.context.repo.owner, 
        // repo: github.context.repo.repo, 
        ...github.context.repo,
        title,
        body,
        assignees: assignees ? assignees.split('\n') : undefined
    })

    core.setOutput('issue', JSON.stringify(response.data))
} catch (error) {
    core.setFailed(error.message)
}
}
//invokke it
run()