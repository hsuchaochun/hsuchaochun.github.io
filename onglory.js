async function main() {
    let ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
    let ethereum_price = document.getElementById('ethereum-price');

    let update_button = document.getElementById("update_button");
    update_button.addEventListener("click", updatePrice);

    let u_price = document.getElementById("usd_price");
    let btc_price = document.getElementById("bitcoin_price");
    let eth_price = document.getElementById("ethereum_price");
    let bnb_price = document.getElementById("binancecoin_price");
    let matic_price = document.getElementById("maticNetwork_price");
    let sol_price = document.getElementById("solana_price");
    let shib_price = document.getElementById("shibaInu_price");
    let dot_price = document.getElementById("polkadot_price");
    let avax_price = document.getElementById("avalanche_price");
    let atom_price = document.getElementById("cosmos_price");
    let link_price = document.getElementById("chainlink_price");
    let near_price = document.getElementById("near_price");
    let mana_price = document.getElementById("decentraland_price");
    let sand_price = document.getElementById("theSandbox_price");
    let crv_price = document.getElementById("curveDaoToken_price");
    let ftt_price = document.getElementById("ftxToken_price");
    let gala_price = document.getElementById("gala_price");
    let dao_price = document.getElementById("daoMaker_price");
    let mc_price = document.getElementById("meritCircle_price");
    let stg_price = document.getElementById("stargateFinance_price");
    let pols_price = document.getElementById("polkastarter_price");
    let xava_price = document.getElementById("avalaunch_price");
    
    let u_total_amount = document.getElementById("usd_total_amount");
    let btc_total_amount = document.getElementById("bitcoin_total_amount");
    let eth_total_amount = document.getElementById("ethereum_total_amount");
    let bnb_total_amount = document.getElementById("binancecoin_total_amount");
    let matic_total_amount = document.getElementById("maticNetwork_total_amount");
    let sol_total_amount = document.getElementById("solana_total_amount");
    let shib_total_amount = document.getElementById("shibaInu_total_amount");
    let dot_total_amount = document.getElementById("polkadot_total_amount");
    let avax_total_amount = document.getElementById("avalanche_total_amount");
    let atom_total_amount = document.getElementById("cosmos_total_amount");
    let link_total_amount = document.getElementById("chainlink_total_amount");
    let near_total_amount = document.getElementById("near_total_amount");
    let mana_total_amount = document.getElementById("decentraland_total_amount");
    let sand_total_amount = document.getElementById("theSandbox_total_amount");
    let crv_total_amount = document.getElementById("curveDaoToken_total_amount");
    let ftt_total_amount = document.getElementById("ftxToken_total_amount");
    let gala_total_amount = document.getElementById("gala_total_amount");
    let dao_total_amount = document.getElementById("daoMaker_total_amount");
    let mc_total_amount = document.getElementById("meritCircle_total_amount");
    let stg_total_amount = document.getElementById("stargateFinance_total_amount");
    let pols_total_amount = document.getElementById("polkastarter_total_amount");
    let xava_total_amount = document.getElementById("avalaunch_total_amount");

    let u_total_val = document.getElementById("usd_total_val");
    let btc_total_val = document.getElementById("bitcoin_total_val");
    let eth_total_val = document.getElementById("ethereum_total_val");
    let bnb_total_val = document.getElementById("binancecoin_total_val");
    let matic_total_val = document.getElementById("maticNetwork_total_val");
    let sol_total_val = document.getElementById("solana_total_val");
    let shib_total_val = document.getElementById("shibaInu_total_val");
    let dot_total_val = document.getElementById("polkadot_total_val");
    let avax_total_val = document.getElementById("avalanche_total_val");
    let atom_total_val = document.getElementById("cosmos_total_val");
    let link_total_val = document.getElementById("chainlink_total_val");
    let near_total_val = document.getElementById("near_total_val");
    let mana_total_val = document.getElementById("decentraland_total_val");
    let sand_total_val = document.getElementById("theSandbox_total_val");
    let crv_total_val = document.getElementById("curveDaoToken_total_val");
    let ftt_total_val = document.getElementById("ftxToken_total_val");
    let gala_total_val = document.getElementById("gala_total_val");
    let dao_total_val = document.getElementById("daoMaker_total_val");
    let mc_total_val = document.getElementById("meritCircle_total_val");
    let stg_total_val = document.getElementById("stargateFinance_total_val");
    let pols_total_val = document.getElementById("polkastarter_total_val");
    let xava_total_val = document.getElementById("avalaunch_total_val");

    ws.onmessage = (event) => {
        let stockObject = JSON.parse(event.data);
        //console.log(stockObject.p);
        ethereum_price.innerText = stockObject.p;
    };

    const coin_set = ["bitcoin", "ethereum", "binancecoin", "matic-network", "solana", "shiba-inu", "polkadot", "avalanche-2", "cosmos", "chainlink", "near", "decentraland", "the-sandbox", "curve-dao-token", "ftx-token", "gala", "dao-maker", "merit-circle", "stargate-finance", "polkastarter", "avalaunch"];
    const coin_amount = [23.18, 774.75, 3155.45, 421838.38, 6318.10, 450182421.00, 8928.24, 94554.37, 2988.74, 4436.21, 6253.80, 606508.00, 64735.00, 8.05, 25.10, 58997.00, 50100.81, 5220.45, 1308.63, 30022.67, 10000.90, 4119008.36]
    let coin_str = ""
    let coin_obj_arr = [];
    for (i = 0; i < coin_set.length; i++) {
        coin_str += coin_set[i] + ',';
    }

    let fetch_url = 'https://api.coingecko.com/api/v3/simple/price?ids=' + coin_str + '&vs_currencies=usd';

    async function fetch_price(url = "") {
        await fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                for (key in data) {
                    coin_obj_arr.push({
                        name: key,
                        price: data[key].usd
                    });
                    //console.log(coin_obj_arr);
                }
            });
    };

    async function updatePrice() {

        coin_obj_arr = [];
        await fetch_price(fetch_url);

        for (i = 0; i < coin_set.length; i++) {
            switch (coin_obj_arr[i].name) {
                case coin_set[0]:   // bitcoin
                    btc_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    btc_total_amount.innerText = coin_amount[0].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    btc_total_val.innerText = (coin_obj_arr[i].price * coin_amount[0]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    btc_price.style.textAlign="right";
                    btc_total_amount.style.textAlign="right";
                    btc_total_val.style.textAlign="right";
                    break;
                case coin_set[1]:   // ethereum
                    eth_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    eth_total_amount.innerText = coin_amount[1].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    eth_total_val.innerText = (coin_obj_arr[i].price * coin_amount[1]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    eth_price.style.textAlign="right";
                    eth_total_amount.style.textAlign="right";
                    eth_total_val.style.textAlign="right";
                    break;
                case coin_set[2]:   // binancecoin
                    bnb_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    bnb_total_amount.innerText = coin_amount[2].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    bnb_total_val.innerText = (coin_obj_arr[i].price * coin_amount[2]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    bnb_price.style.textAlign="right";
                    bnb_total_amount.style.textAlign="right";
                    bnb_total_val.style.textAlign="right";
                    break;
                case coin_set[3]:   // matic-network
                    matic_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    matic_total_amount.innerText = coin_amount[3].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    matic_total_val.innerText = (coin_obj_arr[i].price * coin_amount[3]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    matic_price.style.textAlign="right";
                    matic_total_amount.style.textAlign="right";
                    matic_total_val.style.textAlign="right";
                    break;
                case coin_set[4]:   // solana
                    sol_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    sol_total_amount.innerText = coin_amount[4].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    sol_total_val.innerText = (coin_obj_arr[i].price * coin_amount[4]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    sol_price.style.textAlign="right";
                    sol_total_amount.style.textAlign="right";
                    sol_total_val.style.textAlign="right";
                    break;
                case coin_set[5]:   // shiba-inu
                    shib_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 8,  maximumFractionDigits: 8 });
                    shib_total_amount.innerText = coin_amount[5].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    shib_total_val.innerText = (coin_obj_arr[i].price * coin_amount[5]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    shib_price.style.textAlign="right";
                    shib_total_amount.style.textAlign="right";
                    shib_total_val.style.textAlign="right";
                    break;
                case coin_set[6]:   // polkadot
                    dot_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    dot_total_amount.innerText = coin_amount[6].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    dot_total_val.innerText = (coin_obj_arr[i].price * coin_amount[6]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    dot_price.style.textAlign="right";
                    dot_total_amount.style.textAlign="right";
                    dot_total_val.style.textAlign="right";
                    break;
                case coin_set[7]:   // avalanche-2
                    avax_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    avax_total_amount.innerText = coin_amount[7].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    avax_total_val.innerText = (coin_obj_arr[i].price * coin_amount[7]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    avax_price.style.textAlign="right";
                    avax_total_amount.style.textAlign="right";
                    avax_total_val.style.textAlign="right";
                    break;
                case coin_set[8]:   // cosmos
                    atom_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    atom_total_amount.innerText = coin_amount[8].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    atom_total_val.innerText = (coin_obj_arr[i].price * coin_amount[8]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    atom_price.style.textAlign="right";
                    atom_total_amount.style.textAlign="right";
                    atom_total_val.style.textAlign="right";
                    break;
                case coin_set[9]:   // chainlink
                    link_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    link_total_amount.innerText = coin_amount[9].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    link_total_val.innerHTML = (coin_obj_arr[i].price * coin_amount[9]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    link_price.style.textAlign="right";
                    link_total_amount.style.textAlign="right";
                    link_total_val.style.textAlign="right";
                    break;
                case coin_set[10]:  // near
                    near_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    near_total_amount.innerText = coin_amount[10].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    near_total_val.innerText = (coin_obj_arr[i].price * coin_amount[10]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    near_price.style.textAlign="right";
                    near_total_amount.style.textAlign="right";
                    near_total_val.style.textAlign="right";
                    break;
                case coin_set[11]:  // decentraland
                    mana_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    mana_total_amount.innerText = coin_amount[11].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    mana_total_val.innerText = (coin_obj_arr[i].price * coin_amount[11]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    mana_price.style.textAlign="right";
                    mana_total_amount.style.textAlign="right";
                    mana_total_val.style.textAlign="right";
                    break;
                case coin_set[12]:  // the-sandbox
                    sand_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    sand_total_amount.innerText = coin_amount[12].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    sand_total_val.innerText = (coin_obj_arr[i].price * coin_amount[12]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    sand_price.style.textAlign="right";
                    sand_total_amount.style.textAlign="right";
                    sand_total_val.style.textAlign="right";
                    break;
                case coin_set[13]:  // curve-dao-token
                    crv_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    crv_total_amount.innerText = coin_amount[13].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    crv_total_val.innerText = (coin_obj_arr[i].price * coin_amount[13]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    crv_price.style.textAlign="right";
                    crv_total_amount.style.textAlign="right";
                    crv_total_val.style.textAlign="right";
                    break;                
                case coin_set[14]:  // ftx-token
                    ftt_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    ftt_total_amount.innerText = coin_amount[14].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    ftt_total_val.innerText = (coin_obj_arr[i].price * coin_amount[14]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    ftt_price.style.textAlign="right";
                    ftt_total_amount.style.textAlign="right";
                    ftt_total_val.style.textAlign="right";
                    break;
                case coin_set[15]:  // gala
                    gala_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    gala_total_amount.innerText = coin_amount[15].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    gala_total_val.innerText = (coin_obj_arr[i].price * coin_amount[15]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    gala_price.style.textAlign="right";
                    gala_total_amount.style.textAlign="right";
                    gala_total_val.style.textAlign="right";
                    break;
                case coin_set[16]:  // dao-maker
                    dao_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    dao_total_amount.innerText = coin_amount[16].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    dao_total_val.innerText = (coin_obj_arr[i].price * coin_amount[16]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    dao_price.style.textAlign="right";
                    dao_total_amount.style.textAlign="right";
                    dao_total_val.style.textAlign="right";
                    break;
                case coin_set[17]:  // merit-circle
                    mc_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    mc_total_amount.innerText = coin_amount[17].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    mc_total_val.innerText = (coin_obj_arr[i].price * coin_amount[17]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    mc_price.style.textAlign="right";
                    mc_total_amount.style.textAlign="right";
                    mc_total_val.style.textAlign="right";
                    break;
                case coin_set[18]:  // stargate-finance
                    stg_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    stg_total_amount.innerText = coin_amount[18].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    stg_total_val.innerText = (coin_obj_arr[i].price * coin_amount[18]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    stg_price.style.textAlign="right";
                    stg_total_amount.style.textAlign="right";
                    stg_total_val.style.textAlign="right";
                    break;
                case coin_set[19]:  // polkastarter
                    pols_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    pols_total_amount.innerText = coin_amount[19].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    pols_total_val.innerText = (coin_obj_arr[i].price * coin_amount[19]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    pols_price.style.textAlign="right";
                    pols_total_amount.style.textAlign="right";
                    pols_total_val.style.textAlign="right";
                    break;
                case coin_set[20]:  // avalaunch
                    xava_price.innerText = coin_obj_arr[i].price.toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    xava_total_amount.innerText = coin_amount[20].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    xava_total_val.innerText = (coin_obj_arr[i].price * coin_amount[20]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
                    xava_price.style.textAlign="right";
                    xava_total_amount.style.textAlign="right";
                    xava_total_val.style.textAlign="right";
                    break;
            }
            // usd
            u_price.innerText = "1.00";
            u_total_amount.innerText = coin_amount[21].toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
            u_total_val.innerText = (1 * coin_amount[21]).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 });
            u_price.style.textAlign="right";
            u_total_amount.style.textAlign="right";
            u_total_val.style.textAlign="right";

        }

    };

    await updatePrice();
    // update every 30 sec
    setInterval(() => {
        updatePrice();
        console.log('interval update', coin_obj_arr)
    }, 30000);

    console.log('end', coin_obj_arr);
}

main();