import reta10mg from "../assets/reta 10mg.png";
import reta20mg from "../assets/reta 20mg.png";
import ghk100mg from "../assets/ghk-cu 100mg.png";
import ghk200mg from "../assets/ghk-cu 200mg.png";
import ipamorelin10mg from "../assets/Ipamorelin 10mg.png";
import cjc10mg from "../assets/Cjc 1295 Without Dac 10mg.png";

const products = [
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
        name: "Retatrutide (R10) - 10mg",
        price: 3300,
        image: reta10mg,
        description: "Triple agonist (GLP-1, GIP, and GCGR) for superior metabolic research. Known for its high potency in weight management studies.",
        category: "Metabolism",
        personalThoughts: "Me and my friends specifically took Reta first as it was considered the safest. We ordered 3 vials—1 for testing and 2 for ourselves because the Chinese vendor wasn't sending just one. For more info on the process, watch this video: https://www.youtube.com/watch?v=u2UZ6uVz6VI&t=71s. It'll teach you everything. If you have more questions, ask thepepsguy on our Discord server. Things you need to buy before any peptide: alcohol swabs for cleaning and insulin syringes (31g 6mm 100 units). For reconstitution, keep it in the fridge—you can place both the BW and the peptide in there."
    },
    {
        id: 2,
        name: "Retatrutide (R10) - 20mg",
        price: 6100,
        image: reta20mg,
        description: "Double the concentration of our high-purity Retatrutide for extended research cycles. Offers better value for long-term studies.",
        category: "Metabolism",
        personalThoughts: "This 20mg version is great for longer studies once you're familiar with the Reta protocol. Like I mentioned for the 10mg, we verify every batch first. Watch this video for the basics: https://www.youtube.com/watch?v=u2UZ6uVz6VI&t=71s. Remember to get your 31g insulin syringes and alcohol swabs ready. Reconstitution is key—keep your vials in the fridge to maintain potency. Any doubts, ping thepepsguy on Discord."
    },
    {
        id: 3,
        name: "GHK-Cu - 100mg",
        price: 1800,
        image: ghk100mg,
        description: "Copper peptide studied for its regenerative properties. Investigated for wound healing, skin health, and anti-aging benefits.",
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
        personalThoughts: "GHK-Cu is the go-to for skin and tissue research. We followed the same rigorous process here—ordering extra vials to ensure the blue solution was exactly what the lab promised. For a guide on handling these, check: https://www.youtube.com/watch?v=u2UZ6uVz6VI&t=71s. You'll need the same kit: alcohol swabs and 31g insulin syringes. This one is sensitive to light and heat, so definitely keep it in the back of the fridge. thepepsguy is active on Discord if you need the exact GHK protocol we used."
    },
    {
        id: 4,
        name: "GHK-Cu - 200mg",
        price: 3300,
        image: ghk200mg,
        description: "High-concentration GHK-Cu for professional research applications. Ideal for comprehensive tissue remodeling studies.",
        category: "Regeneration",
        personalThoughts: "The 200mg vial is heavy-duty. We used this for longer cycles where consistency is king. The protocol remains the same—watch the video (https://www.youtube.com/watch?v=u2UZ6uVz6VI&t=71s) if you're new to this. Always wipe your vials with alcohol swabs and use 31g 6mm syringes for precision. Keep it refrigerated! If the reconstitution steps aren't clear, just message thepepsguy on Discord and we'll help you out."
    },
    {
        id: 5,
        name: "Ipamorelin (10mg)",
        price: 1700,
        image: ipamorelin10mg,
        category: "Anti-Aging",
        dosage: "10mg",
        withBac: true,
        pros: ["Lean muscle growth", "Improved sleep & recovery", "Excellent safety profile"],
        cons: ["Mild water retention", "Post-injection headache"],
        personalThoughts: "Me and my friends looked for the safest way to improve recovery, and Ipamorelin was the clear winner. Unlike older GHRPs, this doesn't give you those crazy hunger spikes. It's best used alongside CJC, and you can see how we handle the prep here: https://www.youtube.com/watch?v=u2UZ6uVz6VI&t=71s. For dosage tips, ask thepepsguy on Discord. Always use fresh 31g insulin syringes and keep your vials refrigerated. This is our go-to for deep, restful sleep research.",
        usage: "Mix with 2ml of BAC water. Administer 200-300mcg on an empty stomach."
        description: "Selectively stimulates growth hormone release with minimal impact on cortisol and prolactin. Studied for recovery and sleep.",
        category: "Growth",
        personalThoughts: "Ipamorelin is amazing for sleep research. Many people stack this with CJC for synergy. Like our Reta, we didn't just take the vendor's word—we tested it ourselves. video guide here: https://www.youtube.com/watch?v=u2UZ6uVz6VI&t=71s. Essential gear for research: alcohol swabs and 31g insulin syringes. Store in the fridge once you add the BW. thepepsguy is on Discord for any stack advice or research questions."
    },
    {
        id: 6,
        name: "Cjc 1295 Without Dac (10mg)",
        price: 1700,
        image: cjc10mg,
        category: "Anti-Aging",
        dosage: "10mg",
        withBac: true,
        pros: ["High-pulse GH release", "Fat burning properties", "Enhanced muscle recovery"],
        cons: ["Flushing/Warmth after injection", "Sensitive to temperature"],
        personalThoughts: "We specifically chose the 'No DAC' version to mimic natural GH pulses without keeping the system elevated 24/7. It's the perfect pair for Ipamorelin—1+1 really does equal 3 here. To see the process we use, watch this: https://www.youtube.com/watch?v=u2UZ6uVz6VI&t=71s. Any questions on the 'Flush' feeling? Ask thepepsguy on Discord. Remember: 31g 6mm insulin syringes and fridge storage are non-negotiable for keeping this active.",
        usage: "Mix with 2ml of BAC water. Usually injected before bed for pulse mimicry."
        description: "GHRH analog designed for pulsatile growth hormone release research. Often researched alongside Ipamorelin for synergistic effects.",
        category: "Growth",
        personalThoughts: "CJC (No DAC) is perfect for mimicking natural pulses. We recommend stacking this with Ipamorelin for the best research results. Watch the process video: https://www.youtube.com/watch?v=u2UZ6uVz6VI&t=71s. Don't forget your alcohol swabs and 31g 6mm (100 units) syringes. Keep your reconstituted vials in the fridge alongside your BW. If you're confused about the 'No DAC' part, ask thepepsguy on Discord—we'll explain the whole thing."
    }
];

export { products };
