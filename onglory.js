// let ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
// let ethereum_price = document.getElementById('ethereum-price');

// let showMainChainCoinNews_button = document.getElementById("showMainChainCoinNews_button");
// showMainChainCoinNews_button.addEventListener("click", showMainChainCoinNews);
// let cryptoPanicWidget_mainChainCoin_ele = document.getElementById("cryptoPanicWidget_mainChainCoin");

let update_time_ele = document.getElementById("update_time");

let spot_cost_ele = document.getElementById("spot_cost");
let spot_mc_ele = document.getElementById("spot_mc");
let spot_per_ele = document.getElementById("spot_per");
let spot_24_ele = document.getElementById("spot_24");
// let spot_x_ele = document.getElementById("spot_x");
// let spot_xxx_ele = document.getElementById("spot_xxx");
let ido_cost_ele = document.getElementById("ido_cost");
let ido_mc_ele = document.getElementById("ido_mc");
let ido_per_ele = document.getElementById("ido_per");
let ido_24_ele = document.getElementById("ido_24");
// let ido_x_ele = document.getElementById("ido_x");
// let ido_xxx_ele = document.getElementById("ido_xxx");
let crowdloan_cost_ele = document.getElementById("crowdloan_cost");
let crowdloan_mc_ele = document.getElementById("crowdloan_mc");
let crowdloan_per_ele = document.getElementById("crowdloan_per");
let crowdloan_24_ele = document.getElementById("crowdloan_24");
// let crowdloan_x_ele = document.getElementById("crowdloan_x");
// let crowdloan_xxx_ele = document.getElementById("crowdloan_xxx");
let mining_cost_ele = document.getElementById("mining_cost");
let mining_mc_ele = document.getElementById("mining_mc");
let mining_per_ele = document.getElementById("mining_per");
let mining_24_ele = document.getElementById("mining_24");
// let mining_x_ele = document.getElementById("mining_x");
// let mining_xxx_ele = document.getElementById("mining_xxx");
let quant_cost_ele = document.getElementById("quant_cost");
let quant_mc_ele = document.getElementById("quant_mc");
let quant_per_ele = document.getElementById("quant_per");
let quant_24_ele = document.getElementById("quant_24");
// let quant_x_ele = document.getElementById("quant_x");
// let quant_xxx_ele = document.getElementById("quant_xxx");
let total_cost_ele = document.getElementById("total_cost");
let total_mc_ele = document.getElementById("total_mc");
let total_per_ele = document.getElementById("total_per");
let total_24_ele = document.getElementById("total_24");
// let total_x_ele = document.getElementById("total_x");
// let total_xxx_ele = document.getElementById("total_xxx");

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
let coin_price_ele_set = [u_price_ele, btc_price_ele, eth_price_ele, bnb_price_ele, matic_price_ele, sol_price_ele, shib_price_ele, dot_price_ele, avax_price_ele, atom_price_ele, link_price_ele, near_price_ele, mana_price_ele, sand_price_ele, crv_price_ele, ftt_price_ele, gala_price_ele, dao_price_ele, mc_price_ele, stg_price_ele, pols_price_ele, xava_price_ele];

let u_24_ele = document.getElementById("usd_24");
let btc_24_ele = document.getElementById("bitcoin_24");
let eth_24_ele = document.getElementById("ethereum_24");
let bnb_24_ele = document.getElementById("binancecoin_24");
let matic_24_ele = document.getElementById("maticNetwork_24");
let sol_24_ele = document.getElementById("solana_24");
let shib_24_ele = document.getElementById("shibaInu_24");
let dot_24_ele = document.getElementById("polkadot_24");
let avax_24_ele = document.getElementById("avalanche_24");
let atom_24_ele = document.getElementById("cosmos_24");
let link_24_ele = document.getElementById("chainlink_24");
let near_24_ele = document.getElementById("near_24");
let mana_24_ele = document.getElementById("decentraland_24");
let sand_24_ele = document.getElementById("theSandbox_24");
let crv_24_ele = document.getElementById("curveDaoToken_24");
let ftt_24_ele = document.getElementById("ftxToken_24");
let gala_24_ele = document.getElementById("gala_24");
let dao_24_ele = document.getElementById("daoMaker_24");
let mc_24_ele = document.getElementById("meritCircle_24");
let stg_24_ele = document.getElementById("stargateFinance_24");
let pols_24_ele = document.getElementById("polkastarter_24");
let xava_24_ele = document.getElementById("avalaunch_24");
let coin_24_ele_set = [u_24_ele, btc_24_ele, eth_24_ele, bnb_24_ele, matic_24_ele, sol_24_ele, shib_24_ele, dot_24_ele, avax_24_ele, atom_24_ele, link_24_ele, near_24_ele, mana_24_ele, sand_24_ele, crv_24_ele, ftt_24_ele, gala_24_ele, dao_24_ele, mc_24_ele, stg_24_ele, pols_24_ele, xava_24_ele];

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
let coin_total_val_ele_set = [u_total_val_ele, btc_total_val_ele, eth_total_val_ele, bnb_total_val_ele, matic_total_val_ele, sol_total_val_ele, shib_total_val_ele, dot_total_val_ele, avax_total_val_ele, atom_total_val_ele, link_total_val_ele, near_total_val_ele, mana_total_val_ele, sand_total_val_ele, crv_total_val_ele, ftt_total_val_ele, gala_total_val_ele, dao_total_val_ele, mc_total_val_ele, stg_total_val_ele, pols_total_val_ele, xava_total_val_ele];

