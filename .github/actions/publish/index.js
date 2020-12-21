const core=require("@actions/core")
const github=require("@actions/github")

try {
//throw( new Error('some error message'))
// const gh=JSON.stringify(github)
// core.setOutput("mergeMessage", gh)
const context=core.getInput("github-object")
//const message=context.event.commits[context.event.commits-1].message
// if (context.event.commit)
core.setOutput("mergeMessage", context)
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

console.log(JSON.stringify(github, null, '\t'))
} catch (error) {
core.setFailed(error.message)
}