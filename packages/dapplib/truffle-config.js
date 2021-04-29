require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'idea knife sun tooth guard render remain purity inflict problem breeze two'; 
let testAccounts = [
"0x968b8011c35f0ab545527cf15cb7cf2f8663ed1df9770e2347b22df936107c00",
"0x6dd75f6e03f10fc7b39e68cf62262eea3c8339eac5ef5d2c96b2a09069784110",
"0x7c8ef78e8f0fe70218d694caf858103c19ceda8b2fc25f9749d4e16dbc0039ef",
"0xa027423dc4c829df12b88aefefc42119f57b95954f96fa83d16d3555aeb65e2c",
"0x928c88879d55ed6d0a848b0a2f5d44e35f6e5169b578e71b929ac5707bb73857",
"0xc23c5ae409c591d5fae7ef349fc0af0acdc0f9e1f113b1eeca2bcdb06c25ff54",
"0x03298cbca7a862ee48acb3b5102b363af334bfa5c3ca74d176b47f5888c61a11",
"0x3820fbefc1a44c9f8bd99cdbabfa18f46f1d3d9f1b9d28829c9207a0d7beae5e",
"0x4f8a64ae9c2ef19ea42e273bff099bb49b49b6ea7dba73f42f0db54310b1f356",
"0x449fac379b43fa383fa299dda1392ed1f522ec2b9f6398379f8575d03622f1a9"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

