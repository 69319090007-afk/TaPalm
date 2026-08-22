/* ========================================
   TaPalm - DATA
======================================== */


const palmData = {

    lastCheck: "21 สิงหาคม 2026 13:45:20",

    readiness: 86.7,

    treeCount: 3,

    fruitCount: 15,

    ripeCount: 12,

    halfRipeCount: 2,

    rawCount: 1

};



/* ========================================
   GET ELEMENTS
======================================== */


const lastCheckElement =
    document.getElementById("lastCheck");


const readinessElement =
    document.getElementById("readiness");


const statusElement =
    document.getElementById("status");


const statusTextElement =
    document.getElementById("statusText");


const predictionElement =
    document.getElementById("prediction");


const treeCountElement =
    document.getElementById("treeCount");


const fruitCountElement =
    document.getElementById("fruitCount");


const ripeCountElement =
    document.getElementById("ripeCount");


const halfRipeCountElement =
    document.getElementById("halfRipeCount");


const rawCountElement =
    document.getElementById("rawCount");



/* ========================================
   DISPLAY DATA
======================================== */


if (lastCheckElement) {

    lastCheckElement.textContent =
        palmData.lastCheck;

}


if (readinessElement) {

    readinessElement.textContent =
        `${palmData.readiness}%`;

}


if (treeCountElement) {

    treeCountElement.textContent =
        palmData.treeCount;

}


if (fruitCountElement) {

    fruitCountElement.textContent =
        palmData.fruitCount;

}


if (ripeCountElement) {

    ripeCountElement.textContent =
        palmData.ripeCount;

}


if (halfRipeCountElement) {

    halfRipeCountElement.textContent =
        palmData.halfRipeCount;

}


if (rawCountElement) {

    rawCountElement.textContent =
        palmData.rawCount;

}



/* ========================================
   CHECK READINESS
======================================== */


if (
    statusElement &&
    statusTextElement &&
    predictionElement
) {

    if (palmData.readiness >= 85) {

        statusElement.className =
            "status ready";

        statusTextElement.textContent =
            "พร้อมตัด";

        predictionElement.textContent =
            "พร้อมตัดแล้ว";

    }

    else {

        statusElement.className =
            "status not-ready";

        statusTextElement.textContent =
            "ยังตัดไม่ได้";

        predictionElement.textContent =
            "ประมาณ 2 สัปดาห์";

    }

}