// ws.onmessage = (event) => {
//     let stockObject = JSON.parse(event.data);
//     //console.log(stockObject.p);
//     ethereum_price.innerText = stockObject.p;
// };

let u_price = 1.0, btc_price = 0.0, eth_price = 0.0, bnb_price = 0.0, matic_price = 0.0, sol_price = 0.0, shib_price = 0.0, dot_price = 0.0, avax_price = 0.0, atom_price = 0.0, link_price = 0.0, near_price = 0.0, mana_price = 0.0, sand_price = 0.0, crv_price = 0.0, ftt_price = 0.0, gala_price = 0.0, dao_price = 0.0, mc_price = 0.0, stg_price = 0.0, pols_price = 0.0, xava_price = 0.0;
let coin_price_set = [u_price, btc_price, eth_price, bnb_price, matic_price, sol_price, shib_price, dot_price, avax_price, atom_price, link_price, near_price, mana_price, sand_price, crv_price, ftt_price, gala_price, dao_price, mc_price, stg_price, pols_price, xava_price];
let u_24price = 1.0, btc_24price = 0.0, eth_24price = 0.0, bnb_24price = 0.0, matic_24price = 0.0, sol_24price = 0.0, shib_24price = 0.0, dot_24price = 0.0, avax_24price = 0.0, atom_24price = 0.0, link_24price = 0.0, near_24price = 0.0, mana_24price = 0.0, sand_24price = 0.0, crv_24price = 0.0, ftt_24price = 0.0, gala_24price = 0.0, dao_24price = 0.0, mc_24price = 0.0, stg_24price = 0.0, pols_24price = 0.0, xava_24price = 0.0;
let coin_24price_set = [u_24price, btc_24price, eth_24price, bnb_24price, matic_24price, sol_24price, shib_24price, dot_24price, avax_24price, atom_24price, link_24price, near_24price, mana_24price, sand_24price, crv_24price, ftt_24price, gala_24price, dao_24price, mc_24price, stg_24price, pols_24price, xava_24price];
let u_24 = 0, btc_24 = 0.0, eth_24 = 0.0, bnb_24 = 0.0, matic_24 = 0.0, sol_24 = 0.0, shib_24 = 0.0, dot_24 = 0.0, avax_24 = 0.0, atom_24 = 0.0, link_24 = 0.0, near_24 = 0.0, mana_24 = 0.0, sand_24 = 0.0, crv_24 = 0.0, ftt_24 = 0.0, gala_24 = 0.0, dao_24 = 0.0, mc_24 = 0.0, stg_24 = 0.0, pols_24 = 0.0, xava_24 = 0.0;
let coin_24_set = [u_24, btc_24, eth_24, bnb_24, matic_24, sol_24, shib_24, dot_24, avax_24, atom_24, link_24, near_24, mana_24, sand_24, crv_24, ftt_24, gala_24, dao_24, mc_24, stg_24, pols_24, xava_24];

const coinbase_spot_cost = 6105384.00;
let coinbase_spot_val = 0;
let coinbase_spot_24val = 0;
const coinbase_spot_coin_set = ["bitcoin", "ethereum", "matic-network", "solana", "avalanche-2", "decentraland"];
const coinbase_spot_coin_amount = [22.84, 277, 421315, 6318, 24650, 530000];
let coinbase_spot_coin_val_set = [];
let coinbase_spot_coin_24val_set = [];
const binance_spot_cost = 9300000.00;
let binance_spot_val = 0;
let binance_spot_24val = 0;
const binance_spot_coin_set = ["usd", "bitcoin", "ethereum", "binancecoin", "shiba-inu", "avalanche-2", "cosmos", "chainlink", "near", "decentraland", "the-sandbox", "gala", "merit-circle"];
const binance_spot_coin_amount = [3000000.05, 0.3391, 497.3998, 3121.67, 450182421, 69790, 2988.74, 4436.21, 6253.8, 76508, 64735, 58997, 5220.45];
let binance_spot_coin_val_set = [];
let binance_spot_coin_24val_set = [];
const ftx_spot_cost = 622.00;
let ftx_spot_val = 0;
let ftx_spot_24val = 0;
const ftx_spot_coin_set = ["ftx-token"];
const ftx_spot_coin_amount = [25.1];
let ftx_spot_coin_val_set = [];
let ftx_spot_coin_24val_set = [];
const spot_cost = coinbase_spot_cost + binance_spot_cost + ftx_spot_cost;
let spot_val = 0;
let spot_24val = 0;
const spot_coin_set = ["usd", "bitcoin", "ethereum", "binancecoin", "matic-network", "solana", "shiba-inu", "avalanche-2", "cosmos", "chainlink", "near", "decentraland", "the-sandbox", "ftx-token", "gala", "merit-circle"];
let spot_coin_amount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let spot_coin_val_set = [];
let spot_coin_24val_set = [];
for (i = 0; i < spot_coin_set.length; i++) {
    idx = coinbase_spot_coin_set.indexOf(spot_coin_set[i]);
    if (idx != -1) {
        spot_coin_amount[i] += coinbase_spot_coin_amount[idx];
    }
    idx = binance_spot_coin_set.indexOf(spot_coin_set[i]);
    if (idx != -1) {
        spot_coin_amount[i] += binance_spot_coin_amount[idx];
    }
    idx = ftx_spot_coin_set.indexOf(spot_coin_set[i]);
    if (idx != -1) {
        spot_coin_amount[i] += ftx_spot_coin_amount[idx];
    }
}
console.log('spot_cost', spot_cost);
console.log('spot_coin_set', spot_coin_set);
console.log('spot_coin_amount', spot_coin_amount);

