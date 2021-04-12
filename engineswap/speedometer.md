---
layout: page
title: Speedometer
parent: Engine Swap
---
## Speedometer

{% picture largethumb IMG_20200806_152121.jpg %}
{: .d-inline-block .float-right .pl-5}

The original Smiths speedo is a mechanical drive unit and the Vauxhall Omega engine does not have *any* speedo output, neither mechanical nor electronic. There's 2 ways to fix this. One way is to buy an adapter box that takes its speed input from a speed sensor and converts to a mechanical output. These are [available from USA][] but are very expensive (\~$300 + shipping, VAT and import duty) or to replace the speedo with a more modern unit that takes an electronic input natively.  The adapter box would be my preference because it would allow me to keep the standard dial, but I just can't justify the cost.

When choosing a replacement speedo, there were several that I considered :-

1.  [Smiths Classic Digital Speedo][] is the modern equivalent of what we have in the MGB. This would be my choice but again, it's expensive. 
2.  Other premium manufacturer electronic speedo. These tend to be as expensive as the Smiths and therefore no reason to choose this option unless I get a bargain
3.  [Rally Design 80mm speedo][] is ugly but it's cheap and comes with all the bits you need to get it working.

  [available from USA]: https://www.speedhut.com/Speedbox.html
  [Smiths Classic Digital Speedo]: https://www.smiths-instruments.co.uk/classic
  [Rally Design 80mm speedo]: https://www.rallydesign.co.uk/product_info.php?products_id=24723

As it happened, I scored a bargain on ebay. I found a "barn find" untested Siemens VDO electronic speedo for £10. "Untested" usually means it's broken but I thought I'd take a chance for £10. When I received it, I measured it and it was 80mm which is what I needed. I powered it up and it seemed to work. I tested it using the test procedure explained below, and it seemed to work. I mounted it in the dashboard using the original Smiths mounting legs and attached the original Smiths trim ring to the front using Sikaflex. I then followed the instructions [Siemens VDO user manual][] to calibrate it and now it's working great. It doesn't even look too out of place.

The VDO speedo that I purchased had blown backlight bulbs. These are 1.2W T10 wedge bulbs. These bulbs are only commonly available in 5W variants but I don't think having 10W of backlight would be particularly healthy. You can get the proper bulbs cheaply but you need to search for "[T10 fruit machine bulbs][]" on ebay. You can bulk buy them cheaper than buying a single bulb at your motor factors. You should buy green variants of these bulbs so that your speedo matches the other gauges on the dashboard

It also has an intermittent dim/non-functional odometer. Sometimes it works fine, other times it's unreadable. It seems you can buy these [brand new on Aliexpress][] for not a lot of money. This is also a project for another day.

{% picture blog IMG_20200806_152131.jpg %}

### Pulses per mile

One of the things I needed to calculate was the pulses per mile (ppm) so I could configure the speedo. Here's the math...

-   Tyre size 185/70/14 = 834 revolutions per mile
-   
-   Diff ratio is 3.9, so one revolution of the wheel is 3.9 revolutions of the propshaft - 834 x 3.9 = 3252.6 prop revolutions per mile
-   
-   I have 3 pulses per revolution of the propshaft - 3252.6 x 3 = 9,757.8 pulses per mile

### Testing An Electronic Speedo

Testing a electronic speedo is easier than it sounds. One simply has to take the pulses-per-mile figure that we worked out above. At 60mph, we'll achieve this number of pulses in 1 minute so if we divide by 60 we get the number of pulses per second. In my case, approx 162 pulses per second. If we replay this into the speedo, we should see it read 60mph provided it's configured properly. But, how do we replay 162 pulses per second into the speedo? The easiest way is to read that number as cycles per second aka hertz. We can then use an [online tone generator][] to create an audible tone which we can feed into the speedo via the headphone jack. One wire from the headphone jack should go to the signal input and the other to ground. Once you see indicated 60mph, you can halve the frequency for 30mph to check the linearity of the speedo.

  [online tone generator]: https://onlinetonegenerator.com/
  [Siemens VDO user manual]: https://www.vdo-gauges.com/media/instructions/0%20515%20012%20051%20--%20Programmable%20Speedometer(c).pdf
  [T10 fruit machine bulbs]: https://www.ebay.co.uk/itm/50-x-Clear-Fruit-Arcade-Machine-Bulbs-Lamps-T10-10MM-1-2W/163962659747
  [brand new on Aliexpress]: https://www.aliexpress.com/i/4000275310029.html



