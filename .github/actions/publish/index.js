const core=require("@actions/core")
const github=require("@actions/github")

try {
//throw( new Error('some error message'))
// const gh=JSON.stringify(github)
// core.setOutput("mergeMessage", gh)
const context=JSON.stringify(github.context.payload)
console.log("context", context)
const message=core.getInput("github-object")
//const message =JSON.stringify(github.context.payload.commits[github.context.payload.commits-1], null, '\t')
const splitUp=message.split(' ')
//const first=splitUp[0]
//const message=context.event.commits[context.event.commits-1].message
//check for merge message
//if (splitUp[0] ==='"testing') {
    if (splitUp[0] === '"Merge' && splitUp[1] === "pull" && splitUp[2] === "request") {

core.setOutput("mergeMessage", message)
} else {
    core.setFailed("Not valid merge")
}
console.log("without quotes", message.split('"'))
console.log("MESSAGE", splitUp)
console.log(JSON.stringify(github.context.payload.commits[github.context.payload.commits-1], null, '\t'))
} catch (error) {
core.setFailed(error.message)
}