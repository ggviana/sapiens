# Sapiens
A web based hypotetical computer for educational purposes

## Dependecies

* Node v10
* git

## Installing

```shell
git clone https://github.com/ggviana/sapiens

cd sapiens

npm install
```

## Features

* 8-bit Memory addresses, in total 2 KiB 
* 8-bit Accumulator Register (RA)
* 8-bit Program counter (PC)
* 4 KiB of program memory divided in a total of 15 programs
* Inconditional and conditional and program jumps
* Outputable information

## Instructions

| Code | Mnemonic | Description                                  |
| ---- | -------- | -------------------------------------------- |
| 0000 | NOP      | No operation                                 |
| 0001 | STA addr | Stores RA value at address                   |
| 0011 | LDA addr | Loads RA with value at address               |
| 0100 | ADD addr | Adds RA with the value stored at address     |
| 0101 | OR⠀ addr | Logical OR in RA with value at address       |
| 0110 | AND addr | Logical AND in RA with value at address      |
| 0111 | XOR addr | Logical XOR in RA with value at address      |
| 1000 | CAL addr | Calls procedure                              |
| 1001 | JMP addr | Jumps to program address                     |
| 1010 | JZ⠀ addr | Jumps to program address, if RA equals 0     |
| 1011 | JNZ addr | Jumps to program address, if RA not equals 0 |
| 1100 | IN       | Moves the content of RI to RA                |
| 1101 | OUT      | Moves the content of RA to display           |
| 1111 | HLT      | Halts the execution of the program           |
