/* eslint-disable max-len */

export const CURRENCIES_SYMBOLS = [
    { name: 'OANDA:AUD_CAD', title: 'AUD/CAD', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/aud.svg', imgBottom: 'server/constants/icons/currency/cad.svg' },
    { name: 'OANDA:AUD_CHF', title: 'AUD/CHF', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/aud.svg', imgBottom: '/server/constants/icons/currency/chf.svg' },
    { name: 'OANDA:AUD_JPY', title: 'AUD/JPY', leverage: 10, lotVolume: 10, imgTop: '/server/constants/icons/currency/aud.svg', imgBottom: '/server/constants/icons/currency/jpy.svg' },
    { name: 'OANDA:AUD_NZD', title: 'AUD/NZD', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/aud.svg', imgBottom: '/server/constants/icons/currency/nzd.svg' },
    { name: 'OANDA:AUD_USD', title: 'AUD/USD', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/aud.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'OANDA:EUR_AUD', title: 'EUR/AUD', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/eur.svg', imgBottom: '/server/constants/icons/currency/aud.svg' },
    { name: 'OANDA:EUR_CHF', title: 'EUR/CHF', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/eur.svg', imgBottom: '/server/constants/icons/currency/chf.svg' },
    { name: 'OANDA:EUR_GBP', title: 'EUR/GBP', leverage: 10, lotVolume: 10, imgTop: '/server/constants/icons/currency/eur.svg', imgBottom: '/server/constants/icons/currency/gbp.svg' },
    { name: 'OANDA:EUR_JPY', title: 'EUR/JPY', leverage: 10, lotVolume: 10, imgTop: '/server/constants/icons/currency/eur.svg', imgBottom: '/server/constants/icons/currency/jpy.svg' },
    { name: 'OANDA:EUR_USD', title: 'EUR/USD', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/eur.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'OANDA:GBP_AUD', title: 'GBP/AUD', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/gbp.svg', imgBottom: '/server/constants/icons/currency/aud.svg' },
    { name: 'OANDA:GBP_CAD', title: 'GBP/CAD', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/gbp.svg', imgBottom: 'server/constants/icons/currency/cad.svg' },
    { name: 'OANDA:GBP_CHF', title: 'GBP/CHF', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/gbp.svg', imgBottom: '/server/constants/icons/currency/chf.svg' },
    { name: 'OANDA:GBP_JPY', title: 'GBP/JPY', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/currency/gbp.svg', imgBottom: '/server/constants/icons/currency/jpy.svg' },
    { name: 'OANDA:GBP_USD', title: 'GBP/USD', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/gbp.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'OANDA:NZD_CAD', title: 'NZD/CAD', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/nzd.svg', imgBottom: 'server/constants/icons/currency/cad.svg' },
    { name: 'OANDA:NZD_CHF', title: 'NZD/CHF', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/nzd.svg', imgBottom: '/server/constants/icons/currency/chf.svg' },
    { name: 'OANDA:NZD_JPY', title: 'NZD/JPY', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/currency/nzd.svg', imgBottom: '/server/constants/icons/currency/jpy.svg' },
    { name: 'OANDA:NZD_USD', title: 'NZD/USD', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/nzd.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'OANDA:USD_CAD', title: 'USD/CAD', leverage: 5, lotVolume: 10000, imgTop: '/server/constants/icons/currency/usd.svg', imgBottom: 'server/constants/icons/currency/cad.svg' },
    { name: 'OANDA:USD_CHF', title: 'USD/CHF', leverage: 5, lotVolume: 100, imgTop: '/server/constants/icons/currency/usd.svg', imgBottom: '/server/constants/icons/currency/chf.svg' },
    { name: 'OANDA:USD_JPY', title: 'USD/JPY', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/currency/usd.svg', imgBottom: '/server/constants/icons/currency/jpy.svg' },
    { name: 'OANDA:EUR_CAD', title: 'EUR/CAD', leverage: 5, lotVolume: 100, imgTop: '/server/constants/icons/currency/eur.svg', imgBottom: '/server/constants/icons/currency/cad.svg' },
    { name: 'OANDA:USD_DKK', title: 'USD/DKK', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/currency/usd.svg', imgBottom: '/server/constants/icons/currency/dk.svg' },
    { name: 'OANDA:USD_MXN', title: 'USD/MXN', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/currency/usd.svg', imgBottom: '/server/constants/icons/currency/mx.svg' },
    { name: 'OANDA:USD_NOK', title: 'USD/NOK', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/currency/usd.svg', imgBottom: '/server/constants/icons/currency/nok.svg' },
    { name: 'OANDA:USD_SEK', title: 'USD/SEK', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/currency/usd.svg', imgBottom: '/server/constants/icons/currency/sek.svg' },
    { name: 'OANDA:USD_SGD', title: 'USD/SGD', leverage: 5, lotVolume: 1000, imgTop: '/server/constants/icons/currency/usd.svg', imgBottom: '/server/constants/icons/currency/sgd.svg' },
    { name: 'OANDA:EUR_SGD', title: 'EUR/SGD', leverage: 5, lotVolume: 1000, imgTop: '/server/constants/icons/currency/eur.svg', imgBottom: '/server/constants/icons/currency/sgd.svg' },
    { name: 'OANDA:GBP_SGD', title: 'GBP/SGD', leverage: 5, lotVolume: 1000, imgTop: '/server/constants/icons/currency/gbp.svg', imgBottom: '/server/constants/icons/currency/sgd.svg' },
    { name: 'OANDA:NZD_SGD', title: 'NZD/SGD', leverage: 5, lotVolume: 1000, imgTop: '/server/constants/icons/currency/nzd.svg', imgBottom: '/server/constants/icons/currency/sgd.svg' }
];

export const VALUES_SYMBOLS = [
    { name: 'OANDA:XAU_USD', title: 'Gold', leverage: 2, lotVolume:500, imgAlone: '/server/constants/icons/values/gold.svg' },
    { name: 'OANDA:XAG_USD', title: 'Silver', leverage: 2, lotVolume: 500, imgAlone: '/server/constants/icons/values/silver.svg' },
    { name: 'OANDA:WTICO_USD', title: 'West Texas Oil', leverage: 10, lotVolume: 1000, imgAlone: '/server/constants/icons/values/crudeoil.svg' },
    { name: 'OANDA:BCO_USD', title: 'Brent Crude Oil', leverage: 10, lotVolume: 1000, imgAlone: '/server/constants/icons/values/crudeoil.svg' },
    { name: 'OANDA:CORN_USD', title: 'Corn', leverage: 2, lotVolume: 1000, imgAlone: '/server/constants/icons/values/corn.svg' },
    { name: 'OANDA:SOYBN_USD', title: 'Soybeans', leverage: 2, lotVolume: 100, imgAlone: '/server/constants/icons/values/sbean.svg' },
    // { name: 'OANDA:COFFEE_USD', title: 'Coffee', leverage: 5, lotVolume: 500, imgAlone: '/server/constants/icons/values/coffe.svg' },
    { name: 'OANDA:SUGAR_USD', title: 'Sugar', leverage: 5, lotVolume: 1000, imgAlone: '/server/constants/icons/values/sugar.svg' }
    // { name: 'OANDA:COTTON_USD', title: 'Cotton', leverage: 5, lotVolume: 1000, imgAlone: '/server/constants/icons/values/cotton.svg' }
];

export const COMPANY_SHARES_SYMBOLS = [
    { name: 'AAPL', title: 'Apple Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/apple.svg' },
    { name: 'AMZN', title: 'Amazon Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/amazon.svg' },
    { name: 'BA', title: 'Boeing Co/The', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/boeing.svg' },
    { name: 'BAC', title: 'Bank of America Corp', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/empty.svg' },
    { name: 'DIS', title: 'Walt Disney Co/The', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/disney.svg' },
    { name: 'FB', title: 'Facebook Inc-class A', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/facebook.svg' },
    { name: 'GOOGL', title: 'Google Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/google.svg' },
    { name: 'JCPB', title: 'Jpmorgan Core', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/jpm.svg' },
    { name: 'CCF', title: 'Chase Corp', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/empty.svg' }, 
    { name: 'KO', title: 'Coca-cola Co/The', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/coke.svg' },
    { name: 'MCD', title: 'Mcdonald\'s Corp', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/mcdon.svg' },
    { name: 'MSFT', title: 'Microsoft Corp', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/msft.svg' },
    { name: 'PM', title: 'Philip Morris International', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/pmi.svg' },
    { name: 'YNDX', title: 'Yandex', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/yandex.svg' },
    { name: 'NFLX', title: 'Netflix Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/netflix.svg' },
    { name: 'TSLA', title: 'Tesla Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/empty.svg' }, 
    { name: 'AA', title: 'Alcoa Corp', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/alcoa.svg' },
    { name: 'AXP', title: 'American express Co', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/empty.svg' },
    { name: 'CAT', title: 'Caterpillar', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/cat.svg' },
    { name: 'CSCO', title: 'Cisco Systems Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/cisco.svg' },
    { name: 'CVX', title: 'Chevron', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/chevron.svg' },
    { name: 'EBAY', title: 'Ebay', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/ebay.svg' },
    { name: 'GE', title: 'General Electric CO', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/genelc.svg' },
    { name: 'NVDA', title: 'Nvidia', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/nvidia.svg' },
    { name: 'PEP', title: 'Pepsico Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/pepsico.svg' },
    { name: 'UBER', title: 'Uber Technologies Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/uber.svg' },
    { name: 'NKE', title: 'Nike Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/nike.svg' },
    { name: 'ADBE', title: 'Adobe Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/adobe.svg' },
    { name: 'BMW', title: 'BMW', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/bmw.svg' }, 
    { name: 'HPE', title: 'Hewlett Packard Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/hpack.svg' },
    { name: 'IBM', title: 'Intl Business Mashine Corp', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/ibm.svg' },
    { name: 'INTC', title: 'Intel Corp', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/intel.svg' },
    { name: 'JNJ', title: 'Johnson & Johnson', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/jnj.svg' },
    { name: 'JPM', title: 'JPMorgan Chase & Co', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/jpm.svg' },
    { name: 'MCO', title: 'Moodys Corp', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/empty.svg' },
    { name: 'MMM', title: '3M Company', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/3m.svg' },
    { name: 'MO', title: 'Altria Group', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/empty.svg' },
    { name: 'PFE', title: 'Pfizer Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/pfizer.svg' },
    { name: 'PG', title: 'Procter & Gamble Co', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/pcg.svg' },
    { name: 'T', title: 'AT&T', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/att.svg' },
    { name: 'VZ', title: 'Verizon Communications Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/verizon.svg' },
    { name: 'WMT', title: 'Walmart Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/walmart.svg' },
    { name: 'XOM', title: 'Exxon Mobil Corm', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/exxm.svg' },
    { name: 'LMT', title: 'Lockheed Martin Corp', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/empty.svg' },
    { name: 'BIDU', title: 'Baidu Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/baidu.svg' },
    { name: 'MANT', title: 'Mantech International Corp-A', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/mant.png' },
    { name: 'HOFT', title: 'Hooker Furniture Corp', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/hoft.png' },
    { name: 'GBT', title: 'Global Blood Therapeutics In', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/gbt.png' },
    { name: 'SAFM', title: 'Sanderson Farms Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/safm.png' },
    { name: 'PATK', title: 'Patrick Industries Inc', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/patik.png' },
    { name: 'MIME', title: 'Mimecast Ltd', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/mime.png' },
    { name: 'NMFC', title: 'New Mountain Finance Corp', leverage: 5, lotVolume: 100, imgAlone: '/server/constants/icons/shares/nmfc.png' }
    ];

export const INDICES_SYMBOLS = [
    { name: 'BINANCE:BINANCE:XRPDOWNUSDT', title: 'XRPDOWN', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/btc.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'BINANCE:ETHDOWNUSDT', title: 'Ethereum INDEX', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/eth.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'BINANCE:BTCDOWNUSDT', title: 'BTC INDEX', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/xrp.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'BINANCE:ADADOWNUSDT', title: 'ADA INDEX', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/ltc.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'BINANCE:BNBDOWNUSDT', title: 'BNB INDEX', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/dsh.svg', imgBottom: '/server/constants/icons/currency/usd.svg' } 
    ];

export const CRYPTO_CURRENCIES_SYMBOLS = [
    { name: 'BINANCE:BTCUSDT', title: 'Bitcoin', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/1.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'BINANCE:ETHUSDT', title: 'Ethereum', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/2.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'BINANCE:XRPUSDT', title: 'Ripple', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/3.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'BINANCE:LTCUSDT', title: 'Litecoin', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/4.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'BINANCE:SHIBUSDT', title: 'Shiba Inu', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/5.svg', imgBottom: '/server/constants/icons/currency/usd.svg' }, 
    { name: 'BINANCE:TRXUSDT', title: 'Tron', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/6.svg', imgBottom: '/server/constants/icons/currency/usd.svg' }, 
    { name: 'BINANCE:IOTAUSDT', title: 'Iota', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/7.svg', imgBottom: '/server/constants/icons/currency/usd.svg' }, 
    { name: 'BINANCE:DOGEUSDT', title: 'Doge Coin', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/8.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'BINANCE:LINKUSDT', title: 'LINK', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/9.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'BINANCE:LUNAKUSDT', title: 'LUNA', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/10.svg', imgBottom: '/server/constants/icons/currency/usd.svg' }, 
    { name: 'BINANCE:XLMUSDT', title: 'STELLAR', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/11.svg', imgBottom: '/server/constants/icons/currency/usd.svg' },
    { name: 'BINANCE:XECUSDT', title: 'eCASH', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/13.svg', imgBottom: '/server/constants/icons/currency/usd.svg' }, 
    { name: 'BINANCE:BETAUSDT', title: 'Beta Finance', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/14.svg', imgBottom: '/server/constants/icons/crypto/btc.svg' },
    { name: 'BINANCE:UNIUSDT', title: 'Uniswap', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/15.svg', imgBottom: '/server/constants/icons/crypto/btc.svg' },
    { name: 'BINANCE:YFIUSDT', title: 'yearn.finance', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/16.svg', imgBottom: '/server/constants/icons/crypto/btc.svg' },
    { name: 'BINANCE:SUSHIUSDT', title: 'SUSHI', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/17.svg', imgBottom: '/server/constants/icons/crypto/btc.svg' },
    { name: 'BINANCE:CACKEUSDT', title: 'PancakeSwap', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/bch.svg', imgBottom: '/server/constants/icons/crypto/eth.svg' }, 
    { name: 'BINANCE:LUNCUSDT', title: 'Terra Classic', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/gnt.svg', imgBottom: '/server/constants/icons/crypto/eth.svg' },
    { name: 'BINANCE:UNFIUSDT', title: 'Protocol DAO', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/btc.svg', imgBottom: '/server/constants/icons/crypto/ru.svg' },
    { name: 'BINANCE:MATICUSDT', title: 'MATIC Polygon', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/btc.svg', imgBottom: '/server/constants/icons/currency/eur.svg' },
    { name: 'BINANCE:RPLUSDT', title: 'ROCKET Pool', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/bch.svg', imgBottom: '/server/constants/icons/crypto/ru.svg' }, 
    { name: 'BINANCE:ADAUSDT', title: 'ADA', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/eth.svg', imgBottom: '/server/constants/icons/currency/eur.svg' },
    { name: 'BINANCE:ATOMUSDT', title: 'ATOM', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/dsh.svg', imgBottom: '/server/constants/icons/crypto/ru.svg' }, 
    { name: 'BINANCE:DASHUSDT', title: 'DASH', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/dsh.svg', imgBottom: '/server/constants/icons/crypto/ru.svg' }, 
    { name: 'BINANCE:MASKUSDT', title: 'MASK', leverage: 5, lotVolume: 10, imgTop: '/server/constants/icons/crypto/dsh.svg', imgBottom: '/server/constants/icons/currency/eur.svg' }
];

export const CHART_SYMBOL_GROUPS = [
    { id: 'crypto', img: '/src/apps/client/ui/components/AssetsButton/images/bitcoin.svg', title: 'Криптовалюты', symbols: CRYPTO_CURRENCIES_SYMBOLS },
    { id: 'currencies', img: '/src/apps/client/ui/components/AssetsButton/images/currencies.svg', title: 'Валюты', symbols: CURRENCIES_SYMBOLS },
    { id: 'products', img: '/src/apps/client/ui/components/AssetsButton/images/production.svg', title: 'Товары', symbols: VALUES_SYMBOLS },
    { id: 'shares', img: '/src/apps/client/ui/components/AssetsButton/images/shares.svg', title: 'Акции', symbols: COMPANY_SHARES_SYMBOLS },
   // { id: 'indices', img: '/src/apps/client/ui/components/AssetsButton/images/index.svg', title: 'Индексы', symbols: INDICES_SYMBOLS }
];

export const CHART_SYMBOL_INFO_MAP = {
    ...CHART_SYMBOL_GROUPS.reduce((result, group) => {
        const groupResult = group.symbols.reduce((result, symbol) => {
            return {
                ...result,
                [symbol.name]: {
                    ...symbol,
                    groupId: group.id
                }
            };
        }, {});

        return {
            ...result,
            ...groupResult
        };
    }, {})
};
