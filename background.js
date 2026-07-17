browser.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    const headers = details.requestHeaders;

    let found = false;

    for (const header of headers) {
      if (header.name.toLowerCase() === "accept-language") {
        header.value = "zh-CN,zh;q=0.9";
        found = true;
        break;
      }
    }

    if (!found) {
      headers.push({
        name: "Accept-Language",
        value: "zh-CN,zh;q=0.9"
      });
    }

    return { requestHeaders: headers };
  },
  {
    urls: ["*://asmr.one/*"]
  },
  ["blocking", "requestHeaders"]
);
