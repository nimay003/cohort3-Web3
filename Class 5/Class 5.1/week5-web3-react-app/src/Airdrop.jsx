import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop(){
    // hook
    const wallet = useWallet();
    // alert(wallet.publicKey.toString());
    const { connection } = useConnection();

    async function sendAirdropToUser(){
        const amount = document.getElementById("publicKey").value;
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }
    
    return(
        <div>
            <input id="publicKey" type="text" placeholder="Amout" />
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    )
}