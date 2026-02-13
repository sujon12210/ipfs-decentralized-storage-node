const { create } = require('kubo-rpc-client');
const config = require('./config');
const fs = require('fs');

async function uploadToIPFS(filePath) {
    const ipfs = create({ url: config.IPFS_RPC_URL });
    
    try {
        const fileData = fs.readFileSync(filePath);
        const { cid } = await ipfs.add(fileData);
        
        console.log('--- Upload Success ---');
        console.log(`Content ID (CID): ${cid}`);
        console.log(`Gateway URL: ${config.GATEWAY_URL}${cid}`);
        return cid;
    } catch (error) {
        console.error('Upload failed:', error.message);
    }
}

async function fetchFromIPFS(cid) {
    const ipfs = create({ url: config.IPFS_RPC_URL });
    
    try {
        const chunks = [];
        for await (const chunk of ipfs.cat(cid)) {
            chunks.push(chunk);
        }
        console.log('--- Data Retrieved ---');
        console.log(Buffer.concat(chunks).toString());
    } catch (error) {
        console.error('Retrieval failed:', error.message);
    }
}

// Example usage:
// uploadToIPFS('./hello.txt');
