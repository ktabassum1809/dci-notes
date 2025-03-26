import express from "express";
import Listing from "../models/Listing.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const limit = 5;
  const skip = limit * Number(req.query.currentPage) || 0;
  const sortBy = req.query.sortBy || "price";
  const sortDirection = req.query.sortDirection || "asc";
  const listings = await Listing.find()
    .limit(limit)
    .skip(skip)
    .sort({ [sortBy]: sortDirection });

  res.json(listings);
});

export default router;
