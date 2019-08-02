var db = require("../models");

module.exports = function(app) {
  app.get("/create/demo", function(req, res) {
    db.Wine.create({
      title: "Hourglass Estate Cabernet Sauvignon",
      country: "USA",
      appelation: "Napa",
      vintage: 2003,
      cost: 109.99,
      website:
        "https://www.hourglasswines.com/product/2003-Hourglass-Estate-Cabernet-Sauvignon",
      sale: 1
    });
    db.Wine.create({
      title: "Leonetti Reserve",
      country: "USA",
      appelation: "Walla Walla",
      vintage: 2011,
      cost: 129.99,
      website: "http://www.leonetticellar.com/media/pdf/2011_Reserve_1.pdf",
      sale: 1
    });
    db.Wine.create({
      title: "Bruno Giacosa Barolo Falletto",
      country: "Italy",
      appelation: "Barolo",
      vintage: 2015,
      cost: 199.99,
      website:
        "https://www.wine.com/product/bruno-giacosa-barolo-falletto-2015/523357?state=CA&s=GoogleBase_CSE_523357_14673&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=Google_Shopping_CA_Beta&gclid=CjwKCAjw7O_pBRA3EiwA_lmtfogq0FpvNDTKcN2rvh3vr647ISzHIZniCbxa0brQ8obEJqef6nAj5xoC7KoQAvD_BwE&gclsrc=aw.ds",
      sale: 0
    });
    db.Wine.create({
      title: "Camille Giroud Vosne Romanee",
      country: "France",
      appelation: "Burgundy",
      vintage: 2016,
      cost: 331.99,
      website: "http://www.camillegiroud.com/les-vins-rouges.html#vosne",
      sale: 0
    });
    db.Wine.create({
      title: "Chateaux Margaux Premier Grand Cru",
      country: "France",
      appelation: "Bordeaux",
      vintage: 2017,
      cost: 495.99,
      website:
        "https://www.vivino.com/chateau-margaux-margaux-premier-grand-cru-classe/w/1127795",
      sale: 1
    });
    db.Wine.create({
      title: "Petrus Pomerol Grand Cru",
      country: "France",
      appelation: "Bordeaux",
      vintage: 1981,
      cost: 1800.0,
      website: "https://www.vivino.com/petrus-pomerol/w/1166837",
      sale: 0
    });
    db.Wine.create({
      title: "Pol Roger Brut Extra Cuvee de Reserve",
      country: "France",
      appelation: "Champagne",
      vintage: 1900,
      cost: 215.99,
      website:
        "https://www.vivino.com/pol-roger-brut-champagne-extra-cuvee-de-reserve/w/11781?year=1990&price_id=2162694",
      sale: 1
    });
    db.Wine.create({
      title: "Kosta Browne Gaps Crown Vineyard",
      country: "USA",
      appelation: "Sonoma",
      vintage: 2014,
      cost: 140.0,
      website:
        "https://www.vivino.com/kosta-browne-gap-s-crown-vineyard-pinot-noir/w/2988844?year=2014&price_id=9182363",
      sale: 0
    });
    db.Wine.create({
      title: "Joh Jos PRum Wehlener Sonnenuhr Rielsing Trockenbeerenauslese",
      country: "Germany",
      appelation: "Mosel",
      vintage: 1976,
      cost: 4402.0,
      website:
        "https://www.wine-seahrcher.com/find/joh+jos+prum+sonnenuhr+riesling+tba+wehlen+mosel+germany",
      sale: 0
    });
    db.Wine.create({
      title: "Cheval Blanc",
      country: "France",
      appelation: "Bordeaux",
      vintage: 2016,
      cost: 779.0,
      website:
        "https://www.wine.com/product/chateau-cheval-blanc-2016/202282?state=CA&s=GoogleBase_CSE_202282_1052&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=Google_Shopping_CA_Beta&gclid=Cj0KCQjwsvrpBRCsARIsAKBR_0JVuamZHo6HkSX0jZgcECp6bTdVkyo305TVCdVEE1Z84aHshTeYVzoaAg7_EALw_wcB&gclsrc=aw.ds",
      sale: 1
    });
    db.Wine.create({
      title: "Louis Roederer Cristal Brut",
      country: "France",
      appelation: "Champagne",
      vintage: 2008,
      cost: 260.0,
      website:
        "https://www.wine.com/product/louis-roederer-cristal-brut-2008/427651",
      sale: 1
    });
    db.Wine.create({
      title: "Ornellaia",
      country: "Italy",
      appelation: "Tuscany",
      vintage: 2016,
      cost: 219.0,
      website:
        "https://www.wine.com/product/ornellaia-2016/523179?ct=12565&iid=Recommendation%3AFromHomepage",
      sale: 0
    });
    db.Wine.create({
      title: "Teso la Monja Alabaster",
      country: "Spain",
      appelation: "Rioja",
      vintage: 2012,
      cost: 209.0,
      website:
        "https://www.wine.com/product/teso-la-monja-alabaster-2012/155611",
      sale: 0
    });
    db.Wine.create({
      title: "Leeuwin Estate Art Series",
      country: "Australia",
      appelation: "Margaret River",
      vintage: 2015,
      cost: 75.0,
      website:
        "https://www.wine.com/product/leeuwin-estate-art-series-chardonnay-2015/516298",
      sale: 0
    });
    db.Wine.create({
      title: "Penfolds Grange",
      country: "Australia",
      appelation: "South Australia",
      vintage: 2013,
      cost: 749,
      website: "https://www.wine.com/product/penfolds-grange-2013/414733",
      sale: 1
    })
      .then(function(success) {
        console.log(success);
      })
      .catch(function(err) {
        console.log(err);
      });

    db.Profile.create({
      name: "John",
      username: "WineSnob1",
      password: "Ellajude11",
      email: "john.robinson.0710@gmail.com"
    })
      .then(function(success) {
        console.log(success);
      })
      .catch(function(err) {
        console.log(err);
      });

    res.text("success!");
  });
};
