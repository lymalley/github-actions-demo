const core=require("@actions/core")
const github=require("@actions/github")
try {
const event=core.getInput("github-object")
const committerUsername=core.getInput("committer-username")
  //  const context=JSON.stringify(github.context, null, '\t')
const committer=JSON.stringify(github.context.payload.commits[github.context.payload.commits.length-1].committer.username)
console.log(committerUsername)
console.log("here,", committer)
    // core.setOutput("mergeMessage", JSON.stringify(github.context.payload.commits, null, '\t'))
    if (committer === "web-flow") {
    core.setOutput("mergeMessage", committer)
    } else {
        core.setFailed("Not a pr merge")
    }
    // const message=commit.message
    // console.log("msg", message)
    // console.log("committer", commit.committer)
    
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