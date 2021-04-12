---
layout: page
title: Immobilizer
parent: Engine Swap
---
## Immobilizer

The ECU, transponder ring & the transponder chip in the keyfob are the 3 parts that form the immobiliser circuit. Without these 3 parts, the car simply won't start, so when you buy an engine, make sure to get these 3 parts! When I purchased mine, I didn't have the transponder ring so I had to reprogram the ECU so that it didn't expect to talk to the immobilizer. This worked fine but it left me with a car with less security so I purchased another ECU, immobilizer and transponder chip from ebay for £50.

Fitting the transponder ring in the steering column shroud is quite straight forward but you'll need to cut the shroud a little. Luckily it fits around the MGB key barrel reasonably well. Once you've physically fitted it, you need to wire it in. My transponder came without the wiring loom so I was missing the plug. The pin spacing is a standard 2.54mm. A quick search of eBay turned up a [JST-XH 2.54mm 9pin connector](https://www.ebay.co.uk/sch/i.html?_nkw=JST-XH+2.54mm+9pin). This fitted into the socket quite tightly.

The wiring is as follows:-

| Pin | Description                                                                                                                          |
|-----|--------------------------------------------------------------------------------------------------------------------------------------|
| 1   | Alarm input - not used                                                                                                               |
| 2   | Engine management Light - I didn't connect this. Even without this connected, ECU will still flash EML if it can't talk to the transponder |
| 3   | Not used                                                                                                                             |
| 4   | Earth                                                                                                                                |
| 5   | Ignition switched live                                                                                                               |
| 6   | Speed input - I didn't connect this [^1]                                                                                             |
| 7   | ECU immobiliser connection - connect to engine wiring loom pin 7                                                                     |
| 8   | diagnostic line - connect to OBD connector pin 3                                                                                     |
| 9   | Permanent live                                                                                                                       |

Once this is fitted, you'll need to insert the ECU transponder chip into the key fob. The easiest way to do this is to get a Landrover Discovery key blank. This has the same key blade as the MGB & has a space for the transponder chip to be inserted.

[^1]: I believe the ECU will use this signal to decide when to initiate fuel cut on deceleration. My car pops & bangs on deceleration and idle will dip slightly before settling when I come to a stop. I think connecting this pin will cure the problem but the speed signal needs to be correct for the ECU. My current speed sensor is not outputting the correct speed signal. That's something I intend to fix.


{% picture largethumb IMG_20200129_185223.jpg %}
{% picture largethumb Key.png %}
