const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
//const Peer = require('simple-peer');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*

let srv = app.listen(6500);

app.use('/peerjs', require('peer').ExpressPeerServer(srv, {
	debug: true
}));

var peer = new Peer({
	host: location.hostname,
	port: location.port || (location.protocol === 'https:' ? 443 : 80),
	path: '/peerjs'
});

*/

app.get("/", async (req, res) => {

    res.sendFile(path.join(__dirname + '/index.html'));

});

app.get("/configs", async (req, res) => {

    let readConfig = fs.readFileSync(__dirname + '/config/' + 'task.json', 'utf8');

    res.status(200).end(readConfig);

});

app.get('/add', async (req, res) => {

    var uRL = 'http://localhost:6500/configs';

    // Fetch peer admin computing configuration data
    let config = await fetch(uRL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            }})
            .then(response=>response.json())
            .then(data=> {
               return data
            })
            .catch(err => console.log(err));

    if(config.most_recent_counting_number_added>=config.counting_number){

        res.redirect('/done');

    } else {
        
        try {
            await sendMsg(config);
        } catch(e) {
            console.log(e);
        }
        
        res.redirect('/add');
    
    }

});

app.post('/update', async (req, res) => {

    const {data} = req.body;

    console.log(data);

    async function writeData(data) {
        try { 
            return fs.writeFileSync(__dirname + '/config/' + 'task.json', JSON.stringify(data), 'utf8');
        }     
        catch (err) { 
            console.log('Problem writing to file.')
        }
    }

    await writeData(data);
    res.end();

});

app.get("/done", async (req, res) => {

    res.sendFile(path.join(__dirname + '/done.html'));

});

async function sendMsg(config){

    var pURL = 'http://localhost:6500/update';

    // Check if computation is complete
    if(config.most_recent_counting_number_added>=config.counting_number){

        res.redirect('/done');

    } else {

    function sum(n){
        return ((n*(n+1)/2));
    }

    // Add sum of current counting numbers in interval
    let current_interval_sum = sum(config.most_recent_counting_number_added+10)-sum(config.most_recent_counting_number_added-1);

    config.most_recent_counting_number_added = config.most_recent_counting_number_added+10;
    config.current_total = config.current_total+current_interval_sum;

    return new Promise((resolve, reject)=>{

    // Send processed data back to peer admin
    fetch(pURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({data:config})
    }) 
    .then(response => {
        resolve()
    })
    .catch(err => {
      console.log(err)
      reject()
     });
    })

    }
}

// Listen to app requests on port 6500
app.listen(6500, ()=>{
    console.log('App listening on Port 6500');
});

