const calculateAgeDiff = (date : Date) => {
  const today = Date.now();
  const diff_ms = today - date;
  const ageDate = new Date(diff_ms);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default calculateAgeDiff;
