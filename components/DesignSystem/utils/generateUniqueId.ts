type IdOptions = {
  length?: number,
  prefix?: string|null,
};

function generateUniqueId( options?: IdOptions) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  options = options ?? {};
  const length = options.length ?? 20;
  const prefix = options.prefix ?? '';

  let result = prefix;

  for (let i = 0; i < length; i++) {
    result += characters.charAt( Math.floor( Math.random() * characters.length));
  }

  return result;
}

export default generateUniqueId;
