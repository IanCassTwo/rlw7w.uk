---
layout: default
title: Central Locking
parent: Wiring
---
## Central Locking
There's not many modern features I miss on my MGB but central locking is one of them. Luckily, central locking kits are dirt cheap on ebay and are not hard to fit. There's a few components that need to be fitted in order for it to all work

### Door Solenoids
The basic function of both the drivers and passenger door solenoids is to push or pull the locking mechanism to lock or unlock the door. To do this, they have 2 wires that take a positive and a ground (generally green & blue). The polarity of these wires is swapped depending on whether you want them to lock or unlock. These wires engergize a motor or a relay to cause a rod to be pushed or pulled. This rod is joined to the MGB lock operating rod using a clamp. The solenoids also have another 3 wires which allow a central locking relay to determine the current position of the solenoid (open or closed). The relay can then drive a second solenoid to mirror the action of the first. The solenoids are also designed so that they can be operated manually by turning the key in the lock

{% picture blog  solenoid.jpg %}

#### Drivers Door
The drivers door solenoid takes its input on green and blue wires from either the remote central locking ECU or from the alarm unit if that has a central locking function. This allows the solenoid to be energised to either lock or unlock based on a button press on a remote. However, the drivers door solenoid doesn't have to be electrically operated (even if these wires are connected). It can be manually operated from the key or from the locking lever inside the cabin. 

The drivers door solenoid has an additional 3 wires. One of these is connected to ground and the other is switched to ground depending on whether the door is locked or unlocked. These 3 wires are connected to the central locking relay and are used to drive the passenger door solenoid to mirror the drivers door solenoid. This allows the passenger door to mirror the state of the drivers door.

| Wire | Function                    | 
| --- |:---------------------------|
|  blue & green  | One of these pins should be positive and the other ground depending on lock or unlock. Leave disconnected for manual operation, or wired to the alarm or some other central locking controller for keyless entry|
|  black  | ground|
|  white & brown  | Connected to the central locking relay pins 2 & 3. One of these pins will be grounded depending on lock position|

#### Passenger Door
The passenger door solenoid has only 2 (functional) wires (blue and green). These are driven by the central locking relay and effectively mirror the state of the drivers door. For simplicities sake, we won't be attempting to allow the passenger door solenoid to operate the drivers door.

| Wire | Function                    | 
| --- |:---------------------------|
|  blue & green  | Connected to the central locking relay pins 1M and 2M|

*Note, if your passenger solenoid has 5 wires, only use the blue & green*

### Central Locking Relay
This 6-pin relay allows the passenger door solenoid to mirror the actions of the drivers door solenoid no matter how it's actuated. The way that it does this is to utilize the two output wires from the drivers solenoid to selectively ground either pin "2" or pin "3" on the relay which causes pin "1M" to be positive and "2M" to be negative, or vice-versa. These are connected to the blue & green wire on the passenger door solenoid. The relay has a short timer on it so that it will only fire for a second or so.

| Pin | Function                    | 
| --- |:---------------------------|
|  +  | Permanent Live|
|  E (or ground symbol)  | Ground |
|  2 & 3  | White & brown from the drivers door solenoid |
|  1M & 2M  | Green & blue to the passenger door solenoid |

*Note, experiment with orientation of pins 1M & 2M until correct operation of passenger lock is achieved*

{% picture blog relay.jpg %}

### Mounting Location
The solenoid must be positioned in a place where it can operate the locking mechanism but also where it won't be affected by the window winder mechanism. I found that the ideal place for is is just below the door locking mechanism. The operating rod should be shortened and bent into shape so it can operate the rod. The rods can then be joined by the supplied clamp. I suggest you use Locktight on the threads to prevent it from coming loose.

{% picture blog solenoid-location.jpg %}
{% picture blog PXL_20210313_122358872.jpg %}

### Wiring Diagram

{% picture blog 8_central_locking.png %}

