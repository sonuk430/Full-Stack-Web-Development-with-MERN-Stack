const getAllJobs = async () => {
  res.send("get All jobs");
};
const getJob = async () => {
  res.send("get  single jobs");
};
const createJob = async (req, res) => {
  res.json(req.user);
};
const updateJob = async () => {
  res.send("update jobs");
};
const deleteJob = async () => {
  res.send("delete jobs");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
