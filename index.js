import Web3 from 'web3';
import { HttpProvider } from 'web3-providers-http';

const INFURA_URL = process.env.INFURA_URL;
const provider = new HttpProvider(INFURA_URL);
const web3 = new Web3(provider);

const address = process.argv[2];
(async () => {
    try{
        const balanceWei = await web3.eth.getBalance(address);
        const balanceEth = web3.utils.fromWei(balanceWei, "ether");
        console.log(`Balance for ${address}: ${balanceEth}`);
    } catch (err){
        console.error("Error fetching balance: ", err.message);
    }
})