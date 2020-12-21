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
if (splitUp[0] == "testing") {
core.setOutput("mergeMessage", message)
} else {
    core.setFailed("Not valid merge")
}
// const message=JSON.stringify(github.event.commits[github.event.commits-1].message)
// const splitUp=message.split(' ')
// if (splitUp[0] === "Merge" && splitUp[1] === "pull" && splitUp[2] === "request") {
//     core.setOutput("mergeMessage", message)
// } else {
//     core.setFailed("Not valid merge")
// }
// const name=core.getInput("who-to-greet")
// console.log(`Hello ${name}`)

const time= new Date()
core.setOutput("time", time.toTimeString())

console.log(JSON.stringify(github.context, null, '\t'))
} catch (error) {
core.setFailed(error.message)
}