import {z} from "zod"


const goals = z.object({
  top_goal_day: z.string().default("").describe("The most important goal for the day"),
  top_goal_day_linear: z.string().default("").describe("The most important goal for the day"),
  top_goal_week: z.string().default("").describe("The most important goal for the day"),
  top_goal_week_linear: z.string().default("").describe("The most important goal for the day"),
  last_updated: z.string().default("").describe("Last updated timestamp"),
  notes: z.string().default("").describe("Notes"),
})


const x = goals.parse(undefined)

console.log(x)

