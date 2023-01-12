import readLineSync from "readline-sync"
import fs from "fs/promises"
import chalk from "chalk"

async function usercreate(){
    console.clear()
    //Name,gmail,Pno,address,password,password2
    let username = readLineSync.question("Enter your name:")
    while(!username){
        username = readLineSync.question("Enter your name again:")
    }
    let mail = readLineSync.questionEMail("Enter your email:")
    while(!mail){
        mail = readLineSync.questionEMail("Enter your mail again:")
    }
    let Phone = readLineSync.question("Enter your phone NO:")
    while(!Phone){
        Phone = readLineSync.question("Enter your Pno again:")
    }
    let password = readLineSync.question("Enter your password:")
    while(!password){
        password = readLineSync.question("Enter your passoword correctly:")
    }
    let password2 = readLineSync.question("ENter again to confirm:")
    while(!password2){
        password2 = readLineSync.question("Enter your password again:")
    }
    while(password != password2){
        console.log("Password do not match")
        password2 = readLineSync.question("Enter your password again:")
    }
    let filedata =  await fs.readFile("../data.json")
    //await = is usually used to unwrap promises by passing a Promise as the expression . Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). 
    filedata = JSON.parse(filedata)
    // console.log(filedata)
    // console.log(filedata[0].mail)

    let emailcheck = filedata.find(ele=>{
        ele.mail == mail
    })
    if(emailcheck){
        return console.log("User Already Exist")
    }
    
    // console.log(filedata)

    let body = {username,mail,Phone,password}
    filedata.push(body)
    
    // console.log(filedata)

    await fs.writeFile("../data.json",JSON.stringify(filedata))



}
usercreate()