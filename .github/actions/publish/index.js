const core=require("@actions/core")
const github=require("@actions/github")

try {
//throw( new Error('some error message'))
core.setOutput("mergeMessage", JSON.stringify(github.context.payload))
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