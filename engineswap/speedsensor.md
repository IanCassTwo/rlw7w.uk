---
layout: page
title: Speed Sensor
parent: Engine Swap
---
## Speed Sensor

The Vauxhall Omega gearbox does not have any speedo output at all, neither mechanical nor electronic. On the donor car, the speed signal was taken from the ABS sensors. However, the MGB does not have ABS sensors so a workaround is needed in order to generate that speed signal.

The speed signal should be used for 2 things :-

* To feed the VDO speedometer
* To feed the ECU via the Immobilizer. The purpose of this signal (I believe) is simply to tell the ECU when the car is moving so it can cut fuel on overrun to stop those pops and bangs and also to enrich fuel when the car comes to a sudden stop to prevent the idle dipping. The car will still run without this signal.

Currently, I have a 3-wire hall effect speed sensor mounted on the gearbox close to the output flange so that it triggers for each leg of the 3 bolt flange as the prop rotates. The speed signal output feeds the VDO speedometer directly but it's not compatible with the ECU. The speed signal also breaks down a little when the speed increases which results in some needle instability at speed. You could argue that this adds an little authenticity.

My next plan is to use a [universal traction control wheel](http://trigger-wheels.com/store/contents/en-uk/p155.html) bolted to the prop flange along with a Vauxhall ABS sensor and a Vauxhall speed control relay to improve the action of the speed sensing circuit. This will be fed into pin 6 of the immobilizer. The speedo can be driven in parallel.

{% picture blog IMG_20200417_192411.jpg %}
