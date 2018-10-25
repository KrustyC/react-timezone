// eslint-disable-next-line
export const stringifyZone = (zone, offset, withoutOffset) => {
  if (withoutOffset) {
    return zone.label;
  }

  const ensure2Digits = num => (num > 9 ? `${num}` : `0${num}`);

  const sign = zone.offset < 0 ? '-' : '+';
  const hours = ensure2Digits(Math.floor(Math.abs(zone.offset)));
  const minutes = ensure2Digits(Math.abs((zone.offset % 1) * 60));

  return `(${offset}${sign}${hours}:${minutes}) ${zone.label}`;
};
