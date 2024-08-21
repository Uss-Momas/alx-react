import { fromJS } from './node_modules/immutable/dist/immutable';

export default function getImmutableObject(obj) {
  return fromJS(obj);
}
