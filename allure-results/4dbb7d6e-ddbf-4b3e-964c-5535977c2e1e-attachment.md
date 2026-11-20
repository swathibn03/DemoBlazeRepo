# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test9ItemMonitorsPurchase.spec.js >> Purchase phone item
- Location: tests\Test9ItemMonitorsPurchase.spec.js:10:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_NETWORK_IO_SUSPENDED at https://www.demoblaze.com/
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "Your connection was interrupted" [level=1] [ref=e7]
    - paragraph [ref=e8]: Your computer went to sleep.
    - generic [ref=e9]: ERR_NETWORK_IO_SUSPENDED
  - button "Reload" [ref=e12] [cursor=pointer]
```