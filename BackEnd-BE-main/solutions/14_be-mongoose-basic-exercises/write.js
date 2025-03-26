import db from "./db.js";
import Score from "./models.js";

const generateMockData = () => {
  const getRandomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const mockData = [];

  for (let i = 0; i < 900; i++) {
    mockData.push({
      name: `${getRandomChar()}${getRandomChar()}${getRandomChar()}`,
      date: Date.now() - Math.floor(Math.random() * 10000),
      score: Math.floor(Math.random() * 1001),
    });
  }

  return mockData;
};

const main = async () => {
  await db.connect();
  const mockData = generateMockData();
  await Score.insertMany(mockData);
  console.log("Inserted 900 Documents");
  await db.close();
};

main();
