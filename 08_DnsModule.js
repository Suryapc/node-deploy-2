const dns = require('dns');

dns.lookup('yahoo.com', (err, address, family) => {
    if (err) throw err;
    console.log('address: %s, family: IPV %s', (address, family))
});

dns.resolve4('yahoo.com', (err,addresses) => {
    if (err) console.log(err);
    console.log(`address: ${JSON.stringify(addresses)}`);
});