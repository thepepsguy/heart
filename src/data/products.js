import reta10mg from '../assets/reta 10mg.png';
import reta20mg from '../assets/reta 20mg.png';
import ghk100mg from '../assets/ghk-cu 100mg.png';
import ghk200mg from '../assets/ghk-cu 200mg.png';
import ipamorelin10mg from '../assets/Ipamorelin 10mg.png';
import cjc10mg from '../assets/Cjc 1295 Without Dac 10mg.png';

export const products = [
    {
        id: 1,
        name: "Retatrutide (Reta)",
        description: "Cutting-edge triple agonist (GLP-1/GIP/Glucagon) for rapid weight and metabolic management.",
        details: "Retatrutide is a potent research peptide known for its unique ability to activate three separate metabolic pathways simultaneously. Ideal for advanced research into weight loss and insulin sensitivity.",
        category: "Weight Management",
        withBac: true,
        pros: ["Record-breaking weight loss results", "Triple-pathway agonist", "Improves insulin sensitivity"],
        cons: ["Nausea", "Initial digestion adjustment"],
        personalThoughts: "Me and my friends specifically took Reta first as it was considered the safest. We ordered 3 vials—1 for testing and 2 for ourselves because the Chinese vendor wasn't sending just one. For more info on the process, watch this video: https://www.youtube.com/watch?v=u2UZ6uVz6VI&t=71s. It'll teach you everything. If you have more questions, ask thepepsguy on our Discord server. Things you need to buy before any peptide: alcohol swabs for cleaning and insulin syringes (31g 6mm 100 units). For reconstitution, keep it in the fridge—you can place both the BW and the peptide in there.",
        options: [
            {
                id: "reta-10",
                dosage: "10mg",
                price: "3.8k",
                image: reta10mg,
                usage: "Mix with 1-2ml of Bacteriostatic water. Once-weekly subcutaneous injection."
            },
            {
                id: "reta-20",
                dosage: "20mg",
                price: "6.2k",
                image: reta20mg,
                usage: "Mix with 2ml of Bacteriostatic water. Follow strict once-weekly protocol."
            }
        ]
    },
    {
        id: 3,
        name: "GHK-Cu",
        description: "A regenerative copper peptide for skin repair, hair growth, and anti-aging research.",
        details: "GHK-Cu is a naturally occurring peptide that promotes collagen synthesis and blood vessel growth. Extensively studied for its ability to rejuvenate aged skin and enhance tissue repair.",
        category: "Regeneration",
        withBac: true,
        pros: ["Powerful anti-aging properties", "Stimulates collagen & elastin", "Accelerates wound healing"],
        cons: ["Injection site sensitivity", "Concentrated solution"],
        personalThoughts: "We started researching GHK-Cu right after Reta because we wanted something for tissue repair. We ordered extra to ensure that deep blue color was consistent—vendors often try to skimp on the actual copper content. It works wonders for skin, but it can sting, so definitely watch this video for the right technique: https://www.youtube.com/watch?v=u2UZ6uVz6VI&t=71s. For more info, ping thepepsguy on Discord. You'll need alcohol swabs and 31g 6mm (100 units) syringes. Make sure to keep it in the back of the fridge once reconstituted to keep it stable.",
        options: [
            {
                id: "ghk-100",
                dosage: "100mg",
                price: "3.5k",
                image: ghk100mg,
                usage: "Mix with 2.5ml of BAC water. Administered daily during active cycles."
            },
            {
                id: "ghk-200",
                dosage: "200mg",
                price: "5.5k",
                image: ghk200mg,
                usage: "Mix with 3ml of BAC water. Store in a cold, dark place after reconstitution."
            }
        ]
    },
    {
        id: 5,
        name: "Ipamorelin 10mg",
        description: "High-safety growth hormone secretagogue for fat loss and lean muscle maintenance.",
        details: "Ipamorelin mimics the natural hormone ghrelin to stimulate growth hormone release without elevating cortisol. Known for its efficiency and exceptional safety profile.",
        price: "3k",
        image: ipamorelin10mg,
        category: "Anti-Aging",
        dosage: "10mg",
        withBac: true,
        pros: ["Lean muscle growth", "Improved sleep & recovery", "Excellent safety profile"],
        cons: ["Mild water retention", "Post-injection headache"],
        personalThoughts: "Me and my friends looked for the safest way to improve recovery, and Ipamorelin was the clear winner. Unlike older GHRPs, this doesn't give you those crazy hunger spikes. It's best used alongside CJC, and you can see how we handle the prep here: https://www.youtube.com/watch?v=u2UZ6uVz6VI&t=71s. For dosage tips, ask thepepsguy on Discord. Always use fresh 31g insulin syringes and keep your vials refrigerated. This is our go-to for deep, restful sleep research.",
        usage: "Mix with 2ml of BAC water. Administer 200-300mcg on an empty stomach."
    },
    {
        id: 6,
        name: "CJC-1295 (No DAC) 10mg",
        description: "GHRH analog designed for synergistic GH pulse enhancement when paired with Ipamorelin.",
        details: "Mod GRF 1-29 provides a short, powerful burst of growth hormone stimulation. Highly effective when used in combination with Ipamorelin to create a synergistic GH pulse.",
        price: "4.5k",
        image: cjc10mg,
        category: "Anti-Aging",
        dosage: "10mg",
        withBac: true,
        pros: ["High-pulse GH release", "Fat burning properties", "Enhanced muscle recovery"],
        cons: ["Flushing/Warmth after injection", "Sensitive to temperature"],
        personalThoughts: "We specifically chose the 'No DAC' version to mimic natural GH pulses without keeping the system elevated 24/7. It's the perfect pair for Ipamorelin—1+1 really does equal 3 here. To see the process we use, watch this: https://www.youtube.com/watch?v=u2UZ6uVz6VI&t=71s. Any questions on the 'Flush' feeling? Ask thepepsguy on Discord. Remember: 31g 6mm insulin syringes and fridge storage are non-negotiable for keeping this active.",
        usage: "Mix with 2ml of BAC water. Usually injected before bed for pulse mimicry."
    }
];
