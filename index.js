var mqtt = require('mqtt')

var options = {
username: "root",
password: "danthegoodman"
}

var client  = mqtt.connect('mqtt://159.65.168.71', options)

client.on('connect', function () {
  client.subscribe('test2')
  client.publish('presence', 'Hello mqtt')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
