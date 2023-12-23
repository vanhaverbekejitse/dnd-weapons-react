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

export const getWeaponTitle = (weapon) => {
  const { isMartial, attacks } = weapon;
  const isMelee = attacks.some((attack) => !hasRange(attack.range.rangeType));
  const proficiencyText = isMartial ? 'Martial' : 'Simple';
  const baseTypeText = isMelee ? 'melee' : 'ranged';
  return `${proficiencyText} ${baseTypeText} weapon`;
};
