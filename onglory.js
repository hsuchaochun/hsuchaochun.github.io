async function main() {
    let ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
    let ethereum_price = document.getElementById('ethereum-price');

    let update_button = document.getElementById("update_button");
    update_button.addEventListener("click", updatePrice);

    let u_symbol_ele = document.getElementById("usd_symbol");
    let btc_symbol_ele = document.getElementById("bitcoin_symbol");
    let eth_symbol_ele = document.getElementById("ethereum_symbol");
    let bnb_symbol_ele = document.getElementById("binancecoin_symbol");
    let matic_symbol_ele = document.getElementById("maticNetwork_symbol");
    let sol_symbol_ele = document.getElementById("solana_symbol");
    let shib_symbol_ele = document.getElementById("shibaInu_symbol");
    let dot_symbol_ele = document.getElementById("polkadot_symbol");
    let avax_symbol_ele = document.getElementById("avalanche_symbol");
    let atom_symbol_ele = document.getElementById("cosmos_symbol");
    let link_symbol_ele = document.getElementById("chainlink_symbol");
    let near_symbol_ele = document.getElementById("near_symbol");
    let mana_symbol_ele = document.getElementById("decentraland_symbol");
    let sand_symbol_ele = document.getElementById("theSandbox_symbol");
    let crv_symbol_ele = document.getElementById("curveDaoToken_symbol");
    let ftt_symbol_ele = document.getElementById("ftxToken_symbol");
    let gala_symbol_ele = document.getElementById("gala_symbol");
    let dao_symbol_ele = document.getElementById("daoMaker_symbol");
    let mc_symbol_ele = document.getElementById("meritCircle_symbol");
    let stg_symbol_ele = document.getElementById("stargateFinance_symbol");
    let pols_symbol_ele = document.getElementById("polkastarter_symbol");
    let xava_symbol_ele = document.getElementById("avalaunch_symbol");
    let coin_symbol_ele_set = [u_symbol_ele, btc_symbol_ele, eth_symbol_ele, bnb_symbol_ele, matic_symbol_ele, sol_symbol_ele, shib_symbol_ele, dot_symbol_ele, avax_symbol_ele, atom_symbol_ele, link_symbol_ele, near_symbol_ele, mana_symbol_ele, sand_symbol_ele, crv_symbol_ele, ftt_symbol_ele, gala_symbol_ele, dao_symbol_ele, mc_symbol_ele, stg_symbol_ele, pols_symbol_ele, xava_symbol_ele];

    let u_price_ele = document.getElementById("usd_price");
    let btc_price_ele = document.getElementById("bitcoin_price");
    let eth_price_ele = document.getElementById("ethereum_price");
    let bnb_price_ele = document.getElementById("binancecoin_price");
    let matic_price_ele = document.getElementById("maticNetwork_price");
    let sol_price_ele = document.getElementById("solana_price");
    let shib_price_ele = document.getElementById("shibaInu_price");
    let dot_price_ele = document.getElementById("polkadot_price");
    let avax_price_ele = document.getElementById("avalanche_price");
    let atom_price_ele = document.getElementById("cosmos_price");
    let link_price_ele = document.getElementById("chainlink_price");
    let near_price_ele = document.getElementById("near_price");
    let mana_price_ele = document.getElementById("decentraland_price");
    let sand_price_ele = document.getElementById("theSandbox_price");
    let crv_price_ele = document.getElementById("curveDaoToken_price");
    let ftt_price_ele = document.getElementById("ftxToken_price");
    let gala_price_ele = document.getElementById("gala_price");
    let dao_price_ele = document.getElementById("daoMaker_price");
    let mc_price_ele = document.getElementById("meritCircle_price");
    let stg_price_ele = document.getElementById("stargateFinance_price");
    let pols_price_ele = document.getElementById("polkastarter_price");
    let xava_price_ele = document.getElementById("avalaunch_price");
    let u_price = 1.0, btc_price = 0.0, eth_price = 0.0, bnb_price = 0.0, matic_price = 0.0, sol_price = 0.0, shib_price = 0.0, dot_price = 0.0, avax_price = 0.0, atom_price = 0.0, link_price = 0.0, near_price = 0.0, mana_price = 0.0, sand_price = 0.0, crv_price = 0.0, ftt_price = 0.0, gala_price = 0.0, dao_price = 0.0, mc_price = 0.0, stg_price = 0.0, pols_price = 0.0, xava_price = 0.0;
    let coin_price_set = [u_price, btc_price, eth_price, bnb_price, matic_price, sol_price, shib_price, dot_price, avax_price, atom_price, link_price, near_price, mana_price, sand_price, crv_price, ftt_price, gala_price, dao_price, mc_price, stg_price, pols_price, xava_price];
    let coin_price_ele_set = [u_price_ele, btc_price_ele, eth_price_ele, bnb_price_ele, matic_price_ele, sol_price_ele, shib_price_ele, dot_price_ele, avax_price_ele, atom_price_ele, link_price_ele, near_price_ele, mana_price_ele, sand_price_ele, crv_price_ele, ftt_price_ele, gala_price_ele, dao_price_ele, mc_price_ele, stg_price_ele, pols_price_ele, xava_price_ele];

    let u_total_amount_ele = document.getElementById("usd_total_amount");
    let btc_total_amount_ele = document.getElementById("bitcoin_total_amount");
    let eth_total_amount_ele = document.getElementById("ethereum_total_amount");
    let bnb_total_amount_ele = document.getElementById("binancecoin_total_amount");
    let matic_total_amount_ele = document.getElementById("maticNetwork_total_amount");
    let sol_total_amount_ele = document.getElementById("solana_total_amount");
    let shib_total_amount_ele = document.getElementById("shibaInu_total_amount");
    let dot_total_amount_ele = document.getElementById("polkadot_total_amount");
    let avax_total_amount_ele = document.getElementById("avalanche_total_amount");
    let atom_total_amount_ele = document.getElementById("cosmos_total_amount");
    let link_total_amount_ele = document.getElementById("chainlink_total_amount");
    let near_total_amount_ele = document.getElementById("near_total_amount");
    let mana_total_amount_ele = document.getElementById("decentraland_total_amount");
    let sand_total_amount_ele = document.getElementById("theSandbox_total_amount");
    let crv_total_amount_ele = document.getElementById("curveDaoToken_total_amount");
    let ftt_total_amount_ele = document.getElementById("ftxToken_total_amount");
    let gala_total_amount_ele = document.getElementById("gala_total_amount");
    let dao_total_amount_ele = document.getElementById("daoMaker_total_amount");
    let mc_total_amount_ele = document.getElementById("meritCircle_total_amount");
    let stg_total_amount_ele = document.getElementById("stargateFinance_total_amount");
    let pols_total_amount_ele = document.getElementById("polkastarter_total_amount");
    let xava_total_amount_ele = document.getElementById("avalaunch_total_amount");
    let u_total_amount = 0.0, btc_total_amount = 0.0, eth_total_amount = 0.0, bnb_total_amount = 0.0, matic_total_amount = 0.0, sol_total_amount = 0.0, shib_total_amount = 0.0, dot_total_amount = 0.0, avax_total_amount = 0.0, atom_total_amount = 0.0, link_total_amount = 0.0, near_total_amount = 0.0, mana_total_amount = 0.0, sand_total_amount = 0.0, crv_total_amount = 0.0, ftt_total_amount = 0.0, gala_total_amount = 0.0, dao_total_amount = 0.0, mc_total_amount = 0.0, stg_total_amount = 0.0, pols_total_amount = 0.0, xava_total_amount = 0.0;
    let coin_total_amount_set = [u_total_amount, btc_total_amount, eth_total_amount, bnb_total_amount, matic_total_amount, sol_total_amount, shib_total_amount, dot_total_amount, avax_total_amount, atom_total_amount, link_total_amount, near_total_amount, mana_total_amount, sand_total_amount, crv_total_amount, ftt_total_amount, gala_total_amount, dao_total_amount, mc_total_amount, stg_total_amount, pols_total_amount, xava_total_amount];
    let coin_total_amount_ele_set = [u_total_amount_ele, btc_total_amount_ele, eth_total_amount_ele, bnb_total_amount_ele, matic_total_amount_ele, sol_total_amount_ele, shib_total_amount_ele, dot_total_amount_ele, avax_total_amount_ele, atom_total_amount_ele, link_total_amount_ele, near_total_amount_ele, mana_total_amount_ele, sand_total_amount_ele, crv_total_amount_ele, ftt_total_amount_ele, gala_total_amount_ele, dao_total_amount_ele, mc_total_amount_ele, stg_total_amount_ele, pols_total_amount_ele, xava_total_amount_ele];

    let u_total_val_ele = document.getElementById("usd_total_val");
    let btc_total_val_ele = document.getElementById("bitcoin_total_val");
    let eth_total_val_ele = document.getElementById("ethereum_total_val");
    let bnb_total_val_ele = document.getElementById("binancecoin_total_val");
    let matic_total_val_ele = document.getElementById("maticNetwork_total_val");
    let sol_total_val_ele = document.getElementById("solana_total_val");
    let shib_total_val_ele = document.getElementById("shibaInu_total_val");
    let dot_total_val_ele = document.getElementById("polkadot_total_val");
    let avax_total_val_ele = document.getElementById("avalanche_total_val");
    let atom_total_val_ele = document.getElementById("cosmos_total_val");
    let link_total_val_ele = document.getElementById("chainlink_total_val");
    let near_total_val_ele = document.getElementById("near_total_val");
    let mana_total_val_ele = document.getElementById("decentraland_total_val");
    let sand_total_val_ele = document.getElementById("theSandbox_total_val");
    let crv_total_val_ele = document.getElementById("curveDaoToken_total_val");
    let ftt_total_val_ele = document.getElementById("ftxToken_total_val");
    let gala_total_val_ele = document.getElementById("gala_total_val");
    let dao_total_val_ele = document.getElementById("daoMaker_total_val");
    let mc_total_val_ele = document.getElementById("meritCircle_total_val");
    let stg_total_val_ele = document.getElementById("stargateFinance_total_val");
    let pols_total_val_ele = document.getElementById("polkastarter_total_val");
    let xava_total_val_ele = document.getElementById("avalaunch_total_val");
    let u_total_val = 0.0, btc_total_val = 0.0, eth_total_val = 0.0, bnb_total_val = 0.0, matic_total_val = 0.0, sol_total_val = 0.0, shib_total_val = 0.0, dot_total_val = 0.0, avax_total_val = 0.0, atom_total_val = 0.0, link_total_val = 0.0, near_total_val = 0.0, mana_total_val = 0.0, sand_total_val = 0.0, crv_total_val = 0.0, ftt_total_val = 0.0, gala_total_val = 0.0, dao_total_val = 0.0, mc_total_val = 0.0, stg_total_val = 0.0, pols_total_val = 0.0, xava_total_val = 0.0;
    let coin_total_val_set = [u_total_val, btc_total_val, eth_total_val, bnb_total_val, matic_total_val, sol_total_val, shib_total_val, dot_total_val, avax_total_val, atom_total_val, link_total_val, near_total_val, mana_total_val, sand_total_val, crv_total_val, ftt_total_val, gala_total_val, dao_total_val, mc_total_val, stg_total_val, pols_total_val, xava_total_val]
    let coin_total_val_ele_set = [u_total_val_ele, btc_total_val_ele, eth_total_val_ele, bnb_total_val_ele, matic_total_val_ele, sol_total_val_ele, shib_total_val_ele, dot_total_val_ele, avax_total_val_ele, atom_total_val_ele, link_total_val_ele, near_total_val_ele, mana_total_val_ele, sand_total_val_ele, crv_total_val_ele, ftt_total_val_ele, gala_total_val_ele, dao_total_val_ele, mc_total_val_ele, stg_total_val_ele, pols_total_val_ele, xava_total_val_ele];

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
                    btc_price = coin_obj_arr[i].price;
                    btc_total_amount = coin_amount[0];
                    btc_total_val = btc_price * btc_total_amount;
                    break;
                case coin_set[1]:   // ethereum
                    eth_price = coin_obj_arr[i].price;
                    eth_total_amount = coin_amount[1];
                    eth_total_val = eth_price * eth_total_amount;
                    break;
                case coin_set[2]:   // binancecoin
                    bnb_price = coin_obj_arr[i].price;
                    bnb_total_amount = coin_amount[2];
                    bnb_total_val = bnb_price * bnb_total_amount;
                    break;
                case coin_set[3]:   // matic-network
                    matic_price = coin_obj_arr[i].price;
                    matic_total_amount = coin_amount[3];
                    matic_total_val = matic_price * matic_total_amount;
                    break;
                case coin_set[4]:   // solana
                    sol_price = coin_obj_arr[i].price;
                    sol_total_amount = coin_amount[4];
                    sol_total_val = sol_price * sol_total_amount;
                    break;
                case coin_set[5]:   // shiba-inu
                    shib_price = coin_obj_arr[i].price;
                    shib_total_amount = coin_amount[5];
                    shib_total_val = shib_price * shib_total_amount;
                    break;
                case coin_set[6]:   // polkadot
                    dot_price = coin_obj_arr[i].price;
                    dot_total_amount = coin_amount[6];
                    dot_total_val = dot_price * dot_total_amount;
                    break;
                case coin_set[7]:   // avalanche-2
                    avax_price = coin_obj_arr[i].price;
                    avax_total_amount = coin_amount[7];
                    avax_total_val = avax_price * avax_total_amount;
                    break;
                case coin_set[8]:   // cosmos
                    atom_price = coin_obj_arr[i].price;
                    atom_total_amount = coin_amount[8];
                    atom_total_val = atom_price * atom_total_amount;
                    break;
                case coin_set[9]:   // chainlink
                    link_price = coin_obj_arr[i].price;
                    link_total_amount = coin_amount[9];
                    link_total_val = link_price * link_total_amount;
                    break;
                case coin_set[10]:  // near
                    near_price = coin_obj_arr[i].price;
                    near_total_amount = coin_amount[10];
                    near_total_val = near_price * near_total_amount;
                    break;
                case coin_set[11]:  // decentraland
                    mana_price = coin_obj_arr[i].price;
                    mana_total_amount = coin_amount[11];
                    mana_total_val = mana_price * mana_total_amount;
                    break;
                case coin_set[12]:  // the-sandbox
                    sand_price = coin_obj_arr[i].price;
                    sand_total_amount = coin_amount[12];
                    sand_total_val = coin_obj_arr[i].price * coin_amount[12];
                    break;
                case coin_set[13]:  // curve-dao-token
                    crv_price = coin_obj_arr[i].price;
                    crv_total_amount = coin_amount[13];
                    crv_total_val = crv_price * crv_total_amount;
                    break;
                case coin_set[14]:  // ftx-token
                    ftt_price = coin_obj_arr[i].price;
                    ftt_total_amount = coin_amount[14];
                    ftt_total_val = ftt_price * ftt_total_amount;
                    break;
                case coin_set[15]:  // gala
                    gala_price = coin_obj_arr[i].price;
                    gala_total_amount = coin_amount[15];
                    gala_total_val = gala_price * gala_total_amount;
                    break;
                case coin_set[16]:  // dao-maker
                    dao_price = coin_obj_arr[i].price;
                    dao_total_amount = coin_amount[16];
                    dao_total_val = dao_price * dao_total_amount;
                    break;
                case coin_set[17]:  // merit-circle
                    mc_price = coin_obj_arr[i].price;
                    mc_total_amount = coin_amount[17];
                    mc_total_val = mc_price * mc_total_amount;
                    break;
                case coin_set[18]:  // stargate-finance
                    stg_price = coin_obj_arr[i].price;
                    stg_total_amount = coin_amount[18];
                    stg_total_val = stg_price * stg_total_amount;
                    break;
                case coin_set[19]:  // polkastarter
                    pols_price = coin_obj_arr[i].price;
                    pols_total_amount = coin_amount[19];
                    pols_total_val = pols_price * pols_total_amount;
                    break;
                case coin_set[20]:  // avalaunch
                    xava_price = coin_obj_arr[i].price;
                    xava_total_amount = coin_amount[20];
                    xava_total_val = xava_price * xava_total_amount;
                    break;
            };

        };

        // usd
        u_price = 1.0;
        u_total_amount = coin_amount[21];
        u_total_val = u_price * u_total_amount;

        coin_price_set = [u_price, btc_price, eth_price, bnb_price, matic_price, sol_price, shib_price, dot_price, avax_price, atom_price, link_price, near_price, mana_price, sand_price, crv_price, ftt_price, gala_price, dao_price, mc_price, stg_price, pols_price, xava_price];
        coin_total_amount_set = [u_total_amount, btc_total_amount, eth_total_amount, bnb_total_amount, matic_total_amount, sol_total_amount, shib_total_amount, dot_total_amount, avax_total_amount, atom_total_amount, link_total_amount, near_total_amount, mana_total_amount, sand_total_amount, crv_total_amount, ftt_total_amount, gala_total_amount, dao_total_amount, mc_total_amount, stg_total_amount, pols_total_amount, xava_total_amount];
        coin_total_val_set = [u_total_val, btc_total_val, eth_total_val, bnb_total_val, matic_total_val, sol_total_val, shib_total_val, dot_total_val, avax_total_val, atom_total_val, link_total_val, near_total_val, mana_total_val, sand_total_val, crv_total_val, ftt_total_val, gala_total_val, dao_total_val, mc_total_val, stg_total_val, pols_total_val, xava_total_val]
        for (i = 0; i < coin_price_ele_set.length; i++) {
            let digit = 2;
            if (coin_symbol_ele_set[i].innerText == "SHIB") {
                digit = 8;
            };
            coin_price_ele_set[i].innerText = coin_price_set[i].toLocaleString(undefined, { minimumFractionDigits: digit, maximumFractionDigits: digit });
            coin_total_amount_ele_set[i].innerText = coin_total_amount_set[i].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            coin_total_val_ele_set[i].innerText = coin_total_val_set[i].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            coin_price_ele_set[i].style.textAlign = "right";
            coin_total_amount_ele_set[i].style.textAlign = "right";
            coin_total_val_ele_set[i].style.textAlign = "right";
        };

    };

    async function pieChart() {

        // set the data
        var data = [];
        for (i = 0; i < coin_symbol_ele_set.length; i++) {
            data.push({
                x: coin_symbol_ele_set[i].innerText,
                value: coin_total_val_set[i],
            });
        };

        // create the chart
        var chart = anychart.pie();

        // set the chart title
        chart.title("Coin Value Pie Chart");
        chart.legend().position("right");
        chart.legend().itemsLayout("vertical");
        chart.sort("desc");

        // add the data
        chart.data(data);

        // display the chart in the container
        chart.container('container');
        chart.draw();

    };

    // async function sortTable() {
    //     var table, i, x, y;
    //     table = document.getElementsByClassName("SortTable");
    //     var switching = true;

    //     // Run loop until no switching is needed
    //     while (switching) {
    //         switching = false;
    //         var rows = table.rows;
    //         console.log(table.rows);

    //         // Loop to go through all rows
    //         for (i = 1; i < (rows.length - 1); i++) {
    //             var Switch = false;

    //             // Fetch 2 elements that need to be compared
    //             x = rows[i].getElementsByTagName("sort_idx")[0];
    //             y = rows[i + 1].getElementsByTagName("sort_idx")[0];

    //             // Check if 2 rows need to be switched
    //             if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
    //                 {

    //                 // If yes, mark Switch as needed and break loop
    //                 Switch = true;
    //                 break;
    //             }
    //         }
    //         if (Switch) {
    //             // Function to switch rows and mark switch as completed
    //             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    //             switching = true;
    //         }
    //     }
    // };

    await updatePrice();
    // await sortTable();
    await pieChart();

    // update every 10 sec
    setInterval(() => {
        updatePrice();
        // pieChart();
        console.log('interval update', coin_obj_arr)
    }, 10000);

    console.log('end', coin_obj_arr);
}

main();