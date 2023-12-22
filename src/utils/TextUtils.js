import { hasRange } from './RollUtils';

export const getDamageText = (damageRolls, damageModifier) => {
  let damageModifierString = '';
  if (damageModifier > 0) {
    damageModifierString = `+${damageModifier}`;
  } else if (damageModifier < 0) {
    damageModifierString = `${damageModifier}`;
  }
  return damageRolls
    .map(({ amount, dieType, damageType }, index) => {
      if (index === 0) {
        return `${amount}d${dieType}${damageModifierString} ${damageType}`;
      }
      return `${amount}d${dieType} ${damageType}`;
    })
    .join(' + ');
};

export const getProficiencyText = (isMartial) => {
  return isMartial ? 'Martial' : 'Simple';
};

export const addPlusSign = (number) => {
  let numberString = number.toString();
  if (number >= 0) {
    numberString = `+${numberString}`;
  }
  return numberString;
};

export const getRangeText = (range) => {
  const { rangeType, longRange, normalRange } = range;
  if (hasRange(rangeType)) {
    return `${rangeType} (${normalRange}/${longRange})`;
  }
  return rangeType;
};
