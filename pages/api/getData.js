// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let token = "Bot NjY4MDk5MzUyNjU2NDc4MjA4.XiMWAg.YNVtz-AtCa3RAzR28O0wWoG_ttI";
  let userAgent = "DiscordBot (daysling.tk, 1.0)";
  let channelId = "675584998308577310";
  let url = `https://discord.com/api/v9/channels/${channelId}/messages`;
  let axios = require('axios');
  let headers =  {
      "Authorization" : token,
      "User-Agent" : userAgent
  }
  const instance = axios.create({
    baseURL: url,
    headers: headers
  });
  instance.get(url).then(resp => {
    let arrays = [];
    if(resp.data) {
      resp.data.forEach((e) => {
        if(e.attachments[0]) {
          if(checkURL(e.attachments[0].url)) {
            arrays.push(e.attachments[0].url);
          }
        }
      })
      return arrays;
    }
  }).then((ep) => {
    res.json(ep);
    res.status(200);
  });

}

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}