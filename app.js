/* ========================================
   TaPalm
   Palm Ripeness Monitoring
======================================== */


/* ========================================
   DATA
======================================== */

const palmData = {

    // วันที่และเวลาตรวจล่าสุด
    lastCheck: "21 สิงหาคม 2026 13:45:20",

    // ความพร้อมในการตัด
    readiness: 86.7,

    // จำนวนต้นที่ตรวจ
    treeCount: 3,

    // จำนวนผลทั้งหมด
    fruitCount: 15,

    // จำนวนผลสุก
    ripeCount: 12,

    // จำนวนผลกึ่งสุก
    halfRipeCount: 2,

    // จำนวนผลดิบ
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

lastCheckElement.textContent =
    palmData.lastCheck;


readinessElement.textContent =
    palmData.readiness + "%";


treeCountElement.textContent =
    palmData.treeCount;


fruitCountElement.textContent =
    palmData.fruitCount;


ripeCountElement.textContent =
    palmData.ripeCount;


halfRipeCountElement.textContent =
    palmData.halfRipeCount;


rawCountElement.textContent =
    palmData.rawCount;


/* ========================================
   CHECK READINESS
======================================== */

/*
    เกณฑ์เบื้องต้น

    85% ขึ้นไป
    = พร้อมตัด

    ต่ำกว่า 85%
    = ยังตัดไม่ได้
*/

if (palmData.readiness >= 85) {

    /* พร้อมตัด */

    statusElement.className =
        "status ready";

    statusTextElement.textContent =
        "พร้อมตัด";

    predictionElement.textContent =
        "พร้อมตัดแล้ว";

}
else {

    /* ยังตัดไม่ได้ */

    statusElement.className =
        "status not-ready";

    statusTextElement.textContent =
        "ยังตัดไม่ได้";

    predictionElement.textContent =
        "ประมาณ 2 สัปดาห์";

}