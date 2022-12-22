---
layout: page
title: OBD Diagnostics
parent: Engine Swap
---
## OBD Diagnostics

Whilst the Omega does have what appears to be an OBD2 port, the Bosch Motronic M2.8.1 does not use an OBD2 protocol. It uses a previous generation of protocol that was manufacturer specific. In this case, it uses KW82 protocol at 9600 baud which was an Opel improvement to [Bosch's original KW71 protocol](http://www.cardiagnostics.be/-now/GT1-MODIC-DIS_bestanden/Prescription%20Protocol%20KW-71.htm). I've not been able to find any specifications on this other than it's a keyword protocol using ISO-9141 electrical interface on pin 7 (K-line) and does not use pin 15 (L-line).  Other ECUs in the car (e.g. immobiliser) use the same protocol but are available on other pins. The diagnostics cable contains the multiplexing hardware so the software can define which ping to access.

You'll need Vauxhall/Opel specific diagnostics hardware and software to communicate with the ECU. The official tools are VERY expensive and out of reach of the home mechanic, but if you google for OPCOM or VauxCom, you'll find a cheap Chinese interface and software that allows you to interface your laptop with your ECU. The quality of these vary, and they are all a challenge to get working, but once you've got over the complicated setup, they work quite well.  

| Pin | Description|
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3   | ISO 9141-2 K-Line from Immobilizer ECU
| 4   | Ground
| 5   | Ground
| 7   | ISO 9141-2 K-Line from Engine ECU
| 16   | 12v

{% picture obd2.png %}
