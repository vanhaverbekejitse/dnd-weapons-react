# Dnd weapons app

React native app gemaakt voor Cross platform development. De app moet het gemakkelijker maken voor een dnd speler om de schade van zijn verschillende aanvallen te berekenen.\
Api: https://github.com/vanhaverbekejitse/dnd-weapons \
(kan even duren voordat data getoond wordt omdat api idle wordt als er even geen calls zijn geweest ~30sec)

- Informatie over de wapens in dnd raadplegen
- Standaard aanvallen van de wapens als template gebruiken om schade to berekenen/rollen

## Weapons

Overzicht van alle wapens

### Weapon detail

Overzicht van alle data van een specifiek wapen

- Knop om de aanvallen van het wapen aan je lijst van attacks toe te voegen
  Deze aanvallen dienen als templates en kunnen later aangepast worden
- Drukken op properties linkt je naar het scherm met alle eigenschappen van het wapen

### Weapon properties

Uitleg over de eigenschappen van het wapen

## Attacks

Overzicht van alle aanvallen die je kan uitvoeren.\
De informatie wordt op de standaarmanier van dnd weergegeven.\

**Damage roll:** (aantal keer rollen) d (aantal zijden van de dobbelsteen) (damagetype)\
**Range:** rangetype (normal range / long range)

- Drukken op een aanval om schade te rollen
- Drukken op de hamer om die aanval aan te passen

### Attack edit

De geselecteerde aanval aanpassen\
Verwijderen kan door op het vuilbakje de drukken

- Name: de naam van de aanval
- Damage modifier: schade die bij de andere rolls/modifiers wordt bijgeteld
- Ability type: welke ability modifier er wordt gebruikt bij de berekening
  -> Strenght, dexterity, finesse (neemt de hoogste van strength en dexterity) of spellcasting
- Damage rolls: welke dobbelstenen er gerold worden om schade te berkenen (mistens 1)
  - Aantal keer dat er gerold wordt
  - Aantal zijden van de dobbelsteen
  - Type van de damage
- Range: de afstand (in feet) waarop de attack kan uitgevoerd worden
  - Melee is altijd 5 feet
  - Reach is altijd 10 feet
  - Bij ranged en thrown heb je een normal range en een long range
    - Normal range: afstand waarop je de aanval zonder disadvantage kan uitvoeren
    - Long range: maximale afstand

## Settings

- Darkmode inschakelen
- Modifiers instellen die gebruikt worden bij het berekenen van schade

# BRONNEN

Api calls: https://jasonwatmore.com/post/2020/11/11/react-fetch-http-delete-request-examples \
App context voor settings: https://blog.devgenius.io/react-native-state-management-with-context-api-61f63f5b099 \
Data opnieuw laden bij focus: https://reactnavigation.org/docs/use-is-focused/ \
Dynamic themes: https://medium.com/@SeishinBG/dynamic-switching-of-themes-in-react-native-app-the-funky-way-with-hooks-48b57ab62a79 \
Switch scaling: https://stackoverflow.com/questions/39613439/how-to-change-the-switch-components-size-in-react-native \
String comparison: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
