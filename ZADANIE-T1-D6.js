/*
    ZADANIE T1D6 - 08.02.2024 - EZdamin

    Pora zobaczyć trochę słońca bo pierwszy tydzień dobiega końca.
    Na teoretyczny egzamin knurski nadszedł czas.

    Odpowiadaj tylko na jedno pytanie na raz.
    Rób to po kolei.
    Gdy odpowiesz źle otrzymasz link z materiałem do przeczytania.
    Po przeczytaniu spróbuj odpowiedzieć ponownie.
    Lub poszukaj pomocy na naszym knurskim discordzie.
    Gdy odpowiesz dobrze, przejdź do następnego pytania.

    Niektóre pytania są zamknięte i odpowiedz na nie literką.
    Niektóre pytania są otwarte, odpowiedz zgodnie z instrukcją.

    Ten egzamin jest wymagany aby uzyskać promocję do następnego tygodnia.

    Do każdego pytania napisz uzasadnienie swoimi słowami.
    Będzie to przydatne w ocenie Twojego zrozumienia tematu.

    Wybierz niżej język w którym chcesz materiały do przeczytania.
    Generalnie materiały po angielsku są bardziej wartościowe.
    Więc jeśli umiesz ten język wybierz angielski.
*/
// *** USTAWIENIA JĘZYKA MATERIAŁÓW ***
const JĘZYK = "en"; // ustaw na "en" jeśli chcesz materiały po angielsku

// *** USTAWIENIA TELEMETRII ***
// Włącza albo wyłącza telemetrie.
// Przyesyła ona na bieżąco Twój postęp w zadaniu do KNUR CAMP supportu.
// Pozwala nam to ulepszyć KNURCAMPA i też lepiej zobaczyć braki w wiedzy :3
// Telemetria jest tylko dla knursantów.
// Nie działa automatycznie gdy nie podasz tokenu knursanta niżej.
const TELEMETRIA = true;
// Wysyła mi ten plik zadania na server.
const TELEMETRIA_ZAAWANSOWANA = true;
// Wypisuje w konsoli co wysyła na server jak jesteś paranoikiem.
const TELEMETRIA_OUT = false;
// Twój token knursanta (jak nie masz zostaw puste).
// Jeśli jesteś knursantem to dostałeś swój token na DM.
// np: const TOKEN_TELEMETRII = "abcdefgh";
// Gdzie abcdefgh to kod który dostałeś w wiadomości prywatnej.
const TOKEN_TELEMETRII = "712466b8ee30668936d778937531792a59411688a0ec4a3baeec9598051da45647a0e16219f0f0cf51867a09c41e638139275d84ccf7270daaf34e81d468704c73c7b2b5c798e60e54f81474ec454b86c1125b5272a5618e3499a7f4db00c4fae17425df71348b069690f897717847ec16039c517b03f5ee0bbaa74c04ff33b72663a3cb836fb0c48775ad64d4bbafd332d83172f8fa87e40c4ad4ca29f5cf61ca196523e22b98cab731bb19baf0e7de55a6c6c643b6bd7b2656460f25a3e4c55d7b3209d7fb8e7efd2a50fcc49dafe89a20dddca04d07d30f70e3f750a0a2b5";

