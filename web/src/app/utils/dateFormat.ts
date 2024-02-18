export const dateTimestampToDDMMYY = (timestamp: number) => {
  const data = new Date(timestamp);
  const day = data.getDate().toString().padStart(2, "0");
  const month = (data.getMonth() + 1).toString().padStart(2, "0");
  const year = data.getFullYear().toString().slice(-2);
  return `${day}/${month}/${year}`;
};

export const calculateTimeDifference = (
  timestamp1: number,
  timestamp2: number
) => {
  const millisecondsDiff = Math.abs(timestamp2 - timestamp1);
  const secondsDiff = millisecondsDiff / 1000;
  const minutesDiff = secondsDiff / 60;
  const hoursDiff = minutesDiff / 60;
  const days = Math.floor(hoursDiff / 24);
  const remainingHours = Math.floor(hoursDiff % 24);
  const remainingMinutes = Math.floor(minutesDiff % 60);

  let result = "";
  if (days > 0) {
    result += `${days} dia${days > 1 ? "s" : ""}`;
    if (remainingHours > 0 || remainingMinutes > 0) {
      result += ", ";
    }
  }
  if (remainingHours > 0) {
    result += `${remainingHours} hora${remainingHours > 1 ? "s" : ""}`;
    if (remainingMinutes > 0) {
      result += " e ";
    }
  }
  if (remainingMinutes > 0) {
    result += `${remainingMinutes} minuto${remainingMinutes > 1 ? "s" : ""}`;
  }

  return result;
};
