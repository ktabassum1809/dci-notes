import db from "./db.js";
import Score from "./models.js";

const queryData = async () => {
  await db.connect();

  console.log("Players scoring 1");
  console.log(await Score.find({ score: 1 }));
  console.log("Players scoring 2");
  console.log(await Score.find({ score: 2 }));
  console.log("Players scoring 1000");
  console.log(await Score.find({ score: 1000 }));
  console.log("Players scoring 999");
  console.log(await Score.find({ score: 999 }));
  console.log("Players scoring 500");
  console.log(await Score.find({ score: 500 }));

  await db.close();
};

queryData();