/* KOD WERYFIKUJĄCY - NIE DOTYKAJ */
eval(Buffer.from("Y29uc3QgVkVSSUZJRVIgPSBbXTsKClZFUklGSUVSWzBdID0ge3R5cGU6ICJjbG9zZWQiLCBjb3JyZWN0OiAiYSIsIHJlc291cmNlOiB7CiAgICAicGwiOiAiaHR0cHM6Ly9rdXJzanMucGwva3Vycy9zdXBlci1wb2RzdGF3eS90eXB5LWRhbnljaCIsCiAgICAiZW4iOiAiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9EYXRhX3N0cnVjdHVyZXMiCn19CgpWRVJJRklFUlsxXSA9IHt0eXBlOiAib3BlbiIsIGNvcnJlY3Q6ICJjb25zdCIsIHJlc291cmNlOiB7CiAgICAicGwiOiAiaHR0cHM6Ly9rdXJzanMucGwva3Vycy9zdXBlci1wb2RzdGF3eS96bWllbm5lIiwKICAgICJlbiI6ICJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL0dyYW1tYXJfYW5kX3R5cGVzIgp9fQoKVkVSSUZJRVJbMl0gPSB7dHlwZTogInB1enpsZSIsIGNvcnJlY3Q6ICJ1bmRlZmluZWQiLCByZXNvdXJjZTogewogICAgInBsIjogImh0dHBzOi8va3Vyc2pzLnBsL2t1cnMvc3VwZXItcG9kc3Rhd3kvdHlweS1kYW55Y2giLAogICAgImVuIjogImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvRGF0YV9zdHJ1Y3R1cmVzIgp9LCB0aXA6ICJaYXN0YW7Ds3cgc2nEmSwgdG8gcHl0YW5pZSBqZXN0IHBvZGNod3l0bGl3ZS4ifTsKCgpWRVJJRklFUlszXSA9IHt0eXBlOiAiY2xvc2VkIiwgY29ycmVjdDogImIiLCByZXNvdXJjZTogewogICAgInBsIjogImh0dHBzOi8va3Vyc2pzLnBsL2t1cnMvc3VwZXItcG9kc3Rhd3kvcGV0bGUiLAogICAgImVuIjogImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvTG9vcHNfYW5kX2l0ZXJhdGlvbiIKfX0KClZFUklGSUVSWzRdID0ge3R5cGU6ICJvcGVuIiwgY29ycmVjdDogIjUiLCByZXNvdXJjZTogewogICAgInBsIjogImh0dHBzOi8va3Vyc2pzLnBsL2t1cnMvc3VwZXItcG9kc3Rhd3kvcGV0bGUiLAogICAgImVuIjogImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvTG9vcHNfYW5kX2l0ZXJhdGlvbiIKfX0KClZFUklGSUVSWzVdID0ge3R5cGU6ICJvcGVuIiwgZXhhY3Q6IHRydWUsIGNvcnJlY3Q6ICIxMDEwIiwgcmVzb3VyY2U6IHsKICAgICJwbCI6ICJodHRwczovL2t1cnNqcy5wbC9rdXJzL3N1cGVyLXBvZHN0YXd5L3BldGxlIiwKICAgICJlbiI6ICJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvQWRkaXRpb24iCn19CgpWRVJJRklFUls2XSA9IHt0eXBlOiAiY2xvc2VkIiwgY29ycmVjdDogIjQiLCByZXNvdXJjZTogewogICAgInBsIjogImh0dHBzOi8va3Vyc2pzLnBsL2t1cnMvc3VwZXItcG9kc3Rhd3kvem1pZW5uZSIsCiAgICAiZW4iOiAiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvU3RhdGVtZW50cy9jb25zdCIKfX0KClZFUklGSUVSWzddID0ge3R5cGU6ICJvcGVuIiwgcmVtb3ZlU3BhY2VzOiB0cnVlLCBjb3JyZWN0OiAia251cigyMSwzNykiLCByZXNvdXJjZTogewogICAgInBsIjogImh0dHBzOi8va3Vyc2pzLnBsL2t1cnMvc3VwZXItcG9kc3Rhd3kvZnVua2NqZSIsCiAgICAiZW4iOiAiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9GdW5jdGlvbnMiCn19CgpWRVJJRklFUls4XSA9IHt0eXBlOiAib3BlbiIsIGNvcnJlY3Q6IFtgZHJ6ZXdvLmthc3p0YW5gLCBgZHJ6ZXdvWyJrYXN6dGFuIl1gLCBgZHJ6ZXdvWydrYXN6dGFuJ11gLCAiZHJ6ZXdvW2BrYXN6dGFuYF0iXSwgcmVzb3VyY2U6IHsKICAgICJwbCI6ICJodHRwczovL2t1cnNqcy5wbC9rdXJzL3N1cGVyLXBvZHN0YXd5L3R5cHktZGFueWNoIiwKICAgICJlbiI6ICJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL1dvcmtpbmdfd2l0aF9vYmplY3RzIgp9fQoKVkVSSUZJRVJbOV0gPSB7dHlwZTogIm9wZW4iLCBjb3JyZWN0OiAia2FzenRhbnlbOV0iLCByZXNvdXJjZTogewogICAgInBsIjogImh0dHBzOi8va3Vyc2pzLnBsL2t1cnMvc3VwZXItcG9kc3Rhd3kvdGFibGljZSIsCiAgICAiZW4iOiAiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkiCn19CgpWRVJJRklFUlsxMF0gPSB7dHlwZTogIm9wZW4iLCBvcHQ6IHRydWUsIGNvcnJlY3Q6ICJpbmZpbml0eSIsIHJlc291cmNlOiB7CiAgICAicGwiOiAiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9EYXRhX3N0cnVjdHVyZXMiLAogICAgImVuIjogImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvRGF0YV9zdHJ1Y3R1cmVzIgp9fQoKdmFyIGNvdW50ZXI7CnZhciB1b1BhaXI7Cgpjb25zdCBhbnN3ZXJzID0gW107CgpmdW5jdGlvbiBpc0Fuc3dlclZhbGlkKGV4YWN0LCBvcHRpb25zLCBhbnN3ZXIpCnsKICAgIGlmKEFycmF5LmlzQXJyYXkob3B0aW9ucykpCiAgICB7CiAgICAgICAgZm9yKGxldCBvcHQgb2Ygb3B0aW9ucykKICAgICAgICB7CiAgICAgICAgICAgIGlmKGV4YWN0KQogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBpZihvcHQgPT09IGFuc3dlcikKICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGlmKG9wdCA9PSBhbnN3ZXIpCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9CiAgICBlbHNlIAogICAgewogICAgICAgIGlmKGV4YWN0KQogICAgICAgIHsKICAgICAgICAgICAgaWYob3B0aW9ucyA9PT0gYW5zd2VyKQogICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgfQogICAgICAgIGVsc2UgewogICAgICAgICAgICBpZihvcHRpb25zID09IGFuc3dlcikKICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgIH0KICAgIH0KCiAgICByZXR1cm4gZmFsc2U7Cn0KCmZ1bmN0aW9uIG9kcG93aWVkxboobykKewogICAgaWYoIWNvdW50ZXIpIGNvdW50ZXIgPSAwOwogICAgaWYoY291bnRlciA8IDIpIHJldHVybjsKCiAgICBpZih1b1BhaXIpCiAgICB7CiAgICAgICAgY29uc29sZS5sb2coIk5pZSBtb8W8ZXN6IHpvc3Rhd2nEhyBweXRhbmlhIGJleiB1emFzYWRuaWVuaWEuIik7CiAgICAgICAgcHJvY2Vzcy5leGl0KDApOwogICAgfQoKICAgIGlmKCFvKQogICAgewogICAgICAgIHJldHVybjsKICAgIH0KCiAgICBjb25zdCBxID0gVkVSSUZJRVJbY291bnRlciAtIDJdOwoKICAgIGlmKCFxLmV4YWN0KQogICAgewogICAgICAgIGlmKHR5cGVvZiBvICE9PSAic3RyaW5nIikgbyA9IG8udG9TdHJpbmcoKTsKICAgIH0KCiAgICBpZihxLnJlbW92ZVNwYWNlcykKICAgIHsKICAgICAgICBvID0gby5yZXBsYWNlKC8gL2csICIiKTsKICAgIH0KCiAgICBpZighaXNBbnN3ZXJWYWxpZChxLmV4YWN0LCBxLmNvcnJlY3QsIHR5cGVvZiBvID09PSAic3RyaW5nIiA/IG8udG9Mb3dlckNhc2UoKSA6IDApKQogICAgewogICAgICAgIGNvbnNvbGUubG9nKGAke2NvdW50ZXIgLSAxfS8xMDogT2Rwb3dpZWTFuiBuaWVwcmF3aWTFgm93YWApOwogICAgICAgIGlmKHEudGlwKQogICAgICAgICAgICBjb25zb2xlLmxvZyhxLnRpcCk7CiAgICAgICAgY29uc29sZS5sb2coIlByemVjenl0YWogdGVuIGFydHlrdcWCIGkgc3Byw7NidWogb2Rwb3dpZWR6aWXEhyBwb25vd25pZS4iKTsKICAgICAgICBjb25zb2xlLmxvZyhgJHtxLnJlc291cmNlW0rEmFpZS119YCk7CiAgICB9CiAgICBlbHNlIAogICAgewogICAgICAgIHVvUGFpciA9IHRydWU7CiAgICAgICAgY29uc29sZS5sb2coYCR7Y291bnRlciAtIDF9LzEwOiBPZHBvd2llZMW6IHByYXdpZMWCb3dhYCk7CgogICAgICAgIGlmKGNvdW50ZXIgLSAxID09PSAxMCkKICAgICAgICB7CiAgICAgICAgICAgIGNvbnNvbGUubG9nKCJHcmF0dWxhY2plIHpkYW5pYSBwaWVyd3N6ZWogY3rEmcWbY2kgZWd6YW1pbnUhIik7CiAgICAgICAgICAgIGNvbnNvbGUubG9nKCJPdG8gbGlzdGEgbWF0ZXJpYcWCw7N3IHXFvHl0eWNoIHcgdHltIGVnemFtaW5pZSBkbyB1dHJ3YWxlbmlhIGkgcHJ6ZWN6eXRhbmlhOiIpOwogICAgICAgICAgICBjb25zdCBkZWR1cGxpY2F0b3IgPSBbXTsKICAgICAgICAgICAgZm9yKGxldCBpdGVtIG9mIFZFUklGSUVSKQogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBpZighZGVkdXBsaWNhdG9yLmluY2x1ZGVzKGl0ZW0ucmVzb3VyY2VbSsSYWllLXSkpCiAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5yZXNvdXJjZVtKxJhaWUtdKTsKICAgICAgICAgICAgICAgICAgICBkZWR1cGxpY2F0b3IucHVzaChpdGVtLnJlc291cmNlW0rEmFpZS10pOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQp9CgpmdW5jdGlvbiB1emFzYWRuaWVuaWUodSkKewogICAgaWYoY291bnRlciA8IDIpIAogICAgewogICAgICAgIGNvdW50ZXIrKzsKICAgICAgICByZXR1cm47CiAgICB9CgogICAgaWYodS5sZW5ndGggPT09IDApIHJldHVybjsKCiAgICBpZighdW9QYWlyKSByZXR1cm47CgogICAgYW5zd2Vycy5wdXNoKHUpOwoKICAgIGNvdW50ZXIrKzsKCiAgICB1b1BhaXIgPSBmYWxzZTsKfQoKcHJvY2Vzcy5vbigiYmVmb3JlRXhpdCIsICgpID0+IHsKICAgIGNvbnN0IFRBU0tfSUQgPSAiVDFENiI7CiAgICAKICAgIGNvbnN0IE1FVFJJQ1NfU0VSVkVSID0gImh0dHBzOi8vYXBpLmtudXIuY2x1YiI7CiAgICAKICAgIGZ1bmN0aW9uIHJlcG9ydFRlbGVtZXRyeShkYXRhKQogICAgewogICAgICAgIGlmKFRFTEVNRVRSSUEgJiYgVE9LRU5fVEVMRU1FVFJJSS5sZW5ndGggPiAwKQogICAgICAgIHsKICAgICAgICAgICAgaWYoVEVMRU1FVFJJQV9aQUFXQU5TT1dBTkEpCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGNvbnN0IGQgPSByZXF1aXJlKCJmcyIpLnJlYWRGaWxlU3luYyhfX2ZpbGVuYW1lLCAidXRmLTgiKS5zcGxpdCgiXHgyM1x4MjNceDIzIE1JRUpTQ0UgTkEgVFfDk0ogS09EIFx4MjNceDIzXHgyMyIpWzFdLnNwbGl0KCJceDIzXHgyM1x4MjMgS09OSUVDIE1JRUpTQ0EgTkEgVFfDk0ogS09EIFx4MjNceDIzXHgyMyIpWzBdOwogICAgICAgICAgICAgICAgZGF0YS5maWxlID0gZDsKICAgICAgICAgICAgfQogICAgICAgICAgICBjb25zb2xlLmxvZygiV3lzecWCYW5pZSBkYW55Y2ggdGVsZW1ldHJpaS4uLiIpOwogICAgICAgICAgICBpZihURUxFTUVUUklBX09VVCkKICAgICAgICAgICAgewogICAgICAgICAgICAgICAgY29uc29sZS5sb2coIkRhbmUgd3lzecWCYW5lIG5hIHNlcnZlcjoiKTsKICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBmZXRjaChNRVRSSUNTX1NFUlZFUiArICIvYXBpL2tudXJjYW1wL21ldHJpY3M/dG9rZW49IiArIFRPS0VOX1RFTEVNRVRSSUkgKyAiJnRpZD0iICsgVEFTS19JRCx7CiAgICAgICAgICAgICAgICBtZXRob2Q6ICJQT1NUIiwKICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLAogICAgICAgICAgICAgICAgaGVhZGVyczogeyJDb250ZW50LVR5cGUiOiAiYXBwbGljYXRpb24vanNvbiJ9CiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4KICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCJEYW5lIHRlbGVtZXRyaWkgem9zdGHFgnkgemFwaXNhbmUsIGR6acSZa2kgemEgcG9wcmF3ZSBqYWtvxZtjaSBLTlVSQ0FNUCBVd1UuIikpLgogICAgICAgICAgICAgICAgY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKCJOaWUgdWRhxYJvIHNpxJkgemFwaXNhxIcgZGFueWNoIHRlbGVtZXRyaWkgYmxlaEUiKSkuZmluYWxseSgoKSA9PiBwcm9jZXNzLmV4aXQoMCkpOwogICAgICAgIH0KICAgICAgICBlbHNlIAogICAgICAgIHsKICAgICAgICAgICAgaWYoVE9LRU5fVEVMRU1FVFJJSS5sZW5ndGggPiAwKQogICAgICAgICAgICAgICAgY29uc29sZS5sb2coIk5pZXN0ZXR5IG1hc3ogd3nFgsSFY3pvbsSFIHRlbGVtZXRyaWUgc2FkY2F0LCBzbXV0bnkga290ZWsiKTsKICAgICAgICB9CiAgICB9CiAgICAKICAgIHJlcG9ydFRlbGVtZXRyeSh7CiAgICAgICAgInJlYXNvbmluZyI6IGFuc3dlcnMsCiAgICAgICAgImN1cnJlbnRTdGFnZSI6IGFuc3dlcnMubGVuZ3RoICsgMQogICAgfSwgVE9LRU5fVEVMRU1FVFJJSSk7CiAgICB9KTs=", "base64").toString("utf-8"));
/* KONIEC KODU WERYFIKUJĄCEGO */

