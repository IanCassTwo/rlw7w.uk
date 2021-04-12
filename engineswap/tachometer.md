---
layout: page
title: Tachometer
parent: Engine Swap
---
## Tachometer

The standard MGB rev counter will not work directly with the
tachometer output signal from the ECU for 2 reasons :- the signal is too
weak, and it's pulsing for 6 cylinders and not 4. In order to make it
work, we need to either replace the rev counter with one that will
accept the ECU signal, or adapt the one we have. I like the original
Smiths gauge so I chose the latter option.

The adapter box can be purchased quite cheaply from [Spiyda][]. He sells
two versions :- one for the RVI tacho which will fit inside the casing,
and one for all other tacho (including RVC) which is an external unit. I
have an RVC tacho so I chose the latter. The adapter will take a tacho
output from more or less any source, including an ECU, for any number of
cylinders, and drive more or less any tacho. It's truly a universal
translator for tachometer signals.

Fitting it is relatively straight forward. The Spiyda adapter needs to
drive the tacho movement directly, so you basically need to dismantle
the Smiths tacho and isolate the internal circuitry, then connect the
movement directly to the pins on the back of the rev counter. You can
then wire the Spiyda adapter to the rev counter pins and the ECU tacho
output into the Spiyda adapter. I'm not going to explain exactly how to
do this because [Spiyda's instructions][] are very comprehensive. There
is, however, one thing you need to do inside the tacho that Spiyda
doesn't mention. When connecting the internal movement to the 2 pins,
one of the wires (either) needs a 200 Ohm resistor wired in series. Both
pins also need a 100 Ohm resistor wired across them. This is because the
RVC rev counter is too sensitive. The resistors desensitise it slightly.

Once it's all physically wired, you can [calibrate it][] using Spiyda's
calibration audio tracks. The audio tracks are pure sine waves with a
frequency matching that which you would get at certain RPM. This means
when you play the audio track into the adapter, it will show the correct
RPM on the tacho. You can then adjust the adapter via the trim pot to
make the tacho read correctly. e.g. if you play the 200hz audio track,
that should show 4000rpm for a 6 cylinder engine. I'd suggest trying
several tracks and checking the linearity of the adapter. Note, my
laptop worked fine playing the audio tracks, but my Android phone
wouldn't. You can also verify the rev counter by running OpCom software
on your laptop & accessing the realtime diagnostics.

{% picture largethumb External_2.jpg %}

  [Spiyda]: https://www.spiyda.com/smiths-rvi-rvc-conversion-external.html
  [Spiyda's instructions]: https://www.spiyda.com/pub/media/wysiwyg/pdf/TACHO%20EXTERNAL%20MK3.pdf
  [calibrate it]: https://www.spiyda.com/tacho-calibration-information
