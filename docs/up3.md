---
id: up3
title: FAQs
---

#### What are the requirements?
- Grafana 7.0.5+ is recommended. Grafana 6.x or newer is required.
- InfluxDB 1.7.7 or newer is needed, if you choose to use InfluxDB.
Unifi Poller has not been tested with InfluxDB 2.0 or newer


#### Here's a great idea - show me the amount of WAN data I've used this month!

- Yes, it is a great idea. Sadly, this information is not produced by the Unifi controller. However, it should be possible to calculate it from the data already stored and work is on-going to produce something useful
- If you have a method of doing this already then please share!

#### Why is Unifi Poller showing me XXXX?

- Almost all of the time this is because it is what the controller is telling it! Although the Unifi controller has many strengths, it is not flawless, and the data that Unifi Poller shows on Grafana is only what it is given

#### Unifi Poller is showing me YYYY - what does this actually mean?

- Because Unifi Poller just picks up data from the controller using the API, the only way of getting an accurate answer about what is shown is by asking UI themselves. Given that they don't officially support the API there may be little chance of an answer