/* Nie usuwaj tych przykładów - zepsuje to działanie kodu sprawdzającego */
/*
    Przykład I

    Wybierz odpowiedź A.

    A - 1
    B - 2
    C - 3
*/
odpowiedź("A");
uzasadnienie(`zostałem poproszony o wybranie odpowiedzi A`);

/*
    Przykład II

    Wpisz w pole poniżej fraze knur
*/
odpowiedź("knur");
uzasadnienie(`zostałem poproszony o wpisanie frazy knur`);

/* Egzamin Teoretyczny */

// ### MIEJSCE NA TWÓJ KOD ###

/*
    1.
    Czym są typy danych w języku JavaScript?

    Typy są:
    A - sposobem klasyfikowania wartości według ich cech i zachowań
    B - zestawem wbudowanych obiektów, które można używać do tworzenia zmiennych i funkcji
    C - zbiorem znaków, które można łączyć w ciągi tekstowe lub liczby;
    D - rodzajami zmiennych, które można deklarować przy użyciu słów kluczowych var, let lub const
    E - wartościami logicznymi, które mogą być prawdziwe lub fałszywe
*/
odpowiedź("A");
uzasadnienie(`np. działania na liczbach float są inne od działań na liczbach całkowitych i ich zachowania się od siebie różnią`);

