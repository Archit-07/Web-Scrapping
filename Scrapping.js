import cheerio from "cheerio";
import fetch from "node-fetch";

const main = async () => {
  const html = await fetch("https://time.com/");

  const body = await html.text();
  const $ = cheerio.load(body);
  var i = 0;
  var val = [];

  $(".latest li").each((i, el) => {
    const title = $(el).find(".title").text();
    const link = $(el).find("a").attr("href");
    let ans = {};
    if (i < 5) {
      ans.title = title;
      ans.link = "https://time.com" + link;
      val.push(ans);
      i++;
    }
  });

  return val;
};

export default main;
