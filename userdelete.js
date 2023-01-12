import readLineSync from "readline-sync"
import chalk from "chalk"
import fs from "fs/promises"

async function userdelete(){
    console.clear()
    console.log(chalk.bold.underline.yellowBright("USER delete"));
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
    if(!mailcheck){
        throw("user does not exist")
    }else{
        let a = fileData.indexOf(mailcheck)
        let b = fileData.splice(a,1)
        console.log("deleted successfully")
    }
    

}
userdelete()