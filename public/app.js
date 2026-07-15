// =====================================
// Golden Calendar Engine
// Frontend Controller v3
// =====================================


async function loadEngineStatus() {

    try {

        const response =
            await fetch("/api");


        const data =
            await response.json();


        const status =
            document.getElementById("status");


        if (data.status === "online") {

            status.innerHTML = "🟢";

        } else {

            status.innerHTML = "🟡";

        }


    } catch(error) {


        const status =
            document.getElementById("status");


        if(status){

            status.innerHTML = "🔴";

        }


        console.error(
            "Engine Error:",
            error
        );

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


    const input =
        document.getElementById("dayInput");


    const day =
        Number(input.value);



    const result =
        document.getElementById("result");



    if(!day || day <= 0){


        result.innerHTML =
        "⚠️ أدخل رقم يوم صحيح";


        return;

    }




    result.innerHTML =
    "⏳ جاري البحث في المحرك الزمني...";





    try {



        const response =
            await fetch(
                `/golden/day/${day}`
            );



        const data =
            await response.json();




        if(data.error){


            result.innerHTML =
            "❌ لم يتم العثور على اليوم";


            return;

        }





        // عرض التقويم الشمسي

        document.getElementById(
            "solarYear"
        ).innerHTML =
            data.solar.year;



        document.getElementById(
            "solarMonth"
        ).innerHTML =
            data.solar.monthName;



        document.getElementById(
            "solarDay"
        ).innerHTML =
            data.solar.day;





        // عرض التقويم القمري

        document.getElementById(
            "lunarYear"
        ).innerHTML =
            data.lunar.year;



        document.getElementById(
            "lunarMonth"
        ).innerHTML =
            data.lunar.monthName;



        document.getElementById(
            "lunarDay"
        ).innerHTML =
            data.lunar.day;







        result.innerHTML = `

📅 اليوم الأسبوعي:

<strong>
${data.weekday}
</strong>


<br>


🔢 رقم اليوم:

<strong>
${data.dayId}
</strong>


<br>


⚙️ حالة المحرك:

Golden Calendar Engine

`;



    }

    catch(error){


        result.innerHTML =
        "❌ تعذر الاتصال بالمحرك";


        console.error(
            error
        );


    }


}





// تشغيل عند فتح الصفحة

loadEngineStatus();
