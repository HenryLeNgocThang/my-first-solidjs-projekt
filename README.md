# Servus ＼(^-^)／

In diesem Boilerplate kannst du mit SolidJS ein Dokument erstellen und als PDF auf deinem Rechner abspeichern.

[Hier](https://www.solidjs.com/guides/getting-started) geht es zu den SolidJS Docs.

### Dokument erstellen:
Wie versteht man das?
Das ist kein wysiwyg oder Dokumenten-Editor.
Man erstellt im Endeffekt sein Dokument/Inhalt mit HTML, CSS (SCSS).

### Als PDF speichern
Es gibt für jede Seite ein Drucken-Button mit dem man das Dokument als PDf abspeichern kann.

### Warum kein Word verwenden?
Ich wollte mal SolidJS ausprobieren (◕‿◕).

## Installation

Du benötigst [Node.js](https://nodejs.org/), um das Projekt ausführen zu können.

```
npm i # oder yarn oder pnpm
npm run dev # oder yarn oder pnpm
```

Im Browser [localhost:5173](http://localhost:5173/) aufrufen.

## Neues Dokument anlegen

Jedes Dokument ist eine eigene Seite, das im folgenden Pfad erstellt wird. Dabei muss der Name des Ordners wie die Komponente heißen in lower case.
```
/src/routes/documents/test/Test.tsx
```

## Mocked API

In der data.json befinden sich Daten. Die JSON fungiert als Dummy API.
```
/public/api/data.json
```

## Lizenz

MIT

**Free Software, Hell Yeah!**