/*
    2.
    Jakiego słowa kluczowego użyjesz aby stworzyć stałą?
    Wprowadź odpowiedź jako teskt w cudzysłowie.
*/
odpowiedź("const");
uzasadnienie(`const od słowa constant - stała`);

/*
    3.
    Dane jest wyrażenie:
    `
        function f(x)
        {
            x.a = 10;
        }

        const o = {};
        f(o);
        console.log(f.o);
    `
    Jaki będzie jego wynik w konsoli?
    Wprowadź odpowiedź jako teskt w cudzysłowie.
*/
odpowiedź(undefined);
uzasadnienie(`nie zwracamy nic z funkcji`);

/*
    4.
    Pętli w JavaScript używamy aby:

    A - tworzyć funkcje
    B - wykonywać powtarzające się czynności
    C - zmieniać wartości zmiennych 
    D - przechowywać dane w tablicach 
    E - obsługiwać błędy
*/
odpowiedź('B');
uzasadnienie(`jeżeli mamy jakieś warunki które mają się wykonywać tak długo aż nie zostanie osiągnięty oczekiwany rezultat używamy pętli`);

/*
    5.
    Ile razy zostanie wypisane słowo "xNzq" po uruchomieniu tego kodu?

    `
        for(let i = 5; i < 100;i = i * 2)
        {
            console.log("xNzq")
        }
    `

    Odpowiedź wpisz poniżej.
*/
odpowiedź(5);
uzasadnienie(`i = 5 - log1 | i = 10 - log2 | i = 20 - log3 | i = 40 - log4 | i = 80 - log5 | i = 160 - no log`);

