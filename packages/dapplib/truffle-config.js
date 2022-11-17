require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remain huge grace hero flock slush'; 
let testAccounts = [
"0x9c0fe4239f7bd61bda240e2a16951fc2572a9a3a350dc44129c63de6bf045c1c",
"0xa65f574504238e413f9e11989d1efc083855c780dcfcaa7926836089d694fed8",
"0x09db4354986394b4a60d6036adbace308be6195226049f16d6b0f0fec136f2c1",
"0x0474fe662ef5d8ca390231ac3f9217c3e3ce344fa30231c6be9282beed4f43f8",
"0xa16e215b56adef21f7cf1f1f90bb3c8d16bac684ceef76845f81bb05aeb4b0fb",
"0x7e55d8098602e63ff21d91252dc9e444eac6c2e5b0bebad830f19e839607ac97",
"0x9613764b4f61509103c52abb9cbde27eb46a7e77e7e985c5637396efebbb0312",
"0xc8ab1eb71aca1b014090e0606f5a069706e2592d6a182adf45e5f2379e5a465b",
"0xf371f2f8de9a748f71a8f7f359cb441a736066c9ca6cc6563e496183551baacc",
"0xcad276c95c4d52cf6df5bec29fce75dfb2e1f7dbeed3c35c50445885a0932482"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

