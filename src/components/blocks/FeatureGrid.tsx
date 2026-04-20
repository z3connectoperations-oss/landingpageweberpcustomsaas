import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Scope Lock (Days 1–5)",
    description: "We map your workflow, wireframe every screen, agree a fixed price. No \"discovery phase that costs $10K.\""
  },
  {
    number: "02",
    title: "First Live Build (Days 6–10)",
    description: "You see a working preview on staging by Day 10. Not mockups. Working software."
  },
  {
    number: "03",
    title: "Weekly Shipping (Days 11–28)",
    description: "Every Friday: live demo + deployed build. You test it on real devices, with real data."
  },
  {
    number: "04",
    title: "Launch & Scale (Day 30+)",
    description: "Production deploy, handover, docs, 30-day support included. Code is yours."
  }
];

export function FeatureGrid() {
  return (
    <section className="py-24 md:py-32 bg-primary px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-4 tracking-tight">Introducing the Z3 Sprint System™</h2>
          <p className="text-[18px] text-muted">Fixed scope. Weekly demos. Production code in 30 days.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-elevated p-8 rounded-lg border border-divider hover:border-accent transition-colors duration-300 flex flex-col group relative overflow-hidden"
            >
              <div className="text-[72px] font-mono leading-none font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] group-hover:[-webkit-text-stroke:1px_rgba(0,255,136,0.5)] transition-all duration-300 absolute -top-4 -right-4 select-none">
                {feature.number}
              </div>
              
              <div className="relative z-10 mt-12">
                <h3 className="text-[20px] font-bold mb-3">{feature.title}</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
