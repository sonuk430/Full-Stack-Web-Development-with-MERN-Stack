const getAllJobs = async () => {
  res.send("get All jobs");
};
const getJob = async () => {
  res.send("get  single jobs");
};
const createJob = async () => {
  res.send("create jobs");
};
const updateJob = async () => {
  res.send("update jobs");
};
const deleteJob = async () => {
  res.send("delete jobs");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
