# Dnd weapons app

React native app gemaakt voor Cross platform development\
Api: https://github.com/vanhaverbekejitse/dnd-weapons\
(kan even duren voordat data getoond wordt omdat api gaat idle als er even geen calls zijn geweest)

- Informatie over de wapens in dnd te raadplegen
- Wapens attacks gebruiken als template om damage to berekenen/rollen

## Weapons

Overzicht van alle wapens

### Weapon detail

Overzicht van alle data van een specifiek wapen

- Knop om de attacks van het wapen aan je lijst van attacks toe te voegen
  Deze attacks dienen als templates en kunnen later aangepast worden
- Drukken op properties link je naar het wapon properties scherm

### Weapon properties

Uitleg over de properties van het wapen

## Attacks

Overzicht van al je attacks

- Drukken op een attack om damage te rollen
- Drukken op de hamer om die attack aan te passen

### Attack edit

De geselecteerde attack aanpassen\
Verwijderen kan door op het vuilbakje de drukken

- Name: de naam van de attack
- Damage modifier: extra damage die bij de andere rolls/modifiers wordt bijgeteld
- Ability type: welke ability modifier er wordt gebruikt bij de berekening
  -> Strenght, dexterity, spellcasting of finesse (zowel strength als dexterity)
- Damage rolls: welke dobbelstenen er gerold worden om damage te berkenen (mistens 1)
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
- Modifiers instellen die gebruikt worden bij het berekenen van damage

# BRONNEN

Api calls: https://jasonwatmore.com/post/2020/11/11/react-fetch-http-delete-request-examples \
App context voor settings: https://blog.devgenius.io/react-native-state-management-with-context-api-61f63f5b099 \
Data opnieuw laden bij focus: https://reactnavigation.org/docs/use-is-focused/ \
Dynamic themes: https://medium.com/@SeishinBG/dynamic-switching-of-themes-in-react-native-app-the-funky-way-with-hooks-48b57ab62a79 \
Switch scaling: https://stackoverflow.com/questions/39613439/how-to-change-the-switch-components-size-in-react-native \
String comparison: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
