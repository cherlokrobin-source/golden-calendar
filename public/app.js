// Golden Calendar Engine Frontend


async function loadEngineStatus() {

    try {

        const response =
            await fetch("/api");


        const data =
            await response.json();



        if (data.status === "online") {

            document.getElementById("status").innerHTML =
                "🟢";

        }


    } catch (error) {


        document.getElementById("status").innerHTML =
            "🔴";


        console.error(error);

    }

}




function showSearch() {

    document
    .getElementById("searchBox")
    .scrollIntoView({

        behavior:"smooth"

    });

}




async function searchDay() {


    const day =
        document
        .getElementById("dayInput")
        .value;



    const result =
        document
        .getElementById("result");



    if (!day) {

        result.textContent =
        "أدخل رقم اليوم أولاً";

        return;

    }



    result.textContent =
    "جاري البحث...";



    try {


        const response =
        await fetch(
            `/day/${day}`
        );



        const data =
        await response.json();



        result.textContent =
        JSON.stringify(
            data,
            null,
            2
        );



    } catch(error) {


        result.textContent =
        "خطأ في الاتصال بالمحرك";


        console.error(error);


    }


}




// تشغيل عند فتح الصفحة

loadEngineStatus();
