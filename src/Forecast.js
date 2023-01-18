export function forecast(cityName) {


    let difulte_name = "Vancouver"
    let url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName +
    '&appid=54b326b5c998bbc5d16901feb16ae0da&units=metric';

    const days_data = [];
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let days = data['list'];

        for (const day of days) { 
            if (String(day['dt_txt']).includes("12:00:00")) {
                let f = day['dt_txt'];
                let dateVal;
                let timeVal;
                let tempVal;
                let descVal;

                tempVal = day['main']['temp_max'];
                descVal = day['weather'][0]['description']

                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        dateVal += f[i].toString();
                    }
                    for (let i = 11; i < f.length; i++) { // skip the space
                        timeVal += f[i].toString();
                    }
                }, 2000);

                
                setTimeout(() => {
                    dateVal = dateVal.slice(9, dateVal.length);
                    timeVal = timeVal.slice(9, timeVal.length);
                }, 2000);
                

                // const oneDay = [dateVal, timeVal, tempVal, descVal];
                let dayObj = {};
                dayObj = {date:dateVal, time:timeVal, temp:tempVal, desc:descVal }
                let dayObj1 = {
                    date: "2022/09/02",
                    time: "12:00:00",
                    temp: "20.1"

                }

                setTimeout(() => {
                    days_data.push(dayObj1);
                }, 5000);
                
            }
        }

        
    });
    let dayObj1 = {
        date: "2022/09/02",
        time: "12:00:00",
        temp: "20.1",
        desc: "clear sky"

    }
    let dayObj2 = {
        date: "2022/09/03",
        time: "12:00:00",
        temp: "19.5",
        desc: "cloudy"

    }
    let dayObj3 = {
        date: "2022/09/04",
        time: "12:00:00",
        temp: "24.1",
        desc: "rainy"

    }

    days_data.push(dayObj1);
    days_data.push(dayObj2);
    days_data.push(dayObj3);

    
    setTimeout(() => {
        return(days_data);
    }, 5000);
    
    
}