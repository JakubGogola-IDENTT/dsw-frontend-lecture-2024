# Programowanie Front-end (szbalon projektu)

W tym repozytorium znajdziecie szablon projektu, który można wykorzystać przy tworzeniu projektu semestralnego. Zawiera on skonfigurowane podstawowe biblioteki, które mogą być przydatne podczas pracy oraz proponowaną skturkturę katalogów.

## Jak uruchomić projekt

W pierwszej kolejności należy użyć narzędzia NVM do wybrania odpowiedniej wersji Node.js:
```shell
nvm use
```

Jeżeli narzędzie zwróci błąd o tym, że obecnie nie jest zainstalowana żądana wersja Node'a, wówczas należy użyć komendy:
```shell
nvm install 20.18.0
nvm use
```

Następnie należy zainstalować biblioteki wymagane do uruchomienia projektu:
```shell
npm install
```

Potem projekt można uruchomić w przeglądarce używając polecenia:
```shell
npm start
```

## Lista zainstalowanych bibliotek

* React,
* React Redux + ReduxJS Toolkit,
* React Router Dom,
* Axios,
* ESLint + Prettier

## Struktura katalogów

* `components` - katalog zawierający pomniejsze komponenty, które mogą zostać wykorzystane do budowy podstron aplikacji,
* `constants` - zawiera definicje wszystkich stałych, typów wyliczeniowych,
* `functions` - katalog z funkcjami pomocniczymi,
* `hooks` - zawiera definicje dedykowanych dla aplikacji hook'ów
* `services` - katalog zawierający funkcje i klasy odpowiedzialne za np. komunikację z REST API,
* `slices` - katalog zawierający definicje reducerów (biblioteka Redux).


