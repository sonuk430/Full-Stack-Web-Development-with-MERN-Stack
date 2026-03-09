const Job = require("../models/jobModel");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(200).json({ count: jobs.length, jobs });
};

const getJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });

  if (!job) {
    return res.status(400).json({ message: `No job with id ${jobId}` });
  }
  return res.status(200).json({ job });
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(201).json({ message: "User created Successfully", job });
};

const updateJob = async (req, res) => {
  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId },
  } = req;

  if (!company || !position) {
    return res
      .status(400)
      .json({ message: "Company or Position fields cannot be empty" });
  }

  const job = await Job.findOneAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true },
  );

  if (!job) {
    return res.status(404).json({ message: `No job with id ${jobId}` });
  }

  res.status(200).json({ job });
};

const deleteJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findByIdAndDelete({ _id: jobId, createBy: userId });
  if (!job) {
    return res.status(400).json({ message: `No job with id ${jobId}` });
  }
  return res.status(200).json({ message: "Job Deleted successfully" });
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
