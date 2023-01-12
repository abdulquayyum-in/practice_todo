import readLineSync from "readline-sync"
import chalk from "chalk"
import fs from "fs/promises"

async function userlogin(){
    console.clear()
    console.log(chalk.bold.underline.yellowBright("USER LOGIN"));
    let mail = readLineSync.questionEMail("Enter an email:")
    while(!mail){
        mail = readLineSync.questionEMail("Enter an email:")
    }
    let password = readLineSync.question("Enter your password:")
    while(!password){
        password = readLineSync.question("Enter your password:")
    }

    let filedata = await fs.readFile("../data.json")
    filedata = JSON.parse(filedata)
    // console.log(filedata)

    let mailcheck = filedata.find(ele => ele.mail == mail)
    // let mailcheck = filedata.find(function(ele){
    //     return ele.mail == mail
    // })

    let passcheck = filedata.find(ele=>ele.password == password)
    if(!mailcheck && !passcheck){
        return console.log("Unauthorised Access")
    }else{
        console.log("user login successful")
    }



}
userlogin()