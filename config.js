

module.exports = {
  TOKEN: "MTMzMjgyMzU4NDE1ODEyNjEzMA.Gv0AZI.7kYtq9Xdo-SeUI8dQRLKdvN6YFbteAoVw5rJgo",
  language: "en",
  ownerID: ["1311795228201717845", ""], 
  mongodbUri : "mongodb+srv://niksa11:nedimbog1@cluster0.ktcyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "/bright", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
    {
      name: "Catfein ID",
      password: "catfein",
      host: "lava.catfein.com",
      port: 4000,
      secure: false
    },
    { 
      name: "saher",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
