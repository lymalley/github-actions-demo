const core=require("@actions/core")
const github=require("@actions/github")

try {
//throw( new Error('some error message'))
// const gh=JSON.stringify(github)
// core.setOutput("mergeMessage", gh)
const message=core.getInput("github-object")
const splitUp=message.split(' ')
//const first=splitUp[0]
//const message=context.event.commits[context.event.commits-1].message
console.log("split", splitUp)
if (splitUp[0] == '"testing') {
core.setOutput("mergeMessage", message)
} else {
    core.setFailed("Not valid merge")
}

console.log("MESSAGE", splitUp)
console.log(JSON.stringify(github.context.payload.commits[github.context.payload.commits-1], null, '\t'))
} catch (error) {
core.setFailed(error.message)
}