const core=require("@actions/core")
const github=require("@actions/github")

//command to update dist/index.js is
//npx ncc build .github/actions/publish/index.js -o .github/actions/publish/dist
try {
    const headCommit=github.context.payload.head_commit
//check for merge from pull request
const committer=JSON.stringify(headCommit.committer.username)
// const committer=JSON.stringify(github.context.payload.commits[github.context.payload.commits.length-1].committer.username)
    if (committer === '"web-flow"') {
    core.setOutput("mergeMessage", "Successful merge")
    } else {
        core.setFailed("Not a pr merge")
    }
    //check name of pull request
    console.log("head commit", JSON.stringify(headCommit, null, '\t'))
    console.log(JSON.stringify(github.context.payload, null, '\t'))
    } catch (error) {
    core.setFailed(error.message)
    }
// try {

// const context=JSON.stringify(github.context, null, '\t')
// const commit=context.payload.commits[context.payload.commits.length-1]
// const message=commit.message
// console.log("msg", message)
// console.log("committer", commit.committer)
// // console.log("context", context.payload.commits[context.payload.commits.length-1])

// // const message =JSON.stringify(github.context.payload.commits[github.context.payload.commits.length-1], null, '\t')
// const splitUp=message.split(' ')
// //const first=splitUp[0]
// //const message=context.event.commits[context.event.commits-1].message
// //check for merge message
// //if (splitUp[0] ==='"testing') {
//     if (splitUp[0] === '"Merge' && splitUp[1] === "pull" && splitUp[2] === "request") {

// core.setOutput("mergeMessage", message)
// } else {
//     core.setFailed("Not valid merge")
// }
// console.log("without quotes", message.split('"'))
// console.log("MESSAGE", splitUp)
// console.log(message)
// } catch (error) {
// core.setFailed(error.message)
// }