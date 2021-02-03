export function search({ list, lookupKeys, query }) {
  if (!query || !lookupKeys || !lookupKeys.length) {
    return list;
  }
  query = query.toLowerCase();
  return list.filter(item =>
    lookupKeys.some(
      key => key in item && item[key].toString().toLowerCase().includes(query),
    ),
  );
}
