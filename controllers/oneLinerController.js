import OneLiner from "../models/oneLiner.js";

// Create
export const createOneLiner = async (req, res) => {
  try {
    const data = await OneLiner.create(req.body);

    res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get by type
export const getOneLiners = async (req, res) => {
  try {
    const { type, topic } = req.query;

    const filter = {};

    if (type) filter.type = type;
    if (topic) filter.topic = topic;

    const data = await OneLiner.find(filter).sort({ order: 1 });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTopics = async (req, res) => {
  try {
    const { type } = req.query;

    if (!type) {
      return res.status(400).json({
        success: false,
        message: "Type is required",
      });
    }

    const topics = await OneLiner.aggregate([
      { $match: { type } },
      {
        $group: {
          _id: "$topic",
          order: { $first: "$order" },
        },
      },
      { $sort: { order: 1 } },
    ]);

    res.status(200).json({
      success: true,
      topics: topics.map(t => t._id),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};