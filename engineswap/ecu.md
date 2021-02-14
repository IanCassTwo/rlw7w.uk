---
layout: page
title: ECU
parent: Engine Swap
---
## ECU

The Bosch Motronic 2.8.1 ECU needs remarkably few wires to actually work, and its wiring harness is also separate from the main Omega car loom so it's dead easy to use. At its most basic level, it needs a permanent live, a switched live and an earth. On my MGB, these are supplied to it via a separate fuse box situated under the drivers side of the dash.

The pins below are what you'd find in the original Omega engine loom plug.

| Pin | Description|
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1   | High amperage output to fuel pump|
| 2   | High amperage switched live input to coil pack|
| 3   | KW82 data stream pin 7 on OBD connector|
| 4   | Grounding this pin causes check engine light to flash with error codes|
| 5   | Engine Management Fault light in dash. This is a ground trigger. This means that you should wire a light on the dashboard so that the light has 12v and uses this pin as ground. The ECU will then ground this pin to complete the circuit |
| 6   | Reverse light switch power feed|
| 7   | Immobilizer request/acknowledge. This connects to pin 7 of the transponder ring in the steering column|
| 8   | Reverse light switch power output|
| 11  | Coolant temperature sensor. This will drive the MGB temperature gauge but it will read slightly lower than expected|
| 13  | Tacho Pulse. This won't drive the MGB tacho directly. You'll need to use an adapter. See below|
| 15  | Switched live for ECU|

In addition, there's a large green plug that contains the permanent live
power input for the ECU. This should be a high current wire.

{% picture Pinout.jpg %}
{% picture 7_engine_ecu_&_fuel_pump.png %}
