const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };

export default function orderByProps(obj, arr) {
  const res = [];
  const keys = [];

  arr.forEach((el) => {
    for (const key in obj) {
      if (key === el) {
        res.push({
          key: `${key}`,
          value: `${obj[key]}`,
        });
      }
    }
  });

  for (const key in obj) {
    if (!arr.includes(key)) {
      keys.push(key);
    }
  }

  keys.sort();

  keys.forEach((el) => {
    res.push({
      key: `${el}`,
      value: `${obj[el]}`,
    });
  });

  return res;
}
