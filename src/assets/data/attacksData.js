export const attacksData = [
  {
    id: 11,
    name: 'Longsword',
    damageModifier: 0,
    abilityType: 'Strength',
    damageRolls: [
      {
        amount: 1,
        dieType: 8,
        damageType: 'Slashing',
      },
    ],
    range: {
      rangeType: 'Melee',
      normalRange: null,
      longRange: null,
    },
  },
  {
    id: 12,
    name: 'Longsword (two-handed)',
    damageModifier: 0,
    abilityType: 'Strength',
    damageRolls: [
      {
        amount: 1,
        dieType: 10,
        damageType: 'Slashing',
      },
    ],
    range: {
      rangeType: 'Melee',
      normalRange: null,
      longRange: null,
    },
  },
  {
    id: 13,
    name: 'Shortbow',
    damageModifier: 0,
    abilityType: 'Dexterity',
    damageRolls: [
      {
        amount: 1,
        dieType: 6,
        damageType: 'Piercing',
      },
    ],
    range: {
      rangeType: 'Ranged',
      normalRange: 80,
      longRange: 320,
    },
  },
  {
    id: 14,
    name: 'Flame Tongue Longsword',
    damageModifier: 0,
    abilityType: 'Strength',
    damageRolls: [
      {
        amount: 1,
        dieType: 8,
        damageType: 'Slashing',
      },
      {
        amount: 2,
        dieType: 6,
        damageType: 'Fire',
      },
    ],
    range: {
      rangeType: 'Melee',
      normalRange: null,
      longRange: null,
    },
  },
  {
    id: 15,
    name: 'Flame Tongue Longsword (two-handed)',
    damageModifier: 0,
    abilityType: 'Strength',
    damageRolls: [
      {
        amount: 1,
        dieType: 8,
        damageType: 'Slashing',
      },
      {
        amount: 2,
        dieType: 6,
        damageType: 'Fire',
      },
    ],
    range: {
      rangeType: 'Melee',
      normalRange: null,
      longRange: null,
    },
  },
];
