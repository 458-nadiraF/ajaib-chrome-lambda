const { HTTPRequest } = require("puppeteer-core");

module.exports = {
    loginGmailText:'[plerdy-tracking-id="25891014701"]',
    loginPasswordText:'[plerdy-tracking-id="34199228101"]',
    loginMasukButton:'[plerdy-tracking-id="53396253401"]',
    masukkanPINTitle:'[data-testid="pin-title"]',
    pinAjaib1:'[plerdy-tracking-id="29905954201"]',
    pinAjaib2:'[plerdy-tracking-id="37935991801"]',
    pinAjaib3:'[plerdy-tracking-id="37935991802"]',
    pinAjaib4:'[plerdy-tracking-id="37935991803"]',
    mengertiButton:'[plerdy-tracking-id="29227868401"]',
    cariAssetSearchBox:'[plerdy-tracking-id="70613876501"]',
    dayTradingButton:'[plerdy-tracking-id="86913280101"]',
    inputPriceBox:'[plerdy-tracking-id="48630356201"]', //get value
    dayTrade25PercentBuyingPower:'[plerdy-tracking-id="52787895901"]',
    dayTrade100PercentBuyingPower:'[plerdy-tracking-id="53637093701"]',
    BeliButton:'[data-testid="btn-submitBuy"]',
    jualButton:'[data-testid="btn-submitSell"]',
    beliButtonTab:'[plerdy-tracking-id="80673511701"]',
    jualButtonTab:'[plerdy-tracking-id="80643055701"]',
    priceNow:'[data-testid="txt-price"]',
    currentStockName:'[data-testid="txt-stockCode"]',
    beliPopUp:'[data-testid="btn-confirmBuy"]',
    jualPopUp:'[data-testid="btn-confirmSell"]',
    nantiSajaGantiPWPopUpButton:'[plerdy-tracking-id="66345270601"]',
    pinAjaib1_2:'[plerdy-tracking-id="29905954202"]',
    pinAjaib2_2:'[plerdy-tracking-id="37935991804"]',
    pinAjaib3_2:'[plerdy-tracking-id="37935991805"]',
    pinAjaib4_2:'[plerdy-tracking-id="37935991806"]',
    riwayatDayTrade:'[plerdy-tracking-id="18428485001"]',
    riwayatTransactionButton: '[plerdy-tracking-id="28577355401"]',
};
//<span role="button" class="active css-o743xo ekroasx0" plerdy-tracking-id="28577355401">Riwayat</span>
/* <div role="button" tabindex="0" class="active css-1ek0o80" plerdy-tracking-id="51014265001"><div class="css-1qhqew7" plerdy-tracking-id="18428485001">Day Trading</div></div> */
//atasnya lagi
// <div class="css-148bnm8"><div class="css-jw5rjj"><div class="css-bk50lk"><span>Lot</span><span>Bid</span></div><div class="css-11h22dc"><span class="item-lot" plerdy-tracking-id="65119392301">10.383</span><span class="item-price" plerdy-tracking-id="11998295901">2.670</span></div><div class="css-uiy6i4"><span class="item-lot" plerdy-tracking-id="60493782601">26.800</span><span class="item-price" plerdy-tracking-id="11998299201">2.660</span></div><div class="css-1gx1c51"><span class="item-lot" plerdy-tracking-id="60375064901">27.952</span><span class="item-price" plerdy-tracking-id="11998302501">2.650</span></div><div class="css-1l5aigx"><span class="item-lot" plerdy-tracking-id="60256690201">28.756</span><span class="item-price" plerdy-tracking-id="11998305801">2.640</span></div><div class="css-1paray9"><span class="item-lot" plerdy-tracking-id="64645346901">14.097</span><span class="item-price" plerdy-tracking-id="11998309101">2.630</span></div><div class="css-1dtc45o"><span class="item-lot" plerdy-tracking-id="64407526301">16.642</span><span class="item-price" plerdy-tracking-id="11998312401">2.620</span></div><div class="css-o78z"><span class="item-lot" plerdy-tracking-id="41521594301">7.488</span><span class="item-price" plerdy-tracking-id="11998315701">2.610</span></div><div class="css-15vozft"><span class="item-lot" plerdy-tracking-id="64644815601">14.557</span><span class="item-price" plerdy-tracking-id="11998319001">2.600</span></div><div class="css-1rrtd7h"><span class="item-lot" plerdy-tracking-id="41758257401">5.915</span><span class="item-price" plerdy-tracking-id="11998398201">2.590</span></div><div class="css-l11ub5"><span class="item-lot" plerdy-tracking-id="41640312101">6.335</span><span class="item-price" plerdy-tracking-id="11998401501">2.580</span></div></div><div class="css-jw5rjj"><div class="css-bk50lk"><span>Ask</span><span>Lot</span></div><div class="css-q032x"><span class="item-price" plerdy-tracking-id="11998292601">2.680</span><span class="item-lot" plerdy-tracking-id="57173312101">31.706</span></div><div class="css-me2e3d"><span class="item-price" plerdy-tracking-id="11998289301">2.690</span><span class="item-lot" plerdy-tracking-id="60612476701">25.723</span></div><div class="css-ba5iam"><span class="item-price" plerdy-tracking-id="11998210101">2.700</span><span class="item-lot" plerdy-tracking-id="52904745601">44.046</span></div><div class="css-l9n7tz"><span class="item-price" plerdy-tracking-id="11998206801">2.710</span><span class="item-lot" plerdy-tracking-id="60375282401">27.755</span></div><div class="css-1npixry"><span class="item-price" plerdy-tracking-id="11998203501">2.720</span><span class="item-lot" plerdy-tracking-id="60138632901">29.284</span></div><div class="css-136tp6q"><span class="item-price" plerdy-tracking-id="11998200201">2.730</span><span class="item-lot" plerdy-tracking-id="61087167901">21.439</span></div><div class="css-q6rgoz"><span class="item-price" plerdy-tracking-id="11998196901">2.740</span><span class="item-lot" plerdy-tracking-id="64407944801">16.298</span></div><div class="css-ijby5l"><span class="item-price" plerdy-tracking-id="11998193601">2.750</span><span class="item-lot" plerdy-tracking-id="52785295501">45.806</span></div><div class="css-1ytb1d6"><span class="item-price" plerdy-tracking-id="11998190301">2.760</span><span class="item-lot" plerdy-tracking-id="41758993701">5.291</span></div><div class="css-1s546wd"><span class="item-price" plerdy-tracking-id="11998187001">2.770</span><span class="item-lot" plerdy-tracking-id="41996204101">3.213</span></div></div></div>
//harga di bid
// <div class="css-jw5rjj"><div class="css-bk50lk"><span>Lot</span><span>Bid</span></div><div class="css-11h22dc"><span class="item-lot" plerdy-tracking-id="65119392301">10.383</span><span class="item-price" plerdy-tracking-id="11998295901">2.670</span></div><div class="css-uiy6i4"><span class="item-lot" plerdy-tracking-id="60493782601">26.800</span><span class="item-price" plerdy-tracking-id="11998299201">2.660</span></div><div class="css-1gx1c51"><span class="item-lot" plerdy-tracking-id="60375064901">27.952</span><span class="item-price" plerdy-tracking-id="11998302501">2.650</span></div><div class="css-1l5aigx"><span class="item-lot" plerdy-tracking-id="60256690201">28.756</span><span class="item-price" plerdy-tracking-id="11998305801">2.640</span></div><div class="css-1paray9"><span class="item-lot" plerdy-tracking-id="64645346901">14.097</span><span class="item-price" plerdy-tracking-id="11998309101">2.630</span></div><div class="css-1dtc45o"><span class="item-lot" plerdy-tracking-id="64407526301">16.642</span><span class="item-price" plerdy-tracking-id="11998312401">2.620</span></div><div class="css-o78z"><span class="item-lot" plerdy-tracking-id="41521594301">7.488</span><span class="item-price" plerdy-tracking-id="11998315701">2.610</span></div><div class="css-15vozft"><span class="item-lot" plerdy-tracking-id="64644815601">14.557</span><span class="item-price" plerdy-tracking-id="11998319001">2.600</span></div><div class="css-1rrtd7h"><span class="item-lot" plerdy-tracking-id="41758257401">5.915</span><span class="item-price" plerdy-tracking-id="11998398201">2.590</span></div><div class="css-l11ub5"><span class="item-lot" plerdy-tracking-id="41640312101">6.335</span><span class="item-price" plerdy-tracking-id="11998401501">2.580</span></div></div>
// harga di offer
// <div class="css-jw5rjj"><div class="css-bk50lk"><span>Ask</span><span>Lot</span></div><div class="css-q032x"><span class="item-price" plerdy-tracking-id="11998292601">2.680</span><span class="item-lot" plerdy-tracking-id="57173312101">31.706</span></div><div class="css-me2e3d"><span class="item-price" plerdy-tracking-id="11998289301">2.690</span><span class="item-lot" plerdy-tracking-id="60612476701">25.723</span></div><div class="css-ba5iam"><span class="item-price" plerdy-tracking-id="11998210101">2.700</span><span class="item-lot" plerdy-tracking-id="52904745601">44.046</span></div><div class="css-l9n7tz"><span class="item-price" plerdy-tracking-id="11998206801">2.710</span><span class="item-lot" plerdy-tracking-id="60375282401">27.755</span></div><div class="css-1npixry"><span class="item-price" plerdy-tracking-id="11998203501">2.720</span><span class="item-lot" plerdy-tracking-id="60138632901">29.284</span></div><div class="css-136tp6q"><span class="item-price" plerdy-tracking-id="11998200201">2.730</span><span class="item-lot" plerdy-tracking-id="61087167901">21.439</span></div><div class="css-q6rgoz"><span class="item-price" plerdy-tracking-id="11998196901">2.740</span><span class="item-lot" plerdy-tracking-id="64407944801">16.298</span></div><div class="css-ijby5l"><span class="item-price" plerdy-tracking-id="11998193601">2.750</span><span class="item-lot" plerdy-tracking-id="52785295501">45.806</span></div><div class="css-1ytb1d6"><span class="item-price" plerdy-tracking-id="11998190301">2.760</span><span class="item-lot" plerdy-tracking-id="41758993701">5.291</span></div><div class="css-1s546wd"><span class="item-price" plerdy-tracking-id="11998187001">2.770</span><span class="item-lot" plerdy-tracking-id="41996204101">3.213</span></div></div>
// //<div class="pincode-input-container" style="padding: 10px;"><input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="29905954203"><input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991807"><input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991808"><input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991809"></div>
// <input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="29905954203">
// <input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991807"></input>
// </input>
// <input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991808"></input>
// <input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991809"></input>


