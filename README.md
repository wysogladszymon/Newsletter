# Newsletter

## About
Ten projekt powstał ze względu na naszą rozmowę, umawiając prezent dla Natalki na urodziny. Stwierdziliśmy wtedy, że Twoje zaległe urodziny obejdziemy też w ten dzień oraz wspomniałem, że zrobię Ci Newsletter do firmy :stuck_out_tongue_closed_eyes:. Mam nadzieję, że aplikacja spełni wymagania i w razie jakichkolwiek problemów z uruchomieniem lub jakichś innych bugów chętnie pomogę. 

Także co Asiu, spóźnione dość bardzo, ale wszystkiego najlepszego :birthday:.

Jeszcze wspominając kilka słów o projekcie to zawiera on lokalną wersję strony administratora systemu, która powinan być odpalana na twoim komputerze, kiedy chcesz wysłać email. Znajduje się ona w folderze ```AdmPage```, ale projekt jeszcze posiada stronę, przeznaczoną dla użytkowników do dodania się do newslettera, którą należałoby hostować w sieci i znajduje się w folderze ```joinPage```.

Technologie, z których skorzystałem to React na frontend, a python i C# na backend, ale to tak podaję informacyjnie w sprawie właśnie tego późniejszego hostowania.

## Setup
1. Otwórz powershell z uprawnieniami administratora oraz wpisz komendę:
```shell
Set-ExecutionPolicy RemoteSigned -Scope LocalMachine
```
Aby pozwolić na uruchamianie skryptów instalacyjnych na tym komputerze.

2. Zainstaluj ```chocolatey```:
```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

choco --version
```

3. Zainstaluj git:
```shell
choco install git -y
```
Po tej komendzie zamknij powershella oraz uruchom go ponownie jako administrator. Możesz wtedy sprawdzić, czy działa ci komenda ```git```:
```shell
git
```
4. Dodaj klucze ssh do twojego komputera, oraz zrób to samo w platformie [```github```](github.com), instruktaż znajduje się w następnym nagłówku.

5. Upewnij się, że jestes w katalogu, w którym chcesz mieć ten projekt oraz, że **powershell jest włączony w trybie administratora**.

6. Sklonuj repozytorium:
```shell
git clone git@github.com:wysogladszymon/Newsletter.git
```
7. Uruchom skrypt instalacyjny za pomocą komendy:
```shell
cd Newsletter
.\install.ps1
```



## Dodawanie klucza ssh na windows 
1. Wygeneruj klucz ssh, z twoim emailem (tym, który masz podpięty do konta ```github```)
```shell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
![asia](https://github.com/user-attachments/assets/76e22a91-8044-4fc8-89b2-b3f42d6fab99)
Zwróc uwagę na to co się wyświetli, ponieważ tam zostanie dodany twój klucz (czerwona strzałka na obrazku wyżej).

W kolejnych krokach będziesz musiała skorzystać z tej ścieżki, w której są dwa klucze:
- id_rsa (klucz prywatny)
- id_rsa.pub (klucz publiczny)
2. Dodaj klucz **prywatny** SSh do agenta
```shell
ssh-add C:\Users\your_username\.ssh\id_rsa
```
gdzie ```your_username``` trzeba podmienić nazwą uzytkownika windows. W moim przypadku your_username odpowiadało ```user```.

3. Wyświetl klucz **publiczny** ssh, aby go skopiować i dodać do swoich kluczy ssh w github:
```shell
cat C:\Users\your_username\.ssh\id_rsa.pub
```
4. Dodanie klucza do platformy ```github``` pokazano na filmiku poniżej:

![Instruktaż dodania klucza publicznego do ssh](https://github.com/user-attachments/assets/219db9fe-7083-4985-9082-f393479572c9)

5. Jeżeli wszystko poszło pomyślnie, to w folderze ```Newsletter/AdmPage/backend``` powinien być plik ```.env```. Oraz powinno to być widoczne w aplikacji ```Visual Studio Code```, która została również zainstalowana z tym skryptem.
Po lewej stronie będzie widok całego projektu:

![image](https://github.com/user-attachments/assets/9c97930d-eff3-4ffc-984f-ea8c393bcbcb)

I tam wspomniany plik ```.env```.

Należy go uzupełnić w oparciu o dane poniżej:

6. Należy założyc bazę danych MongoDB, oraz skopiować klucz dostępu, a następnie wkleić go do wspomnianego pliku ```.env```.

[Zobacz film na YouTube](https://www.youtube.com/watch?v=Dg1v3-Rkxv0)

Ten sam klucz należy dodać również do pliku ```.env``` ale w ścieżce ```joinPage/backend/backend ```.

7. Poza kluczem MongoDB, należy także skonfigurować google i wygenerować coś co się nazywa ```Google App Password```.

[Zobacz film na Youtube](https://www.youtube.com/watch?v=74QQfPrk4vE&ab_channel=POSITIVEGEEK)

8. Po wykonaniu tych kroków aplikacja jest gotowa do uruchomienia.

## Uruchomienie
Do uruchomienia zostały stworzone skrypty uruchomieniowe. 
Aby je uruchomić należy:
- Uruchomić powershell jako administrator
- Wejść do katalogu roboczego projektu używając metody 
```shell
# cd <ścieżka bezwzględna do projektu (tam, gdzie wpisywana była metoda git clone (Setup pkt. 6) z końcówką \Newsletter)> np.
cd C:\Szymon\projekt\dla\ASI\Newsletter
```

Spełniając te dwa wymogi należy wpisać:
### Uruchom cały projekt
```shell
.\run.ps1
```
### Uruchom tylko Admin Page
```shell
.\adminRun.ps1
```
### Uruchom tylko Join Page
```shell
.\joinRun.ps1
```
## Demo

![Zdjęcie 1](https://github.com/user-attachments/assets/42689cdf-742d-4e8d-b67f-89cd8bbdb014)
*Zdjęcie 1: Interfejs użytkownika, w trakcie dołączenia do newsletteru.*

![Zdjęcie 2](https://github.com/user-attachments/assets/205ce662-2b72-438b-950b-9463e1c4ce2a)
*Zdjęcie 2: Interfejs admina do wysyłania emaili.*

![Zdjęcie 3](https://github.com/user-attachments/assets/acd087f8-5170-44e3-b939-fae1b7407a8f)
*Zdjęcie 3: Interfejs admina - dziennik wysłanych emaili*

![Zdjęcie 4](https://github.com/user-attachments/assets/c3b9de73-1218-43df-902b-0a6b59a679e7)
*Zdjęcie 4: Wiadomość w skrzynce użytkownika.*


