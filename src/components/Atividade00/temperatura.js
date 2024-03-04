

const Temperatura = () =>{
    let celsius = 20;
    let fahrenheit = 50;
    let kelvin = 320;
    const celsiusParaFahrenheit = () =>{
        return (celsius * 9/5) + 32;
    }
    const FahrenheitParaCelsius = () =>{
        return (fahrenheit -32) * 1.8;
    }
    const KelvinParaCelsiu_Fahrenheit = () =>{
        let kelvinParaCelsiu = kelvin - 273;
        let kelvinParaFahrenheit = ((kelvin - 273) * 9)/5 + 32;

        return {kelvinParaCelsiu, kelvinParaFahrenheit};
    }


    return (
        <div>
            <h1>Temperatura de 20 Celsiu para Fahrenheit: {celsiusParaFahrenheit()}</h1>
            <h1>50 Fahrenheit para Celsiu: {FahrenheitParaCelsius()}</h1>
            <h1>320 kelvin para celsiu e fahrenheit: {JSON.stringify(KelvinParaCelsiu_Fahrenheit())}</h1>
        </div>
    )
}

export default Temperatura;