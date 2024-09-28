### Hexlet tests and linter status:
[![Actions Status](https://github.com/pinyaevv/fullstack-javascript-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/pinyaevv/fullstack-javascript-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/20066976f90ad23283b7/maintainability)](https://codeclimate.com/github/pinyaevv/fullstack-javascript-project-46/maintainability)
[![Node CI](https://github.com/pinyaevv/fullstack-javascript-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/pinyaevv/fullstack-javascript-project-46/actions/workflows/nodejs.yml)
[![Test Coverage](https://api.codeclimate.com/v1/badges/20066976f90ad23283b7/test_coverage)](https://codeclimate.com/github/pinyaevv/fullstack-javascript-project-46/test_coverage)

# About the project

Проект "Вычислитель отличий". Программа умеет сравнивать два конфигурационных файла и выводить разницу между ними. Обрабаотываемые форматы: json, yml, yaml.

## Installation and running the program:

1) Устанавливаем программу и зависимости с поомщью команды: make install

2) Вывод справки по программе: gendiff -h
[![asciicast](https://asciinema.org/a/Pb75Hry24hSd2rGBNZ4CXeuvv.svg)](https://asciinema.org/a/Pb75Hry24hSd2rGBNZ4CXeuvv)

3) Передача аргументов для чтения и парсинга: gendiff [filepath1] [filepath2]
Программа умеет работтаь как с абсолютными так и с относительными путями.

## Примеры для работы с программой:

1) Сравнение файлов с рекурсивной (древовидной) структурой:
[![asciicast](https://asciinema.org/a/AkxRRTJ2YXtCMD3hYEvpQsAta.svg)](https://asciinema.org/a/AkxRRTJ2YXtCMD3hYEvpQsAta)

2) Плоский формат сравнения:
[![asciicast](https://asciinema.org/a/eCle8j7Sx8F6ZPyVtACIhz8BS.svg)](https://asciinema.org/a/eCle8j7Sx8F6ZPyVtACIhz8BS)

- Если новое значение свойства является составным, то пишется [complex value]
- Если свойство вложенное, то отображается весь путь до корня, а не только с учетом родителя, например выше это: common.setting6.ops.

3) Вывод в формате json:
[![asciicast](https://asciinema.org/a/VHvzePu3YWebAVcHFPnWQwuog.svg)](https://asciinema.org/a/VHvzePu3YWebAVcHFPnWQwuog)