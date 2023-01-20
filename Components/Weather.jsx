import React from 'react';
import Image from "next/image";

const Weather = ({data}) => {
    return (
        <div className="relative flex flex-col justify-evenly md:justify-between max-w-[500px] w-64 md:w-full h-[90vh] m-auto md:p-7 text-gray-300 z-10">
            {/* Top Section */}
            <div className="relative flex justify-between pt-12">
                <div className="flex flex-col items-center">
                    <Image
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt='/'
                        width={100}
                        height={100}/>
                    <p className="text-md md:text-2xl" >{data.weather[0].main}</p>
                </div>
                <p className="text-3xl md:text-7xl flex items-center" >{data.main.temp.toFixed(0)}&#176;</p> {/* deg : &#176; html code */}
            </div>
            {/* Bottom Section */}
            <div className="bg-black/50 relative p-8 rounded-md">
                <p className="text-2xl text-center pb-6">Weather in <span className="text-green-600">{data.name}</span></p>
                <div className="flex flex-col space-y-4 md:flex-row md:justify-between text-center">
                    <div>
                        <p className="font-bold md:text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p className="md:text-xl">Feels Like</p>
                    </div>
                    <div>
                        <p className="font-bold md:text-2xl">{data.main.humidity}%</p>
                        <p className="md:text-xl">Humidity</p>
                    </div>
                    <div>
                        <p className="font-bold md:text-2xl">{data.wind.speed.toFixed(0)} Km/h</p>
                        <p className="md:text-xl">Winds</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;