const polkastarter_ido_cost = 100000.00;
let polkastarter_ido_val = 0;
let polkastarter_ido_24val = 0;
const polkastarter_ido_coin_set = ["usd", "binancecoin", "matic-network", "avalanche-2", "polkastarter"];
const polkastarter_ido_coin_amount = [6523.9, 32.7687, 523.375, 3.4725, 30022.67];
let polkastarter_ido_coin_val_set = [];
let polkastarter_ido_coin_24val_set = [];
const avalaunch_ido_cost = 100000.00;
let avalaunch_ido_val = 0;
let avalaunch_ido_24val = 0;
const avalaunch_ido_coin_set = ["usd", "avalanche-2", "avalaunch"];
const avalaunch_ido_coin_amount = [8567.24, 102.17, 10000.9];
let avalaunch_ido_coin_val_set = [];
let avalaunch_ido_coin_24val_set = [];
const daomaker_ido_cost = 250000.00;
let daomaker_ido_val = 0;
let daomaker_ido_24val = 0;
const daomaker_ido_coin_set = ["usd", "ethereum", "binancecoin", "matic-network", "solana", "avalanche-2", "dao-maker"];
const daomaker_ido_coin_amount = [19047.09, 0.3336, 0.9715, 1, 0.09794, 0.994, 50100.812];
let daomaker_ido_coin_val_set = [];
let daomaker_ido_coin_24val_set = [];
const ido_cost = polkastarter_ido_cost + avalaunch_ido_cost + daomaker_ido_cost;
let ido_val = 0;
let ido_24val = 0;
const ido_coin_set = ["usd", "ethereum", "binancecoin", "matic-network", "solana", "avalanche-2", "dao-maker", "polkastarter", "avalaunch"];
let ido_coin_amount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let ido_coin_val_set = [];
let ido_coin_24val_set = [];
for (i = 0; i < ido_coin_set.length; i++) {
    idx = polkastarter_ido_coin_set.indexOf(ido_coin_set[i]);
    if (idx != -1) {
        ido_coin_amount[i] += polkastarter_ido_coin_amount[idx];
    }
    idx = avalaunch_ido_coin_set.indexOf(ido_coin_set[i]);
    if (idx != -1) {
        ido_coin_amount[i] += avalaunch_ido_coin_amount[idx];
    }
    idx = daomaker_ido_coin_set.indexOf(ido_coin_set[i]);
    if (idx != -1) {
        ido_coin_amount[i] += daomaker_ido_coin_amount[idx];
    }
}
console.log('ido_cost', ido_cost);
console.log('ido_coin_set', ido_coin_set);
console.log('ido_coin_amount', ido_coin_amount);

const crowdloan_cost = 200000.00;
let crowdloan_val = 0;
let crowdloan_24val = 0;
const crowdloan_coin_set = ["usd", "polkadot"];
const crowdloan_coin_amount = [1056.17, 8928.24];
let crowdloan_coin_val_set = [];
let crowdloan_coin_24val_set = [];
console.log('crowdloan_cost', crowdloan_cost);
console.log('crowdloan_coin_set', crowdloan_coin_set);
console.log('crowdloan_coin_amount', crowdloan_coin_amount);

