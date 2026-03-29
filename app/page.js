
import Image from "next/image";

export default function Page(){
return(
<main className="text-gray-800">

<section className="relative h-[85vh] text-white">
<Image src="/hair1.jpg" fill className="object-cover" alt=""/>
<div className="absolute inset-0 bg-black/60"/>
<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
<h1 className="text-4xl font-bold">AND Hair&Co</h1>
<p className="mt-3">Hair salon in Cork</p>
<a href="tel:0214822545" className="mt-6 bg-white text-black px-6 py-3 rounded-full">Book Appointment</a>
</div>
</section>

<section className="p-8 text-center">
<h2 className="text-2xl font-semibold">Professional Hair Styling</h2>
<p className="mt-2">Colour, styling and transformations done with care and precision.</p>
</section>

<section className="grid md:grid-cols-2 gap-4 p-6">
<Image src="/hair1.jpg" width={500} height={400} className="rounded-xl" alt=""/>
<Image src="/hair2.jpg" width={500} height={400} className="rounded-xl" alt=""/>
</section>

<section className="p-8 bg-gray-100 text-center">
<h2 className="text-2xl font-semibold">Why Clients Love Us</h2>
<p className="mt-3">"The girls were amazing, curls still holding day 2."</p>
<p className="mt-2">"Wouldn't go anywhere else, so knowledgeable and friendly."</p>
</section>

<section className="p-8 text-center">
<h2 className="text-2xl font-semibold">Visit Us</h2>
<p>12 Knocknahorgan Cottages, Riverstown, Cork</p>
<p>Tue–Sat 09:30+</p>
<a href="tel:0214822545" className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-full">Call (021) 482 2545</a>
</section>

<section className="p-6">
<iframe
src="https://www.google.com/maps?q=12+Knocknahorgan+Cottages,+Cork&output=embed"
className="w-full h-[300px] border-0 rounded-xl"
/>
</section>

</main>
)
}
