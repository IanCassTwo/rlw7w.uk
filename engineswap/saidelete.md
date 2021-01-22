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

  [1024}}]: Acdn.z22se.com_userpix_13_EGR_cheater_version_2_1.jpg
    "fig:1024}}"
  [*don't* remove because it's saving you money]: http://www.tuneruniversity.com/blog/2012/05/dont-block-or-remove-the-egr-valve-its-saving-you-money/
  [Secondary Air Injection (SAI)]: https://en.wikipedia.org/wiki/Secondary_air_injection