const curve_mining_cost = 100000.00;
let curve_mining_val = 0;
let curve_mining_24val = 0;
const curve_mining_coin_set = ["usd", "ethereum", "avalanche-2", "curve-dao-token"];
const curve_mining_coin_amount = [101525.22, 0.0158, 7.7368, 8.05];
let curve_mining_coin_val_set = [];
let curve_mining_coin_24val_set = [];
const stargate_mining_cost = 20021.54;
let stargete_mining_val = 0;
let stargete_mining_24val = 0;
const stargate_mining_coin_set = ["usd", "binancecoin", "stargate-finance"];
const stargate_mining_coin_amount = [19971.54, 0.0379, 1308.6276];
let stargate_mining_coin_val_set = [];
let stargate_mining_coin_24val_set = [];
const mining_cost = curve_mining_cost + stargate_mining_cost;
let mining_val = 0;
let mining_24val = 0;
const mining_coin_set = ["usd", "ethereum", "binancecoin", "avalanche-2", "curve-dao-token", "stargate-finance"];
let mining_coin_amount = [0, 0, 0, 0, 0, 0];
let mining_coin_val_set = [];
let mining_coin_24val_set = [];
for (i = 0; i < mining_coin_set.length; i++) {
    idx = curve_mining_coin_set.indexOf(mining_coin_set[i]);
    if (idx != -1) {
        mining_coin_amount[i] += curve_mining_coin_amount[idx];
    }
    idx = stargate_mining_coin_set.indexOf(mining_coin_set[i]);
    if (idx != -1) {
        mining_coin_amount[i] += stargate_mining_coin_amount[idx];
    }
}
console.log('mining_cost', mining_cost);
console.log('mining_coin_set', mining_coin_set);
console.log('mining_coin_amount', mining_coin_amount);

const ssl_btc_ls_quant_cost = 250000;
let ssl_btc_ls_quant_val = 0;
let ssl_btc_ls_quant_24val = 0;
const ssl_btc_ls_quant_coin_set = ["usd", "bitcoin"];
const ssl_btc_ls_quant_coin_amount = [0, 11.52];
let ssl_btc_ls_quant_coin_val_set = [];
let ssl_btc_ls_quant_coin_24val_set = [];
const ssl_eth_ls_quant_cost = 250000;
let ssl_eth_ls_quant_val = 0;
let ssl_eth_ls_quant_24val = 0;
const ssl_eth_ls_quant_coin_set = ["usd", "ethereum"];
const ssl_eth_ls_quant_coin_amount = [220551.96, 0];
let ssl_eth_ls_quant_coin_val_set = [];
let ssl_eth_ls_quant_coin_24val_set = [];
const ssl_eth_l_quant_cost = 250000;
let ssl_eth_l_quant_val = 0;
let ssl_eth_l_quant_24val = 0;
const ssl_eth_l_quant_coin_set = ["usd", "ethereum"];
const ssl_eth_l_quant_coin_amount = [226555.92, 0];
let ssl_eth_l_quant_coin_val_set = [];
let ssl_eth_l_quant_coin_24val_set = [];
const ssl_eth_l1_quant_cost = 250000;
let ssl_eth_l1_quant_val = 0;
let ssl_eth_l1_quant_24val = 0;
const ssl_eth_l1_quant_coin_set = ["usd", "ethereum"];
const ssl_eth_l1_quant_coin_amount = [248755.4, 0];
let ssl_eth_l1_quant_coin_val_set = [];
let ssl_eth_l1_quant_coin_24val_set = [];
const quant_cost = ssl_btc_ls_quant_cost + ssl_eth_ls_quant_cost + ssl_eth_l_quant_cost + ssl_eth_l1_quant_cost;
let quant_val = 0;
let quant_24val = 0;
const quant_coin_set = ["usd", "bitcoin", "ethereum"];
let quant_coin_amount = [0, 0, 0];
let quant_coin_val_set = [];
let quant_coin_24val_set = [];
for (i = 0; i < quant_coin_set.length; i++) {
    idx = ssl_btc_ls_quant_coin_set.indexOf(quant_coin_set[i]);
    if (idx != -1) {
        quant_coin_amount[i] += ssl_btc_ls_quant_coin_amount[idx];
    }
    idx = ssl_eth_ls_quant_coin_set.indexOf(quant_coin_set[i]);
    if (idx != -1) {
        quant_coin_amount[i] += ssl_eth_ls_quant_coin_amount[idx];
    }
    idx = ssl_eth_l_quant_coin_set.indexOf(quant_coin_set[i]);
    if (idx != -1) {
        quant_coin_amount[i] += ssl_eth_l_quant_coin_amount[idx];
    }
    idx = ssl_eth_l1_quant_coin_set.indexOf(quant_coin_set[i]);
    if (idx != -1) {
        quant_coin_amount[i] += ssl_eth_l1_quant_coin_amount[idx];
    }
}
console.log('quant_cost', quant_cost);
console.log('quant_coin_set', quant_coin_set);
console.log('quant_coin_amount', quant_coin_amount);

const total_cost = spot_cost + ido_cost + crowdloan_cost + mining_cost + quant_cost;
let total_val = 0;
let total_24val = 0;
const total_coin_set = ["usd", "bitcoin", "ethereum", "binancecoin", "matic-network", "solana", "shiba-inu", "polkadot", "avalanche-2", "cosmos", "chainlink", "near", "decentraland", "the-sandbox", "curve-dao-token", "ftx-token", "gala", "dao-maker", "merit-circle", "stargate-finance", "polkastarter", "avalaunch"];
let total_coin_amount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let total_coin_val_set = [];
let total_coin_24val_set = [];
for (i = 0; i < total_coin_set.length; i++) {
    idx = spot_coin_set.indexOf(total_coin_set[i]);
    if (idx != -1) total_coin_amount[i] += spot_coin_amount[idx];
    idx = ido_coin_set.indexOf(total_coin_set[i]);
    if (idx != -1) total_coin_amount[i] += ido_coin_amount[idx];
    idx = crowdloan_coin_set.indexOf(total_coin_set[i]);
    if (idx != -1) total_coin_amount[i] += crowdloan_coin_amount[idx];
    idx = mining_coin_set.indexOf(total_coin_set[i]);
    if (idx != -1) total_coin_amount[i] += mining_coin_amount[idx];
    idx = quant_coin_set.indexOf(total_coin_set[i]);
    if (idx != -1) total_coin_amount[i] += quant_coin_amount[idx];
}
console.log('total_cost', total_cost);
console.log('total_coin_set', total_coin_set);
console.log('total_coin_amount', total_coin_amount);

