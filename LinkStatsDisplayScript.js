function dispLinkStats() {
    const elements = document.getElementsByTagName("a");
    for(ele in elements) {
        try {
            element = elements[ele];
            if(!!element.textContent.trim() && !element.stat) {
                elementImg = element.appendChild(document.createElement("img"));
                elementImg.src = "https://s2.googleusercontent.com/s2/favicons?domain=" + element.href
                elementImg.width = "15";
                elementImg.height = "15";
                element.stat = true;
            }
        } catch {};
    };
    setTimeout(dispLinkStats, 60000);
};
dispLinkStats();