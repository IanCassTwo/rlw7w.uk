---
layout: page
title: SAI Delete
parent: Engine Swap
---
## SAI Delete

Some ECUs use the o2 sensors to sniff the exhaust gases to make sure the
[Secondary Air Injection (SAI)][] pump is running. However, this ECU is
not that clever. This ECU is only measuring return voltage. The pump is
hidden behind an automotive relay so the only thing the ECU can see is
the coil in the relay. You can easily fool the ECU by bridging the SAI
connector with a 100-200 Ohm resistor. It's not too critical what value
you use provided it adds a little resistance.

  [Secondary Air Injection (SAI)]: https://en.wikipedia.org/wiki/Secondary_air_injection

