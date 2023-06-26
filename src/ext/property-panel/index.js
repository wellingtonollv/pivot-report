import createData from './data';

export default function create(env) {
  return {
    type: 'items',
    component: 'accordion',
    items: {
      data: createData(env),
    },
  };
}
