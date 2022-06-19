export default function getter(data, path) {
  let name;

  path = path.split(/]\[|]\.|\.|]|\[/).filter(v => v);

  while (name = path.shift()) {
    if (data == null) return data;

    data = data[name];
  }

  return data;
};
