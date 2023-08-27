const axios = require('axios');

module.exports = {
  config: {
    name: "gojo,
    aliases: ["gojo"],
    version: "1.0",
    author: "charlie",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "Lấy hình ảnh ngẫu nhiên",
      en: "Get random images"
    },
    longDescription: {
      vi: "Lấy hình ảnh ngẫu nhiên từ danh sách đã định nghĩa",
      en: "Get random images from the predefined list"
    },
    category: "general",
    guide: {
      vi: "{pn}",
      en: "{pn}"
    }
  },

  getRandomImage: function () {
    const images = [
      "https://wall.alphacoders.com/big.php?i=1298253",
      "https://wall.alphacoders.com/big.php?i=1328485",
      "https://wall.alphacoders.com/big.php?i=1324832",
      // Add more image URLs as needed
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  },

  onStart: async function ({ message }) {
    try {
      const imageUrl = this.getRandomImage();

      return message.reply({
        attachment: await global.utils.getStreamFromURL(imageUrl)
      });
    } catch (error) {
      console.error("Error while retrieving waifu image:", error);
      return message.reply("An error occurred while processing your request.");
    }
  }
};
