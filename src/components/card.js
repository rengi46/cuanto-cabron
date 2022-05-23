import React from 'react'

export const Meme = ({infoMeme}) => {
return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg p-5 bg-gray-500 m-48">
        <img class="w-full" src="https://statics.memondo.com/p/s1/ccs/2022/05/CC_2792148_11917437edc14b34ae7fe124e8d650f0_otros_no_lo_estas_usando_bien.jpg?cb=7700223" alt="Sunset in the mountains"/>
        <div class="px-6 py-4 bg-gray-200 rounded-lg mt-3">
            <div class="font-bold text-xl mb-2">No lo estás usando bien</div>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#escobilla</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fail</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mal</span>
        </div>
    </div>
)
}
