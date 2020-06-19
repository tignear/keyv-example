const Keyv =require("keyv");
const keyv = new Keyv('postgresql://postgres:arfw5369@localhost:5432/keyvtest',{table:"test"});
keyv.on("error",e=>console.log("error:",e))
async function main(){
    console.log("start");
    console.log(await (await keyv.opts.store.opts.connect())("version()"))
    await keyv.set("cat","nyan").catch(e=>console.log("error:",e));
    console.log("set");
    console.log(await keyv.get("cat"));
}
main().catch(e=>console.log("error",e));
