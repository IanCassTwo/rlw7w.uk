---
layout: page
title: Speedometer
parent: Engine Swap
---
## Speedometer

{% picture largethumb IMG_20200806_152121.jpg %}
{: .d-inline-block .float-right .pl-5}

The original Smiths speedo is a mechanical drive unit and the Vauxhall Omega engine does not have *any* speedo output, neither mechanical nor electronic so you'll absolutely have to fit a [speed sensor](/engineswap/speedsensor/) somewhere. Of course, you now need a speedo that can understand the signals from the speed sensor. You have two options. One is to buy an adapter box that takes its speed input from a speed sensor and converts to a mechanical output so that you can drive the standard speed. These are [available from USA](https://www.speedhut.com/Speedbox.html) but are very expensive (\~$300 + shipping, VAT and import duty). The second is to replace the speedo with a unit that takes an electronic input natively.

I was baulking at the cost of either an adapter box or a Smiths digital speedo and was looking for alternatives. I found an untested 80mm Siemens VDO electronic speedo for £10. "Untested" usually means it's broken but I thought I'd take a chance for £10. When I received it, I powered it up and tested it using the test procedure explained below, and it seemed to work. I mounted it in the dashboard using the original Smiths mounting legs and attached the original Smiths trim ring to the front using Sikaflex. I then followed the instructions [Siemens VDO user manual][] to calibrate it and now it's working great. It doesn't even look too out of place.

It did, however, have blown backlight bulbs. These should be 1.2W T10 wedge bulbs. These bulbs are only commonly available in 5W variants at your local motor factor but I don't think having 10W of backlight would be particularly healthy. You can get the proper 1.2W bulbs cheaply but you need to search for "[T10 fruit machine bulbs][]" on ebay. You can bulk buy 50 of them cheaper than buying a single bulb at your motor factors. You should probably buy green variants of these bulbs so that your speedo matches the other gauges on the dashboard

My cheap speedo did, however, have an intermittent dim/non-functional odometer. You can buy these [brand new on Aliexpress][] for not a lot of money. Fitting is straightforward but does need you to completely dismantle the speedo.

{% picture blog IMG_20200806_152131.jpg %}

### Pulses per mile

One of the things I needed to calculate was the pulses per mile (ppm) so I could configure the speedo. Here's the math...

-   Tyre size 185/70/14 = 835 revolutions per mile
-   
-   Diff ratio is 3.07, so one revolution of the wheel is 3.07 revolutions of the propshaft - 835 x 3.07 = 2563 prop revolutions per mile
-   
-   I have 3 pulses per revolution of the propshaft - 2563 x 3 = 7690 pulses per mile

### Testing An Electronic Speedo

Testing a electronic speedo is easier than it sounds. One simply has to take the pulses-per-mile figure that we worked out above. At 60mph, we'll achieve this number of pulses in 1 minute so if we divide by 60 we get the number of pulses per second. In my case, approx 128 pulses per second. If we replay this into the speedo, we should see it read 60mph provided it's configured properly. But, how do we replay 128 pulses per second into the speedo? The easiest way is to read that number as cycles per second aka hertz. We can then use an [online tone generator][] to create an audible tone which we can feed into the speedo via the headphone jack. One wire from the headphone jack should go to the signal input and the other to ground. Once you see indicated 60mph, you can halve the frequency for 30mph to check the linearity of the speedo.

  [online tone generator]: https://onlinetonegenerator.com/
  [Siemens VDO user manual]: https://www.vdo-gauges.com/media/instructions/0%20515%20012%20051%20--%20Programmable%20Speedometer(c).pdf
  [T10 fruit machine bulbs]: https://www.ebay.co.uk/itm/50-x-Clear-Fruit-Arcade-Machine-Bulbs-Lamps-T10-10MM-1-2W/163962659747
  [brand new on Aliexpress]: https://www.aliexpress.com/i/4000275310029.html



