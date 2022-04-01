const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios');
const app = express();
const querystring = require('querystring');
var cors = require('cors');
const cookieParser = require("cookie-parser");
var request = require('request');
var events = require("events")
var eventEmitter = new events.EventEmitter();
const eventListeners = require('events').EventEmitter.listenerCount


//Static files
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// var jsonId = '';
// var trackingToken = '';
// var awsId = '';

app.post("/login", async(req, res) => {

    const j_username = req.body.j_username;
    const j_password = req.body.j_password;

    if (j_username == "" || j_username == undefined || j_username == null) {
        return res.json({ statusCode: 401, statusMsg: "username required" })
    }

    if (j_password == "" || j_password == undefined || j_password == null) {
        return res.json({ statusCode: 402, statusMsg: "password required" })
    }

    const article = {
        "j_username": j_username,
        "j_password": j_password,
        "loginType": "PARTNER_API"
    }

    let response = null;
        try {

            response = await axios({
                method: 'post',
                url: 'https://stage-sc.consumerdirect.com/external-login',
                headers: {
                    'Authorization': 'Basic Y3JlZGl0c2Vuc2VpOnRlbWlkZW50aW91cw==',
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: querystring.stringify(article)
            });

            console.log("response.data.success",response.data.success)

            if(response.data.success == true ){
                const header = response.headers
                const cookiedata = header["set-cookie"]
                const cookiedata_jsonId = cookiedata[0];
                const cookiedata_trackingToken = cookiedata[2];
                const cookiedata_awsId = cookiedata[5];
                var jsonId = cookiedata_jsonId.split(";")[0].split("=")[1]
                var trackingToken = cookiedata_trackingToken.split(";")[0].split("=")[1]
                var awsId = cookiedata_awsId.split(";")[0].split("=")[1]

                try{
        
                    const report = await axios({
                        method: 'GET',
                        url: 'https://stage-sc.consumerdirect.com/member/credit-report/3b/simple.htm?format=json',
                        headers: {
                            'Authorization': 'Basic Y3JlZGl0c2Vuc2VpOnRlbWlkZW50aW91cw==',
                            "accept": "application/x-www-form-urlencoded",
                            "Cookie": `TRACKING=${trackingToken};AWSELB=${awsId}; JSESSIONID=${jsonId}`
                            }  
                        },
                    );

                  if(report){
                      var data1 = report.data
                    return  res.send(data1)
                  }else{
                      return res.json({statusCode:500,statusMsg:"oop! somthing went wrong"})
                  }

                }catch(error){
                    console.log(error)
                }
            }
        } catch (ex) {
            response = null;
            return res.json({ statusMsg: ex.message })
        }
    
    });




// app.get("/credit_report", async (req, res) => {


//     let response = null;

//     new Promise(async (resolve, reject) => {
//         try {
           
//             response = await axios({
//                 method: 'GET',
//                 url: 'https://stage-sc.consumerdirect.com/member/credit-report/3b/simple.htm?format=json',
//                 headers: {
//                     'Authorization': 'Basic Y3JlZGl0c2Vuc2VpOnRlbWlkZW50aW91cw==',
//                     "accept": "application/x-www-form-urlencoded",
//                     "Cookie": "PID=00004;TRACKING=1db9ab59-8792-45fc-b171-e2cf05a8b9fb;AWSELB=B9130D2D148E7E2A3BACAE4393BDC54AC658302830A51E7AF13A692F5D2A57251B237547C7BC7E8B046934003A82D547E0F8AA6993D9D53F8BF187BB17B7A9EF18DD362B8CCEAF948C863DC12490402ED9C557EE46; JSESSIONID=227B53A1E2BC38AA9F04A16C63E33E4F"
//                     }  
//                 },
//             );
//         } catch (ex) {
//             response = null;
//             console.log("ex",ex.toString())
//             return res.json({ statusMsg: ex })

//         }
//         if (response) {
//             const json = response.data;
//             // console.log("json", json)
//             return res.send(json)
//         }
//     });

 
// })


app.listen(2000, (error) => {
    if (error) {
        console.log("error", error)
    } else {
        console.log("server in running on 2000");
    }
})



