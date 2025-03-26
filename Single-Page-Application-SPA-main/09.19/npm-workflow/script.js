import { DateTime } from "luxon"

console.log(DateTime.now().minus({ weeks:1 }).toISO())