import React from 'react'

function ClientsFeedback() {
  return (
    <div className='bg-black pt-14'>
      <div> <h1 className="text-4xl md:text-3xl text-center font-bold font-serif text-[#91BE7F] ">
        CLIENTS FEEDBACK
      </h1>
      </div>
      <div className="pt-28 px-20 gap-8 flex justify-between">
  {/* Business Owner */}
  <div className="w-1/3 space-y-4">
    <h1 className="text-2xl font-bold font-serif text-[#91BE7F]">
      Umaima Azeez
    </h1>
    <h2 className="text-lg font-bold text-[#91BE7F]">Business Owner</h2>
    <p className="text-lg text-white leading-relaxed">
      We partnered with <span className="font-bold">CodeTec Solutions</span> for
      the development of a custom desktop application to streamline our
      internal processes. From concept to implementation, their team showcased
      exceptional expertise and professionalism. They thoroughly understood our
      complex requirements and delivered a robust, user-friendly application
      ahead of schedule. The solution has significantly enhanced our workflow
      efficiency, and we commend{" "}
      <span className="font-bold">CodeTec Solution’s</span> dedication and
      technical excellence.
    </p>
  </div>

  {/* Web App Development */}
  <div className="w-1/3 space-y-4">
    <h1 className="text-2xl font-bold font-serif text-[#91BE7F]">
      Danish Owais
    </h1>
    <h2 className="text-lg font-bold text-[#91BE7F]">Founder & CEO</h2>
    <p className="text-lg text-white leading-relaxed">
      I had the pleasure of working with the talented web design team at{" "}
      <span className="font-bold">CodeTec Solutions</span> for our company’s
      website redesign project. Their creativity and attention to detail truly
      impressed me. They not only crafted a visually stunning website but also
      ensured a seamless user experience. Our website now reflects our brand
      identity perfectly, and we’ve received numerous compliments from our
      customers. I highly recommend{" "}
      <span className="font-bold">CodeTec Solutions</span> for their exceptional
      web design expertise.
    </p>
  </div>

  {/* Mobile App Development */}
  <div className="w-1/3 space-y-4">
    <h1 className="text-2xl font-bold font-serif text-[#91BE7F]">Saad Ahmed</h1>
    <h2 className="text-lg font-bold text-[#91BE7F]">Founder & Director</h2>
    <p className="text-lg text-white leading-relaxed">
      <span className="font-bold">CodeTec Solutions</span> exceeded our
      expectations in creating a modern and captivating website for our tech
      startup. Their team demonstrated a deep understanding of our vision and
      industry trends. They incorporated innovative design elements, resulting
      in a website that not only looks great but also functions flawlessly. The
      user experience they crafted has been a game-changer for us, enhancing
      our online presence and customer engagement. We’re grateful for the
      expertise and dedication of{" "}
      <span className="font-bold">CodeTec Solutions</span>.
    </p>
  </div>
</div>


    </div>
  )
}
export default ClientsFeedback