import parser from 'args-parser';

const values = parser(process.argv);

export default function args(name) {
  return name ? values[name] : values;
}
