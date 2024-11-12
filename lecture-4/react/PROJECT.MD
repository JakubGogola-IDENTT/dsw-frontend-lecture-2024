# Projekt zaliczeniowy

Ponizej znajdują się zasady zaliczenia projektu semestralnego z kursu Programowanie Frontend - założenia aplikacji, wymagania techniczne, kreyteria, które należy spełnić, aby uzyskać konkretną ocenę oraz trochę przydatnych linków. Waszym zadaniem będzie stworzenie aplikacji służącej do wyświetlania **prognozy pogody** przy pomocy biblioteki React.

## Założenia funkcjonalne aplikacji

Aplikacja powinna posiadać wymione niżej funkcjonalności. Zostały one podzielone na konieczne, czyli n**iezbędne do uzyskania oceny 3.0**, oraz dodatkowe, które pozwolą Wam na zdobycie wyższej oceny. 

### Wymagania konieczne

Konieczne wymagania funkcjonalne to:

* wyświetlanie listy co najmniej 5 miejscowości na ekranie głównym,
* możliwość podglądu szczegółów prognozy pogody dla podanej miejscowości, a w tym:
  * bieżąca temperatura (w stopniach Celsjusza),
  * bieżące warunki pogodowe (w formie odpowiedniej ikony),
  * prognozowana temperatura i warunki pogodowe na najbliższe 5 dni,
  * prawdopodobieństwo wystąpienia opadów (wyrażona w procentach), ich rodzaj oraz ilość (wyrażona w milimetrach na metr kwadratowy),
  * prędkość i kierunek wiatru,
  * stopień zachmurzenia.

Można zainspirować się aplikacjami takimi jak [Windy](https://www.windy.com/) czy [ICM Meteo](https://www.meteo.pl/). 

### Wymgania dodatkowe

Do dodatkowych wymagań należą:

* możliwość globalnej zmiany jednostek temperatury (Celsjusz/Fahrenheit/Kelvin),
* dodanie formularza umożliwiającego wyszukiwanie miast,
* oznaczanie ulubionych miast i wyświetlanie ich na osobnej podstronie,
* integracja z API udostępniającym prawdziwe warunki pogodowe, np. darmowym i publicznie dostępnym [OpenWeatherMap API](https://openweathermap.org/api).

## Wymagania na poszczególne oceny

Poniżej znajdziecie jakie wymagania należy spełnić, aby uzyskać konkretną ocenę - zarówno te funkcjonalne, wymienione wyżej, jak i techniczne.

### 3.0

* wszystkie wymgania funkcjonalne opisane w sekcji [Wymagania konieczne](#wymagania-konieczne),
* użycie w aplikacji hook'ów takich jak `useState`, `useCallback`, `useMemo`, `useEffect`,
* przełączanie pomiędzy szczegółowym widokiem dla każdej miejscowości za pomocą natywnych hooków (`useState`, `useReducer`),
* tworzenie reużywalnych komponentów do powtarzalnych części kodu,
* zastosowanie styli CSS do zdefiniowania wyglądu komponentów,

Aby uzyskać ocenę 3.0, nie trzeba korzystać z prawdziwych danych pogodowych, ale można jest *na sztywno* wpisać do aplikacji. Ważne jednak, aby każda z miejscowości prezentowała **inne warunki pogodowe**.

### 3.5

* wszystkie wymagania na ocenę 3.0,
* nawigacja pomiędzy poszczególnymi podstronami aplikacji przy użyciu biblioteki [React Router](https://reactrouter.com/en/main),
* użycie biblioteki [Redux](https://react-redux.js.org/) do globalnej zmiany jednostek temperatury (dla wszystkich podstron miejscowości),

### 4.0

* wszystkie wymgania na ocenę 3.5,
* dodanie formularza umożliwiającego wyszukiwanie miejscowości po jej nazwie na ekranie z listą miejscowoście,

### 4.5

* wszystkie wymagania na ocenę 4.0,
* dodanie możliwości wyboru (np. przy pomocy ikony *gwiazdki* wyświetlanej przy każdej z miejscowości) i zapisywanie tych informacji w globalnym stanie aplikacji (Redux),
* przechowywanie stanu aplikacji (wybrane jednostki temperatury oraz ulubione miejscowości) w [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) przeglądarki; po odświeżeniu strony jej ustawienia powinny zostać zachowane

### 5.0

* wszystkie wymagania na ocenę 4.5,
* integracja przy wykorzystaniu np. biblioteki [Axios](https://github.com/axios/axios), z OpenWeatherMap API i wyświetlanie rzeczywistych danych pogodowych dla miejscowości na liście,


## Jak zacząć?

Aplikacja stworzona w ramach kursu musi zostać wykonana przy pomocy biblioteki **React**. Istnieje dowolność co do konfiguracji projektu i zastosowanych bibliotek. Można również skorzystać, do czego zachęcam, z [przygotowanego szablonu projektu](https://github.com/JakubGogola-IDENTT/dsw-frontend-autumn-2024) dostępnego na moim GitHubie oraz na platformie Moodle w formie pliku w formacie ZIP. Projekt zawiera proponowaną strukturę oraz kilka zainstalowanych przydatnych bibliotek (szczegóły znajdują się w pliku [README](https://github.com/JakubGogola-IDENTT/dsw-frontend-autumn-2024/blob/main/README.md)).

Można również stworzyć własny, prosty projekt przy użyciu narzędzia [Create React App](https://create-react-app.dev/docs/getting-started).

## Przydatne link

W projekcie można wykorzystać różne biblioteki dedykowane dla ekosystemu React'a. Poniżej znajduje się kilka z nich (*dla chętnych*):

* [TailwindCSS](https://tailwindcss.com/),
* [React Redux](https://react-redux.js.org/),
* [Vite.js](https://vite.dev/guide/),
* [Axios](https://github.com/axios/axios),
* [Create React App](https://create-react-app.dev/),
* [Szablony projektów opartych na React + Vite.js](https://github.com/vitejs/awesome-vite?tab=readme-ov-file#react),
* [Dokumentacja biblioteki React](https://react.dev/),
* [Dokumentacja MDN](https://developer.mozilla.org/en-US/).
