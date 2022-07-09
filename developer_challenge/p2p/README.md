# Build a simple Peer to Peer Computing network

Liz is trying to add the first 100 million counting numbers in the fastest time possible, but using her computer alone would take a long time. So she calls a group of 9 friends with computers of their own. She wishes to use a Node.JS program that connects the 9 different computing devices (10 in total including her own) in a peer to peer computer network. Then working together, these computers can accomplish the task of adding the first 100 million counting numbers faster. 
  
Could you help Liz complete a simple Node.JS program she built to accomplish this task? 

What Liz has created so far is the app's skeleton and a json file named 'task.json' that keeps track of the current state of computation by listing the current total and the latest counting number added to that total. The skeleton app works fine on a single computer, but Liz would like it to work on multiple computers through a peer-to-peer network.

The contents of 'task.json':

``` json

{
    "most_recent_counting_number_added":0,
    "current_total":0,
    "counting_number":100000000
}

```

Each of the computers in the peer network should fetch and read the 'task.json' data file from Liz's computer and calculate the next total, then update the 'task.json' file with their latest total and the most recent counting number they added to that total.

As mentioned earlier, Liz has also built the project's skeleton app that works well on a single computer. Your job is to modify this skeleton app so that the computation can work on multiple computers through a Peer-to-peer computing network. 

App's Skeleton: https://github.com/TheAdamBC/Community/tree/main/developer_challenge/p2p

### REQUIREMENTS:

- Stack required: Node.JS, JavaScript/TypeScript, NPM, Express.

- Use any npm modules you think would be useful.

- We are particularly interested in knowing which npm module you'll use to implement the Peer-to-peer (P2P) messaging feature. We use IPFS. To your credit you could use another P2P communication module that you find better. 

### HOW IT SHOULD WORK:

- Take a look at the app's skeleton: https://github.com/TheAdamBC/Community/tree/main/developer_challenge/p2p

- The app's design MUST be decentralized in a peer to peer computing network. The 10 individuals should each download the application via a Github repository, install dependencies (npm install), then connect to Liz's computer via a network (internet, LAN or broadband wireless network - depending on your preference), and start the computation.

- DO NOT use a summation formula. We know this task can be achieved using a summation formula. The purpose here is NOT the final result, but rather demonstrating your ability to build a decentralized peer to peer computing platform.

### BONUS POINTS:

- It's up to you the developer to determine the best NPM modules to deploy for the project and the most ideal decentralized architecture or network protocol to use for resource distribution during the task's computation. We are particularly interested in knowing what NPM module(s) you will use to implement the peer-to-peer architecture. A custom implementation is also fine.

- You could also deploy a Queuing system to make the computation more efficient.

### HINT:

- Counting numbers start with 1:

  i.e, 1 + 2 + 3 + 4 + 5 + 6 + 7 ...... 100 Million = Total.

- The task is more efficient if each peer computer is allocated interval totals to add to the current total. For example the first computer could add numbers from 1 to 100,000 then add this to the current cumulative total, the next computer could add numbers from 100,001 to 200,000 and add this to the new current total, .... etc.

