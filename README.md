# Dockmaster

Minutedock commands for Hubot. Make MinuteDocking work from Slack, HipChat etc.

* Ping staff based on rules (it's Monday and you haven't tracked any time by 10am)
* Clock off (& on?) via HipChat from the bus (easier than MD via mobile).

## Current status

Just testing out the basic commands we'll require for these things, then I'll make this into a set of Hubot commands.

## Commands

### dock off

Stop and log the current timer.

### dock switch to _minutedock string_ [at _time offset_]

Stop and log current timer if any, create new timer entry with _minutedock string_

If time offset provided, then offset start of timer by that amount. If there was a current timer, subtract the equivalent offset.
