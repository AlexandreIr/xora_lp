import { socials } from "../constants"

function Footer() {
  return (
    <footer>
        <div className="container py-10">
            <div className="flex w-full max-md:flex-col">
                <div className="small-compact flex 
                flex-1 flex-wrap items-center jusitfy-center gap-5">
                    <p className="opacity-75 text-p5 
                    transition-all duration-500 hover:text-p1">
                        <a href="https://github.com/AlexandreIr" target="_blank">
                        © {new Date().getFullYear()+" "}
                        AlexandreIr, todos os direitos reservados
                        </a>
                    </p>
                </div>
                    <div className="flex 
                    items-center justify-center sm:ml-auto">
                        <p className="legal-after relative mr-9
                        text-p5 transition-all duration-500 hover:text-p1">
                            <a href="https://github.com/AlexandreIr" target="_blank">
                            Privacy Policy
                            </a>
                        </p>
                        <p className="text-p5 transition-all 
                        duration-500 hover:text-p1">
                            <a href="https://github.com/AlexandreIr" target="_blank">
                            Terms of Use
                            </a>
                        </p>
                    </div>

                <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
                    {socials.map(({id, url, icon, title}) => (
                        <li key={id}>
                            <a href={url} title={title} className="social-icon">
                                <img src={icon} alt={title} className="size-1/3 object-contain" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer