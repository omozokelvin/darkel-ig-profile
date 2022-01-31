const puppeteer = require('puppeteer');

const getInstagramProfile = async (username) => {
  try {
    const urlToRead = `https://www.instagram.com/${username}/`;

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    await page.goto(urlToRead);

    const userInfo = await page.evaluate(() => {
      const profileImage = document.querySelector('img[alt~="profile"]');
      const h1 = document.querySelector('h1');
      const followers = document.querySelector('ul>li:nth-child(2)>a>span');
      const following = document.querySelector(
        'ul > li:nth-child(3) > a > span'
      );
      const website = document.querySelector(
        'section > main > div > header > section > div > a'
      );

      return {
        profileImage: profileImage?.src || '',
        name: h1?.innerText || '',
        followers: followers?.innerText || '',
        following: following?.innerText || '',
        website: website?.innerText || '',
      };
    });

    browser.close();

    return userInfo;
  } catch (e) {
    throw e;
  }
};

module.exports = getInstagramProfile;
