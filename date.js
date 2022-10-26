exports.getDate = function () {
  const timeFormat = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const today = new Date();
  return today.toLocaleDateString("en-US", timeFormat);
};

exports.getDay = function () {
  const timeFormat = {
    weekday: "long",
  };
  const today = new Date();
  return (day = today.toLocaleDateString("en-US", timeFormat));
};
