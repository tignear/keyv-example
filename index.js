const Keyv =require("keyv");
const keyv = new Keyv("postgresql://qjqmlgmvhhavbt:3a8f5fae4ffb8a6d94e53c4c77fd3a649a80c34129dd322c7f6e571175c865a6@ec2-34-197-141-7.compute-1.amazonaws.com:5432/df04rui3b64d3b",{table:"test"});
keyv.on("error",e=>console.log("error:",e))
async function main(){
    console.log("start");
    await keyv.set("cat","nyan").catch(e=>console.log("error:",e));
    console.log("set");
    console.log(await keyv.get("cat"));
}
main().catch(e=>console.log("error",e));
