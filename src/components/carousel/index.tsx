'use client';

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectSquare from "../ProjectsSquares"

export function ProjectsCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-xs"
        >
            <CarouselContent className="-mt-1 max-xl:h-[158px] h-[200px] 2xl:h-[450px]">
                <CarouselItem key={1} className="pt-1 md:basis-1/2">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex items-center justify-center p-6 max-xl:p-2">
                                <ProjectSquare title="Clear Sky" subTitle="App de Clima" image='/projects/clearSkyBG.png' link="https://github.com/Guh-paixao/ClearSky" date="05/2024" />
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem key={2} className="pt-1 md:basis-1/2">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex items-center justify-center p-6 max-xl:p-2">
                                <ProjectSquare title="Finanças APP" subTitle="App de Finanças" image='/projects/financasAPPBG.png' link="https://github.com/Guh-paixao/Financas" date="10/2023" />
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem key={3} className="pt-1 md:basis-1/2">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex items-center justify-center p-6 max-xl:p-2">
                                <ProjectSquare title="Restaurant API" subTitle="API de Restaurantes" image="/projects/APIRestaurantBG.png" link="https://github.com/Guh-paixao/Restaurant-API" date="09/2024" />
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem key={4} className="pt-1 md:basis-1/2">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex items-center justify-center p-6 max-xl:p-2">
                                <ProjectSquare placeholder />
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem key={5} className="pt-1 md:basis-1/2">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex items-center justify-center p-6 max-xl:p-2">
                                <ProjectSquare placeholder />
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
