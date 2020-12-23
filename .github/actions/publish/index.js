const core=require("@actions/core")
const github=require("@actions/github")

//command to update dist/index.js is
//npx ncc build .github/actions/publish/index.js -o .github/actions/publish/dist
try {
    //throw new Error("Error")
    //this debug message will only appear if debug is enabled
    core.debug('debug message')
    //can also have a warning message that will appear in yellow
    core.warning("Warning message")
    //and error message that will appear in red but will just gibe you the error
    //and not make the action fail
    core.error("Error message")
    //core.secret puts anything inside to have an output of ***
   // core.setSecret(secret)
    //can also set setcret.  Whenever
    const headCommit=github.context.payload.head_commit
//check for merge from pull request
const committer=JSON.stringify(headCommit.committer.username)
// const committer=JSON.stringify(github.context.payload.commits[github.context.payload.commits.length-1].committer.username)
    if (committer === '"web-flow"') {
            //check name of pull request
    const message= JSON.stringify(headCommit.message.toUpperCase())
    if (message.includes("RELEASE") && message.includes("STUDIO")){
  console.log("messGE", message)
        core.setOutput("mergeMessage", "Successful merge")}
    else {
        core.setFailed("Invalid pr naming")
    }
    } else {
        core.setFailed("Not a pr merge")
    }

    console.log("head commit", JSON.stringify(headCommit, null, '\t'))
    //the core start and end group makes its insides expandable 
    core.startGroup("Logging github object")
    console.log(JSON.stringify(github.context.payload, null, '\t'))
    core.endGroup()
    //can pass this variable in action for example by rrunning 
    //echo $Hello
    core.exportVariable("Hello", "HELLO")
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


//core can set input and outputs and fail message
//can also also provide debug messages
//in github, under project settings 
// go into secrets "Add a new secret", Name for demo is ACTIONS_STEP_DEBUG
//value is true