let coin_str = "";
let coin_obj_arr = [];
for (i = 1; i < total_coin_set.length; i++) {
    coin_str += total_coin_set[i] + ',';
}

// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true
let fetch_url = 'https://api.coingecko.com/api/v3/simple/price?ids=' + coin_str + '&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true';

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
                    price: data[key].usd,
                    change_per: data[key].usd_24h_change
                });
                //console.log(coin_obj_arr);
            }
        });
};

// async function showMainChainCoinNews() {
//     if (showMainChainCoinNews_button.innerText == "Show Main Chain Coin News") {
//         showMainChainCoinNews_button.innerText = "Hide Main Chain Coin News";
//         cryptoPanicWidget_mainChainCoin_ele.style.display = "block";
//     }
//     else if (showMainChainCoinNews_button.innerText == "Hide Main Chain Coin News") {
//         showMainChainCoinNews_button.innerText = "Show Main Chain Coin News";
//         cryptoPanicWidget_mainChainCoin_ele.style.display = "none";
//     }
// }

async function cal_val_set(coin_set, coin_amount, is_24=false) {

    coin_val = [];
    for (i = 0; i < coin_set.length; i++) {
        idx = total_coin_set.indexOf(coin_set[i]);
        if (is_24) {
            if (idx != -1) coin_val.push(coin_24price_set[idx] * coin_amount[i]);
        }
        else {
            if (idx != -1) coin_val.push(coin_price_set[idx] * coin_amount[i]);
        }
    }
    return coin_val;
};

