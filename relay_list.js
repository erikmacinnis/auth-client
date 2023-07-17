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

let event = {
    kind: 10002,
    pubkey: pk,
    created_at: Math.floor(Date.now() / 1000),
    tags: [
        ["r", "wss://alicerelay.example.com"],
        ["r", "wss://brando-relay.com"],
        ["r", "wss://expensive-relay.example2.com", "write"],
        ["r", "wss://nostr-relay.example.com", "read"],
    ],
    content: '',
}

console.log(event)
event.id = getEventHash(event)
event.sig = signEvent(event, sk)
marshalled = JSON.stringify(event)

console.log(`["EVENT", `+ marshalled + `]`)