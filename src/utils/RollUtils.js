export const roll = (damageRolls, damageModifier, name) => {
  let total = 0;
  let result = damageRolls
    .map(({ amount, dieType, damageType }, index) => {
      let damage = 0;
      for (let i = 0; i < amount; i++) {
        damage += Math.floor(Math.random() * dieType) + 1;
      }
      if (index === 0) {
        damage += damageModifier;
      }
      total += damage;
      return damage + ' ' + damageType.toLowerCase();
    })
    .join(' + ');
  return `Rolled ${name} for\n${total} (${result}) damage`;
};

export const getAbilityType = (range, properties) => {
  if (properties.includes('Finesse')) {
    return 'Finesse';
  }
  if (range.rangeType === 'Ranged') {
    return 'Dexterity';
  }
  return 'Strength';
};

export const parseIntInput = (input, baseValue) => {
  let parsedInput = parseInt(input) || baseValue;
  return Math.max(parsedInput, baseValue);
};

export const hasRange = (rangeType) => {
  return rangeType !== 'Melee' && rangeType != 'Reach';
};

export const damageTypes = [
  'Slashing',
  'Piercing',
  'Bludgeoning',
  'Poison',
  'Acid',
  'Fire',
  'Cold',
  'Radiant',
  'Necrotic',
  'Lightning',
  'Force',
  'Psychic',
];

export const abilityTypes = [
  'Strength',
  'Dexterity',
  'Finesse',
  'Spell casting',
];

export const rangeTypes = ['Melee', 'Reach', 'Ranged', 'Thrown'];