async function updatePrice() {

    coin_obj_arr = [];
    await fetch_price(fetch_url);

    for (i = 0; i < coin_obj_arr.length; i++) {
        switch (coin_obj_arr[i].name) {
            case total_coin_set[1]:   // bitcoin
                btc_price = coin_obj_arr[i].price;
                btc_24 = coin_obj_arr[i].change_per;
                btc_24price = btc_price / (1 + btc_24 / 100);
                break;
            case total_coin_set[2]:   // ethereum
                eth_price = coin_obj_arr[i].price;
                eth_24 = coin_obj_arr[i].change_per;
                eth_24price = eth_price / (1 + eth_24 / 100);
                break;
            case total_coin_set[3]:   // binancecoin
                bnb_price = coin_obj_arr[i].price;
                bnb_24 = coin_obj_arr[i].change_per;
                bnb_24price = bnb_price / (1 + bnb_24 / 100);
                break;
            case total_coin_set[4]:   // matic-network
                matic_price = coin_obj_arr[i].price;
                matic_24 = coin_obj_arr[i].change_per;
                matic_24price = matic_price / (1 + matic_24 / 100);
                break;
            case total_coin_set[5]:   // solana
                sol_price = coin_obj_arr[i].price;
                sol_24 = coin_obj_arr[i].change_per;
                sol_24price = sol_price / (1 + sol_24 / 100);
                break;
            case total_coin_set[6]:   // shiba-inu
                shib_price = coin_obj_arr[i].price;
                shib_24 = coin_obj_arr[i].change_per;
                shib_24price = shib_price / (1 + shib_24 / 100);
                break;
            case total_coin_set[7]:   // polkadot
                dot_price = coin_obj_arr[i].price;
                dot_24 = coin_obj_arr[i].change_per;
                dot_24price = dot_price / (1 + dot_24 / 100);
                break;
            case total_coin_set[8]:   // avalanche-2
                avax_price = coin_obj_arr[i].price;
                avax_24 = coin_obj_arr[i].change_per;
                avax_24price = avax_price / (1 + avax_24 / 100);
                break;
            case total_coin_set[9]:   // cosmos
                atom_price = coin_obj_arr[i].price;
                atom_24 = coin_obj_arr[i].change_per;
                atom_24price = atom_price / (1 + atom_24 / 100);
                break;
            case total_coin_set[10]:   // chainlink
                link_price = coin_obj_arr[i].price;
                link_24 = coin_obj_arr[i].change_per;
                link_24price = link_price / (1 + link_24 / 100);
                break;
            case total_coin_set[11]:  // near
                near_price = coin_obj_arr[i].price;
                near_24 = coin_obj_arr[i].change_per;
                near_24price = near_price / (1 + near_24 / 100);
                break;
            case total_coin_set[12]:  // decentraland
                mana_price = coin_obj_arr[i].price;
                mana_24 = coin_obj_arr[i].change_per;
                mana_24price = mana_price / (1 + mana_24 / 100);
                break;
            case total_coin_set[13]:  // the-sandbox
                sand_price = coin_obj_arr[i].price;
                sand_24 = coin_obj_arr[i].change_per;
                sand_24price = sand_price / (1 + sand_24 / 100);
                break;
            case total_coin_set[14]:  // curve-dao-token
                crv_price = coin_obj_arr[i].price;
                crv_24 = coin_obj_arr[i].change_per;
                crv_24price = crv_price / (1 + crv_24 / 100);
                break;
            case total_coin_set[15]:  // ftx-token
                ftt_price = coin_obj_arr[i].price;
                ftt_24 = coin_obj_arr[i].change_per;
                ftt_24price = ftt_price + (1 + ftt_24 / 100);
                break;
            case total_coin_set[16]:  // gala
                gala_price = coin_obj_arr[i].price;
                gala_24 = coin_obj_arr[i].change_per;
                gala_24price = gala_price / (1 + gala_24 / 100);
                break;
            case total_coin_set[17]:  // dao-maker
                dao_price = coin_obj_arr[i].price;
                dao_24 = coin_obj_arr[i].change_per;
                dao_24price = dao_price / (1 + dao_24 / 100);
                break;
            case total_coin_set[18]:  // merit-circle
                mc_price = coin_obj_arr[i].price;
                mc_24 = coin_obj_arr[i].change_per;
                mc_24price = mc_price / (1 + mc_24 / 100);
                break;
            case total_coin_set[19]:  // stargate-finance
                stg_price = coin_obj_arr[i].price;
                stg_24 = coin_obj_arr[i].change_per;
                stg_24price = stg_price / (1 + stg_24 / 100);
                break;
            case total_coin_set[20]:  // polkastarter
                pols_price = coin_obj_arr[i].price;
                pols_24 = coin_obj_arr[i].change_per;
                pols_24price = pols_price / (1 + pols_24 / 100);
                break;
            case total_coin_set[21]:  // avalaunch
                xava_price = coin_obj_arr[i].price;
                xava_24 = coin_obj_arr[i].change_per;
                xava_24price = xava_price / (1 + xava_24 / 100);
                break;
        };
    };

    coin_price_set = [u_price, btc_price, eth_price, bnb_price, matic_price, sol_price, shib_price, dot_price, avax_price, atom_price, link_price, near_price, mana_price, sand_price, crv_price, ftt_price, gala_price, dao_price, mc_price, stg_price, pols_price, xava_price];
    coin_24_set = [u_24, btc_24, eth_24, bnb_24, matic_24, sol_24, shib_24, dot_24, avax_24, atom_24, link_24, near_24, mana_24, sand_24, crv_24, ftt_24, gala_24, dao_24, mc_24, stg_24, pols_24, xava_24];
    coin_24price_set = [u_24price, btc_24price, eth_24price, bnb_24price, matic_24price, sol_24price, shib_24price, dot_24price, avax_24price, atom_24price, link_24price, near_24price, mana_24price, sand_24price, crv_24price, ftt_24price, gala_24price, dao_24price, mc_24price, stg_24price, pols_24price, xava_24price];

    coinbase_spot_coin_val_set = await cal_val_set(coinbase_spot_coin_set, coinbase_spot_coin_amount);
    coinbase_spot_val = coinbase_spot_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    coinbase_spot_coin_24val_set = await cal_val_set(coinbase_spot_coin_set, coinbase_spot_coin_amount, true);
    coinbase_spot_24val = coinbase_spot_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    binance_spot_coin_val_set = await cal_val_set(binance_spot_coin_set, binance_spot_coin_amount);
    binance_spot_val = binance_spot_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    binance_spot_coin_24val_set = await cal_val_set(binance_spot_coin_set, binance_spot_coin_amount, true);
    binance_spot_24val = binance_spot_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    ftx_spot_coin_val_set = await cal_val_set(ftx_spot_coin_set, ftx_spot_coin_amount);
    ftx_spot_val = ftx_spot_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    ftx_spot_coin_24val_set = await cal_val_set(ftx_spot_coin_set, ftx_spot_coin_amount, true);
    ftx_spot_24val = ftx_spot_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    spot_coin_val_set = await cal_val_set(spot_coin_set, spot_coin_amount);
    spot_val = spot_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    spot_coin_24val_set = await cal_val_set(spot_coin_set, spot_coin_amount, true);
    spot_24val = spot_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    console.log('spot_coin_val_set', spot_coin_val_set);
    console.log('spot_val', spot_val);
    console.log('spot_coin_24val_set', spot_coin_24val_set);
    console.log('spot_24val', spot_24val);

    polkastarter_ido_coin_val_set = await cal_val_set(polkastarter_ido_coin_set, polkastarter_ido_coin_amount);
    polkastarter_ido_val = polkastarter_ido_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    polkastarter_ido_coin_24val_set = await cal_val_set(polkastarter_ido_coin_set, polkastarter_ido_coin_amount, true);
    polkastarter_ido_24val = polkastarter_ido_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    avalaunch_ido_coin_val_set = await cal_val_set(avalaunch_ido_coin_set, avalaunch_ido_coin_amount);
    avalaunch_ido_val = avalaunch_ido_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    avalaunch_ido_coin_24val_set = await cal_val_set(avalaunch_ido_coin_set, avalaunch_ido_coin_amount, true);
    avalaunch_ido_24val = avalaunch_ido_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    daomaker_ido_coin_val_set = await cal_val_set(daomaker_ido_coin_set, daomaker_ido_coin_amount);
    daomaker_ido_val = daomaker_ido_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    daomaker_ido_coin_24val_set = await cal_val_set(daomaker_ido_coin_set, daomaker_ido_coin_amount, true);
    daomaker_ido_24val = daomaker_ido_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    ido_coin_val_set = await cal_val_set(ido_coin_set, ido_coin_amount);
    ido_val = ido_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    ido_coin_24val_set = await cal_val_set(ido_coin_set, ido_coin_amount, true);
    ido_24val = ido_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    console.log('ido_coin_val_set', ido_coin_val_set);
    console.log('ido_val', ido_val);
    console.log('ido_coin_24val_set', ido_coin_24val_set);
    console.log('ido_24val', ido_24val);

    crowdloan_coin_val_set = await cal_val_set(crowdloan_coin_set, crowdloan_coin_amount);
    crowdloan_val = crowdloan_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    crowdloan_coin_24val_set = await cal_val_set(crowdloan_coin_set, crowdloan_coin_amount, true);
    crowdloan_24val = crowdloan_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    console.log('crowdloan_coin_val_set', crowdloan_coin_val_set);
    console.log('crowdloan_val', crowdloan_val);
    console.log('crowdloan_coin_24val_set', crowdloan_coin_24val_set);
    console.log('crowdloan_24val', crowdloan_24val);

    curve_mining_coin_val_set = await cal_val_set(curve_mining_coin_set, curve_mining_coin_amount);
    curve_mining_val = curve_mining_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    curve_mining_coin_24val_set = await cal_val_set(curve_mining_coin_set, curve_mining_coin_amount, true);
    curve_mining_24val = curve_mining_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    stargate_mining_coin_val_set = await cal_val_set(stargate_mining_coin_set, stargate_mining_coin_amount);
    stargete_mining_val = stargate_mining_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    stargate_mining_coin_24val_set = await cal_val_set(stargate_mining_coin_set, stargate_mining_coin_amount, true);
    stargete_mining_24val = stargate_mining_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    mining_coin_val_set = await cal_val_set(mining_coin_set, mining_coin_amount);
    mining_val = mining_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    mining_coin_24val_set = await cal_val_set(mining_coin_set, mining_coin_amount, true);
    mining_24val = mining_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    console.log('mining_coin_val_set', mining_coin_val_set);
    console.log('mining_val', mining_val);
    console.log('mining_coin_24val_set', mining_coin_24val_set);
    console.log('mining_24val', mining_24val);

    ssl_btc_ls_quant_coin_val_set = await cal_val_set(ssl_btc_ls_quant_coin_set, ssl_btc_ls_quant_coin_amount);
    ssl_btc_ls_quant_val = ssl_btc_ls_quant_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    ssl_btc_ls_quant_coin_24val_set = await cal_val_set(ssl_btc_ls_quant_coin_set, ssl_btc_ls_quant_coin_amount, true);
    ssl_btc_ls_quant_24val = ssl_btc_ls_quant_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    ssl_eth_ls_quant_coin_val_set = await cal_val_set(ssl_eth_ls_quant_coin_set, ssl_eth_ls_quant_coin_amount);
    ssl_eth_ls_quant_val = ssl_eth_ls_quant_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    ssl_eth_ls_quant_coin_24val_set = await cal_val_set(ssl_eth_ls_quant_coin_set, ssl_eth_ls_quant_coin_amount, true);
    ssl_eth_ls_quant_24val = ssl_eth_ls_quant_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    ssl_eth_l_quant_coin_val_set = await cal_val_set(ssl_eth_l_quant_coin_set, ssl_eth_l_quant_coin_amount);
    ssl_eth_l_quant_val = ssl_eth_l_quant_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    ssl_eth_l_quant_coin_24val_set = await cal_val_set(ssl_eth_l_quant_coin_set, ssl_eth_l_quant_coin_amount, true);
    ssl_eth_l_quant_24val = ssl_eth_l_quant_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    ssl_eth_l1_quant_coin_val_set = await cal_val_set(ssl_eth_l1_quant_coin_set, ssl_eth_l1_quant_coin_amount);
    ssl_eth_l1_quant_val = ssl_eth_l1_quant_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    ssl_eth_l1_quant_coin_24val_set = await cal_val_set(ssl_eth_l1_quant_coin_set, ssl_eth_l1_quant_coin_amount, true);
    ssl_eth_l1_quant_24val = ssl_eth_l1_quant_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    quant_coin_val_set = await cal_val_set(quant_coin_set, quant_coin_amount);
    quant_val = quant_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    quant_coin_24val_set = await cal_val_set(quant_coin_set, quant_coin_amount, true);
    quant_24val = quant_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    console.log('quant_coin_val_set', quant_coin_val_set);
    console.log('quant_val', quant_val);
    console.log('quant_coin_24val_set', quant_coin_24val_set);
    console.log('quant_24val', quant_24val);

    total_coin_val_set = await cal_val_set(total_coin_set, total_coin_amount);
    total_val = total_coin_val_set.reduce(function (a, b) { return a + b; }, 0);
    total_coin_24val_set = await cal_val_set(total_coin_set, total_coin_amount, true);
    total_24val = total_coin_24val_set.reduce(function (a, b) { return a + b; }, 0);
    console.log('total_coin_val_set', total_coin_val_set);
    console.log('total_val', total_val);
    console.log('total_coin_24val_set', total_coin_24val_set);
    console.log('total_24val', total_24val);

    spot_cost_ele.innerText = spot_cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    spot_mc_ele.innerText = spot_val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    spot_per_ele.innerText = ((spot_val - spot_cost) / spot_cost * 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    spot_24_ele.innerText = ((spot_val-spot_24val)/spot_24val*100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    // spot_x_ele.innerText = ;
    // spot_xxx_ele.innerText = ;
    ido_cost_ele.innerText = ido_cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    ido_mc_ele.innerText = ido_val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    ido_per_ele.innerText = ((ido_val - ido_cost) / ido_cost * 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    ido_24_ele.innerText = ((ido_val-ido_24val)/ido_24val*100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    // ido_x_ele.innerText = ;
    // ido_xxx_ele.innerText = ;
    crowdloan_cost_ele.innerText = crowdloan_cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    crowdloan_mc_ele.innerText = crowdloan_val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    crowdloan_per_ele.innerText = ((crowdloan_val - crowdloan_cost) / crowdloan_cost * 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    crowdloan_24_ele.innerText = ((crowdloan_val-crowdloan_24val)/crowdloan_24val*100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    // crowdloan_x_ele.innerText = ;
    // crowdloan_xxx_ele.innerText = ;
    mining_cost_ele.innerText = mining_cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    mining_mc_ele.innerText = mining_val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    mining_per_ele.innerText = ((mining_val - mining_cost) / mining_cost * 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    mining_24_ele.innerText = ((mining_val-mining_24val)/mining_24val*100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    // mining_x_ele.innerText = ;
    // mining_xxx_ele.innerText = ;
    quant_cost_ele.innerText = quant_cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    quant_mc_ele.innerText = quant_val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    quant_per_ele.innerText = ((quant_val - quant_cost) / quant_cost * 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    quant_24_ele.innerText = ((quant_val-quant_24val)/quant_24val*100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    // quant_x_ele.innerText = ;
    // quant_xxx_ele.innerText = ;
    total_cost_ele.innerText = total_cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    total_mc_ele.innerText = total_val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    total_per_ele.innerText = ((total_val - total_cost) / total_cost * 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    total_24_ele.innerText = ((total_val-total_24val)/total_24val*100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    // total_x_ele.innerText = ;
    // total_xxx_ele.innerText = ;

    for (i = 0; i < coin_price_ele_set.length; i++) {
        let digit = 2;
        if (coin_symbol_ele_set[i].innerText == "SHIB") {
            digit = 8;
        }
        coin_price_ele_set[i].innerText = coin_price_set[i].toLocaleString(undefined, { minimumFractionDigits: digit, maximumFractionDigits: digit });
        coin_total_amount_ele_set[i].innerText = total_coin_amount[i].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        coin_24_ele_set[i].innerText = coin_24_set[i].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
        coin_total_val_ele_set[i].innerText = total_coin_val_set[i].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        coin_price_ele_set[i].style.textAlign = "right";
        coin_total_amount_ele_set[i].style.textAlign = "right";
        coin_24_ele_set[i].style.textAlign = "right";
        coin_total_val_ele_set[i].style.textAlign = "right";
    }
};

async function pieChart() {

    // set the data
    var data = [];
    for (i = 0; i < coin_symbol_ele_set.length; i++) {
        data.push({
            x: coin_symbol_ele_set[i].innerText,
            value: total_coin_val_set[i],
        });
    }

    // create the chart
    var chart = anychart.pie();

    // set the chart title
    chart.title("Coin Value Pie Chart");
    chart.legend().position("right");
    chart.legend().itemsLayout("vertical");
    chart.sort("desc");

    // add the data
    chart.data(data);

    // display the chart in the pie_chart
    chart.container('pie_chart');
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

async function main() {

    await updatePrice();
    // await sortTable();
    await pieChart();
    update_time_ele.innerText = "Latest Update Time: " + Date();

    // update every 10 sec
    setInterval(() => {
        updatePrice();
        // pieChart();
        update_time_ele.innerText = "Latest Update Time: " + Date();

        // console.log('interval update', coin_obj_arr);
    }, 10000);

    console.log('end', coin_obj_arr);
}

main();