/*
    6.
    Jaki będzie wynik poniższej operacji:

    `
        const a = "10";
        const b = 10;
        console.log(a + b);
    `

    Odpowiedź wpisz poniżej, zachowaj typ danych.
*/
odpowiedź("1010");
uzasadnienie(`10 + "10" daje nam wynik 1010 o typie string bo 10 number jest evaluowana do stringa i mamy konkatynację "10" + "10"`);

/*
    7.
    Czy poniższa operacja jest prawidłowa?

    `
        1:      const o = {};
        2:      o.a = 10;
        3:      const b = {...o};
        4:      b = a;
        5.      b.b = 11;
    `

    Wpisz poniżej numer linijki zawerającej błąd lub 0 jeśli kod
        nie zawiera błędu.
*/
odpowiedź(4);
uzasadnienie(`nie ma takiej zmiennej jak a`);

/*
    8.
    Co byś wpisał chcąc wywołać funckje `knur` z dwoma parametrami 21 i 37?

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("knur(21,37)");
uzasadnienie(`aby wywołać funkcję należy podać jej nazwę zaraz za nią nawias w którym podajemy argumenty
                (jeżeli funkcja jakieś przyjmuje) oddzielone przecinkami`);

/*
    9.
    Co byś wpisał chcąc odczytać klucz kasztan obiektu drzewo?

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("drzewo.kasztan");
uzasadnienie(`aby odczytać wartość za kluczem należy użyć jednej z dwóch form: obiekt["klucz"] lub obiekt.klucz`);

/*
    10.
    Co byś wpisał chcąc odczytać dziesiąty element tablicy kasztany?

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("kasztany[9]");
uzasadnienie(`tablice są indexowane od zera więc pierwszy element ma index 0, drugi index 1 itd.`);

/*
    11. (* - bonusowe)
    Ile razy zostanie wypisane słowo "xNzq" po uruchomieniu tego kodu?

    `
        for(let i = 0; i < 100;i = i * 2)
        {
            console.log("xNzq")
        }
    `

    Odpowiedź wpisz poniżej.
*/
odpowiedź("nieskończenie wiele razy");
uzasadnienie(`console.log wywoła się nieskończenie wiele razy bo i zawsze będzie równe zero
            nawet dzieci w przedszkolu znają: pamiętaj cholero, nie mnóż przez zero`);

// ### KONIEC MIEJSCA NA TWÓJ KOD ###