const {
    generatePrivateKey, 
    getPublicKey, 
    validateEvent,
    verifySignature,
    signEvent,
    getEventHash,
  } = require('nostr-tools')

sk = "9cb4b3c5e96101d6d621a898fae7eb0f34505086bcca67a668c0e61d0725be1b"
pk = "c8af1bed462df07ad87e1678eeab9ebeb742e4cec52fdf771ca1a9214eca04c3"

challenge = "dfd2be93d33b0322a624ac24dd57d979f786235579cca6b14a149c0e7e09083b"

let event = {
    kind: 22242,
    pubkey: pk,
    created_at: Math.floor(Date.now() / 1000),
    tags: [
      ["challenge", challenge],
      ["relay", "ws://localhost:7447/ws"],
    ],
    content: '',
}
console.log(event)
event.id = getEventHash(event)
event.sig = signEvent(event, sk)
marshalled = JSON.stringify(event)
console.log(`["AUTH", `+ marshalled + `]`)
