---
id: faq
title: FAQs
---

**What are the requirements?**

- Grafana 7.4.0+ is recommended. Grafana 7.x or newer is required.
- InfluxDB 1.8.x is needed, if you choose to use InfluxDB. 1.10 and 1.11 may work.
- InfluxDB 2.x does **not** work.
- Prometheus 2.x if you choose to use Prometheus.

:::caution[InfluxDB 2.0]
UniFi Poller does not currently work with versions of InfluxDB newer than 1.8.x.
:::

UniFi Poller has not been fully tested with InfluxDB 2.0 or newer. While InfluxDB
2.0 may be able to scrape metrics from Poller, there are no pre-built dashboards
available to display the data.

**Here's a great idea - show me the amount of WAN data I've used this month!**

- Yes, it is a great idea. Sadly, this information is not produced by the UniFi controller.
  However, it should be possible to calculate it from the data already stored and work
  is on-going to produce something useful.
- If you have a method of doing this already then please share!

**Why is UniFi Poller showing me XXXX?**

- Almost all of the time this is because it is what the controller is telling it!
  Although the UniFi controller has many strengths, it is not flawless,
  and the data that UniFi Poller shows on Grafana is only what it is given.

**UniFi Poller is showing me YYYY - what does this actually mean?**

- Because UniFi Poller just picks up data from the controller using the API,
  the only way of getting an accurate answer about what is shown is by asking UI themselves.
  Given that they don't officially support the API there may be little chance of an answer

**My Prometheus graphs show dips or drop to zero, even though I set a short scrape interval**

- The UniFi controller's own API does not update every value on every request; some data
  points only refresh roughly once a minute (or slower), regardless of how often UniFi
  Poller is scraped or how often Prometheus scrapes UniFi Poller. Setting a Prometheus
  `scrape_interval` shorter than the controller's own update rate will not increase the
  resolution of the underlying data.
- This matters most for rate-based panels. Prometheus's `rate()` function needs at least
  two real data points inside the range vector you give it; if the range is shorter than
  the controller's update interval, `rate()` can return `0` even though traffic didn't
  actually stop. As a rule of thumb, use a range of at least `3m` (eg. `rate(metric[3m])`)
  for byte/packet rate metrics, and don't set your Prometheus `scrape_interval` for the
  UniFi Poller job below `30s`.
