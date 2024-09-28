### Hexlet tests and linter status:
[![Actions Status](https://github.com/pinyaevv/fullstack-javascript-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/pinyaevv/fullstack-javascript-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/20066976f90ad23283b7/maintainability)](https://codeclimate.com/github/pinyaevv/fullstack-javascript-project-46/maintainability)
[![Node CI](https://github.com/pinyaevv/fullstack-javascript-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/pinyaevv/fullstack-javascript-project-46/actions/workflows/nodejs.yml)
[![Test Coverage](https://api.codeclimate.com/v1/badges/20066976f90ad23283b7/test_coverage)](https://codeclimate.com/github/pinyaevv/fullstack-javascript-project-46/test_coverage)

# About the project

The "Difference Calculator" project. The program compares two configuration files and outputs the differences between them. Supported formats: JSON, YML, YAML.

## Installation and running the program:

1) Install the program and dependencies using the command: make install

2) Display the help for the program: gendiff -h
[![asciicast](https://asciinema.org/a/Pb75Hry24hSd2rGBNZ4CXeuvv.svg)](https://asciinema.org/a/Pb75Hry24hSd2rGBNZ4CXeuvv)

3) Pass arguments for reading and parsing: gendiff [filepath1] [filepath2]

The program works with both absolute and relative path.

## Examples of Using the Program:

1) Comparing files with a recursive (tree-like) structure:
[![asciicast](https://asciinema.org/a/AkxRRTJ2YXtCMD3hYEvpQsAta.svg)](https://asciinema.org/a/AkxRRTJ2YXtCMD3hYEvpQsAta)

2) Flat comparison format:
[![asciicast](https://asciinema.org/a/eCle8j7Sx8F6ZPyVtACIhz8BS.svg)](https://asciinema.org/a/eCle8j7Sx8F6ZPyVtACIhz8BS)

- If the new value of a property is complex, it will be indicated as [complex value].
- If the property is nested, the entire path to the root is displayed, not just considering the parent. For example, in the above case, it is: common.setting6.ops..

3) Output in JSON format:
[![asciicast](https://asciinema.org/a/VHvzePu3YWebAVcHFPnWQwuog.svg)](https://asciinema.org/a/VHvzePu3YWebAVcHFPnWQwuog)