import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



import React from 'react'

const AccordionComponent = () => {
    return (
        <div>
            <Accordion type="single" collapsible className="w-[200px]">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Probando Acordion</AccordionTrigger>
                    <AccordionContent>
                        yeah. we didit
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AccordionComponent