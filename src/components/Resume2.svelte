<script>

import { Lightbox } from 'svelte-lightbox'



</script>



<style>
    
    .waveBackgroundEnd {
      background: url('/waves-end.svg') no-repeat center center;
      background-size: cover; /* This makes sure the SVG covers the entire div */
      height: auto;
      min-height: 50vh;
      width: 100%;
    }

  </style>


<div class="waveBackgroundEnd py-10 min-h-[500px]">


    <h1 class="container font-inter font-semibold text-[32px] md:text-[32px]">Resume</h1>
    


    <div class="container flex flex-col md:flex-row mt-5 gap-10">

<Lightbox>
        
  
            <img class="md:w-1/2 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-1000 cursor-pointer" src="resume.webp" alt="Resume">

</Lightbox>

            
        <div class="flex flex-col h-auto w-auto justify-center">

            <div class="mb-2 text-lg leading-tight">
                <span class="font-semibold text-base">Phone<br></span>
                (787)-988-9447<br>
            </div>
            <div class="mb-8 text-lg leading-tight">
                <span class="font-semibold text-base">Email:<br></span>
                carlos.lespin.silva@gmail.com
            </div>

            <p>
                For a deeper dive into my professional journey, accomplishments, and qualifications, feel free to download my resume and cover letter. If you find my credentials aligning with a potential opportunity, please don't hesitate to share or reach out to me directly.            </p>


            <div class="flex flex-col w-full xl:flex-row lg:gap-4">

                <a href="/documents/Resume-Carlos.pdf" download>
                    <button class="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-lg mt-4 py-4 md:py-3 px-10 rounded-full text-white transition duration-300 active:duration-0 flex items-center gap-4">
                        <svg class="h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Download"><path d="M8.29,13.29a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-1.29-1.3A1,1,0,0,0,8.29,13.29ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                        Resume PDF    
                    </button>

                </a>
                    
                <a href="/documents/CoverLetter-Carlos.pdf" download>
                    <button class="w-full border-4 border-[#1e1e1e] hover:border-blue-600 text-lg mt-4 py-3 md:py-2 px-10 rounded-full transition duration-300 active:duration-0 flex items-center gap-4">
                        <svg class="h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Download"><path d="M8.29,13.29a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-1.29-1.3A1,1,0,0,0,8.29,13.29ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z" fill="#000000" class="color000000 svgShape"></path></svg>
                        CV PDF
                    </button>
                </a>
                    

                
            </div>

            

            

            
        </div>

    </div>




</div>
