export const formatDate = (adteStr: string): string => {
  const date = new Date(adteStr).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return date;
};

export const makeCategory = (slug: string): string => {
  if (typeof slug === "string") {
    return slug.split("-").join(" ");
  }
  return "";
};

export const capitalizedFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