// <div class="pincode-input-container" style="padding: 10px;"><input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991801"><input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991802"><input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991803"><input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991804"></div>
// <input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991801"></input>
// <input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991802"></input>
// <input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991803"></input>
// <input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991804"></input>
//suka ganti jd ini pinnya
{/* <input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="29905954202">
<input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991804">
<input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991805">
<input class="pincode-input-text" placeholder="" aria-label="" maxlength="1" autocomplete="off" type="password" inputmode="number" pattern="[0-9]*" value="" style="padding: 0px 0px 2px; margin: 0px 4px; text-align: center; border: 1px solid rgb(230, 225, 229); background: rgb(249, 251, 255); width: 50px; height: 50px; border-radius: 4px; color: rgb(58, 131, 249); font-size: 25px;" plerdy-tracking-id="37935991806"></input>
</input>
</input>
</input> */}
//pop up surub ubah pw <button class="css-1wlh503 css-4o2m0k" data-toggle="tooltip" data-placement="top" title="" type="button" plerdy-tracking-id="66345270601">Nanti Saja</button><button class="css-1x9p7xx css-4o2m0k" data-toggle="tooltip" data-placement="top" title="" type="button" plerdy-tracking-id="85244228501">Update</button></div></div></div></div>
//beliButtonTab:'[plerdy-tracking-id="80673511701"]'
//jualButtonTab:'[plerdy-tracking-id="80643055701"]',
//<div role="button" class="css-enmp4i" tabindex="0" plerdy-tracking-id="39261001201"><span plerdy-tracking-id="80643055701">Jual</span></div>
//<div role="button" class="css-enmp4i active" tabindex="0" plerdy-tracking-id="27724483401"><span plerdy-tracking-id="80673511701">Beli</span></div>
//<button class="css-1is1q8h " title="" type="button" data-toggle="tooltip" data-placement="top" data-testid="btn-submitBuy">Beli</button>
//<div role="button" tabindex="0" class="css-euo327" data-testid="btn-percentage-100%" style="padding: 6px 8px;" plerdy-tracking-id="79059724101"><div class="css-1gm0y63" plerdy-tracking-id="53637093701">100%</div></div>
//<input id="INPUT_PRICE" data-testid="INPUT_PRICE" name="INPUT_PRICE" class="css-q0fsqo " placeholder="" type="text" value="2.570" inputmode="numeric" plerdy-tracking-id="48630356201"></input>
// https://invest.ajaib.co.id/home/saham/TLKM
// {/* <a class="css-2b5fr2" href="/home/saham/TLKM" plerdy-tracking-id="97038619101"><img src="https://cdn-stock.ajaib.co.id/image/TLKM_042a4a77-ba81-4162-832c-559c7dd14bc4.png" width="40" height="40" alt="" plerdy-tracking-id="81891989401"><div plerdy-tracking-id="59591904601"><div plerdy-tracking-id="41795900801"><p type="body" class="css-1k4qhdd egx5c4f1">TLKM</p></div><div plerdy-tracking-id="81941819401"><p type="body" color="#445B70" overflow="ellipsis" class="css-8uht97 egx5c4f1" style="max-width: 240px;">Telkom Indonesia (Persero) Tbk.</p></div></div></a> */}
// {/* <a class="css-2b5fr2" href="/home/saham/BBRI" plerdy-tracking-id="48730122101"><img src="https://cdn-stock.ajaib.co.id/image/BBRI_d3f9fe9b-5372-43e2-9b7e-b4d1b8ef7fd8.png" width="40" height="40" alt="" plerdy-tracking-id="75908152201"><div plerdy-tracking-id="72969735301"><div plerdy-tracking-id="41730147901"><p type="body" class="css-1k4qhdd egx5c4f1">BBRI</p></div><div plerdy-tracking-id="56472162201"><p type="body" color="#445B70" overflow="ellipsis" class="css-8uht97 egx5c4f1" style="max-width: 240px;">Bank Rakyat Indonesia (Persero) Tbk.</p></div></div></a> */}
// const launchBrowser = async () => {
//     browser = await puppeteer.launch({
//         headless:true,
//         args: [
//           "--disable-setuid-sandbox",
//           "--no-sandbox",
//           "--no-zygote",
//           "--no-cache",
//         ],
//         executablePath:
//           process.env.NODE_ENV === "production"
//             ? process.env.PUPPETEER_EXECUTABLE_PATH
//             : puppeteer.executablePath(),
//       });
//     page = await browser.newPage();
//     const gmail = process.env.AJ_GMAIL;
//     await LoginGmailInput.type(gmail);
//     await loginPasswordInput.type(process.env.AJ_PASSWORD);
//     await Loginbutton.click();
//     console.log('succesfully loged');
// } catch (error){
//     console.error('An error occurred:', error.message);
//     console.error('Error Stack:', error.stack);
// }
// try {
//     await clickAndWaitForUrl(page,'/pin');
//     try{
//         await page.waitForSelector(selectors.pinAjaib1, { timeout : 5000, visible : true });
//     }catch(error){
//         console.error('An error occurred:', error.message);
//         await page.waitForSelector(selectors.pinAjaib1, { timeout : 5000 ,  visible : true});
//     }
//     const pinAjaibVar1 = await page.$(selectors.pinAjaib1);
//     const pinAjaibVar2 = await page.$(selectors.pinAjaib2);
//     const pinAjaibVar3 = await page.$(selectors.pinAjaib3);
//     const pinAjaibVar4 = await page.$(selectors.pinAjaib4);
//     await pinAjaibVar1.type(process.env.AJ_PIN_1);
//     await pinAjaibVar2.type(process.env.AJ_PIN_2);
//     await pinAjaibVar3.type(process.env.AJ_PIN_3);
//     await pinAjaibVar4.type(process.env.AJ_PIN_4);
