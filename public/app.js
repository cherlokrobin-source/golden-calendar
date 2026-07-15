// Golden Calendar Engine Frontend v2

async function loadEngineStatus() {

    try {

        const response = await fetch("/api");

        const data = await response.json();

        if (data.status === "online") {

            document.getElementById("status").innerHTML = "🟢";

        }

    } catch(error) {

        document.getElementById("status").innerHTML = "🔴";

        console.error(error);

    }

}



function showSearch(){

    document
    .getElementById("searchBox")
    .scrollIntoView({
        behavior:"smooth"
    });

}



async function searchDay(){

    const day =
    document.getElementById("dayInput").value;


    const result =
    document.getElementById("result");


    if(!day){

        result.innerHTML =
        "أدخل رقم اليوم";

        return;

    }


    result.innerHTML =
    "⏳ جاري البحث في الأسطر الزمنية...";


    try {

        const response =
        await fetch(`/golden/day/${day}`);


        const data =
        await response.json();


        if(data.error){

            result.innerHTML =
            "❌ اليوم غير موجود";

            return;

        }


        result.innerHTML = `

☀ التقويم الشمسي

السنة: ${data.solar.year}

الشهر: ${data.solar.monthName}

اليوم: ${data.solar.day}



🌙 التقويم القمري

السنة: ${data.lunar.year}

الشهر: ${data.lunar.monthName}

اليوم: ${data.lunar.day}



📅 اليوم:

${data.weekday}


رقم اليوم:

${data.dayId}

        `;


    } catch(error){

        result.innerHTML =
        "❌ تعذر الاتصال بالمحرك";

        console.error(error);

    }

}



loadEngineStatus();
