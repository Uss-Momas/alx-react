import { getIn, fromJS } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
  const map = fromJS(object);
  return getIn(map, array);
}
