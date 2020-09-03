const express = require ("express")

const server = express()

const PORT = 5000

const users =[
{
    id: "a_unique_id", // hint: use the shortid npm package to generate it
    name: "Jane Doe", // String, required
    bio: "Not Tarzan's Wife, another Jane",  // String, required
  }
]
server.get('/api/users', (req, res) => {
    res.json(users);
})

server.get('/api/users/:id', (req, res) => {
    res.json(users)
})
server.post('/api/users', (req, res) =>{
    const UsersInfo = req.body;
    UsersInfo.id = shortid.generate()
    Users.push(UsersInfo);
    res.status(201).json(UsersInfo)
})

server.put('/api/users/:id', (req, res) => {
 const {id} = req.params;
 const changes = req.body;

 let index = users.findIndex(user => user.id ===id);

 if (index !==-1){
     users[index] =changes;
     res.status(200).json(users[index])
 }else{
     res.status(400).json({message: "User Not Found"})
 }
})

server.delete('/api/hubs/:id', (req, res) => {
    const { id } = req.params;
    const deleted = hubs.find(hub => hub.id === id);
    if (deleted) {
        hubs = hubs.filter(hub => hub.id !== id);
        res.status(200).json(deleted);
    } else {
        res.status(404).json({message: "id not found"});
    }
});
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})