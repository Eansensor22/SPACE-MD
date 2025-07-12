require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAFVG7FpCH7qIUQQAAHEHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGrkIolVdtYA2IKLgDXFrHyIEjECgQ0Bxyv++hT09PQ+7s708hSR1zne+S74DUuAK2agFk++gpLiBDHVL1pYITIBWxzGioA8iyCCYgMod2OxoL7m1Js7MnZUreRgNGv58X83R*hqcuKiRuKU+9r0X8OiDsj5lOPxNQXW*3OGcn8OhxsX6NdjEzdiYxddRU*ZcRR+VVbFra0lwdrsX8OgqQkwxSWblGeWIwsxGrQsx*Rr8ZNqGTn0*7iWItaao9Xlh6UIunJbtuQrJwS5ar6cVsv+qfA1+kqh2IOrFQpkvI0c4yid*L5gwSZZMO9gaXGQng4b4YgnJO*wKJwRFVoQIw6z9Mu+BJuarcg+t2BOPtqWO1TUOjDd9fk*zjSjMdEvU0vFwE*vF14D7tr2qt3hKy1d4m9+ncX6FojMolmU4DA9eejleNhozjoan*grcpR9eSf8P76kl8jxU5mvINGWwpbdqfDytPBtDlXfvW8sV+KPpp1aYh1+Ef1xd5wLLBrbvoB50HXIyr6d2IcLdXWqdYngLDP7eOMb6+gkfspr+DqVVbGbRYibFDjbl3HeadgNDxVofRqdRaG6NqTRfXpvZm77myjpYbkgthgm9DXVT6OWyKxcS8+7TMzLza+lxU*PIuRFOXp4Tpai1IjDhH31AUYIrRiHDBen2hFEfwKjZoJAi9mQXRCHZ64k29ckGTXuvh+Uq9YfwuE0zrHp24FmLqUPEwFh76Qvog5IWIaoqFJm4YgVtHVRVMEEVmPz5Vx8QdGPvunXdRL4PYkwrtiN1mRUw+hD14xCGYVETtmlJqHcLRMGE+9xGjGGSVB2NNYE0POMG6WfIKjCJYVahnwMiiiIwYbRGP0OrF1HH+0jf7+XFkAd9kD*1wBGYAEGSR0NZEkZDTpzIwh*Vt2tXFpblN4IY6IPseY3nx9JQliVZFriRKHc3u4PHT4RdwQgxiLMKTIBuL7xW8V5nSzJtHccw1Fmi6okKPif6cMY79UJvORhrUjSMV3d72Fb+TjuMV60fof39nsfpgtUXCfqX2SZ4+YciYAKoOb9puEF8WPC8MYqJe8x68unN9d1A4I8XN0vE9VTnlYZuxKGylprLMUSztuqlEXLeUmO6v0UK9dbhvRnPp0Shaa53NuqDCDU4RL82y8jZUQ4pXfmxnbin2bxdh6K24ByyMXzmjjOXWGJtROENV225Whfx0lxaK66NHLsxTfU1IEl8fVXeLLsmQkS0sg4u13fPPjOT*Xir8NNOnVbdb4zRM*oEdgr+t3bvwDuLcY*+LzV+PCb*Ekgtai7xwEMHZN6rtnboa6buB9sqI4csVCQi6aNT0fOz4jbLwePxVx+UGWRxQXMwAZBEtMAR6ANa1J1nLRIXv2mmqztL*ZHWDFZM*czBFueoYjAvwYQfSYLIc4Iov99yaVGasDp3JLh8cI47U7dqWW4YZB+xAurzu1fg8TdQSwECFAMUAAAICABVRuxaQh+6iFEEAABxBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '256746527403',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
