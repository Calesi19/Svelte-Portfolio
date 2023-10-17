
<style>

.marquee {
    width: 100%;
    overflow: hidden;
    
}

.marquee-content {
    display: inline-block;
    animation: marqueeScroll 10s linear infinite;
}

@keyframes marqueeScroll {
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-100%);
    }
}

</style>


<div class="marquee w-full h-[300px] mt-5 rounded-lg bg-[#EAEAEA] border-2 border-[#fafafa] ">
    <div class="marquee-content flex flex-col w-full bg-green-100">
        
        <div class="flex justify-evenly mt-10">
            <div class="h-[40px] w-[40px] bg-red-100 rounded-full"></div>
            <div class="h-[40px] w-[40px] bg-red-100 rounded-full"></div>
            <div class="h-[40px] w-[40px] bg-red-100 rounded-full"></div>
            <div class="h-[40px] w-[40px] bg-red-100 rounded-full"></div>
        </div>
    </div>
    <div class="marquee-content flex flex-col w-full bg-green-100">
        
        <div class="flex justify-evenly mt-10">
            <div class="h-[40px] w-[40px] bg-red-500 rounded-full"></div>
            <div class="h-[40px] w-[40px] bg-red-500 rounded-full"></div>
            <div class="h-[40px] w-[40px] bg-red-500 rounded-full"></div>
            <div class="h-[40px] w-[40px] bg-red-500 rounded-full"></div>
        </div>
    </div>
    <div class="marquee-content flex flex-col w-full bg-green-100">
        
        <div class="flex justify-evenly mt-10">
            <div class="h-[40px] w-[40px] bg-red-500 rounded-full"></div>
            <div class="h-[40px] w-[40px] bg-red-500 rounded-full"></div>
            <div class="h-[40px] w-[40px] bg-red-500 rounded-full"></div>
            <div class="h-[40px] w-[40px] bg-red-500 rounded-full"></div>
        </div>
    </div>
    <div class="marquee-content flex flex-col w-full bg-green-100">
        
        <div class="flex justify-evenly mt-10">
            <div class="h-[40px] w-[40px] bg-red-500 rounded-full"></div>
            <div class="h-[40px] w-[40px] bg-red-500 rounded-full"></div>
            <div class="h-[40px] w-[40px] bg-red-500 rounded-full"></div>
            <div class="h-[40px] w-[40px] bg-red-500 rounded-full"></div>
        </div>
    </div>
</div>

