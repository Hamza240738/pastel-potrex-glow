import React from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import dashboardImage from "@/assets/potrex-dashboard.png"

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSectionAnimated() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                {/* Soft pastel background effects */}
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(340,60%,92%,.15)_0,hsla(280,40%,90%,.08)_50%,hsla(220,50%,88%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(340,60%,92%,.1)_0,hsla(280,40%,90%,.05)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(220,50%,88%,.08)_0,hsla(340,60%,92%,.03)_80%,transparent_100%)]" />
                </div>
                
                <section>
                    <div className="relative pt-24 md:pt-36">
                        {/* Pastel gradient background */}
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 0.5,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring' as const,
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <div className="absolute inset-0 bg-gradient-pastel" />
                        </AnimatedGroup>
                        
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,hsl(var(--background))_75%)]" />
                        
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    {/* Notification badge */}
                                    <div className="hover:bg-glass/60 bg-glass/40 group mx-auto flex w-fit items-center gap-4 rounded-full border border-white/20 p-1 pl-4 shadow-glass backdrop-blur-md transition-all duration-300">
                                        <span className="text-foreground text-sm font-medium">Stop buying stupid things, save money</span>
                                        <span className="block h-4 w-0.5 border-l border-white/30 bg-white/30"></span>

                                        <div className="bg-glass/60 group-hover:bg-glass/80 size-6 overflow-hidden rounded-full transition-all duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 text-brand-blue" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 text-brand-blue" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                        
                                    {/* Main headline */}
                                    <h1 className="mt-8 max-w-4xl mx-auto text-balance font-serif text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] text-foreground leading-tight">
                                        Welcome to{" "}
                                        <span className="italic font-serif">
                                            potrex<sup className="text-2xl md:text-3xl">®</sup>
                                        </span>
                                    </h1>
                                    
                                    {/* Subheading */}
                                    <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
                                        Let's help you{" "}
                                        <span className="italic font-serif">stop buying</span>
                                        <br />
                                        <span className="italic font-serif">stupid</span> things.
                                    </h2>
                                    
                                    {/* Description */}
                                    <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground font-light">
                                        We're here to save you money. Track your spending, set goals, and build better habits with our intelligent savings platform.
                                    </p>
                                </AnimatedGroup>

                                {/* CTA Buttons */}
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-3 md:flex-row">
                                    <div className="bg-white/10 rounded-[18px] border border-white/20 p-0.5 backdrop-blur-sm">
                                        <Button
                                            variant="hero"
                                            size="lg"
                                            className="rounded-2xl px-8 text-base font-medium">
                                            <span className="text-nowrap">Join waitlist</span>
                                        </Button>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="lg"
                                        className="h-12 rounded-full px-8 text-muted-foreground hover:text-foreground">
                                        <span className="text-nowrap">Learn more</span>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        {/* Dashboard Preview */}
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-16 overflow-hidden px-2 sm:mr-0 sm:mt-20 md:mt-24">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-background from-background/30 absolute inset-0 z-10 from-35%"
                                />
                                
                                {/* Frosted glass container */}
                                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl backdrop-blur-xl bg-glass/40 border border-white/20 p-6 shadow-glass">
                                    <img
                                        className="bg-background aspect-[15/8] relative rounded-2xl shadow-soft w-full"
                                        src={dashboardImage}
                                        alt="Potrex dashboard showing savings tracking and financial insights"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                                
                                {/* Floating elements for visual interest */}
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-pastel-pink rounded-full blur-xl opacity-40" />
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pastel-blue rounded-full blur-xl opacity-40" />
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'How it works', href: '#how-it-works' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-glass/50 max-w-4xl rounded-2xl border border-white/20 backdrop-blur-lg lg:px-5 shadow-glass')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            {/* Potrex Logo */}
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">px</span>
                                </div>
                                <span className="font-serif text-xl font-medium text-foreground">
                                    potrex<sup className="text-xs">®</sup>
                                </span>
                            </div>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="text-muted-foreground hover:text-foreground block duration-150 font-medium">
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-glass/40 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/20 backdrop-blur-md p-6 shadow-glass md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-muted-foreground hover:text-foreground block duration-150 font-medium">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={cn("rounded-full", isScrolled && 'lg:hidden')}>
                                    <span>Contact us</span>
                                </Button>
                                <Button
                                    variant="hero"
                                    size="sm"
                                    className={cn("rounded-full", isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <span>Join waitlist</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}