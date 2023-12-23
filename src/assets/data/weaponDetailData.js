export const weaponsDetailData = {
  id: 2,
  name: 'Dagger',
  weaponType: 'Knife',
  rarity: 'Common',
  cost: {
    amount: 2,
    coinType: 'gp',
  },
  damageModifier: 0,
  weight: 1,
  properties: ['Light', 'Finesse', 'Thrown'],
  attacks: [
    {
      id: 2,
      name: 'Dagger',
      damageRolls: [
        {
          amount: 1,
          dieType: 4,
          damageType: 'Piercing',
        },
      ],
      range: {
        rangeType: 'Melee',
        normalRange: null,
        longRange: null,
      },
    },
    {
      id: 3,
      name: 'Dagger (thrown)',
      damageRolls: [
        {
          amount: 1,
          dieType: 4,
          damageType: 'Piercing',
        },
      ],
      range: {
        rangeType: 'Thrown',
        normalRange: 20,
        longRange: 60,
      },
    },
  ],
  isMartial: false,
};
