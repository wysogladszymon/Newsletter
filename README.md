# Newsletter

## Demo

![Zdjęcie 1](https://github.com/user-attachments/assets/42689cdf-742d-4e8d-b67f-89cd8bbdb014)
*Zdjęcie 1: Interfejs użytkownika, w trakcie dołączenia do newsletteru.*

![Zdjęcie 2](https://github.com/user-attachments/assets/205ce662-2b72-438b-950b-9463e1c4ce2a)
*Zdjęcie 2: Interfejs admina do wysyłania emaili.*

![Zdjęcie 3](https://github.com/user-attachments/assets/acd087f8-5170-44e3-b939-fae1b7407a8f)
*Zdjęcie 3: Interfejs admina - dziennik wysłanych emaili*

![Zdjęcie 4](https://github.com/user-attachments/assets/c3b9de73-1218-43df-902b-0a6b59a679e7)
*Zdjęcie 4: Wiadomość w skrzynce użytkownika.*

## Dodawanie klucza ssh na windows 
1. Wygeneruj klucz ssh, z twoim emailem (tym, który masz podpięty do konta ```github```)
```shell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
2. Upewnij się, że agent ssh jest uruchomiony:
```shell
eval $(ssh-agent -s)
```
3. Dodaj klucz SSh do agenta
```shell
ssh-add C:\Users\your_username\.ssh\id_rsa
```
gdzie ```your_username``` trzeba podmienić nazwą uzytkownika windows. 

4. Wyświetl klucz ssh, aby go skopiować i dodać do swoich kluczy ssh w github:
```shell
cat C:\Users\your_username\.ssh\id_rsa.pub
```
## Setup
1. Otwórz powershell z uprawnieniami administratora
2. Upewnij się, że masz zainstalowane ```chocolatey```, możesz wpisać komendę:
```shell
choco --version
```
Jeżeli nie masz, to zainstaluj je z tej strony: [Link do pobrania chocolatey](https://chocolatey.org/install#psdsc)

3. Zainstaluj git:
```shell
choco install git -y
```
4. Dodaj klucze ssh do twojego komputera, oraz zrób to samo w platformie [```github```](github.com), instruktaż można znaleźć tu:

5. Sklonuj repozytorium:
```shell
git clone git@github.com:wysogladszymon/Newsletter.git
```
## Uruchomienie

