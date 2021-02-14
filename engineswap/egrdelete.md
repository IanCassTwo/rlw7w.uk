---
layout: page
title: EGR Delete
parent: Engine Swap
---
## EGR Delete

The engine has an Exhaust Gas Recirculation (EGR) system which is very clever and misunderstood. In a nutshell, it's allowing inert gas to dilute your incoming air meaning that you need more throttle opening to burn the same amount of fuel. This is good because it's reducing pumping losses in the engine. In normal circumstances, I suggest you [*don't* remove because it's saving you money](http://www.tuneruniversity.com/blog/2012/05/dont-block-or-remove-the-egr-valve-its-saving-you-money/)! However in my case, I was making new tubular headers and I didn't want to incorporate the EGR system. Of course, it's not as simple as removing it because the ECU will helpfully tell you about it in the form of a check engine light, so we need to fool the ecu into thinking it's still there.  Luckily this ECU is only measuring the return voltages of the EGR valve, so the answer is to build a circuit onto a piece of strip board that emulates this. You can use a pcb mount relay rather than an automotive relay to really reduce the size of the circuit. Once you've built the circuit, buy a small prototyping box from ebay to house it.

{% picture Acdn.z22se.com_userpix_13_EGR_cheater_version_2_1.jpg %}


