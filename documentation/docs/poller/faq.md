---
id: faq
title: FAQs
---

#### What are the requirements?

- Grafana 7.4.0+ is recommended. Grafana 7.x or newer is required.
- InfluxDB 1.7.7 or newer is needed, if you choose to use InfluxDB.
- Prometheus 2.x if you choose to use Prometheus.

UniFi Poller has not been fully tested with InfluxDB 2.0 or newer. While InfluxDB
2.0 may be able to scrape metrics from Poller, there are no pre-built dashboards
available to display the data.


#### Here's a great idea - show me the amount of WAN data I've used this month!

- Yes, it is a great idea. Sadly, this information is not produced by the UniFi controller. However, it should be possible to calculate it from the data already stored and work is on-going to produce something useful.
- If you have a method of doing this already then please share!

#### Why is UniFi Poller showing me XXXX?

- Almost all of the time this is because it is what the controller is telling it! Although the UniFi controller has many strengths, it is not flawless, and the data that UniFi Poller shows on Grafana is only what it is given.

#### UniFi Poller is showing me YYYY - what does this actually mean?

- Because UniFi Poller just picks up data from the controller using the API, the only way of getting an accurate answer about what is shown is by asking UI themselves. Given that they don't officially support the API there may be little chance of an answer
