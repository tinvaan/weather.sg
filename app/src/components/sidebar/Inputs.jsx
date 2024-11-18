
import { draw, populate } from "../Maps"


export function ConfigSubmit() {
  return (
    <>
      <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={async () => {
              console.log("Button click!")
              const points = await populate(
                document.getElementById('airTemp').checked,
                document.getElementById('humidity').checked,
                document.getElementById('rainfall').checked
              )
              await draw(points)
            }}
          >
            <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
            </svg>
            Submit
          </button>
        </span>
      </div>
    </>
  )
}

export function AirTempCheckBox() {
  return (
    <>
      <div
        role="button"
        className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
      >
        <label
          htmlFor="airTemp"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <div className="inline-flex items-center">
            <label className="flex items-center cursor-pointer relative" htmlFor="airTemp">
              <input
                id="airTemp"
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="airTemp">
              Air Temperature
            </label>
          </div>
        </label>
      </div>
    </>
  )
}

export function HumidityCheckBox() {
  return (
    <>
      <div
        role="button"
        className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
      >
        <label
          htmlFor="humidity"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <div className="inline-flex items-center">
            <label className="flex items-center cursor-pointer relative" htmlFor="humidity">
              <input 
                id="humidity"
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="humidity">
              Relative Humidity
            </label>
          </div>
        </label>
      </div>
    </>
  )
}

export function RainFallCheckBox() {
  return (
    <>
      <div
        role="button"
        className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
      >
        <label
          htmlFor="rainfall"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <div className="inline-flex items-center">
            <label className="flex items-center cursor-pointer relative" htmlFor="rainfall">
              <input
                id="rainfall"
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="rainfall">
              Rainfall
            </label>
          </div>
        </label>
      </div>
    </>
  )
}