---
layout: page
title: Diagnostics Port
parent: Engine Swap
---
## Diagnostics Port

Whilst the Omega does have what appears to be an OBD2 port, the Bosch Motronic M2.8.1 does not use OBD2 protocol. It uses a previous generation of protocol that was manufacturer specific. In this case, it uses KW82 protocol at 9600 baud which was an Opel improvement to [Bosch's original KW71 protocol](http://www.cardiagnostics.be/-now/GT1-MODIC-DIS_bestanden/Prescription%20Protocol%20KW-71.htm). I've not been able to find any specifications on this other than it's a keyword protocol using ISO-9141 electrical interface on pin 7 (K-line) and does not use pin 15 (L-line).  Other ECUs in the car (e.g. immobiliser) are available on other pins.  Anyway, you're going to need a Vauxhall/Opel tool to communicate with the ECU. The official tools are VERY expensive and out of reach of the home mechanic, but if you google for OPCOM or VauxCom, you'll find lots of cheap Chinese knockoff interfaces. The quality of these varies, and they are all hassle to get working, but once you've got over the complicated setup, they work quite well.  
