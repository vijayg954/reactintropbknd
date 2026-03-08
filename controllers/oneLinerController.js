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

// Get questions by topic
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

// Get Topics
export const getTopics = async (req, res) => {
  try {
    const { type } = req.query;

    const topics = await OneLiner.aggregate([
      { $match: { type } },

      { $sort: { order: 1 } },

      {
        $group: {
          _id: "$topic",
          order: { $min: "$order" },
        },
      },

      { $sort: { order: 1 } },
    ]);

    res.status(200).json({
      success: true,
      topics,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};