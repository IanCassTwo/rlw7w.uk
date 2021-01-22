---
layout: page
title: Speed Sensor
parent: Engine Swap
---
## Speed Sensor

The Vuaxhall Omega gearbox does not have any mechanical speedo output. On the donor car, the speed signal was electronic and taken from the ABS sensors. However, the MGB does not have ABS sensors so a workaround is needed in order to generate that speed signal.

The speed signal will be used for 2 things :-

* To feed the VDO speedometer
* To feed the ECU via the Immobilizer. The purpose of this signal (I believe) is simply to tell the ECU when the car is moving so it can cut fuel on overrun to stop those pops and bangs and also to enrich fuel when the car comes to a sudden stop to prevent the idle dipping. The car will still run without this signal.

My initial attempt at a solution was to mount a 3-wire hall effect speed sensor on the gearbox close to the output flange so that it triggers for each leg of the 3 bolt flange as the prop rotates. The speed signal output feeds the VDO speedometer but it's not sufficient to feed the ECU as well. The speed signal also breaks down a little when the speed increases which results in some needle instability at speed.

My next plan is to use a [universal traction control wheel](http://trigger-wheels.com/store/contents/en-uk/p155.html) bolted to the prop flange along with a Vauxhall ABS sensor and a Vauxhall speed control relay to improve the action of the speed sensing circuit. I believe this will work with both the ECU and the VDO speedo. Watch this space for updates.

{% picture mediumthumb IMG_20200417_192411.jpg %}
