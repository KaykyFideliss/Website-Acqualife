import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-azul-style w-full">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Company Info */}
                    <div className="space-y-3">
                        <div className="w-52 h-52 bg-foreground flex items-center justify-center">
                            <img src="/img/logo-branca.png"  alt="" />
                        </div>
                    </div>

                    {/* Services */}
                    <div className=' mt-10 pb-10'>
                        <h4 className="font-semibold font-zalando text-foreground mb-4 uppercase text-sm tracking-wide text-white">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/services/branding"
                                    className="font-zalando text-white text-xm text-foreground hover:text-muted-foreground transition-colors"
                                >
                                    Branding
                                </a>
                            </li>
                            <li>
                                <a href="/services/design"
                                 className="font-zalando text-white text-xm text-foreground hover:text-gray-900 transition-colors hover: "
                                 >
                                    Design
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services/marketing"
                                     className="font-zalando text-white text-xm text-foreground hover:text-gray-900 transition-colors hover: "
                                    >
                                    Marketing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services/advertisement"
                                    className="font-zalando text-white text-xm text-foreground hover:text-gray-900 transition-colors hover: "
                                    >
                                    Advertisement
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className=' mt-10'>
                        <h4 className="font-semibold font-zalando text-white text-foreground mb-4 uppercase text-sm tracking-wide">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/about"
                                  className="font-zalando text-white text-xm text-foreground hover:text-gray-900 transition-colors hover: "
                                  >
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="/contact"
                                 className="font-zalando text-white text-xm text-foreground hover:text-gray-900 transition-colors hover: "
                                 >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/jobs"
                                  className="font-zalando text-white text-xm text-foreground hover:text-gray-900 transition-colors hover: "
                                 >
                                    Jobs
                                </a>
                            </li>
                            <li>
                                <a href="/press"
                                 className="font-zalando text-white text-xm text-foreground hover:text-gray-900 transition-colors hover: "
                                >
                                    Press kit
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className=' mt-10'>
                        <h4 className="font-semibold font-zalando text-white text-foreground mb-4 uppercase text-sm tracking-wide">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/about"
                                  className="font-zalando text-white text-xm text-foreground hover:text-gray-900 transition-colors hover: "
                                  >
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="/contact"
                                 className="font-zalando text-white text-xm text-foreground hover:text-gray-900 transition-colors hover: "
                                 >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/jobs"
                                  className="font-zalando text-white text-xm text-foreground hover:text-gray-900 transition-colors hover: "
                                 >
                                    Jobs
                                </a>
                            </li>
                            <li>
                                <a href="/press"
                                 className="font-zalando text-white text-xm text-foreground hover:text-gray-900 transition-colors hover: "
                                >
                                    Press kit
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                
                <div class="w-full h-[2px] bg-white"></div>
                
                <div>
                    <p className="text-center text-white mt-6 font-zalando">
                        &copy; 2025 Acqualife. Todos os direitos resevados.
                    </p>
                </div>

            </div>
            
        </footer>
    )
}

export default Footer
