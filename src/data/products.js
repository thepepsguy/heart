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
        personalThoughts: "This is currently the most powerful metabolic research compound available. From what we've seen, the appetite suppression is almost instantaneous. If you're looking for efficiency, Reta is the benchmark.",
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
        personalThoughts: "Excellent for recovery and skin health, but be warned—GHK-Cu can sting quite a bit at higher concentrations. We recommend reconstituting with 2.5ml+ of BAC water to minimize the 'bite'.",
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
        personalThoughts: "The safest GH secretagogue. It doesn't give you the standard hunger 'crashing' like GHRP-6 does. Great for improving sleep quality and subtle, long-term anti-aging results.",
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
        personalThoughts: "We call this the 'Flush' peptide—expect a warm sensation right after injection as the GH pulse hits. It works best when stacked with Ipamorelin for that 1+1=3 effect.",
        usage: "Mix with 2ml of BAC water. Usually injected before bed for pulse mimicry."
    }
];
