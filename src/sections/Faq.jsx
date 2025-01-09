/* eslint-disable react/no-unescaped-entities */
import { Element } from "react-scroll"
import { faq } from "../constants"
import FaqItem from "../components/FaqItem";

function Faq() {
    const faqLength = Math.floor(faq.length/2);

  return (
    <section>
        <Element name="faq" className="relative">
            <div className="container relative py-28 z-2">
                <div>
                    <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
                        Curiosity didn't kill the cat, It gave it answers.
                    </h3>
                    <p className="body-1 max-lg:max-w-sm">You've got questions, we've got ansewers.</p>
                </div>
                <div className="faq-line_after w-0.5 h-full 
                absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2"/>
            </div>
            <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
                <div className="container flex gap-10 max-lg:block">
                    <div className="rounded-half absolute 
                    -top-10 left-[calc(50%-40px)] z-4 flex 
                    size-20 items-center justify-center border-2 border-s2 bg-s1">
                        <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
                    </div>
                    <div className="relative flex-1 lg:pt-24">
                        {faq.slice(0, faqLength).map(({id, question, answer}, index)=>(
                                    <FaqItem 
                                    key={id}
                                    id={id}
                                    question={question} 
                                    answer={answer}
                                    index={index}
                                    />
                        ))}
                    </div>
                    <div className="relative flex-1 lg:pt-24">
                        {faq.slice(faqLength).map(({id, question, answer}, index)=>(
                                    <FaqItem 
                                    key={id}
                                    id={id}
                                    question={question} 
                                    answer={answer}
                                    index={faqLength + index}
                                    />
                        ))}
                    </div>
                </div>
                <div className="faq-line_after w-0.5 h-full absolute 
                left-[calc(50%-1px)] top-0 -z-1 bg-s2 max-lg:hidden"/>
            </div>
        </Element>
    </section>
  )
}

export default Faq