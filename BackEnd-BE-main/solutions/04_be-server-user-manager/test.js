const base = "http://localhost:5000";

console.log("ALL USERS");
console.log(await (await fetch(base + "/user")).json());

console.log("FIRST USER");
console.log(await (await fetch(base + "/user/1")).json());

const user = {
  name: "Charles Dickens",
  status: "It was the best of times.",
};
await fetch(base + "/user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
});

console.log("POSTED");
console.log(await (await fetch(base + "/user/2")).json());

await fetch(base + "/user/2", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    status: "Thubthumping. Chumba wumba. Lit AF.",
  }),
});

console.log("PATCHED");
console.log(await (await fetch(base + "/user/2")).json());

console.log("ALL USERS");
console.log(await (await fetch(base + "/user")).json());
