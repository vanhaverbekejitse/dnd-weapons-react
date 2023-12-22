export const weapondata = [
  {
    id: 1,
    name: 'longsword',
    cost: {
      amount: 15,
      coinType: 'gp',
    },
    damageRolls: [
      {
        amount: 1,
        dieType: 8,
        damageType: 'slashing',
      },
    ],
    weight: 3.0,
    properties: ['versatile'],
    rangeType: 'melee',
    proficiencyType: 'martial',
    range: null,
  },
  {
    id: 2,
    name: 'shortbow',
    cost: {
      amount: 25,
      coinType: 'gp',
    },
    damageRolls: [
      {
        amount: 1,
        dieType: 6,
        damageType: 'piercing',
      },
    ],
    weight: 2.0,
    properties: ['amunition', 'two-handed'],
    rangeType: 'ranged',
    proficiencyType: 'simple',
    range: {
      normalRange: 80,
      longRange: 320,
    },
  },
];
